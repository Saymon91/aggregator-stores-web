<template lang="pug">
  .container
    .row
      .col-xs-12
        h2
          | {{ title }}
        router-link( :to="{ name: 'Shops' }" )
          | go to list of shops
</template>

<script>
  export default {
    name: 'StartPage',
    data () {
      return {
        title: 'Shops list'
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
