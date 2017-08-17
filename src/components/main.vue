<template>
    <div>
        <div id="search">  
            <div class="search">
                <div class="search-input">
                    <img src="../assets/icon-search.png"/>
                    <form>
                        <input type="text" placeholder="搜索 歌曲/专辑/歌手"  @focus="focus"/>
                    </form>
                </div>
            </div>   
        </div>
        <div style="clear:both;"></div>
        <div class="swiper-content" v-show="!searchFlag" ref="swiper-content">
            <swiper :options="swiperOption" >
                <swiper-slide>
                    <recommand></recommand>
                </swiper-slide>
                <swiper-slide>
                    <rank></rank>
                </swiper-slide>
                <div class="swiper-pagination pagination1" slot="pagination" ></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import recommand from './recommand'
    import rank from './rank'
    import search from './search'
    const TAB_NAME = ['推荐', '排行榜'];

    export default {
        name: 'main',
        data() {
        return {
            searchFlag:false,
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                paginationBulletRender(swiper, index, className) {
                return `<span class="`+className+` swiper-pagination-bullet-custom swiper-pagination-firstpage">`+TAB_NAME[index]+`</span>`
                },
            }
        };
        },
        computed:{
            user(){
                return this.$store.state.user
            }
        },
        methods:{
            searchshow(flag){
                this.searchFlag = flag
            },
            focus(){
                this.$router.push({path: '/main/search',params:{'searchFocus':true}});

            },
        },
        components:{
            recommand,
            rank,
            search,
            swiper, 
            swiperSlide
        }
    }
</script>

<style lang="less">
    .pagination1{
        top: 0;
        height: 0.8rem;
        display: flex;
        justify-content: space-around;
        .swiper-pagination-bullet-custom{
        width: 50%;
        border-radius: initial;
        background: #fff;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.3rem;
        }
    }
    .swiper-slide{height:10px}    
    .swiper-slide-active { height:auto}
  
  
</style>
