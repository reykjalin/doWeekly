<template>
  <div class="tile is-parent is-vertical box">
    <div class="level">

      <div class="level-left">
        <div class="level-item">
          <p class="title">Backlog</p>
        </div>
      </div>

      <div class="level-right">
        <div class="level-item">
          <a class="button is-text" @click="toggleModal()"><font-awesome-icon icon="plus" /></a>
        </div>
      </div>

    </div>

    <future-task
      v-for="task in tasks"
      v-bind:key="task._id"
      v-bind:id="task._id"
      v-bind:task="task.description"
      draggable
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
              <button class="button is-link" @click="createFutureTask()">Submit</button>
            </div>
          </div>

        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="toggleModal()"></button>
    </div>
  </div>
</template>

<script>
  import futureTask from '@/components/FutureList/FutureTask'

  export default {
    name: 'task-list',
    components: {
      'future-task': futureTask
    },
    created () {
      this.$store.dispatch('loadFutureTasks')
    },
    data () {
      return {
        show: false,
        newTask: ''
      }
    },
    computed: {
      tasks () {
        return this.$store.getters.getFutureTasks
      }
    },
    methods: {
      toggleModal () {
        this.show = !this.show
      },
      createFutureTask () {
        let futureTask = {
          description: this.newTask
        }

        this.$store.dispatch('newFutureTask', futureTask)

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