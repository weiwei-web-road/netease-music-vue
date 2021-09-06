<style lang="less" scoped>
    .footer-pagination {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: SFUIText;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: #7a8b99;
    .select-row-num {
        .el-input__inner{
            border-radius:2px;
            border:1px solid #e4e8eb;
            padding-left:10px;
            padding-right:0;
            width:70px;
            height:20px;
            line-height: 20px;

        }
        .el-input__prefix{
            left:97%;
            height:10px;
        }
        .el-input__icon{
            line-height: 20px;
        }
        .el-select .el-input__inner:focus {
            border-color: #1688ca;
        }
    }
    .page-num {
        display: flex;
        justify-content: flex-start;
        height: 20px;
        margin-left: 15px;
        .input-page {
            width: 40px;
            margin: 0 10px;
            border-radius:2px;
            border:1px solid #e4e8eb;
            height:20px;
            line-height: 20px;
            text-align: center;
            font-size:14px;
        }
    }
    .select-page {
        display: flex;
        margin-left: 10px;
        .prev-page {
            width: 18px;
            height: 18px;
            object-fit: contain;
            background-image: url("../../assets/footer-pagination/prev-page.png");

            cursor: pointer;
            &:hover {
                background-image: url("../../assets/footer-pagination/prev-page-hover.png");
            }
        }
        .no-prev-page {
            background-image: url("../../assets/footer-pagination/prev-page-hover.png");
            cursor: default;
        }
        .next-page {
            width: 18px;
            height: 18px;
            margin-left: 2px;
            object-fit: contain;
            background-image: url("../../assets/footer-pagination/next-page.png");
            cursor: pointer;
            &:hover {
                background-image: url("../../assets/footer-pagination/next-page-hover.png");
            }
        }
        .no-next-page {
            background-image: url("../../assets/footer-pagination/next-page-hover.png");
            cursor: default;
        }
    }
}
</style>

<template>
  <div
    v-if="totalPageNum > 0"
    class="footer-pagination"
  >
    <div class="select-row-num">
      <span>Rows per page:</span>
      <el-select
        v-model="rowValue"
        popper-class="select-popper-container"
        suffix-icon="el-icon-caret-bottom"
        @change="selectGet"
      >
        <el-option
          v-for="item in options"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
    <div class="page-num">
      <span>Page</span>
      <input
        v-model="currPage"
        class="input-page"
        type="text"
        @keydown="handleOnKeyDown"
      >
      <span> of {{ totalPageNum }}</span>
    </div>
    <div class="select-page">
      <div
        :class="{'prev-page':true, 'no-prev-page': parseInt(String(currPage).length > 0 ? currPage : 1) <= 1}"
        @click="prevPage()"
      />
      <div
        :class="{'next-page':true, 'no-next-page': parseInt(String(currPage).length > 0 ? currPage : 1) >= totalPageNum}"
        @click="nextPage()"
      />
    </div>
  </div>
</template>

<script>
/**
 * @description 分页组件
 * @author 王亚丽
 * @param totalListNum 传给分页组件 所有数据的总数
 * @param clickPage 分页组件 $emit 出来的 offset 和 limit
 * @
 */
export default {
  name: 'FooterPagination',
  props: ['totalListNum'],
  data () {
    return {
      rowValue: 10,
      options: [10, 20, 50, 100],
      currPage: 1

    }
  },
  computed: {
    totalPageNum () {
      return Math.ceil(this.totalListNum / this.rowValue)
    }
  },
  methods: {
    selectGet (val) {
      this.rowValue = val
      this.currPage = 1
      this.$emit('clickPage', { offset: this.rowValue * (this.currPage - 1), limit: this.rowValue })
    },
    handleOnKeyDown (event) {
      const validateCode = [8, 13, 39, 37, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]
      const code = event.which || event.keyCode
      const value = event.target.value
      if (validateCode.indexOf(code) === -1) {
        event.preventDefault()
      } else {
        event.preventDefault()
        if (code === 8) {
          this.inputGet(value.slice(0, -1))
        } else if (code >= 48 && code <= 57) {
          this.inputGet(`${value}${code - 48}`)
        }
      }
    },
    inputGet (valStr) {
      this.currPage = valStr
      let page = 1
      if (valStr && valStr.length > 0) {
        page = isNaN(valStr) ? 1 : parseInt(valStr)
      }
      this.$emit('clickPage', { offset: this.rowValue * (page > 1 ? page - 1 : 0), limit: this.rowValue })
    },
    prevPage () {
      let currPageNum = parseInt(this.currPage)

      if (currPageNum > 1) {
        currPageNum -= 1
        this.currPage = currPageNum
        this.$emit('clickPage', { offset: this.rowValue * (this.currPage - 1), limit: this.rowValue })
      }
    },
    nextPage () {
      let currPageNum = parseInt(this.currPage)

      if (currPageNum < this.totalPageNum) {
        currPageNum += 1
        this.currPage = currPageNum
        this.$emit('clickPage', { offset: this.rowValue * (this.currPage - 1), limit: this.rowValue })
      }
    }
  }
}
</script>
