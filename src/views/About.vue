<template>
  <div class="about">

    
  <div id="app">
    {{info}}
    
		
    
  </div>
  
    
  </div>
</template>
<script>

  

  export default {
     name: 'app',
     
      data () {
    return {
      info: [],
      
    }
  },
  methods:{
    

    getAllTasks(){
      axios
      .get('http://localhost:8080/taskall')
      .then(response => (this.info = response.data))
      console.log(this.info)
    }
  },
  mounted () {
    this.getAllTasks();


    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
