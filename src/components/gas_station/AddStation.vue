<template>
  <div class="adding">
    <q-card dark bordered class="bg-grey-6 my-card">
      <p>{{ placeholderString }}</p>

      <p> {{ inputValue }}</p>
      <q-btn
        @click="addNewStation"
        v-bind:placeholder="placeholderString"
        v-bind:value="inputValue"
        v-on:input="inputChangeHandler"
        @keypress.enter="addNewStation"
        label="Добавить"/>
      <div class="all_fuel">
        <p>всего:
          {{ allFuel }}
          литров</p>
      </div>
    </q-card>

    <q-card-section>
      <div class="list" v-if="stations.length !==0">
        <div class="listeners "
             v-for="(station, index) in stations" :key="station.id"
             v-bind:title="station.title"
             v-bind:address="station.address"
             v-bind:fuel="station.fuel"

        >

          <div class="station">
            <q-card dark bordered class="bg-grey-6 my-card">
              <q-card-section>
                <div class="rounded">{{ index + 1 }}</div>

                <div class="fuel">
                  <input
                    class="changing"
                    v-if="station.edit" v-model="station.fuel"
                    @blur="station.edit = false; $emit('fuel')"
                    @keyup.enter="station.edit=false; $emit('fuel')">
                  <div v-else>
                    <label @click="station.edit = true;"> {{ station.fuel }} </label>
                  </div>
                </div>

                <input
                  class="changing"
                  v-if="station.edit" v-model="station.address"
                  @blur="station.edit = false; $emit('update')"
                  @keyup.enter="station.edit=false; $emit('update')">
                <div v-else>
                  <label @click="station.edit = true;"> {{ station.address }} </label>
                </div>
              </q-card-section>
              <q-separator dark inset/>
              <q-card-section>

                <input
                  class="changing"
                  v-if="station.edit" v-model="station.title"
                  @blur="station.edit = false; $emit('updateSecond')"
                  @keyup.enter="station.edit=false; $emit('updateSecond')">
                <div v-else>
                  <label @click="station.edit = true;"> {{ station.title }} </label>
                </div>


              </q-card-section>
              <q-btn class="delete_btn"
                     label="Удалить"
                     @click="removeObj(index)"
              />
            </q-card>
          </div>
        </div>
      </div>
    </q-card-section>

  </div>
</template>

<script>
export default {
  props: {
    title: String,
    address: String,
    fuel: Number,


  },
  data() {
    return {
      placeholderString: '+ новая станция',
      inputValue: '',

      stations: [
        {
          id: 1,
          title: 'Газпромнефть №110',
          address: 'Комсомольский просп., 18',
          fuel: 5,
          edit: false
        },
        {
          id: 2,
          title: 'Газпромнефть №110',
          address: 'Комсомольский просп., 18',
          fuel: 5,
          edit: false
        },
        {
          id: 3,
          title: 'Газпромнефть №110',
          address: 'Комсомольский просп., 18',
          fuel: 2,
          edit: false
        },
        {
          id: 4,
          title: 'Газпромнефть №110',
          address: 'Комсомольский просп., 18',
          fuel: 2,
          edit: false
        },
        {
          id: 5,
          title: 'Газпромнефть №110',
          address: 'Комсомольский просп., 18',
          fuel: 1,
          edit: false
        },
      ],
      nextStationId: 6,
      editedStation: null,

    }
  },
  computed: {

    allFuel() {
      return this.stations.reduce((sum, station) => sum + parseFloat(station.fuel), 0);

    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    },
    addNewStation() {
      {
        this.stations.push({

          id: this.nextStationId++,
          title: 'название',
          address: 'адрес',
          fuel: 0,
          edit: true
        })

        this.inputValue = ''
      }
    },
    removeObj(index) {
      this.stations.splice(index, 1)
    },
    editCard: function (station) {
      this.editedCard = station;
    },
  },

  name: "AddStation"
}
</script>


<style lang="scss" scoped>

.all_fuel {
  margin: 0.5rem 0;
}

.fuel {
  margin: 0.5rem 0;
}


.q-btn {
  background-color: $grey-7;
}

.changing {
  width: 100%;
  box-sizing: border-box;
}

.adding {
  display: flex;
  text-align: center;
  justify-content: flex-start;

  width: 100%;
  align-items: center;

  p, h6 {
    font-size: 1rem;
    font-weight: 300;
    color: #ffffff;
  }
}

.station {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
  max-width: 12.5rem;
  padding: 0 1rem;

  p, h6 {
    font-size: 0.88rem;
    font-weight: 300;
    color: #ffffff;
  }
}


.my-card {
  box-sizing: border-box;
  width: 100%;
  max-width: 16rem;
  min-width: 7.2rem;
  margin: 1rem;
  padding: 0.5rem;

}


.rounded {
  color: $light-blue-8;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  background: #ffffff;
  margin: 1em;
  border-radius: 50%;
  text-align: center;
}

.delete_btn {
  text-transform: none;
  margin-top: 0.5rem;
  background-color: $grey-9;
  color: #ffffff;
}

p {
  font-size: 1rem;
}

.list {

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

}

.listeners {
  display: flex;

}
</style>
