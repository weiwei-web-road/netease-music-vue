<template>
    <div>component C
        {{$attrs.messageToC}}
        <button @click="emitToA"></button>
    </div>
</template>

<script>
export default {
    inject: ['forProvide'],
    methods: {
        emitToA() {
            // 可以通过this.$attrs 获取到A组件经由B组件传递过来的数据
            // console.log(this.$attrs, '$attrs')
            this.$emit('getC', 'emit value from C to A')
            console.log(this.forProvide, 'C for provide')
        }
    }
}
</script>