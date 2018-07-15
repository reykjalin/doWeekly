<template>
  <div class="week-do-tabs">
    <div class="tabs is-centered">
      <ul>
        <li v-bind:class="{ 'is-active': this.$route.path == '/today' }"><a @click="today()">Today</a></li>
        <li v-bind:class="{ 'is-active': this.$route.path == '/week' }"><a @click="week()">Week</a></li>
        <!-- <li><a>Month</a></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'week-do-tabs',
    methods: {
      today () {
        this.$router.push({ name: 'today' })
      },
      week () {
        this.$router.push({ name: 'week' })
      },
      month () {}
    }
  }
</script>

<style>
  .week-do-tabs {
    margin-bottom: 25px;
  }
</style>