<template>
  <div id="doweekly-future">
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <future-list />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import futureList from '@/components/FutureList'

  export default {
    name: 'future',
    components: {
      'future-list': futureList
    }
  }
</script>
