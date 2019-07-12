/**
 * 文件功能： 使用axios调取api
 */
import 'babel-polyfill';
import axios from './apiconfig';
import apifunction from './apiFunction';

const api = {
    axios,
    get: (url, data) => {
        var urls = url;
        if (data) {
            urls = url.indexOf('?') == -1
                ? url + '?'
                : url + '&';
            var datas = '';
            if (data) {
                for (var i in data) {
                    // if (!(data[i] === '')) {
                    datas = datas + '&' + i + '=' + encodeURI(data[i]);
                    // }
                }
            }
            datas = datas.substring(1);
            urls = urls + datas;
        }
        return new Promise(function (resolve, reject) {
            axios({
                method: 'get',
                url: urls
            }).then(response => {
                resolve(response.data);
            })
                .catch(error => {
                    reject(error);
                });
        });
    },
    post: function (url, param) {
        return new Promise(function (resolve, reject) {
            axios({
                method: 'post',
                url: url,
                data: param
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    },
    postImg: function (url, param) {
        return new Promise(function (resolve, reject) {
            axios({
                method: 'post',
                url: url,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: param
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    },
    put: function (url, data) {
        return new Promise(function (resolve, reject) {
            axios
                .put(url, data)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    delete: function (url, data) {
        return new Promise(function (resolve, reject) {
            axios
                .delete(url, data)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    // 同时发送多个请求 getList:[{url:'',data:''}]  postList: [{url:'',data: ''}]
    getAllRequest: function (getList, postList) {
        let _me = this;
        return new Promise(function (resolve, reject) {
            let _getRequest = [];
            let _postRequest = [];
            if (getList && getList.length > 0) {
                _getRequest = getList.map(function (item, i) {
                    return _me.get(item.url, item.data);
                });
            }
            if (postList && postList.length > 0) {
                _postRequest = postList.map(function (item, i) {
                    return _me.post(item.url, item.data);
                });
            }
            this.axios.all(_getRequest, _postRequest).then(this.axios.spread(function (acct, perms) {
                resolve(arguments);
            }), error => {
                reject(error);
            });
        });
    }
};
Object.assign(api, apifunction);
global.$api = api;
export default api;
