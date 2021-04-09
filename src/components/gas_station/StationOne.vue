<template>
  <div class="oil">
    <q-card dark bordered class="bg-grey-6 my-card">
      <q-card-section>
        <h6>{{ text }}</h6>
      </q-card-section>
      <q-separator dark inset/>
      <q-card-section>
        <p >{{ title }}</p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Газпромнефть №110',
      text: 'Комсомольский просп., 18'
    }
  },
name: "StationOne"
}
</script>

<style scoped>

</style>
