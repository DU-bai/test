<template>
<div id="app">
    <div>
        <ul class="bar">
            <li class="list"><a href="" @clickprevent="flag=0">数学计算器</a></li>
            <li class="list"><a href="" @click.prevent="flag=1">bmi计算器</a></li>
        </ul>
    </div>
    <div class="main">
        <mathcalculator v-show="flag==0"></mathcalculator>
        <bmicalculator v-show="flag==1"></bmicalculator>
    </div>
</div>
</template>

<script>
import bmicalculator from '@/components/bmicalculator'
import mathcalculator from '@/components/mathcalculator'

export default {
    name: 'index',
    components: {
        bmicalculator,
        mathcalculator
    },
    data() {
        return {
            flag: 0
        }
    }
}
</script>

<style>
.bar {
    list-style: none;
}

.list {
    background-color: wheat;
    text-align: center;
    width: 50%;
    float: left;
    height: 60px;
    line-height: 60px;
}

a {
    text-decoration: none;
}

.main {
    text-align: center;
}
</style>
