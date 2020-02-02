<style lang="less" scoped>
    .playlist-subscribers {
        width: 200px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        > .title {
            font-size: 12px;
            width: 200px;
            color: #333333;
            height: 23px;
            text-align: left;
            margin-bottom: 20px;
            border-bottom: solid 1px #ccc;
        }
        > .content-list {
            > .row {
                display: flex;
                justify-content: space-between;
                > .column {
                    img {
                        width: 40px;
                        height: 40px;
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="playlist-subscribers">
        <div class="title">喜欢这个歌单的人</div>
        <div class="content-list">
            <div class="row" v-for="(item, index) in localData" :key="index">
                <div class="column" v-for="subItem in item" :key="subItem">
                    <img :src="subItem" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'right-info',
    data() {
        return {

        }
    },
    props: ['data'],
    computed: {
        localData: function() {
            if (this.data) {
                return this.data.reduce((prev, curr, index) => {
                    if (index % 4 === 0) {
                        prev.push([curr])
                    } else {
                        const temp = prev.pop();
                        temp.push(curr);
                        prev.push(temp);
                    }
                    return prev;
                }, [])
            } else {
                return [];
            }
        }
    }
}
</script>