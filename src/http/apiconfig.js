/**
 * api配置
 */

import axios from 'axios';
import '../reactconfig/baseurl';
// import store from '../vuex';
// import React from 'react';
// import base64url from 'base64url';

let config = {
    baseURL: global.API_URL,
    // headers: {'Content-Type': 'application/json'}, transformRequest: [function
    // (data) {   return data; }], transformResponse: [function (data) {   return
    // data; }],
    withCredentials: true,
    isRetryRequest: false

};
const returnAxios = axios.create(config);
/**
 * 拦截发送请求  在header中加入token
 */
returnAxios
    .interceptors
    .request
    .use(config => {
        if (config.method == 'post') {
            config.headers.post['Content-Type'] = 'application/json';
        }
        // config.headers.common['Authorization'] = `Bearer ${store.getters.tokenInfo}`;
        return config;
    }, error => Promise.reject(error));
/**
 * 拦截请求返回  在header中加入token
 */
returnAxios
    .interceptors
    .response
    .use(response => {
        let res = JSON.parse(JSON.stringify(response));
        if (res.headers.authorization) {
            // store.dispatch('getTokenInfo', res.headers.authorization); // 设置token
            // store.dispatch('setIsLogin', true); // 设置isLogin = true
            // store.dispatch('loginSuccess', res.data);
        }
        let datas = res.data;
        switch (datas.status) {
            case 'NO_DATA': //无数据
                break
            case 'FAILED': //失败
                break
            case 'EXPIRE': //超过期限
                break
            case 'ACCOUNT_ERROR': //账户不存在或被禁用
                break
            case 'ACCOUNT_OFFLINE': //需要登录
                localStorage.clear();
                // store.dispatch('deleteMsg');
                // Vue.$router.push({ path: '/login' });
                break
            case 'ACCOUNT_REAL_CHECK': //需要实名认证
                break
            case 'ACCOUNT_NEED_INFO': //需要实名认证
                break
            case 'API_DISABLE': //权限不足以访问该方法
                break
            case 'API_NOT_EXISTS': //请求的方法不存在
                break
            case 'API_NEED_VERIFY': //该方法需要验证码
                break
            case 'PARAMS_ERROR': //参数格式错误
                break
            case 'SIGN_ERROR': //数据签名错误
                // TODO  需要更新token
                break
            case 'SIGN_EXPIRE': //数据签名过期
                // TODO  需要更新token
                break
            case 'AMOUNT_NOT_QUERY': //余额不足
                break
            case 'UNKNOWN_IP': //非法IP请求
                break
            case 'NO_SAFE_LOGIN': //不安全的登录操作
                break
            case 'SYSTEM_ERROR': //错误
                if (datas.msg == 'token has been rejected ') {
                    // store.dispatch('deleteMsg');
                    // Vue.$router.push({ path: '/login' });
                    break;
                } else {
                    return response;
                }
            default: return false
        }
        return response;
    }, error => {
        switch (error.response.status) {
            case 404:
                // Vue.$router.push({ path: '/404' });
                break;
            default: return false
        }
        return Promise.reject("1", error);
    });
export default returnAxios;
