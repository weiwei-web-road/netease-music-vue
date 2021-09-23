<style lang="less">
    .albums_layout {
        width: 100%;
        > .header {
            height: 33px;
            padding: 0 10px 0 34px;
            background: url('../../../src/assets/icons2.png') no-repeat 0 9999px;
            background-position: -225px -156px;
            border-bottom: 2px solid #C10D0C;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            .header_left {
                font-size: 20px;
                font-weight: normal;
                line-height: 28px;
                text-decoration: none;
                color: #333;
                cursor: pointer;
                height: 100%;
                font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
            }
            .header_middle {
                height: 100%;
                flex-grow: 1;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                min-width: 70%;
            }
            .header_right {
                height: 100%;
                > .has-extra {
                    font-size: 12px;
                    color: #333;
                    font-family: Arial, Helvetica, sans-serif;
                    margin-top: 9px;
                    > .more {
                        color: #666;
                        cursor: pointer;
                    }
                    > .s-bg-6 {
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        margin-left: 4px;
                        vertical-align: middle;
                        background: url('../../../src/assets/icons2.png') no-repeat 0 9999px;
                        background-position: 0 -240px;
                    }
                }
            }
        }
        > .body {
            overflow: hidden;
            position: relative;
            width: 100%;
        }
    }
</style>

<template>
    <div class="albums_layout">
        <div class="header">
            <span class="header_left">{{title}}</span>
            <div class="header_middle">
                <slot name="header"></slot>
            </div>
            <div class="header_right">
                <div v-if="hasExtra" class="has-extra">
                    <span class="more">更多</span>
                    <i class="s-bg-6">&nbsp;</i>
                </div>
            </div>
        </div>
        <div class="body">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['title', 'hasExtra', 'extraToggle']
});
</script>