<template>
  <div class="container">
    <add-car>
      <template>
        <q-btn color="dark"
               label="Нет доступа"
               disabled=true
        ></q-btn>
      </template>
      <template v-slot:car="slotProps">
        <label @click="car.edit = false;" disabled=true> {{ slotProps.car.text }}</label>
      </template>

      <template v-slot:noeditTilte="noeditTilte">
        <label @click="car.edit = false;" disabled=true> {{ noeditTilte.car.title }}</label>
      </template>

    </add-car>
    <div class="all_stations">
      <add-station>

        <template>
          <q-btn
            color="dark"
            label="Нет доступа"
            disabled=true
          ></q-btn>
        </template>

        <template v-slot:noeditFuel="noeditFuel">
          <label @click="station.edit = false;"  disabled=true> {{ noeditFuel.station.fuel }} литров </label>
        </template>

        <template v-slot:noeditAddress="noeditAddress">
          <label @click="station.edit = false;"  disabled=true> {{ noeditAddress.station.address }} </label>
        </template>

        <template v-slot:noeditStationTitle="noeditStationTitle">
          <label @click="station.edit = false;"  disabled=true> {{ noeditStationTitle.station.title }} </label>
        </template>
      </add-station>
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
