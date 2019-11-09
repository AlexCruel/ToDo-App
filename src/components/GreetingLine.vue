<template>
  <form>
    <div class="row justify-content-center">
      <div class="form-group col-sm-4">
        <div class="form-group">
          <h1 class="text-center">Hi! {{ name }}</h1>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Full name</span>
            </div>
            <input
              class="form-control"
              type="text"
              id="name"
              v-model="name"
              v-on:click="clearInput"
              placeholder="Who are you?"
            />
          </div>
          <div class="input-group">
            <input class="form-control" id="email" type="text" placeholder="Email" />
            <div class="input-group-append">
              <span class="input-group-text">Email</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "Guest"
    };
  },
  methods: {
    clearInput() {
      this.name = "";
    }
  }
};
</script>

<style scoped>
input,
.input-group {
  margin-bottom: 20px;
}

h1 {
  margin-bottom: 30px;
}

form {
  margin-top: 30px;
}
</style>