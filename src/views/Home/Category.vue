<style lang="less" scoped>
.category-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  .all-category {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .all {
      font-size: 24px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      font-weight: normal;
      color: #333;
    }
  }
  .hot-new-category {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 93px;
    height: 29px;
    background: url("../../assets/button.png");
    background-repeat: no-repeat;
    // 稍微延迟下响应速度，体验可能会好点
    animation-delay: 10ms;
    animation-timing-function: ease-in-out;
    .category-button {
      width: 46px;
      height: 29px;
      line-height: 29px;
      font-size: 12px;
      display: inline-block;
      color: #333;
      &.active {
        color: #fff;
      }
      // 相当于 .category-button:hover
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>

<template>
  <div class="category-container">
    <div class="all-category">
      <div class="all">
        全部
      </div>
      <!-- <div class="choose-category-button">
                选择分类
                <em class="arrow"></em>
            </div> -->
    </div>
    <div
      class="hot-new-category"
      :style="{ backgroundPosition: backgroundPosition }"
    >
      <div :class="hotStyle" @click="swapHotNewCategory('hot')">
        热门
      </div>
      <div :class="newStyle" @click="swapHotNewCategory('new')">
        最新
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            'selectedStyle': 'hot'
        };
    },
    'computed': {
        'hotStyle': function() {
            return `category-button${this.selectedStyle === 'hot' ? ' active' : ''}`;
        },
        'newStyle': function() {
            return `category-button${this.selectedStyle === 'new' ? ' active' : ''}`;
        },
        'backgroundPosition': function() {
            return this.selectedStyle === 'hot' ? '0 0' : '0 -32px';
        }
    },
    'methods': {
        'swapHotNewCategory': function(value) {
            this.selectedStyle = value;
            this.$emit('swapHotNewCategory', { 'value': value });
        }
    }
};
</script>
