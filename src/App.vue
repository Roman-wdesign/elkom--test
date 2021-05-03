<template>
  <div id="q-app">
    <the-menu/>
    <router-view/>
  </div>
</template>
<script>
import TheMenu from "components/TheMenu"

export default {
  methods: {

  },
  name: 'App',
  components: {TheMenu}
}
</script>

<style lang="scss">
html {
  background-color: $grey-9;
}
</style>
