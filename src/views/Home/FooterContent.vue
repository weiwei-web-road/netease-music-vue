<style lang='less'>
// must use lang="less" if 使用嵌套的CSS结构

    .footer-layout {
        display: flex;
        flex-direction: row;
        justify-content: center;
        .footer-layout-box {
            width: 980px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;

            > .footer-content-left {
                flex-basis: 520px;
            }

            > .footer-icon-right {
                flex-basis: 330px;
            }
        }
    }
    
</style>

<template>
    <div class="footer-layout">
        <div class="footer-layout-box">
        <div class="footer-content-left">
            left
        </div>
        <div class="footer-icon-right">
            right
        </div>
    </div>
    </div>
    
</template>


<script>
export default {
  name: 'FooterContent',
  
}
</script>