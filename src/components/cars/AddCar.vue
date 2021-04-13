<template>
  <div class="adding">
    <q-card dark bordered class="my-card">
      <p>Добавить новую машину</p>
      <input type="text" label="номер"
             class="q-gutter-md "
             v-bind:placeholder="placeholderString"
             v-bind:value="inputValue"
             v-on:input="inputChangeHandler"
             @keypress.enter="addNewCar"
      />
      <p> {{ inputValue }}</p>
      <q-btn color="primary" @click="addNewCar" label="Добавить"/>
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
                     @click="cars.splice(index, 1)"
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

  data() {
    return {
      placeholderString: 'Введите номер машины',
      inputValue: '',
      newCarText: '',
      cars: [
        {
          id: 1,
          title: 'Hyundai Solaris',
          text: 'т123дс'
        },
        {
          id: 2,
          title: 'Kia Optima',
          text: 'к237тс'
        },
        {
          id: 3,
          title: 'Nissan Qashqai',
          text: 'у829ми'
        },
        {
          id: 4,
          title: 'Skoda Octavia',
          text: 'а100ее'
        },
        {
          id: 5,
          title: 'Toyota Camry',
          text: 'р500нг'
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
      if (this.inputValue !== '') {
        this.cars.push({
          id: this.nextCarId++,
          title: this.newCarText
        })
        this.newCarText = ''
        this.inputValue = ''
      }
    },

  },

  name: 'AddCar'
}


</script>

<style lang="scss" scoped>
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
  padding: 0.5rem 0;
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

