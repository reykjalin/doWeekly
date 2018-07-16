<template>
  <div id="week-do-today">
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile">
          <taskList :day="today" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import taskList from '@/components/TaskList'

  export default {
    name: 'today',
    components: {
      'taskList': taskList
    },
    computed: {
      today () {
        let today = new Date()
        today.setHours(23)
        today.setMinutes(59)
        today.setSeconds(59)
        return today
      }
    }
  }
</script>

<style>
.center {
  margin: auto;
}

.right {
  margin: auto 0 auto auto;
}
</style>