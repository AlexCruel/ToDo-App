<template>
  <div class="row justify-content-center">
    <div class="form-group col-sm-4">
      <div class="form-group">
        <h2 v-show="accept">Add what you want to do!</h2>
        <div class="input-group mb-3" v-show="accept">
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
        <div class="list" v-bind:style="confirmList">
          <ul v-for="(todo, index) in todoList" v-bind:key="index">
            <li>
              <el-button
                v-if="element"
                icon="el-icon-minus"
                circle
                v-on:click="deleteFromList(index)"
              ></el-button>
              <el-button v-else icon="el-icon-minus" circle disabled></el-button>
              {{ todo }}
            </li>
          </ul>
        </div>
        <div>
          <el-row v-if="enable">
            <el-button type="success" icon="el-icon-check" circle disabled></el-button>
            <el-button type="danger" icon="el-icon-delete" circle disabled></el-button>
            <el-button
              type="info"
              icon="el-icon-close"
              v-show="cancell"
              v-on:click="cancellList"
              circle
            ></el-button>
          </el-row>
          <el-row v-else>
            <el-button type="success" icon="el-icon-check" circle v-on:click="confirm"></el-button>
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
      enableWarning: false,
      confirmList: {
        backgroundColor: ""
      },
      accept: true,
      cancell: false,
      element: true
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
        this.enableWarning = false;
      }
    },
    confirm() {
      this.confirmList.backgroundColor = "#E1F3D8";
      this.enable = true;
      this.accept = false;
      this.cancell = true;
      this.element = false;
    },
    cancellList() {
      this.confirmList.backgroundColor = "";
      this.enable = false;
      this.accept = true;
      this.cancell = false;
      this.element = true;
    },
    deleteFromList(index) {
      this.todoList.splice(index);
      if (this.todoList.length < 1) {
        this.enable = true;
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