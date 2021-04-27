<template>
  <div id="q-app">
    <the-menu/>
    <router-view/>
  </div>
</template>
<script>
import TheMenu from "components/TheMenu";

export default {
  methods: {

  },
  name: 'App',
  components: {TheMenu}
}
</script>
