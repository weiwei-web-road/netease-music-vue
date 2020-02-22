<template>
    <div>component D
        <input type="text" v-model="message" @change="changeVal"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: this.value // v-model 自动传递的字段为value的props属性
        }
    },
    props: {
        value: String // 判断value 类型
    },
    methods: {
        changeVal() {
            this.$emit('input', this.message) // emit input 事件，改变父组件v-model绑定的值
        }
    }
}
</script>