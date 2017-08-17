export default {
    rank_songs: {
        url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg',
        params: (id) => {
            return {
                g_tk: 5381,
                uin: 0,
                format: 'json',
                inCharset: 'utf-8',
                outCharset: 'utf-8',
                notice: 0,
                platform: 'h5',
                needNewCode: 1,
                tpl: 3,
                page: 'detail',
                type: 'top',
                topid: id,
                _: new Date().getTime()
            }
        },
        jsonp: 'jsonpCallback'
    },
    first_page_data: { //推荐
        url: "https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg",
        params() {
            return {
                format: 'jsonp',
                tpl: 'v12',
                page: 'other',
                rnd: 0,
                g_tk: new Date().getTime(),
                loginUin: 0,
                hostUin: 0,
                inCharset: 'utf8',
                outCharset: 'GB2312',
                notice: 0,
                platform: 'yqq',
                needNewCode: 0
            }
        },
        jsonp: 'jsonpCallback'
    },
    rank_list: { //排行榜
        url: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',
        params: () => {
            return {
                format: 'jsonp',
                g_tk: 5381,
                uin: 0,
                inCharset: 'utf-8',
                outCharset: 'utf-8',
                notice: 0,
                platform: 'h5',
                needNewCode: 1,
                _: new Date().getTime()
            }
        },
        jsonp: 'jsonpCallback'
    },
    hotkey: { //热搜
        url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',
        params: () => {
            return {
                g_tk: 5381,
                loginUin: 0,
                hostUin: 0,
                format: 'jsonp',
                inCharset: 'utf8',
                outCharset: 'utf-8',
                notice: 0,
                platform: 'yqq',
                needNewCode: 0
            }
        },
        jsonp: 'jsonpCallback'
    },
    search: {
        url: 'https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg',
        params: (key) => {
            return {
                is_xml: 0,
                format: 'jsonp',
                key: key,
                g_tk: 5381,
                loginUin: 0,
                hostUin: 0,
                inCharset: 'utf8',
                outCharset: 'utf-8',
                notice: 0,
                platform: 'yqq',
                needNewCode: 0
            }
        },
        jsonp: 'jsonpCallback'
    },
    singer_info: {
        url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg',
        params: (id) => {
            return {
                order: 'listen',
                begin: 0,
                num: 8,
                singermid: id,
                g_tk: 5381,
                uin: 0,
                format: 'jsonp',
                inCharset: 'utf-8',
                outCharset: 'utf-8',
                notice: 0,
                platform: 'h5page',
                needNewCode: 1,
                from: 'h5',
                _: new Date().getTime()
            }
        },
        jsonp: 'jsonpCallback'
    }
}