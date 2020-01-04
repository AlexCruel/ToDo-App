<template>
  <div class="container">
    <div class="registration" v-if="type">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <header class="card-header">
              <button class="float-right btn btn-outline-primary mt-1" v-on:click="change">Log in</button>
              <h4 class="card-title mt-2">Sign up</h4>
            </header>
            <article class="card-body">
              <form>
                <div class="form-row">
                  <div class="col form-group">
                    <label>First name</label>
                    <input type="text" class="form-control" placeholder />
                  </div>
                  <div class="col form-group">
                    <label>Last name</label>
                    <input type="text" class="form-control" placeholder=" " />
                  </div>
                </div>
                <div class="form-group">
                  <label>Email address</label>
                  <input type="email" class="form-control" placeholder />
                  <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label>Create password</label>
                  <input class="form-control" type="password" />
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block">Register</button>
                </div>
                <small class="text-muted">
                  By clicking the 'Sign Up' button, you confirm that you accept our
                  <br />Terms of use and Privacy Policy.
                </small>
              </form>
            </article>
            <div class="border-top card-body text-center">
              Have an account?
              <a href="#" v-on:click="change">Log In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="authentication" v-else>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <header class="card-header">
              <button class="float-right btn btn-outline-primary mt-1" v-on:click="change">Sign up</button>
              <h4 class="card-title mt-2">Log in</h4>
            </header>
            <article class="card-body">
              <form>
                <div class="form-group">
                  <label>Email address</label>
                  <input type="email" class="form-control" placeholder />
                  <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input class="form-control" type="password" />
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block">Let's go!</button>
                </div>
                <small class="text-muted">
                  By clicking the 'Log In' button, you confirm that you accept our
                  <br />Terms of use and Privacy Policy.
                </small>
              </form>
            </article>
            <div class="border-top card-body text-center">
              Don't have an account?
              <a href="#" v-on:click="change">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            type: true
        };
    },
    methods: {
        change() {
            this.type = !this.type;
        }
    }
};
</script>

<style scoped>
.container {
    margin-top: 60px;
}
</style>