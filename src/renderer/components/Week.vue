<template>
  <div id="week-do-week">
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <task-list :day="today" />
          <task-list :day="addDays(1)" />
          <task-list :day="addDays(2)" />
          <task-list :day="addDays(3)" />
          <task-list :day="addDays(4)" />
          <task-list :day="addDays(5)" />
          <task-list :day="addDays(6)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import taskList from '@/components/TaskList'
  export default {
    name: 'week',
    components: {
      'task-list': taskList
    },
    computed: {
      today () {
        let today = new Date()
        today.setHours(23)
        today.setMinutes(59)
        today.setSeconds(59)
        return today
      }
    },
    methods: {
      addDays (daysToAdd) {
        let ret = new Date()
        ret.setDate(ret.getDate() + daysToAdd)
        console.log(ret)
        return ret
      }
    }
  }
</script>

<style>
.center {
  margin: auto;
}
</style>