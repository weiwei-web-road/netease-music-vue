<style lang="less" scoped>
    .netease-header {
        width: 100%;
        height: 100%;
        background: #242424;
        border-bottom: 1px solid #000;
        > .container {
            width: 1100px;
            margin-left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            color: #fff;
            line-height: 100%;
            height: 100%;
            > .icon {
                width: 176px;
                height: 100%;
                background: url('../assets/topbar.png') no-repeat 0 9999px;
                background-position: 0 0;
            }
            > .top-bar-item {
                position: relative;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                &.selected {
                    background: #000;
                    > em {
                        font-weight: bold;
                    }
                    > sub {
                        background: url('../assets/topbar.png') no-repeat 0 9999px;
                        background-position: -226px 0;
                    }
                }
                > em {
                    padding: 0 19px;
                    font-style: normal;
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 69px;
                    height: 100%;
                    font-family: Arial, Helvetica, sans-serif;
                }
                > sub {
                    display: block;
                    position: absolute;
                    left: 50%;
                    bottom: 0px;
                    width: 12px;
                    height: 6px;
                    margin-left: -6px;
                    overflow: hidden;
                    pointer-events: none;
                }
            }
        }
        > .header-bottom {
            height: 5px;
            border-bottom: none;
            box-sizing: border-box;
            background-color: #C20C0C;
            z-index: 90;
        }
    }
</style>
<template>
    <div class='netease-header'>
        <div class='container'>
            <div class='icon'></div>
            <div
                v-bind:class="{ 'top-bar-item': true, selected: item === selectIndex }" 
                v-for='item in topBar' 
                v-bind:key='item'
                v-on:click="handleItemClick"
            >
                <em>{{item}}</em>
                <sub>&nbsp;</sub>
            </div>
        </div>
        <div class="header-bottom"></div>
    </div>
</template>

<script>
const PATH_MAP = {
    '/': '发现音乐',
    '/my_music': '我的音乐'
};
const ROUTE_MAP = {
    '发现音乐': '/',
    '我的音乐': '/my_music'
};
export default {
    data() {
        return {
            topBar: ['发现音乐', '我的音乐', '朋友', '商城', '音乐人', '下载客户端'],
            selectIndex: PATH_MAP[this.$route.path]
        };
    },
    props: [],
    
    methods: {
        handleItemClick: function(event) {
            // 事件冒泡会从当前触发的事件目标一级一级往上传递，依次触发，直到document为止。
            // 事件捕获会从document开始触发，一级一级往下传递，依次触发，直到真正事件目标为止。
            // 通过stopPropagation()在子元素上阻止冒泡, 不再派发事件。
            event.stopPropagation();
            const value = event.target.innerText;
            this.selectIndex = value;
          
            if (ROUTE_MAP[this.selectIndex]) {
                // 想要导航到不同的 URL，则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
                this.$router.push(ROUTE_MAP[this.selectIndex]);
            }
        }
    }
}
</script>