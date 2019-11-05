<template>
  <!-- Material form login -->
  

<div class="col-6 center">
    <div class="row d-flex justify-content-center mt-2">
    <i class="fas fa-user fa-10x"></i>
    </div>
  <form @submit.prevent="login">
    <p class="h4 text-center mb-4">Sign in</p>
    <div class="grey-text">
      <mdb-input label="Your email" icon="envelope" type="text" v-model="input.username"/>
      <mdb-input label="Your password" icon="lock" type="password" v-model="input.password"/>
    </div>
    <div class="text-center">
      <mdb-btn v-on:click="login()">Login</mdb-btn>
    </div>
    <p>Not a user <router-link to="#">Register</router-link> </p>
  </form>
</div>
  <!-- Material form login -->
</template>
<script>
  import { mdbInput, mdbBtn } from 'mdbvue';
  export default {
    name: 'Basic',
    data(){
      return{
        input : {
        username: "",
        password: "",
        }

      }
    },
    components: {
      mdbInput,
      mdbBtn
    },

    methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }

  }
  
</script>
<style scoped>
.center {
  margin: auto;
}
</style>
