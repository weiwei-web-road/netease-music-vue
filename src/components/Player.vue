<style lang="less" scoped>
    .wrapper {
        width: 100%;
        height: 100%;
        margin: 0; // 去掉 div 默认的 marign padding
        padding: 0;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        background-color: #333;

    }
    .player-container {
        width: 980px;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: row;
        // 溢出的东西直接 hidden
        overflow: hidden;
        
        > .btn {
            width: 137px;
            padding: 6px 0 0 0;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            height: 42px;
            box-sizing: border-box;
            > .prev-song {
                width: 28px;
                height: 28px;
                margin-right: 8px;
                margin-top: 5px;
                text-indent: -9999px;
                background: url('../assets/playbar.png') no-repeat 0 9999px;
                background-position: 0 -130px; // 顺序很重要 background-position 必须在 background 后面

            }
            > .pause {
                width: 36px;
                height: 36px;
                margin-top: 0;
                background: url('../assets/playbar.png') no-repeat 0 9999px;
                background-position: 0 -165px;
                margin-right: 8px;
                text-indent: -9999px;
            }
            > .next-song {
                width: 28px;
                height: 28px;
                margin-right: 8px;
                margin-top: 5px;
                text-indent: -9999px;
                background: url('../assets/playbar.png') no-repeat 0 9999px;
                background-position: -80px -130px;
            }
        }
        > .head-img {
            width: 34px;
            height: 34px;
            margin: 6px 15px 0 0;
            > img {
                width: 34px;
                height: 34px;
                border-radius: 3px;
            }
        }
        > .play-status {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            > .play-title {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                font-size: 12px;
                height: 28px;
                > .song-name {
                    color: #e8e8e8;
                    margin-right: 15px;
                }
                > .singer {
                    color: #9b9b9b;
                }
            }

        }
    }
</style>

<template>
    <div class="wrapper">
        <div class="player-container">
            <div class="btn">
                <a class="prev-song"></a>
                <a class="pause"></a>
                <a class="next-song"></a> 
            </div>

            <div class="head-img">
                <img src="../assets/song_img.jpeg">
            </div>

            <div class="play-status">
                <div class="play-title">
                    <div class="song-name">因为理想</div>
                    <div class="singer">逃跑计划</div>
                </div>

                <div class="play-bar">
                    <div class="bar">
                        <div class="black-bar">
                        </div>
                        <div class="red-bar"></div>
                    </div>
                    <div class="play-time"></div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

