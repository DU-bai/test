<template>
<div class="mathcalculator">
    <h1>数学计算器</h1>
    <div>数值A：<input type="text" v-model="a"></div>
    <div>运算符(+,-,*,/)：<input type="text" v-model="s"></div>
    <div>数值B：<input type="text" v-model="b"></div>
    <div><button @click="calculate">计算</button></div>
    <span>{{'上次结果为：'+msg}}</span>
    <br>
    <span>{{'本次结果为：'+result}}</span>
</div>
</template>

<script>
export default {
    name: 'mathcalculator',
    data() {
        return {
            a: '',
            b: '',
            s: '',
            result: '',
            msg: '',
            storage: ''
        }
    },
    methods: {
        calculate: function () {
            this.storage = window.localStorage
            this.msg = this.$store.state.num

            switch (this.s) {
                case '+': {
                    this.result = parseInt(this.a) + parseInt(this.b)
                    break
                }
                case '-': {
                    this.result = parseInt(this.a) - parseInt(this.b)
                    break
                }
                case '*': {
                    this.result = parseInt(this.a) * parseInt(this.b)
                    break
                }
                case '/': {
                    this.result = parseFloat(this.a) / parseFloat(this.b)
                    break
                }
            }
            this.storage.setItem('num', this.result)
            this.$store.dispatch('setNum', this.result)
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
