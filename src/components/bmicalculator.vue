<template>
<div class="bmicalculator">
    <h1>bmi计算器</h1>
    <div>身高：<input type="text" placeholder="m" v-model="a"></div>

    <div>体重：<input type="text" placeholder="kg" v-model="b"></div>
    <div><button @click="calculate">计算</button></div>
    <span>{{'上次结果为'+msg}}</span><br>
    <span>{{'本次结果为：'+result}}</span>
    <span v-text="msg2"></span>
</div>
</template>

<script>
export default {
    name: 'bmicalculator',
    data() {
        return {
            a: '',
            b: '',
            result: '',
            msg: '',
            msg2: '',
            storage: ''
        }
    },
    methods: {
        calculate: function () {
            this.msg = this.$store.state.data
            this.storage = window.localStorage
            this.result = this.b / Math.pow(this.a, 2)
            this.result = this.result.toFixed(2)
            if (this.result < 18.5) {
                this.msg2 = '，可能这就是竹竿吧'
            } else if (this.result >= 18.5 && this.result <= 23.9) {
                this.msg2 = '，哇哦，令人羡慕的好身材！'
            } else {
                this.msg2 = '，答应我， 以后不要喝奶茶了'
            }
            this.storage.setItem('bmi', this.result)
            this.$store.dispatch('setBmi', this.result)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
button {
    margin-top: 10px;
}
</style>
