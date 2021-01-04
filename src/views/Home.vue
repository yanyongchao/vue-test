<template>
  <div class="home">
    <button @click="handleClick">按钮</button>
    <div v-show="show" :key="uniqueKey">
      box1<input type="checkbox">
      <br>
      box2<input type="checkbox">
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      radio: '1',
      show: true,
      uniqueKey: 0
    }
  },
  methods: {
    handleClick () {
      window.location.href = 'https://juejin.im/timeline'
    }
  }
}
</script>
