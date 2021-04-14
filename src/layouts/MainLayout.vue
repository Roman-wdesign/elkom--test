<template>
  <q-layout view="lHh Lpr lFf">
    <div class="container">


        <AddCar/>


      <div class="all_stations">
        <StationOne/>
        <StationTwo/>
        <StationThree/>
        <StationFour/>
        <StationFive/>
      </div>

    </div>
  </q-layout>
</template>

<script>


import StationOne from "components/gas_station/StationOne";
import StationTwo from "components/gas_station/StationTwo";
import StationThree from "components/gas_station/StationThree";
import StationFour from "components/gas_station/StationFour";
import StationFive from "components/gas_station/StationFive";


import AddCar from "components/cars/AddCar";


export default {
  name: 'MainLayout',
  components: {
    AddCar,
    StationOne,
    StationTwo,
    StationThree,
    StationFour,
    StationFive,
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


.all_stations{
  display: flex;
  text-align: center;
  //padding: 1rem 0 0 0;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
}
</style>
