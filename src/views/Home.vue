<template>
  <div class="home">

   

    <div class="container-fluid jumbotron">
      <h2>
        <small class="text-muted">Scheduled Tasks</small>
      </h2>

       <router-link to="/register" class="btn btn-success float-right">Add Task</router-link>

    </div>
    


    <div class="container">
    
    <HelloWorld/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

