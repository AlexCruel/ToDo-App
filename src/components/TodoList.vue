<template>
  <div class="row justify-content-center">
    <div class="form-group col-sm-4">
      <div class="form-group">
        <h2>Add what you want to do!</h2>
        <div class="input-group mb-3">
          <el-alert
            v-if="enableAlert"
            class="elAlert"
            title="It's can't be empty! Try again!"
            type="error"
            effect="dark"
          ></el-alert>
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
        <div>
          <el-row v-if="enable">
            <el-button type="success" icon="el-icon-check" circle disabled></el-button>
            <el-button type="danger" icon="el-icon-delete" circle disabled></el-button>
          </el-row>
          <el-row v-else>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle v-on:click="preDeleteList"></el-button>
          </el-row>
        </div>
        <div class="elWarning" v-if="enableWarning">
          <el-alert title="Are you sure to delete this list?" type="warning">
            <el-button
              type="success"
              round
              v-on:click="enableWarning = !enableWarning, enable = !enable"
            >No</el-button>
            <el-button type="danger" round v-on:click="deleteList">Yes</el-button>
          </el-alert>
        </div>
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
      newTask: "",
      enableAlert: false,
      enable: true,
      enableWarning: false
    };
  },
  methods: {
    addToList() {
      if (this.newTask === "") {
        this.enableAlert = true;
      } else {
        this.todoList.push(this.newTask);
        this.newTask = "";
        this.enableAlert = false;
        this.enable = false;
      }
    },
    preDeleteList() {
      this.enableWarning = !this.enableWarning;
      this.enable = !this.enable;
    },
    deleteList() {
      while (this.todoList.length > 0) {
        this.todoList.pop();
        this.enableWarning = !this.enableWarning;
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

.elAlert {
  margin-bottom: 10px;
}

.elWarning {
  margin-top: 10px;
}
</style>