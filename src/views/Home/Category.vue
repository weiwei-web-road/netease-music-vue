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
            .choose-category-button {
                margin: 2px 0 0 12px;
                padding: 0 10px 0 15px;
                font-size: 12px;
                font-weight: normal;
                height: 31px;
                line-height: 31px;
                overflow: hidden;
                vertical-align: top;
                text-align: center;
                cursor: pointer;
                background: url('../../assets/button2.png') no-repeat 0 -59px;
                color: #0c73c2 !important;
                .arrow {
                    margin-left: 5px;
                    width: 8px;
                    height: 5px;
                    background-position: -70px -543px;
                    cursor: pointer;
                }
                
            }
        }
        .hot-new-category {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            .hot {
                width: 46px;
                height: 29px;
                line-height: 29px;
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
            <div class="choose-category-button">
                选择分类
                <em class="arrow"></em>
            </div>
        </div>
        <div class="hot-new-category">
            <div class="hot">
                <button>热门</button>
            </div>
            <div class="new">
                <button>最新</button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>
