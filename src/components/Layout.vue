<style lang="less">
    .netease-layout {
        width: 100%;
        height: 100vh;

        // 3: 水平居中方法三，use flex
        display: flex;
        flex-direction: column;
        align-items: center;
        
        > .header {
            width: 100%;
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: 70px;
            background: #242424;
            color: white;
            
        }

        section {
            width: 980px;
            // min-height: 700px;
            background-color: #000;
            flex: 1 1 0;
            // 1： 水平居中方法一，margin:auto法，根据宽度水平居中元素
            // margin: auto;

            // 2: 水平居中方法二， use transform
            // margin-left: 50%;
            // transform: translate(-50%);
            
            padding: 40px;
        }
        > .footer {
            width: 100%;
            background-color: #f2f2f2;
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: 148px;
        }
    }
    html, body {
        margin: 0px;
    }
</style>


<template>
    <div class='netease-layout'>
        <div class='header'> 
            网易云音乐
        </div>

        <section>
            <slot></slot>
        </section>

        <div class='footer'>Github : https://github.com/weiwei-web-road/netease-music-vue</div>
    </div>
</template>


<script>

export default {
  name: 'Layout',
  
}
</script>
