<template>
  <div class="tile is-parent is-vertical box">
    <div class="level">

      <div class="level-left">
        <div class="level-item">
          <p class="title">{{ today }}</p>
        </div>
      </div>

      <div class="level-right">
        <div class="level-item">
          <a class="button is-info" @click="toggleModal()"><font-awesome-icon icon="plus" /></a>
        </div>
      </div>

    </div>

    <Task
      v-for="task in tasks"
      v-bind:key="task._id"
      v-bind:id="task._id"
      v-bind:task="task.description"
      v-bind:date="task.date"
      />

    <div class="modal" v-bind:class="{ 'is-active': show }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">

          <div class="field">
            <label class="label">Task</label>
            <div class="control">
              <textarea class="textarea" placeholder="New task" v-model="newTask" autofocus></textarea>
            </div>
          </div>

          <div class="field is-grouped right">
            <div class="control right">
              <button class="button is-text" @click="toggleModal()">Cancel</button>
            </div>
            <div class="control">
              <button class="button is-link" @click="createTask()">Submit</button>
            </div>
          </div>

        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="toggleModal()"></button>
    </div>
  </div>
</template>

<script>
  import task from '@/components/TaskList/Task'

  export default {
    name: 'task-list',
    components: {
      'Task': task
    },
    props: {
      day: Date
    },
    created () {
      this.$store.dispatch('loadTasks', this.day.getTime())
    },
    data () {
      return {
        show: false,
        newTask: '',
        days: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ]
      }
    },
    computed: {
      tasks () {
        return this.$store.getters.getTasks[this.day.getTime()]
      },
      today () {
        return this.days[this.day.getDay()] + ' ' + this.months[this.day.getMonth()] + ' ' + this.day.getDate()
      }
    },
    methods: {
      toggleModal () {
        this.show = !this.show
      },
      createTask () {
        // Make sure there is no ambiguity in task location
        let time = new Date(this.day.getTime())
        time.setHours(12)

        let task = {
          description: this.newTask,
          date: time.getTime(),
          completed: false,
          dateCompleted: null
        }

        console.log(this.day)
        this.$store.dispatch('newTask', task)

        this.toggleModal()
        this.resetModel()
      },
      resetModel () {
        this.newTask = ''
      }
    }
  }
</script>

<style>
.right {
  margin: auto 0 auto auto;
}
.left {
  float: left;
}
</style>