<template>
  <div class="vue-register">
    <form>
      <h3>Register</h3>

      <div class="form-group">
        <label>Username</label>
        <input
          type="username"
          v-model="user.username"
          class="form-control form-control-lg"
        />
      </div>

      <div class="form-group mb-2">
        <label>Password</label>
        <input
          type="password"
          v-model="user.password"
          class="form-control form-control-lg"
        />
      </div>

      <button
        type="submit"
        class="btn btn-dark btn-lg btn-block resiter me-3"
        @click="handleRegister"
      >
        Register
      </button>
      <p>
        <br />
        Have account? Click here
        <button type="submit" class="btn-default" @click="handleSignIn">
          Sign in
        </button>
      </p>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      submitted: false,
    };
  },
  computed: {
    //...mapState("account", ["status"]),
  },
  methods: {
    //...mapActions("account", ["register"]),
    handleRegister(e) {
      axios
        .post("http://localhost:3000/auth/register", this.user)
        .catch((error) => {
          console.log(error);
          this.$message("Cannot register user");
        });
    },
    handleSignIn(e) {
      this.$router.push({ name: "signin" });
    },
  },
};
</script>

<style>
.vue-register {
  max-width: 500px;
  margin: 0 auto;
}
.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.vertical-center {
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
}

.inner-block {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
}

.vertical-center .form-control:focus {
  border-color: #2554ff;
  box-shadow: none;
}

.vertical-center h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}
label {
  font-weight: 500;
}
</style>