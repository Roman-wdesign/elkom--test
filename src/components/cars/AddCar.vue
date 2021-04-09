<template>
  <div class="car">
    <q-card dark bordered class="bg-light-blue-6 my-card">
      <q-card-section>
        <p>Добавить новую машину</p>
        <input type="text" label="номер"

                 v-bind:placeholder="placeholderString"
                 v-bind:value="inputValue"
                 v-on:input="inputChangeHandler"
                 @keypress.enter="addNewNote"
        />
        <p> {{ inputValue }}</p>
      </q-card-section>
      <q-separator dark inset/>
      <q-card-section>

        <q-btn color="primary" @click="addNewNote" label="Добавить"/>

        <ul class="list">
          <li class="list-item" v-for="note in notes" :key="note">
            {{ note }}
          </li>
        </ul>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {

  data() {
    return {
      placeholderString: 'Введите название заметки',
      title: 'Список заметок',
      inputValue: '',
      notes: ['1', '2'],
      text: ''

    }
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value
    },
    addNewNote() {

      this.notes.push(this.inputValue)
    }
  },
  name: 'AddCar'
}

</script>

<style lang="scss" scoped>
p {
  font-size: 1rem;
}
</style>

