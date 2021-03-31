<template>
    <div>
        <button @click="handleBusEmit">$bus传值</button>
        <br>
        <br>
        <br>
        <p>接收到1：{{message}}</p>
    </div>
</template>

<script>
import { ref, reactive, onMounted, getCurrentInstance } from 'vue'
import { useRoute, useRouter } from 'vue-router'
function BusEmit() {
    const internalInstance = getCurrentInstance()
    const { $bus } = internalInstance.appContext.config.globalProperties
    const handleBusEmit = () => {
        $bus.$emit('sendmessage', new Date().toLocaleString())
    }

    return {
        handleBusEmit
    }
}
function BusOn() {
    const internalInstance = getCurrentInstance()
    const { $bus } = internalInstance.appContext.config.globalProperties
    const message = ref('')

    onMounted(() => {
        $bus.$on('sendmessage', value => {
            message.value = value
        })
    })

    return {
        message
    }
}
export default {
    setup() {
        return {
            ...BusEmit(),
            ...BusOn()
        }
    }
}
</script>