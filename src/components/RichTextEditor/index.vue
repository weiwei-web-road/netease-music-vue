<template>
  <div class="slot-continer">
    <div class="add-bar">
      <a-dropdown :trigger="[]" v-model="dropdownVisible">
        <div :class="{
          'bar-content': true,
          active: isLocked,
          'input-border': true,
        }">
          <div :class="{
            'input-placeholder': !isLocked && currentText.length === 0,
            'active': isLocked,
            input: true,
          } ">
            <div
              class="slot-input"
              style="-webkit-user-modify: read-write-plaintext-only !important;"
              ref="addInput"
              :id="addContentId"
              @input="(event) => handleInput(event.target)"
              @focus="() => isLocked = true"
              @blur="() => isLocked = false"
              @click="inputClick"
              @keydown.delete="handleKeydownDelete"
            ></div>
          </div>
          <div class="action-wrapper">
            <a-button class="text-link" v-if="isLocked || true" @click="triggerWordSlot" type="link">词类</a-button>
            <a-button class="text-link" v-if="isLocked || true" @click="triggerWordType" type="link">词槽</a-button>
            <a-icon type="info-circle" style="fontSize: 14px" theme="outlined" />
          </div>
        </div>
        <WordSlotMenu
          slot="overlay"
          :list="slotList"
          @fetch="fetchSlotData"
          @selected="handleWordInsert"
          :typeTitle="typeTitle"
        />
      </a-dropdown>
      <div class="bar-add-btn" @click="handleAddDemoTag">
        添加
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// 词槽和词类的编辑器
// 支持展示态和编辑态
import _ from 'lodash';
import Vue, { ComputedOptions } from 'vue';
import { getSlotList } from '@/api/index';
import WordSlotMenu from './WordSlotMenu.vue';

export enum ESlotType {
  WORD_SLOT = 'WORD_SLOT',
  WORD_TYPE = 'WORD_TYPE'
}

interface IData {
  saveRange: Range | null;
  currentText: string;
  currentTagId: string | null;
  slotType: 'slot' | 'type' | '',
  wordSlotData: any[],
  wordTypeData: any[],
  [key: string]: any;
}

interface IMethods {
  fetchSlotData: () => Promise<void>,
  [key: string]: any;
}

interface IComputed {
  tagHTMLType: string;
  slotList: { value: string; name: string }[],
  [key: string]: any;
}

interface IProps {
  options: {
    disables: ESlotType[],
  },
  [key: string]: any;
}

