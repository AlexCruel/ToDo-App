<template>
  <div class="row justify-content-center">
    <div class="form-group col-sm-4">
      <div class="form-group">
        <h2>Add what you want to do!</h2>
        <div class="input-group mb-3">
          <input
            class="form-control"
            type="text"
            v-model="newTask"
            v-on:keyup.enter="addToList"
            placeholder="Writing..."
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" v-on:click="addToList">Click</button>
          </div>
        </div>
        <hr />
        <h3>What to do</h3>
        <ul v-for="(todo, index) in todoList" v-bind:key="index">
          <li>
            <input type="checkbox" class="form-check-input" />
            {{ todo }}
          </li>
        </ul>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [],
      newTask: ""
    };
  },
  methods: {
    addToList() {
      if (this.newTask === "") {
        alert("Wrong! It's cant' be empty! Try again!");
      } else {
        this.todoList.push(this.newTask);
        this.newTask = "";
      }
    }
  }
};
</script>

<style scoped>
input {
  margin-bottom: 10px;
}

li {
  list-style-type: none;
}

.row {
  margin-top: 30px;
  min-height: 300px;
}
</style>