<script setup>
import { reactive, ref } from 'vue'

const counter = reactive({ count: 0 })
const message = ref('Hello World!')
</script>

<template>
  <h1>{{ message }}</h1>
  <p id="test">Count is: {{ counter.count }}</p>
</template>


<style lang="scss">
$color: red;

#test {
  color: $color;
}
</style>

