<style lang="less" scoped>
    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 50px 0 20px 0;
        color: #333;
        font-size: 12px;
        > .paging-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            > .page {
                height: 24px;
                line-height: 24px;
                text-align: left;
                margin: 0 3px;
                display: inline-block;
                border: 1px solid #ccc;
                border-radius: 2px;
                vertical-align: middle;
                background-image: url('../../assets/button.png');
                background-repeat: no-repeat;
            }
            > .prev-page {
                background-position: 0 -560px;
                padding-left: 22px;
                width: 47px;

            }
            > .next-page {
                background-position: -75px -560px;
                padding-left: 12px;
                width: 57px;
            }
            > .num-page {
                height: 22px;
                padding: 0 8px;
                background-color: #fff;
                line-height: 22px;
                margin: 0 3px;
                display: inline-block;
                border: 1px solid #ccc;
                border-radius: 2px;
                vertical-align: middle;
            }
            a:hover {
                cursor: pointer;
            }
        }
    }
</style>

<template>
    <div class="wrapper">
        <div class="paging-container">
            <a class="page prev-page">上一页</a >
            <a class="num-page" v-for="(index, page) in pagingArr" v-bind:key="index">{{page+1}}</a >
            <span>...</span>
            <a class="num-page">{{totalPages}}</a >
            <a class="page next-page">下一页</a >
        </div>
    </div>
</template>

<script>
export default {
    name: 'Paging',
    data() {
        // 这里是类似 constructor 的初始化过程，因此只能写初始值
        return {
            limit: 35,
            offset: 0
        }
    },
    computed: {
        totalPlay: function() {
            return this.data;
        },
        totalPages: function() {
            console.log(this.data);
            // 这里可以对 props 的值进行处理，也可以直接使用props中的值在template中绑定
            // 数据处理逻辑尽量放到这里，不要写到模板里
            return Math.ceil(this.data / this.limit);
        },
        pagingArr: function() {
            let arr = [];
            for (let i = 0; i < Math.ceil(this.data / this.limit); i++) {
                arr.push(i+1);
            }
            return arr;
        }
    },
    props: ['data']
}
</script>