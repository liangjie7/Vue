<template>
    <div class="rank">
        <div class="rank-title">QQ音乐巅峰榜</div>
        <div class="rank-item" v-for="item in ranklist" :key="item.id">
            <div class="rank-img">
                <img v-lazy="item.picUrl"/>
            </div>
            <div class="song-list">
                <p class="song-item" v-for="(i,index) in item.songList"><span>{{index}} {{i.songname}}</span><span class="rank-singername">-{{i.singername}}</span></p>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name:"rank",
    data(){
        return{
            ranklist:[]
        }
    },
    created(){
        this.$store.dispatch("getRankList").then((res)=>{
            this.ranklist = res.body.data.topList;
        },(res)=>{

        })
    }
}
</script>

<style lang="less">
    .rank{
        width:100%;
        margin-top:0.8rem;
        background-color: #f3f0f0;
    }
    .rank-title{
        height: 0.8rem;
        text-align: center;
        line-height: 0.8rem;
        font-size: 0.26rem;
        padding:0 0.1rem;
    }
    .rank-item{
        margin: 0 0.15rem 0.1rem; 
        overflow: hidden;
        display: flex;
        flex-direction: row;
        background-color: #fff;
        .rank-img{
            float:left;
            img{
                width: 2.2rem;
            }
            
        }
        .song-list{
            float:left;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 0.1rem 0.1rem;
            p{
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                overflow: hidden;
                font-size: 0.26rem;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                .rank-singername{
                    color:#bbb;
                }
            }
        }
    }
  
</style>
