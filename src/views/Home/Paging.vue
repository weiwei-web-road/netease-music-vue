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
            > .grey-prev-page {
                color: #cacaca;
                cursor: none;

            }
            > .next-page {
                background-position: -75px -560px;
                padding-left: 12px;
                width: 57px;
            }
            .num-page {
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
            .curr-page {
                border-color: #A2161B;
                background-position: 0 -650px;
                color: #fff;
                background-image: url('../../assets/button.png');
                background-repeat: no-repeat;
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
            <a class="page prev-page grey-prev-page" v-if="currPage === 1" v-on:click="clickPrevPage()">上一页</a >
            <a class="page prev-page " v-else-if="currPage !== 1" v-on:click="clickPrevPage()">上一页</a >

            <span v-for="(index, page) in prevPagingArr" v-bind:key="index">
                <a class="num-page curr-page" v-if="currPage === page+1" v-on:click="clickPage(page+1)">{{page+1}}</a >
                <a class="num-page" v-else-if="currPage !== page+1" v-on:click="clickPage(page+1)">{{page+1}}</a >

            </span>
            <span v-if="lastEllipsisFlag">...</span>
            <a class="num-page" v-if="lastEllipsisFlag" v-on:click="clickPage(totalPages)">{{totalPages}}</a >
            <a class="page next-page grey-prev-page" v-if="currPage === totalPages" v-on:click="clickNextPage()">下一页</a >
            <a class="page next-page " v-else-if="currPage !== totalPages" v-on:click="clickNextPage()">下一页</a >

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
            offset: 0,
            midPagingArr: [],
            lastPagingArr: [],
            prevEllipsisFlag: false,
            currPage: 1,
            
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
        prevPagingArr: function() {
            let arr = [];

            const len = Math.ceil(this.data / this.limit);
            if (len < 8) {
                for (let i=0; i<len; i++) {
                    arr.push(i+1);
                }
            } else {
                for (let i=0; i<8; i++) {
                    arr.push(i+1);
                }
            }
            
            return arr;
        },
        lastEllipsisFlag: function() {
            const len = Math.ceil(this.data / this.limit);
            let lastEllipsisFlag = false;

            if (len < 8) {
                lastEllipsisFlag = false;
            } else {
                lastEllipsisFlag = true;
            }

            return lastEllipsisFlag;
        }
    },
    methods: {
        clickPage(page) {
            this.currPage = page;
            this.offset = this.limit * (this.currPage - 1);
            this.$emit('clickPage', {value: this.offset});
        },
        clickPrevPage() {
            this.currPage -= 1;
            this.offset = this.limit * (this.currPage - 1);
            this.$emit('clickPage', {value: this.offset});
        },
        clickNextPage() {
            this.currPage += 1;
            this.offset = this.limit * (this.currPage - 1);
            this.$emit('clickPage', {value: this.offset});
        }
    },
    props: ['data']
}
</script>