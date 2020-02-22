<style lang="less" scoped>
    div {
        background-color: red;
    }
</style>
<template>
    <div>component A
        <!-- 子组件通过v-on 绑定了一个事件来监听子组件的触发事件。当监听到子组件发射的事件后，就触发本组件定义的事件 -->
        <B v-bind:messageA="messageA" v-bind:messageToC="messageToC" v-on:getB="getB" v-on:getC="getC"></B>
    </div>
</template>

<script>
import B from './B';

export default {
    data() {
        return {
            messageA: 'message from A to B',
            messageToC: 'message from A to C',

        }
    },
    components: {
        B
    },
    methods: {
        getB(param) {
            console.log(param, 'get B')
        },
        getC(param) {
            console.log(param, 'get C')
        }
    }
}
</script>