<template>
  <q-layout view="lHh Lpr lFf">
    <div class="container">

      <div class="all_cars">
        <HyundaiSolaris/>
        <SkodaOctavia/>
        <KiaOptima/>
        <NissanQashqai/>
        <ToyotaCamry/>
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

import HyundaiSolaris from "components/cars/HyundaiSolaris";
import SkodaOctavia from "components/cars/SkodaOctavia";
import KiaOptima from "components/cars/KiaOptima";
import NissanQashqai from "components/cars/NissanQashqai";
import ToyotaCamry from "components/cars/ToyotaCamry";

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
    HyundaiSolaris,
    SkodaOctavia,
    KiaOptima,
    NissanQashqai,
    ToyotaCamry,
    StationOne,
    StationTwo,
    StationThree,
    StationFour,
    StationFive
  },
  data() {
    return {}
  }
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


.car {
  width: 100%;
  max-width: 9rem;
  padding: 0 1rem;

  p, h6 {
    font-size: 1rem;
    font-weight: 300;
    color: #ffffff;
  }
}

.oil {
  padding: 0 1rem;
  width: 100%;
  max-width: 12rem;

  p, h6 {
    font-size: 1rem;
    font-weight: 300;
    color: #ffffff;
  }

}

.all_cars, .all_stations {

  display: flex;
  text-align: center;
  padding: 1rem 0 0 0;
  justify-content: flex-start;
  width: 100%;
  flex-direction: row;
  align-items: center;
}


</style>
