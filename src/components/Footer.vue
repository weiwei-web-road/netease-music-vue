<style lang="less" scoped>
// scoped 意思是只作用于这个作用域
.footer-container {
    width: 980px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    overflow: hidden;
    margin: 0 auto;

    > .netease-icon {
        // width: 176px;
        line-height: 25px;
        height: 69px;
        flex: 0 0 400px;
        font-size: 12px;
        color: #666;
        text-align: left;
        // background-image: url('../assets/topbar.png');
        background-size: auto; // 按照原生的大小
        background-repeat: no-repeat;
        background-position: 0 0; // x y
        span {
            margin-top: 15px;
            display: block;
        }
    }

    > .list-container {
        flex: 1 1 330px;
        overflow: hidden; // 超过的内容隐藏掉
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        height: 100%;

        > .list-item {
            height: 70px;
            width: 60px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            margin: 10px 0 0 30px;
            > .icon {
                height: 45px;
                width: 50px;
                background-image: url('../assets/foot_enter_new.png');
                background-size: 110px 450px;
                background-repeat: no-repeat;
            }
            > .title {
                font-size: 12px; // 浏览器最低显示12px
                color: #666;
            }
        }
    }
}
</style>

<template>
  <div class="footer-container">
    <div class="netease-icon">
      <span>本项目使用Vue全家桶实现网易云音乐的模仿。
        <br>作者王亚丽。仅供学习交流使用。</span>
    </div>
    <div class="list-container">
      <div
        v-for="item in data"
        :key="item.title"
        class="list-item"
      >
        <div
          class="icon"
          :style="{backgroundPosition: item.position}"
        />
        <div class="title">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    // ES6 语法简写
    data () {
        return {
            'data': [
                {
                    'title': '用户认证',
                    'position': '-63px -101px'
                },
                {
                    'title': '独立音乐人',
                    'position': '0 0'
                },
                {
                    'title': '赞赏',
                    'position': '-60px -50px'
                },
                {
                    'title': '视频奖励',
                    'position': '0 -101px'
                }
            ]
        };
    }
};
</script>
