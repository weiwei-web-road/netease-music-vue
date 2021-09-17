<style lang="less">
    .tabs_category {
        margin: 7px 0 10px 20px;
        font-size: 12px;
        color: #333;
        font-family: Arial, Helvetica, sans-serif;
        -webkit-text-size-adjust: none;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        .tab_item {
            color: #666;
            &:hover {
                cursor: pointer;
                text-decoration: underline #555;
            }
        }
        .line {
            margin: 0 10px;
            color: #ccc;
        }
    }
</style>
<template>
    <div class="tabs_category">
        <template v-bind:key="option.title" v-for="(option, index) in options">
            <span v-on:click="handleGoto(option.url)" class="tab_item">{{option.title}}</span>
            <span v-if="index !== (options.length - 1)" class="line">|</span>
        </template>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: ['options'],
    methods: {
        handleGoto: function(url: string) {
            this.$router.push(url);
        }
    }
});
</script>