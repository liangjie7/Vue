import Vue from 'vue'
import API from '../config/api'

function apiFactory(api) {
    return (id = null) => Vue.http.jsonp(
        api.url, {
            params: api.params(id),
            jsonp: api.jsonp
        }
    )
}

export default {
    state: {

    },
    actions: {
        //推荐列表
        getRecommand({}) {
            return apiFactory(API.first_page_data)()
        },
        //排行榜
        getRankList({}) {
            return apiFactory(API.rank_list)()
        },
        //热门搜索
        getHotKey({}) {
            return apiFactory(API.hotkey)()
        },
        //搜索
        search({}, key) {
            return apiFactory(API.search)(key)
        },
        getSingerInfo({}, id) {
            return apiFactory(API.singer_info)(id)
        }
    },
    mutations: {

    }
}