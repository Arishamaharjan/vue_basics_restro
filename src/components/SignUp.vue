<template>
  <img class="image" src="../assets/mac.jpg" />
  <h3>Sign Up</h3>
  <div class="signup">
    <input type="text" placeholder="Enter Name" v-model="name" />
    <input type="text" placeholder="Enter Email" v-model="email" />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <button class="primarybtn" @click="signUp()">Sign Up</button>
  </div>
  <router-link to="/login">Login</router-link>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data()
    {
        return{
            name: '',
            email: '',
            password: ''
        }
    },
    methods:{
        async signUp() {
            try {
                let data = {
                    email: this.email,
                    password: this.password,
                    name: this.name
                }
                const response = await axios.post('http://localhost:3000/users', data);
                console.log(response);

                if (response.status === 201) {
                    alert('New user signed up');
                }

                localStorage.setItem("user-info", JSON.stringify(response.data));
                this.$router.push('/')
            } catch (error) {
                console.error("error", error);
            }
        }  
    },
    mounted () {
      let userInfo = localStorage.getItem("user-info")

      if (userInfo) {
        this.$router.push('/')
      }
    }



}
</script>

<style>

</style>