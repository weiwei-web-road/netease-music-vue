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
                &:hover {
                    background-position: 0 -620px; 
                    text-decoration: none;
                    cursor: pointer;
                }
            }
            > .grey-prev-page {
                color: #cacaca;
                text-decoration: none;
                background-position: 0 -620px; 
                &:hover {
                    cursor: default;
                }
            }
            > .next-page {
                background-position: -75px -560px;
                padding-left: 12px;
                width: 57px;
                &:hover {
                    background-position: -75px -590px; 
                    text-decoration: none;
                    cursor: pointer;
                }
            }
            > .grey-next-page {
                color: #cacaca;
                text-decoration: none;
                background-position: -75px -590px; 

                &:hover {
                    cursor: default;
                }
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
                &:hover {
                    border-color: #666; 
                    text-decoration: none; 
                    cursor: pointer;
                }
            }
            .curr-page {
                border-color: #A2161B;
                background-position: 0 -650px;
                color: #fff;
                background-image: url('../../assets/button.png');
                background-repeat: no-repeat;
                &:hover {
                    border-color: #A2161B;
                    cursor: pointer; 
                }
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
            <a v-bind:class="{'page': true, 'prev-page': true, 'grey-prev-page': currPage === 1}" v-on:click="clickPrevPage()">上一页</a >
            <a v-bind:class="{'num-page': true, 'curr-page': currPage === 1}" v-on:click="clickPage(1)">1</a >
            <span v-if="leftEllipsis">...</span>
            <span v-for="page in centerArr" v-bind:key="page">
                <a v-bind:class="{'num-page': true, 'curr-page': currPage === page}" v-on:click="clickPage(page)">{{page}}</a >
            </span>
            <span v-if="rightEllipsis">...</span>
            <a v-bind:class="{'num-page': true, 'curr-page': currPage === totalPages}" v-on:click="clickPage(totalPages)">{{totalPages}}</a >
            <a v-bind:class="{'page': true, 'next-page': true, 'grey-next-page': currPage === totalPages}" v-on:click="clickNextPage()">下一页</a > 
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
        leftEllipsis: function() {
            return this.currPage > 4; 
        },
        rightEllipsis: function() {
            return Math.ceil(this.data / this.limit) - this.currPage > 4;
        },
        centerArr: function() {
            const result = [];
            const left = this.currPage > 5 ? (this.totalPages < this.currPage + 4 ? Math.ceil(this.data / this.limit) - 7 : this.currPage - 3) : 2;
            const isEnough = Math.ceil(this.data / this.limit) > this.currPage + 3; const right = isEnough ? Math.max(this.currPage + 3, left + 6) : Math.ceil(this.data / this.limit) - 1;
            for (let index = left; index <= right; index++) {
                result.push(index); 
            }
            return result; 
        }
    },
    methods: {
        clickPage(page) {
            this.currPage = page;
            this.offset = this.limit * (this.currPage - 1);
            this.$emit('clickPage', {value: this.offset});
        },
        clickPrevPage() {
            if (this.currPage > 1) {
                this.currPage -= 1;
                this.offset = this.limit * (this.currPage - 1);
                this.$emit('clickPage', {value: this.offset});
            }
            
        },
        clickNextPage() {
            if (this.currPage < Math.ceil(this.data / this.limit)) {
                this.currPage += 1;
                this.offset = this.limit * (this.currPage - 1);
                this.$emit('clickPage', {value: this.offset});
            }
            
        }
    },
    props: ['data']
}
</script>