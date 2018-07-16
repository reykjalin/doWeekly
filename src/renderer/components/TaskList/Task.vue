<template>
  <div class="tile box">
    {{ task }}
    <button class="delete right" @click="deleteTask()" />
  </div>
</template>

<script>
  export default {
    name: 'task',
    props: {
      id: String,
      task: String,
      date: Number
    },
    methods: {
      deleteTask () {
        console.log(this.id)
        this.$store.dispatch('deleteTask', {
          _id: this.id,
          date: this.date
        })
      }
    }
  }
</script>

<style>
.right {
  margin: auto 0 auto auto;
}
</style>