<template>
  <div id="week-do-today">
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile">
          <taskList :day="'Today'" :taskList="tasks" />
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
    data () {
      return {
        tasks: {
          task1: {
            id: 1,
            description: 'task 1'
          },
          task2: {
            id: 2,
            description: 'task 2'
          }
        }
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