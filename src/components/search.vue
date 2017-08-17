<template>
    <div style="height:100%;padding: 0.1rem 0.1rem;">
        <div id="search">
            <div class="search">
                <div class="search-input">
                    <img src="../assets/icon-search.png" />
                    <div class="input-wrap">
                        <input type="text" placeholder="搜索 歌曲/专辑/歌手" v-model="key" @keyup.enter="getResult(key)" />
                    </div>
                </div>
                <div class="search-cancel" :class="{'search-cancel-show':searchFocus}" @click="searchCancel">取消</div>
            </div>
            <div v-if="searchFocus&hotSearch">
                <p class="hot-search-title">热门搜索</p>
                <ul class="hot-search-list">
                    <li v-for="item in hotkey" @click="getResult(item.k)">{{item.k}}</li>
                </ul>
            </div>
        </div>
        <div class="search-result" v-if="!hotSearch">
            <div class="singer-wrapper" v-show="singerShow" @click="getSinger(singer.mid)">
                <img v-lazy="singer.pic" alt="singer" class="singer-img">
                <div class="singer-info">
                    <p>歌手：{{singer.name}}</p>
                    <p><span>单曲：{{songLen}}</span><span style="margin-left:0.2rem;">专辑：{{albumLen}}</span></p>
                </div>
            </div>
            <swiper :options="swiperOption" class="search-swiper">
                <div class="swiper-pagination pagination-result" slot="pagination"></div>
                <swiper-slide v-if="song">
                    <ul class="search-list">
                        <li v-for="item in song.itemlist">{{item.name}}</li>
                    </ul>
                </swiper-slide>
                <swiper-slide v-if="album">
                    <ul class="search-list">
                        <li v-for="item in album.itemlist">{{item.name}}</li>
                    </ul>
                </swiper-slide>
                <swiper-slide v-if="mv">
                    <ul class="search-list">
                        <li v-for="item in mv.itemlist">{{item.name}}</li>
                    </ul>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
    const TAB_NAME = ['单曲', 'MV', '专辑'];
    export default {
        name: 'search',
        data() {
            return {
                key: "",
                searchFocus: true,
                hotkey: [],
                album: [],
                song: [],
                mv: [],
                singer: [],
                hotSearch: true,
                songLen: 0,
                albumLen: 0,
                singerShow: false,
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    paginationBulletRender(swiper, index, className) {
                        return `<span class="` + className + ` swiper-pagination-bullet-custom swiper-pagination-firstpage">` + TAB_NAME[index] + `</span>`
                    },
                }
            }
        },
        methods: {
            searchCancel() {
                this.searchFocus = false;
                this.$router.go(-1)
            },
            getResult(key) {
                this.hotSearch = false;
                var vm = this;
                this.$store.dispatch('search', key).then((res) => {
                    console.log(res);
                    this.album = res.body.data.album;
                    this.song = res.body.data.song;
                    this.mv = res.body.data.mv;
                    if (res.body.data.singer) {
                        this.singer = res.body.data.singer.itemlist[0];
                        vm.songLen = res.body.data.song.count;
                        vm.albumLen = res.body.data.album.count;
                        this.singerShow = true;
                    } else {
                        this.singerShow = false;
                    }
                }, (res) => {})
            },
            getSinger(id){
                // this.$store.dispatch('getSingerInfo',id).then((res)=>{
                //     console.log(res)
                // })
                this.$router.push({path:'singer',query:{mid:id}})
                
            }
        },
        created() {
            this.$store.dispatch('getHotKey').then((res) => {
                this.hotkey = res.body.data.hotkey.splice(0, 10);
            }, (res) => {})
        }
    }
</script>

<style lang="less">
    #search {
        padding: 0.1rem  0.1rem ;
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
        .input-wrap {
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
    .hot-search-title {
        margin-top: 0.2rem;
        color: #ccc;
        font-size: 0.22rem;
    }
    .hot-search-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0.1rem 0;
        li {
            border-radius: 0.3rem;
            border: 1px solid #ddd;
            display: inline-block;
            padding: 0.1rem 0.15rem;
            margin: 0.1rem 0.1rem;
        }
    }
    .search-result {
        // position: relative;
        height: calc(~"100% - 0.9rem");
        
        .swiper-container {
            height: 100%;
        }
        .singer-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            .singer-img {
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
            }
            .singer-info{
                flex:1;
                margin-left:0.2rem;
                p:nth-of-type(1){
                    font-size: 0.3rem;
                }
                
            }
        }
    }
    .pagination-result {
        display: flex;
        justify-content: space-between;
        width: 100%;
        position: absolute;
        top: 0;
        height: 0.8rem;
        background-color: #f5f5f5;
        .swiper-pagination-bullet {
            width: 2rem;
            border-radius: initial;
            background-color: transparent;
            overflow: hidden;
            height: 0.8rem;
            line-height: 0.8rem;
            font-size: 0.26rem;
            position: relative;
            &::after {
                transition: width 3s;
            }
        }
        .swiper-pagination-bullet-active {
            color: #31c27c;
            &::after {
                content: "";
                position: absolute;
                width: 100%;
                left: 0;
                bottom: 0;
                height: 2px;
                background: #31c27c;
                transition: width 3s;
            }
        }
    }
    .search-list {
        margin-top: 0.8rem;
        li {
            height: 0.6rem;
            line-height: 0.6rem;
            text-indent: 0.2rem;
            position: relative; // border-bottom: 1px solid #e2e2e2;
            &::after {
                content: "";
                width: 100%;
                height: 1px;
                background: #e2e2e2;
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }
    }
    html,
    body {
        height: 100%;
    }
</style>
