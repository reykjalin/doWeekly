<template>
  <div id="app">
    <tabs />
    <router-view></router-view>
  </div>
</template>

<script>
  import tabs from '@/components/Tabs'

  export default {
    name: 'doWeekly',
    components: {
      'tabs': tabs
    }
  }
</script>

<style>
  /* CSS */
</style>
