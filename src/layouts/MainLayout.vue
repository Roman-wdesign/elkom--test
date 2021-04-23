<template>
  <q-layout view="lHh Lpr lFf">
    <div class="container">
      <TheMenu/>
      <AddCar/>
      <div class="all_stations">
        <AddStation/>
      </div>
    </div>
  </q-layout>
</template>

<script>

import TheMenu from "components/TheMenu";
import AddCar from "components/cars/AddCar";
import AddStation from "components/gas_station/AddStation";


export default {
  name: 'MainLayout',
  components: {
    TheMenu,
    AddCar,
    AddStation
  },
  data() {

    return {}
  },
  methods: {}

}
</script>

<style lang="scss">

html {
  background-color: $grey-9;
}

.container {
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
}

.oil {
  padding: 0 1rem;
  width: 100%;
  max-width: 11rem;

  p, h6 {
    font-size: 0.88rem;
    font-weight: 300;
    color: #ffffff;
  }

}


.all_stations {
  display: flex;
  text-align: center;
  //padding: 1rem 0 0 0;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
}
</style>
