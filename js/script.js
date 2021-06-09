const app = new Vue({

  el : '#app',

  data:{
    albums: [],
    genres: [],
    genreToSearch: 'all',
  },

  created(){
    this.callAPI('api.php');
  },

  methods:{
    callAPI(url){
      axios.get(url,{
        params:{
          genre: this.genreToSearch
        }
      })
      .then((resp)=>{
        console.log(resp);
        this.albums = resp.data.albums;
        this.genres = resp.data.genres;
        console.log(this.albums);
        console.log(this.genres);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }

});