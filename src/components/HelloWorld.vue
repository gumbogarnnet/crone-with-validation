<template>

    <div>
      
      <mdb-tbl class="table table-responsive table-hover table-borderless table-striped">
        <mdb-tbl-head color="grey">
          <tr>
            <th scope="col">Task id</th>
            <th scope="col" >Task Name</th>
            <th scope="col">Task Time</th>
            <th scope="col">Task Type</th>
            <th scope="col">Action</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          
          <tr :style="{ cursor: 'pointer'}" v-for="(garnnet, index) in info" :key="index">
            
            <td >{{garnnet.tId}}</td>
            <td >{{garnnet.taskDesc}}</td>
            <td >{{garnnet.taskTime}}</td>
            <td>{{garnnet.taskType}}</td>
            <td> <mdb-btn v-on:click="deleteById(garnnet.tId, index)" color="danger" ><i class="fa fa-trash "></i></mdb-btn><mdb-btn color="primary" v-on:click="popModal(garnnet)"><i class="fa fa-eye "></i></mdb-btn> </td>
          </tr>
          
          
  
        </mdb-tbl-body>
      </mdb-tbl>
      

       
      <mdb-modal :show="modal" @close="modal = false">
      <mdb-modal-header>
      <mdb-modal-title><label>Task Number: {{id}}</label></mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
       
       
            
       
        <br/>
       <label>Task Description</label>
        <input class="form-control form-control-sm" type="text" v-model="description"> 
        <br/>
        <label>Task Type</label>
        <input class="form-control form-control-sm" type="text" v-model="type"><br/>
        <label>Task Time</label>
        <input  class="form-control form-control-sm" type="text" v-model="time"><br/>
        <label>Command</label>
        <input  class="form-control form-control-sm" type="text" v-model="command"><br/>
        <label>Status</label>
        <input  class="form-control form-control-sm" type="text" v-model="status"><br/>
        
        

      </mdb-modal-body>
      <mdb-modal-footer>
      
      <mdb-btn v-on:click="createtask()" color="primary">Save changes</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

      
    </div>
  </template>


<script>
  import { mdbTbl, mdbTblHead, mdbTblBody, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn } from 'mdbvue';

  export default {
    name: 'TablePage',
     data () {
    return {
      info: [],
      infoById:[],
      modal: false,
      type : '',
      time : '',
      command : '',
      status : '',
      description : '',
      id : null
      
    }
  },
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody,
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbModalFooter,
      mdbBtn,
    },
    clickList: function (product) {
    console.log("clickList fired with " + product.id);
    },
    methods: {
      getAllTasks(){
        axios
              .get('http://localhost:8080/taskall')
              .then(response => (this.info = response.data))
      },
      getAllTasKById(id,){
        
        this.modal = true;
        axios
        .get('http://localhost:8080//taskbyid?tId=' +id)
        .then(response => (this.infoById = response.data))

      },
      popModal(obj){
        
        this.modal = true;
        this.type = obj.taskType;
        this.command = obj.cmd;
        this.time = obj.taskTime;
        this.status = obj.active,
        this.description = obj.taskDesc;
        this.id = obj.tId;
  
      },
    createtask(){
      this.modal=false;
    
    axios.post('http://localhost:8080/createTask', {
    
    tId : this.id,
    taskDesc : this.description,
    taskType : this.type,
    cmd : this. command,
    active : this.status,
    taskTime : this.time ,
   
      })
      .then(
        this.getAllTasks()
        

      )
    },
    
    deleteById(id, index){
        console.log(index)
              
        axios
        .delete('http://localhost:8080/delbyid?tId=' +id)
        
         this.info.splice(index, 1)
         
      },
            
      
    },
    

     mounted () {
       this.getAllTasks();
        
  }
}
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
