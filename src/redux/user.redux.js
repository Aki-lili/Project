import axios from 'axios'
import { bindActionCreators } from 'redux';
const initState = {
    isLogin: false,
    tokenInfo: null,
    userInfo: null,
    roleType: null,
    dict: {},
    dictAll: {},
    cache: {}, // 存放部分未列入字典中的信息 -- 大项，代表团，单位...
    isSystemAdmin: false, // 超级管理 1
    isAdmin: false, // 青少司 2 负责团官员审批
    isSportAdmin: false, // 项目中心 3  负责队官员审批 / 负责运动员审批
    isProvince: false, // 省队 4 负责队官员 创建和提交 / 负责团官员 创建和提交
    isClubAdmin: false, // 体校俱乐部 5 负责队官员 / 负责运动员 创建 没有提交权限
    isAdminCheck: false // 竞赛部
}
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
function loginSuccess(obj) {
    const { pwd, ...data } = obj
    return { type: LOGIN_SUCCESS, payload: data }
}
function errorMsg(msg) {
    console.log(msg)
    return { msg, type: ERROR_MSG }
}
export function userInfo(state = initState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isLogin: true, ...action.payload }
        case ERROR_MSG:
            return { ...state, isLogin: false, msg: action.msg }
        default:
            return state
    }
}
export function login({ userName, userKey, verifyCode }) {
    if (!userName || !userKey) {
        return errorMsg('用户密码必须输入!')
    }
    return dispatch => {
        global.$api.login({ userName, userKey, verifyCode }).then(res => {
            if (res.status === 'SUCCESS') {
                dispatch(loginSuccess(res.data))
            } else {
                dispatch(errorMsg(res.msg))
            }
        }, error => {
            dispatch(errorMsg(error))
        })
    }
}


export const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ loginSuccess, errorMsg }, dispatch)
})