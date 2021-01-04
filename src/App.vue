<template>
  <div>
    <div @click="$router.push({ name: 'home' })">home</div>
    <div @click="$router.push({ name: 'about' })">about</div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
      selectedKeys: ['sub1', '1']
    }
  },
  created () {
  },
  methods: {
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }
  }
}
</script>
