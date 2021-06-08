const app = new Vue({

  el : '#app',

  data:{
    arrDischi: [],
  },

  created(){
    this.callAPI('api.php');
  },

  methods:{
    callAPI(url){
      axios.get(url)
      .then((resp)=>{
        console.log(resp);
        this.arrDischi.push(resp.data);
        console.log(this.arrDischi);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }

});