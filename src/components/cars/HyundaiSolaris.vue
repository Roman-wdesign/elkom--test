<template>
  <div class="car">
    <q-card dark bordered class="bg-light-blue-6 my-card">
      <q-card-section>
        <h6>{{ text }}</h6>
      </q-card-section>
      <q-separator dark inset/>
      <q-card-section>
        <p>{{ title }}</p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hyundai Solaris',
      text: 'т123дс'
    }
  },
  name: 'HyundaiSolaris'
}
</script>

<style scoped>

</style>