export default Vue.extend<IData, IMethods, IComputed, IProps>({
  components: {
    WordSlotMenu,
  },
  props: {
    options: {
      type: Object,
      required: true,
      default: () => ({ disables: [] }),
    },
  },
  mounted() {
    if (this.currentText) {
      (this.$refs.addInput as any).innerHTML = this.currentText;
    }
    // 监听光标变化
    document.addEventListener('selectionchange', this.selectHandler);
    // 获取数据
  },
  beforeDestroy() {
    // 移除光标变化
    document.removeEventListener('selectionchange', this.selectHandler);
  },
  watch: {
    currentText: {
      handler(val, oldVal) {
        this.hydridHTML();
      },
    },
  },
  data() {
    return {
      currentText: '',
      isLocked: false,
      saveRange: null,
      currentTagId: null,
      rangeRreviousSiblingElement: null,
      wordSlotData: [],
      wordTypeData: [],
      slotType: '',
    };
  },
  computed: {
    addContentId() {
      // 生成唯一性ID
      return 'add_content_id';
    },
    tagHTMLType() {
      return 'span';
    },
    slotList() {
      if (this.slotType === 'slot') {
        return (this.wordSlotData || []).map(item => ({
          name: item.name as string,
          value: item.value as string,
        }));
      }
      if (this.slotType === 'type') {
        return (this.wordTypeData || []).map(item => ({
          name: item.name as string,
          value: item.value as string,
        }));
      }
      return [];
    },
    dropdownVisible() {
      return this.slotType === 'type' || this.slotType === 'slot';
    },
    typeTitle() {
      return this.slotType === 'slot' ? '词槽' : '词类';
    },
  },
  methods: {
    handleInput(target: HTMLElement) {
      this.currentText = target.innerText;
    },
    selectHandler() {
      // 监听文本移动
      const sel = window.getSelection();
      const range = (sel as any)?.rangeCount > 0 ? sel?.getRangeAt(0) : null;
      if (range && range.commonAncestorContainer?.ownerDocument?.activeElement?.id === this.addContentId) {
        this.saveRange = range;
      }
      if (range && range.startContainer.nodeName === '#text' && (range.startContainer.previousSibling as any)?.classList.contains('slot-tag')) {
        // 存在前置节点元素
        this.rangeRreviousSiblingElement = (range.startContainer.previousSibling as any).id;
      }
    },
    addTag(text: string) {
      const node = document.createElement(this.tagHTMLType);
      node.innerText = text;
      node.id = _.uniqueId('tag_');
      node.classList.add('slot-tag');
      node.contentEditable = 'false';
      this.insertNode(node);
    },
    insertNode(node: any) {
      if (this.saveRange) {
        const parentTarget = this.saveRange.commonAncestorContainer.parentElement;
        if (parentTarget?.nodeName?.toLowerCase() === this.tagHTMLType && parentTarget.classList.contains('slot-tag')) {
          // 选中了标签
          this.saveRange.setStartAfter(parentTarget);
          this.saveRange.setEndAfter(parentTarget);
          this.saveRange.deleteContents();
          // this.saveRange.insertNode(document.createTextNode(decodeURIComponent('&#xFEFF;')));
          this.saveRange.insertNode(node);
          // this.saveRange.insertNode(document.createTextNode(decodeURIComponent('&#xFEFF;')));
        } else {
          this.saveRange.deleteContents();
          // this.saveRange.insertNode(document.createTextNode(decodeURIComponent('&#xFEFF;')));
          this.saveRange.insertNode(node);
          // this.saveRange.insertNode(document.createTextNode(decodeURIComponent('&#xFEFF;')));
          this.saveRange.setStartAfter(node);
          this.saveRange.setEndAfter(node);
        }
        const target = this.$refs.addInput;
        // (target as any).focus();
        this.currentText = (target as any).innerText;
      }
    },
    handleAddDemoTag() {
      this.addTag('[词槽]');
    },
    inputClick(e: any) {
      this.isLocked = true;
      const tagName = e.target.nodeName?.toLowerCase();
      if (tagName === this.tagHTMLType) {
        // 点击标签时记录ID
        if (this.currentTagId) {
          const target = document.getElementById(this.currentTagId);
          target?.classList.remove('active');
        }
        this.currentTagId = e.target.id;
        if (!e.target.classList.contains('active')) {
          e.target.classList.add('active');
        }
      } else if (this.currentTagId) {
        const target = document.getElementById(this.currentTagId);
        console.log(e.target, this.currentTagId, target, '-----');
        target?.classList.remove('active');
        this.currentTagId = null;
      } else {
        this.currentTagId = null;
      }
    },
    handleKeydownDelete(e: any) {
      if (this.currentTagId) {
        const target = document.getElementById(this.currentTagId);
        if (target) {
          (this.$refs.addInput as Element).removeChild(target);
          this.currentTagId = null;
          e.preventDefault();
          this.handleInput(e.target);
        }
      }
      this.hydridHTML();
    },
    hydridHTML() {
      // 水合html, 保证节点之间有足够的占位符
      let html = (this.$refs.addInput as any).innerHTML;
      let isHaveStartAndEnd = false;
      if (html.startsWith('<span') && !html.startsWith('&#xFEFF;')) {
        html = `&#xFEFF;${html}`;
        isHaveStartAndEnd = true;
      }
      if (html.endsWith('</span>') && !html.endsWith('&#xFEFF;')) {
        html = `${html}&#xFEFF;`;
        isHaveStartAndEnd = true;
      }
      html = html.replace('</span><span', () => {
        isHaveStartAndEnd = true;
        return '</span>&#xFEFF;<span';
      });
      // const moreBlackRegx = /&#xFEFF;(?=&#xFEFF;)/g;
      // html = html.replace(moreBlackRegx, () => {
      //   isHaveStartAndEnd = true;
      //   return '';
      // });
      if (isHaveStartAndEnd) {
        (this.$refs.addInput as any).innerHTML = html;
        setTimeout(() => {
          const sel = window.getSelection();
          const range = (sel as any)?.rangeCount > 0 ? sel?.getRangeAt(0) : null;
          if (this.rangeRreviousSiblingElement) {
            const target = document.getElementById(this.rangeRreviousSiblingElement);
            if (target) {
              range?.setEndAfter(target);
              range?.setStartAfter(target);
            }
          }
        }, 0);
      }
    },
    async fetchSlotData() {
      try {
        if (!this.options.disables.includes(ESlotType.WORD_SLOT)) {
          // 初始化词槽数据
          const res = await getSlotList({
            offset: 0,
            limit: 500,
          });
        }
        if (!this.options.disables.includes(ESlotType.WORD_TYPE)) {
          // 初始化词槽数据
          const res = await getSlotList({});
        }
      } catch (error) {
        this.$message.error('获取数据失败');
      }
    },
    async triggerWordSlot(e: Event) {
      e.stopPropagation();
      e.preventDefault();
      (this.$refs.addInput as any)?.focus();
      this.slotType = 'slot';
      await this.fetchSlotData();
    },
    async triggerWordType(e: Event) {
      e.stopPropagation();
      e.preventDefault();
      (this.$refs.addInput as any)?.focus();
      this.slotType = 'type';
      await this.fetchSlotData();
    },
    handleWordInsert(value: { name: string; value: string }) {
      // 执行插入词槽和词类
    },
  },
});
</script>
<style lang="less" scoped>
.slot-continer {
  background-color: #fff;

  > .add-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    min-height: 40px;

    > .bar-content {
      display: flex;
      width: calc(100% - 60px);

      &.input-border {
        flex: 1 1 0;
        border: 1px solid #d2dae6;
        min-height: 40px;
        background: #fff;
        box-sizing: border-box;
        padding: 9px 8px;

        &.active {
          background: #fff;
          border: 1px solid #0052d9;
          box-sizing: border-box;
          outline: #d4e3fc solid 3px;
          border-radius: 3px 0px 0px 3px;
        }
      }

      > .input {
        width: calc(100% - 112px);
      }

      > .input-placeholder {
        /deep/.slot-input {
          border: 1px;

          &:empty:before {
            content: '请输入模板内容，点击 回车键 添加';
            font-family: 'PingFang SC';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: rgba(0, 0, 0, .25);
          }
        }
      }

      > .action-wrapper {
        // width: 112px;
        flex: 0 0 112px;
        padding: 0 8px;
        display: flex;
        flex-direction: row;
        align-items: top;
        justify-content: flex-end;

        > .text-link {
          height: 24px;
          padding: 0px;
          margin: 0px;
          margin-right: 8px;

          &:first-child {
          }
        }
      }
    }

    > .bar-add-btn {
      flex: 0 0 60px;
      background: rgba(0, 0, 0, .02);
      border-color: #d2dae6;
      border-width: 1px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
  }

  .slot-input {
    outline: none;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    max-height: 44px;
    overflow-y: auto;
    width: 100%;
    max-width: 100%;
    clear: both; /* 清除左右浮动 */
    word-break: break-word;
    word-wrap: break-word; /* IE */
    white-space: -moz-pre-wrap; /* Mozilla */
    white-space: -hp-pre-wrap; /* HP printers */
    white-space: -o-pre-wrap; /* Opera 7 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: pre; /* CSS2 */
    white-space: pre; /* CSS 2.1 */
    white-space: pre; /* CSS 3 (and 2.1 as well, actually) */
    user-select: text;
    overflow-wrap: pre-wrap;
    direction: ltr;
    text-align: left;

    /deep/span.slot-tag {
      cursor: pointer;
      -webkit-user-modify: read-only !important;
      color: rgba(15, 24, 41, .8);
      font-family: 'PingFang SC';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      background: #eaedf2;
      border-radius: 2px;
      overflow: visible;
      display: inline;
      white-space: nowrap;
      margin: 0 6px;
      direction: ltr;
      text-align: left;

      &.active {
        color: rgba(15, 24, 41, .6);
      }
    }
  }
}
</style>
