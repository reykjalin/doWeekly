<template>
  <div class="tile box">
    {{ task }}
    <button class="delete right" @click="deleteFutureTask()" />
  </div>
</template>

<script>
  export default {
    name: 'task',
    props: {
      id: String,
      task: String
    },
    methods: {
      deleteFutureTask () {
        console.log(this.id)
        this.$store.dispatch('deleteFutureTask', {
          _id: this.id
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