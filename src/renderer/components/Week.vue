<template>
  <div id="week-do-week">
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <task-list :day="'Sunday'" />
          <task-list :day="'Monday'" />
          <task-list :day="'Tuesday'" />
          <task-list :day="'Wednesday'" />
          <task-list :day="'Thursday'" />
          <task-list :day="'Friday'" />
          <task-list :day="'Saturday'" />
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
    methods: {}
  }
</script>

<style>
.center {
  margin: auto;
}
</style>