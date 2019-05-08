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
            <a class="page prev-page">上一页</a>
            <a class="num-page" v-for="(index, page) in pagingArr" v-bind:key="index">{{page+1}}</a>
            <span>...</span>
            <a class="num-page">{{Math.ceil(tempData / limit)}}</a>
            <a class="page next-page">下一页</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Paging',
    data() {
        console.log(this.data, 'totalPlay from Paging');
        return {
            pagingArr: [1, 2, 3, 4, 5],
            tempData: 1288,
            limit: 35,

        }
        
    },
    computed: {
        totalPlay: function() {
            console.log(this.data);
            return this.tempData;
        },
        totalPages: function() {
            console.log(this.tempData / this.limit);

            return this.tempData / this.limit;
        }
    },
    props: ['data'],

    
}
</script>
