// import axios from 'axios'
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
export function userInfo(state = initState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, ...action.payload }
        default:
            return state
    }
}