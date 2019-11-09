<template>
  <div class="row justify-content-center">
    <div class="form-group col-sm-4">
      <div class="form-group">
        <h2>Do you want to share with someone?</h2>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Email</span>
          </div>
          <input class="form-control" type="text" id="email" />
        </div>
        <button class="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
}

button {
  margin-top: 20px;
}
</style>