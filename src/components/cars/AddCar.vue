<template>
  <div class="adding">
    <q-card dark bordered class="my-card">
      <q-card-section>
        <p>Добавить новую машину</p>
        <input type="text" label="номер"
               class="q-gutter-md "
               v-bind:placeholder="placeholderString"
               v-bind:value="inputValue"
               v-on:input="inputChangeHandler"
               @keypress.enter="addNewCar"
        />
        <p> {{ inputValue }}</p>
      </q-card-section>

      <q-card-section>
        <q-btn color="primary" @click="addNewCar" label="Добавить"/>
        <ul class="list" v-if="cars.length !==0">
          <li
            class="car" v-for="(car, index) in cars" :key="car.id"
            v-bind:title="car.title"
            v-bind:text="car.text"
          >
          <div class="car">
              <q-card dark bordered class="bg-light-blue-6 my-card">
                <q-card-section>
                  <h6>{{index+1}} {{car.text}}</h6>
                </q-card-section>
                <q-separator dark inset/>
                <q-card-section>
                  <p>{{ car.title}}</p>
                </q-card-section>
              </q-card>
            </div>

            <q-btn flat style="color: #FF0080" label="удалить" @click="cars.splice(index, 1)"/>
          </li>
        </ul>
        <q-separator dark inset/>
      </q-card-section>
    </q-card>
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
p {
  font-size: 1rem;
}
.list{
  display: flex;
}
</style>

