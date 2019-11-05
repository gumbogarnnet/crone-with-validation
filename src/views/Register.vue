<template>
  <!-- Material form register -->
  <div class="col-6 center">
    
  <form class="login"  @submit.prevent="createtask()"  :class="{ 'form-group--error': $v.taskDesc.$error }">

      <div class="row d-flex justify-content-center mt-2">
    <i class="fas fa-book fa-10x"></i>
    </div>
      
    <p class="h4 text-center mb-4">Add your Task here</p>
    <div class="grey-text">
     
      <mdb-input class="form__input" label="Task Description" icon="user" type="text" v-model.trim="$v.taskDesc.$model" />
     <div class="typo__p" v-if="submitStatus === 'ERROR'"> <p class="error text-danger" v-if="!$v.taskDesc.required">*Field is required</p> </div>
      <mdb-input class="form__input" label="Task Time"  icon="envelope" type="text" v-model.trim="$v.taskTime.$model"/>
      <div class="typo__p" v-if="submitStatus === 'ERROR'"><p class="error text-danger" v-if="!$v.taskTime.required">*Field is required</p></div>
      <div class="error text-danger" v-if="!$v.taskTime.minLength">The crone expression must be atlist 6 characters eg(* * * * * *)  {{$v.taskTime.$params.minLength.min}} </div>
      <mdb-input class="form__input" label="Task type" icon="exclamation-triangle" type="text" v-model.trim="$v.taskType.$model"/>
      <div class="typo__p" v-if="submitStatus === 'ERROR'"><p class="error text-danger" v-if="!$v.taskType.required">*Field is required</p></div>
      <mdb-input class="form__input" label="Command to execute" icon="exclamation-triangle" type="text" v-model.trim="$v.cmd.$model"/>
      <div class="typo__p" v-if="submitStatus === 'ERROR'"><p class="error text-danger" v-if="!$v.cmd.required">*Field is required</p></div>
    </div>
    <div class="text-center">
      <mdb-btn color="primary" >Add</mdb-btn>
    </div>
    <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
  </form>
  
  </div>
  <!-- Material form register -->
</template>
<script>
  import { required, minLength, between } from 'vuelidate/lib/validators' ;
  import { mdbInput, mdbBtn } from 'mdbvue';
  export default {
    name: 'Basic',
    data(){
      return{
      error: null ,
      taskTime: "",
      taskDesc:"",
      taskType:"",
      cmd:"",
      active: false,
      submitStatus: null
      
      }
       
    },
    validations: {
      taskDesc: {
        required,
        
      },
      taskTime: {
        required,
         minLength: minLength(6)
        
      },
       taskType : {
        required,
         
        
      },
       cmd : {
        required,
        
        
      }
    },
     props: ['message'],
    components: {
      mdbInput,
      mdbBtn
    },
    methods:{

      

    createtask(){
    console.log('create task ') 
    this.$v.$touch()
    if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } 
      else {
        
        

    axios.post('http://localhost:8080/createTask', {
    
    
    taskDesc:this.taskDesc,
    taskType:this.taskType,
    cmd:this.cmd,
    active: true,
    taskTime: this.taskTime ,



        })



    this.submitStatus = 'PENDING'
    setTimeout(() => {
    this.$router.push('/').
    this.submitStatus = 'OK'
    }, 500)
      }
    
  

     }
    },

   
    
  }

</script>

<style scoped>
.center {
  margin: auto;
}
</style>