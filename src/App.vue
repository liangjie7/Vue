<template>
  <div id="app">
    <!-- <keep-alive> -->
      <router-view>
      </router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  import recommand from './components/recommand'
  import rank from './components/rank'
  import search from './components/search'
  const TAB_NAME = ['推荐', '排行榜'];
  export default {
    name: 'app',
    data() {
      return {
        searchFlag: false,
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          paginationBulletRender(swiper, index, className) {
            return `<span class="` + className + ` swiper-pagination-bullet-custom swiper-pagination-firstpage">` + TAB_NAME[index] + `</span>`
          },
        }
      };
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      searchshow(flag) {
        this.searchFlag = flag
      }
    },
    components: {
      recommand,
      rank,
      search,
      swiper,
      swiperSlide
    },
    created(){
      console.log(1)
    }
  }
</script>

<style lang="less">
  img[lazy=loaded] {
    animation: fade 0.5s;
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  * {
    padding: 0;
    margin: 0;
  }
  body {
    width: 6.4rem;
    ;
    margin: 0 auto;
    background: #fff;
  }
  html {
    background: #efefef;
  }
  ul,
  li {
    list-style: none;
  }
  #app {
    height: 100%;
  }
  #search {
    padding: 0.1rem 0.1rem;
  }
  .search-input {
    display: flex;
    justify-content: space-between;
    background-color: #eee;
    border-radius: 5px;
    flex: 1;
    img {
      width: 0.5rem;
      height: 0.5rem;
      padding: 0.1rem;
    }
    form {
      flex: 1;
      input {
        width: 100%;
        height: 100%;
        outline: none;
        background-color: transparent;
        border: none;
        font-size: 0.24rem;
      }
    }
  }
  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .search-cancel {
    font-size: 0.28rem;
    margin-left: 0.1rem;
    width: 0;
    overflow: hidden;
    transition: width 0.3s;
    height: 0.7rem;
    line-height: 0.7rem;
    cursor: pointer;
  }
  .search-cancel-show {
    width: 0.7rem;
  }
</style>
