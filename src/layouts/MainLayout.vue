<template>
  <q-layout view="lHh Lpr lFf">
    <div class="container">

      <div class="all_cars">

        <AddCar/>
      </div>

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
    StationOne,
    StationTwo,
    StationThree,
    StationFour,
    StationFive,
    AddCar,

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
  padding: 0 1rem;
}

.adding {
  width: 100%;
  max-width: 20rem;
  padding: 0 1rem;

  p, h6 {
    font-size: 1rem;
    font-weight: 300;
    color: #ffffff;
  }
}

.car {

  width: 100%;
  max-width: 9rem;
  padding: 0 1rem;

  p, h6 {
    font-size: 0.88rem;
    font-weight: 300;
    color: #ffffff;
  }
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

.all_cars, .all_stations {
flex-direction: row;
  display: flex;
  text-align: center;
  padding: 1rem 0 0 0;
  justify-content: flex-start;
  width: 100%;
  flex-direction: row;
  align-items: center;
}


</style>
