<template>
  <div>
      <!-- <div id="search">  
        <div class="search">
          <div class="search-input">
              <img src="../assets/icon-search.png"/>
              <form>
                  <input type="text" placeholder="搜索 歌曲/专辑/歌手" v-model="key" />
              </form>
          </div>
          <div class="search-cancel" :class="{'search-cancel-show':searchFocus}" @click="searchCancel">取消</div>
        </div>
      </div> -->
      <div v-if="song">
        <p>单曲</p>
        <ul>
          <li v-for="item in song .itemlist">{{item.name}}</li>
        </ul>
      </div>
      <div  v-if="singer">
        <p>歌手</p>
        <ul>
          <li v-for="item in singer.itemlist">{{item.name}}</li>
        </ul>
      </div>
      <div  v-if="mv">
        <p>MV</p>
        <ul>
          <li v-for="item in mv.itemlist">{{item.name}}</li>
        </ul>
      </div>
      <div  v-if="album">
        <p>专辑</p>
        <ul>
          <li v-for="item in album.itemlist">{{item.name}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        album:[],
        song:[],
        mv:[],
        singer:[],
        searchFocus:true,
        key:""
      }
    },
    created(){
      console.log(1)
      console.log(this.$route.query.key);
      this.$store.dispatch('search',this.$route.query.key).then((res)=>{
              console.log(res);
              this.album = res.body.data.album;
              this.song = res.body.data.song;
              this.mv = res.body.data.mv;
              this.singer = res.body.data.singer;
      },(res)=>{
          
      })
    },
    methods:{
      searchCancel(){
            this.searchFocus = false;
            this.$router.go(-1)
        },
    }
  }
</script>

<style>
  
</style>
