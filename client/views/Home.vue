<template lang="html">
  <div class="page">
    <Counter />
    <p>
      To get started, edit files in <code>./client</code> and save.
    </p>
  </div>
</template>

<script>
    import Counter from '../components/Counter'
    export default {
        components: {
            Counter
        }
    }
</script>

<style>
    p {
        display: none;
    }
</style>