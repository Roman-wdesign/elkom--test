<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 50px" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-btn color="primary"  label="Menu">
            <q-menu>
              <q-list style="min-width: 70px">

                <q-item clickable to="/cars"  v-close-popup>
                  <q-item-section>Машины</q-item-section>
                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right"/></q-item-section>
                  <q-menu anchor="top end" self="top start">
                    <q-list>
                      <q-item
                        v-for="n in 3"
                        :key="n"
                        dense
                        clickable
                      >
                        <q-item-section>Submenu Label</q-item-section>
                        <q-item-section side>
                          <q-icon name="keyboard_arrow_right" />
                        </q-item-section>
                        <q-menu auto-close anchor="top end" self="top start">
                          <q-list>
                            <q-item
                              v-for="n in 3"
                              :key="n"
                              dense
                              clickable
                            >
                              <q-item-section>3rd level Label</q-item-section>
                            </q-item>
                          </q-list>
                        </q-menu>
                      </q-item>
                    </q-list>
                  </q-menu>

                </q-item>


                <q-item clickable to="/stations" v-close-popup >
                  <q-item-section>Заправки</q-item-section>
                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" /></q-item-section>
                  <q-menu anchor="top end" self="top start">
                    <q-list>
                      <q-item
                        v-for="n in 3"
                        :key="n"
                        dense
                        clickable
                      >
                        <q-item-section>Submenu Label</q-item-section>
                        <q-item-section side>
                          <q-icon name="keyboard_arrow_right" />
                        </q-item-section>
                        <q-menu auto-close anchor="top end" self="top start">
                          <q-list>
                            <q-item
                              v-for="n in 3"
                              :key="n"
                              dense
                              clickable
                            >
                              <q-item-section>3rd level Label</q-item-section>
                            </q-item>
                          </q-list>
                        </q-menu>
                      </q-item>
                    </q-list>
                  </q-menu>
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




