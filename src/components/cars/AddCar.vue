<template>
  <div class="adding">
    <q-card dark bordered class="my-card">
      <p>Добавить новую машину</p>

      <p> {{ inputValue }}</p>
      <q-btn color="primary"
             @click="addNewCar"
             v-bind:placeholder="placeholderString"
             v-bind:value="inputValue"
             v-on:input="inputChangeHandler"
             @keypress.enter="addNewCar"
             label="Добавить"/>
    </q-card>

    <q-card-section>
      <div class="list" v-if="cars.length !==0">
        <div class="listeners"
             v-for="(car, index) in cars" :key="car.id"
             v-bind:title="car.title"
             v-bind:text="car.text"
        >
          <div class="car">
            <q-card dark bordered class="bg-light-blue-6 my-card">
              <q-card-section>
                <div class="rounded">{{ index + 1 }}</div>
                <h6>{{ car.text }}</h6>
              </q-card-section>
              <q-separator dark inset/>
              <q-card-section>
                <p>{{ car.title }}</p>
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
    title: String
  },

  data() {
    return {
      placeholderString: 'Введите номер машины',
      inputValue: '',

      cars: [
        {
          id: 1,
          title: 'Hyundai Solaris',
          text: 'т123дс',
          edit:false
        },
        {
          id: 2,
          title: 'Kia Optima',
          text: 'к237тс',
          edit:false
        },
        {
          id: 3,
          title: 'Nissan Qashqai',
          text: 'у829ми',
          edit:false
        },
        {
          id: 4,
          title: 'Skoda Octavia',
          text: 'а100ее',
          edit:false
        },
        {
          id: 5,
          title: 'Toyota Camry',
          text: 'р500нг',
          edit:false
        },
      ],
      nextCarId: 6

    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    },
    addNewCar() {
      {
        this.cars.push({
          id: this.nextCarId++
        })

        this.inputValue = ''
      }
    },
    removeObj(index) {
      this.cars.splice(index, 1)
    }

  },

  name: 'AddCar'
}


</script>

<style lang="scss" scoped>
.adding {
  display: flex;
  text-align: center;
  padding: 1rem;
  justify-content: flex-start;
  width: 100%;
  align-items: center;

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

.my-card {

  width: 100%;
  max-width: 16rem;
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
  background-color: $blue-8;
  color: #ffffff;
}

p {
  font-size: 1rem;
}

.list {
  width: 100%;
  //flex-direction: row;
  //  flex-wrap: wrap;
  display: flex;

}

.listeners {

  display: flex;

}
</style>

