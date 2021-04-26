<template>
  <div class="container">
    <add-car>
      <template v-slot:ind="slotProps">
        {{ slotProps.index + 1 }}
      </template>

    </add-car>
    <div class="all_stations">
      <add-station/>
    </div>
  </div>
</template>

<script>

import AddCar from "components/cars/AddCar";
import AddStation from "components/gas_station/AddStation";


export default {
  name: 'MainLayout',
  components: {

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

  display: flex;
  flex-direction: column;

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
