<template>
  <q-layout view="lHh Lpr lFf">
    <div class="container">
      <div class="all">
        <HyundaiSolaris/>
        <SkodaOctavia/>
        <KiaOptima/>
        <NissanQashqai/>
        <ToyotaCamry/>
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


export default {
  name: 'MainLayout',
  components: {HyundaiSolaris, SkodaOctavia, KiaOptima, NissanQashqai, ToyotaCamry},
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

}

.all {
  display: flex;
  text-align: center;
  padding: 1rem;
  justify-content: space-between;
  width: 100%;

  flex-direction: row;

}
.car{
  width: 100%;
  max-width: 12rem;
}


</style>
