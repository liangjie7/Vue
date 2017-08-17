<template>
  <div class="recommand">
    <div class="top-list" v-if="loading">
        <swiper :options="swiperOption">
            <swiper-slide v-for="slide in slider" :key="slide.id" class="swiper-position">
                <img v-lazy="slide.pic" class="recommand-swiper-img"/>
            </swiper-slide>
            <div class="swiper-pagination-white swiper-pagination-position recommand-pagination-1" slot="pagination"></div>
         </swiper>
    </div>
    <div class="hot-list">
        <div class="title-text">热门歌单</div>
        <div class="list-content">
            <div class="list-item" v-for="item in hotdiss">
                <div class="list-img">
                    <img v-lazy="item.imgurl"/>
                     <div class="listen-count">
                        <p>{{item.listennum | listenCount}}<p/>
                    </div> 

                </div>
                <div class="list-info">
                    <p class="">{{item.dissname}}</p>
                    <p>{{item.author}}</p>
                </div>

            </div>

        </div>
    </div>
    
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:'recommand',
    data(){
        return{
            loading:false,
            hotdiss:[],
            toplist:[],
            slider:[],
            swiperOption:{
                autoplay: 3000,
                pagination: '.swiper-pagination-white',
                paginationClickable: true,
            }
        }
    },
    created(){
        this.$store.dispatch('getRecommand').then((res)=>{
            // console.log(res.body.data);
            this.hotdiss = res.body.data.hotdiss.list.splice(0,6);
            this.slider = res.body.data.focus;
            this.loading = true;
        },(res)=>{

        })
    },
    components:{
        swiper,
        swiperSlide
    },
    filters: {
      listenCount: num => Math.round(num / 1000) / 10 + '万'
    }
}
</script>

<style lang="less" scoped>
    .recommand{
        width:100%;
        margin-top:0.8rem;
    }
    .hot-list{
        .title-text{
            padding:0.1rem  0;
            text-align: center;
            font-size: 0.26rem;
        }
    }
    .list-content{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        -webkit-justify-content:space-between;
        
        .list-item{
            width:32.5%;
            padding: 0.1rem 0;
           cursor: pointer;
        }
        .list-img{
            position: relative;
            img{
                width:100%;
            }
            .listen-count{
                position: absolute;
                bottom: 0;
                color: #fff;
                padding: 0.05rem;
            }
        }
        .list-info{
            font-size:0.12rem;
            p{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
    .swiper-position{
        position: relative;
        .recommand-swiper-img{
            width:100%;
            display: block;
            height: 2rem;
        }
    }

    .swiper-pagination-position{
        position: absolute;
        z-index: 1;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    
    
</style>
