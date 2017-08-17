<template>
    <div class="singer-page">
        <div class="singer-header">
            <img src="../assets/icon-back.svg" style="widht:0.26rem;height:0.26rem" @click="goBack"/>歌手
        </div>
        <div class="singer-bg">
            <img v-lazy="imgSrc" class="singer-photo" />
        </div>
        <div class="song-container">
            <div class="song-bank">
            </div>
            <div class="song-list">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                singer: [],
                singermid: "",
                imgSrc: ""
            }
        },
        created() {
            this.singermid = this.$route.query.mid;
            this.$store.dispatch("getSingerInfo", this.singermid).then((res) => {
                console.log(res)
                // this.singer = res.body.data.
            })
            this.imgSrc = this.imgurl()
            console.log(this.imgSrc)
        },
        methods: {
            r() {
                return parseInt(this.color.slice(1, 3), 16)
            },
            g() {
                return parseInt(this.color.slice(3, 5), 16)
            },
            b() {
                return parseInt(this.color.slice(5, 7), 16)
            },
            blackGround() {
                return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')'
            },
            imgurl() {
                console.log(this.singermid)
                return 'http://y.gtimg.cn/music/photo_new/T001R300x300M000' + this.singermid + '.jpg?max_age=2592000'
            },
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .singer-header {
        height: .8rem;
        line-height: .8rem;
        font-size: 0.26rem;
        position: fixed;
        top: 0;
        z-index: 2;
        width: 100%;
        background: pink;
        opacity: 0.5;
        display: flex;
        align-items: center;
        
    }
    .singer-bg {
        font-size: 0;
        position: fixed;
        top: 0;
        width: 100%;
    }
    .singer-photo {
        width: 100%;
        height: 6.4rem;
    }
    .song-list {
        background: pink;
        opacity: 0.5;
        height: 10000px
    }
    .song-bank {
        height: 6.4rem;
    }
</style>
