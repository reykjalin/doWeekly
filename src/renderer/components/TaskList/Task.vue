<template>
  <div class="tile box">
    {{ task }}
    <button class="delete right" />
  </div>
</template>

<script>
  export default {
    name: 'task',
    props: {
      id: Number,
      task: String
    }
  }
</script>

<style>
.right {
  margin: auto 0 auto auto;
}
</style>