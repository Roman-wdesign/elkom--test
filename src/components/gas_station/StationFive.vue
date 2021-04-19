<template>
  <div class="oil">
    <q-card dark bordered class="bg-grey-6 my-card">
      <q-card-section>

        <q-card-section>
          <p >{{ fuel }}</p>
          <q-separator dark inset/>
        </q-card-section>
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
      title: 'Газпромнефть №175',
      text: 'ул. Мичурина, 47Б',
      fuel: '10 000 литров'
    }
  },
  name: "StationFive"
}
</script>

<style scoped>

</style>
