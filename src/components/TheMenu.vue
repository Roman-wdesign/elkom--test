<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 50px" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-btn color="primary" label="Menu">
            <q-menu>
              <q-list style="min-width: 70px">

                <q-item clickable to="/cars" v-close-popup>
                  <div class="text-light-blue" style="font-size: 1.5rem; padding-right: 0.2rem">
                  <span class="material-icons">drive_eta</span>
                  </div>

                  <q-item-section>Машины</q-item-section>
                </q-item>
                <q-item clickable to="/stations" v-close-popup>
                  <div class="text-light-blue" style="font-size: 1.5rem; padding-right: 0.2rem">
                    <span class="material-icons">local_gas_station</span>
                  </div>
                  <q-item-section>Заправки</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-toolbar-title>Quasar Framework</q-toolbar-title>
        </q-toolbar>
      </q-header>
      <div class="q-pa-md ">
        <div class="q-gutter-md row items-center">
        </div>
      </div>
    </q-layout>
  </div>

</template>

<script>
export default {
  name: "TheMenu"
}
</script>

<style scoped>

</style>




