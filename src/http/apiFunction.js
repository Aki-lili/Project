/**
 * api具体调用文件
 *    直接向api中添加方法   使用this.$api.方法名  调用
 */
import ApiBase from './index';
// import Store from '../vuex';
export default {
    /**
     * 登录
     * @param {object} data 登录数据
     * @return {null} 返回数据
     */
    login(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/user/login', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 退出登录
     * @param {object} data 登录数据
     * @return {null} 返回数据
     */
    loginOut(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/user/logout', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        // Store.dispatch('logOut');
                        resolve(res);
                    } else {
                        // Store.dispatch('logOut');
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 获取用户信息
     */
    getUserInfo() {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/user/current')
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 照片上传
     * @param {object} data 上传数据
     */
    uploadPhoto(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .postImg('v1/file/upload/photo/' + data.idNumber, data.file)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 更新证件照片，如果人员证件号码更改，则对应照片的名称应更新为新的证件号码
     * @param {object} data 数据
     */
    updatePhoto(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/file/update/photo', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /* *******************   字典   ******************* */

    /**
     * 获取字典类型
     */
    getDictType() {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/dict/type')
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 获取字典
     * @param {array} data 字典类型list
     */
    getDicts(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/dict/data', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 获取大项分项字典表
     */
    getDiscipline(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/discipline/dict', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 获取代表团字典表
     */
    getDelegationDict() {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/org/dict/delegation')
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 单位字典表 - 青少司、代表团、总局项目中心，用于超期权限控制
     */
    getExpireControlDict() {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/org/dict/expire/control/')
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 获取单位字典表
     * @param {object} data 查询条件
     */
    getOrgDict(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/org/dict', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 获取城市列表
     * @param {object} data 省份id
     */
    getCity(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/dict/city/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 获取小项字典
     */
    getEventDict(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/event/dict/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 获取组别字典
     */
    getCategoryDict(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/category/dict/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /* *******************   运动员信息   ******************* */
    /**
     * 运动员分页列表 - 管理页面
     * @param {object} data 查询条件
     */
    getAthletePageList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/athlete/pagelist', data)
                .then(res => {
                    if (res.status === 'SUCCESS' || res.status === 'NO_DATA') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 新建运动员 - 省/体校/俱乐部用
     * @param {object} data 运动员信息
     */
    addAthlete(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/athlete/add', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 管理员编辑运动员信息（增加/修改）
     * @param {object} data 运动员信息
     */
    editAthleteByAdmin(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/athlete/edit/admin', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 修改运动员信息 - 省/体校/俱乐部用
     * @param {object} data 运动员信息
     */
    editAthlete(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/athlete/modify', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 删除运动员
     * @param {object} data 运动员id
     */
    deleteAthlete(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/athlete/delete/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 运动员详情
     * @param {object} data 运动员id
     */
    getAthleteInfo(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/athlete/info/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 运动员辅助信息
     * @param {object} data 运动员大项
     */
    getAthleteSupplement(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/supplement/info/athlete/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 新增运动员辅助信息
     * @param {object} data 运动员赋值信息
     */
    addAthleteSupplement(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/supplement/info/athlete/save', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 提前比赛运动员分页列表
     * @param {object} data 查询条件
     */
    getEarlyAthletePageList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/athlete/early/pagelist', data)
                .then(res => {
                    if (res.status === 'SUCCESS' || res.status === 'NO_DATA') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 新建提前比赛运动员 -- 省/体校/俱乐部用
     * @param {object} data 运动员信息
     */
    addEarlyAthlete(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/athlete/early/add', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 管理员编辑提前比赛运动员信息（增加/修改）
     * @param {object} data 运动员信息
     */
    editEarlyAthleteByAdmin(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/athlete/early/edit/admin', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /* *******************   报名表报名   ******************* */
    /**
     * 运动员报名表
     * @param {object} data
     */
    getSeqTableAthlete(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/table/athlete/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 可报名的运动员列表
     * @param {object} data
     */
    getSeqTableAthleteCapable(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/table/athlete/capable/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 删除运动员的报名
     * @param {object} data
     */
    seqTableAthleteDelete(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/table/athlete/delete/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     *运动员可报名的小项列表
     * @param {object} data
     */
    getSeqTableAthleteEvent(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/table/athlete/event/capable/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     *运动员报名详情
    * @param {object} data
    */
    getSeqTableAthleteInfo(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/table/athlete/info/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     *增加运动员报名名额
    * @param {object} data
    */
    seqTableAthleteNumAdd(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/table/athlete/num/add/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 运动员报名 - 一个运动员报多个项目
    * @param {object} data
    */
    seqTableAthlete(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/table/athlete/seq/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 小项表格
    * @param {object} data
    */
    seqTableEvent(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/table/event/list/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 队官员报名表
   * @param {object} data
   */
    getSeqTableOfficialTeam(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/table/official/team/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 可报名的官员列表
   * @param {object} data
   */
    getSeqTableOfficialTeamCapable(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/table/official/team/capable/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   *删除队官员报名
   * @param {object} data
   */
    seqTableOfficialTeamDelete(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/table/official/team/delete/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 增加队官员名额
   * @param {object} data
   */
    seqTableOfficialTeamNumAdd(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/table/official/team/num/add/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 队官员报名
   * @param {object} data
   */
    seqTableOfficialTeamSeq(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/table/official/team/seq/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /* *******************   运动员报名   ******************* */
    /**
     * 新建报项
     * @param {object} data
     */
    addAthleteSeq(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/athlete/add/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 获取可报项成员
     */
    getSeqAthleteCapable(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/athlete/capable/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 获取已经报项成员
     */
    getSeqAthleteMemberList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/athlete/member/list', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 删除报项
     */
    deleteSeqAthlete(athleteSeqId, token) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/athlete/delete/' + athleteSeqId, token)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 获取报项成员列表
     */
    getSeqAthletePageList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/athlete/pagelist/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 获取报项成员列表
     */
    getSeqAthleteListAth(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/athlete/pagelist/athlete', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     *
     * @param {string} athleteSeqId  报项id
     * @param {string} token  token
     * 获取报项详情
     */
    getSeqAthleteInfo(athleteSeqId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/athlete/info/' + athleteSeqId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 增加报项成员
     */
    addAthleteMember(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/athlete/member/add/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 删除报项成员
     */
    deleteAthleteMember(athleteSeqMemberId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/athlete/member/delete/' + athleteSeqMemberId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 撤销报项
     */
    revokeAthleteSeq(athleteSeqId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/athlete/revoke/' + athleteSeqId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 提交报项
     */
    submitAthleteSeq(athleteSeqId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/athlete/submit/' + athleteSeqId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 批量提交
     */
    submitBatchAthleteSeq(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/athlete/submit/batch/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 根据单位和小项获取单位已报的队伍列表
     */
    getSeqAthleteTeamList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/athlete/team/list/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 审批报项
     */
    approvehAthleteSeq(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/athlete/approve/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 批量审批报项
     */
    approveBatchAthleteSeq(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/athlete/approve/batch/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 获取运动员报项辅助信息
     */
    getSupplementInfo(athleteseqId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/supplement/info/seq/' + athleteseqId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 运动员报项辅助信息修改
     */
    setSupplementInfo(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/supplement/info/seq/save/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 运动员报项成员辅助信息获取
     */
    getSupplementMemberInfo(seqmemberId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/supplement/info/seqmember/' + seqmemberId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 根据大项获取报项成员辅助信息项
     */
    getSupplementMemberInfoDis(seqmemberId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/supplement/info/seqmember/discipline/' + seqmemberId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 保存运动员报项成员辅助信息（包含新增/修改）
     */
    setSupplementMemberInfo(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/supplement/info/seqmember/save/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /* *******************   子项   ******************* */

    /**
     * 获取子项列表
     * @param {string} event  小项
     */

    getEventItem(event) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/event/item/dict/' + event)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 新建子报项
     * @param {object} data
     */
    addAthleteEventItem(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/athlete/item/add/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 获取子项可报项运动员列表
     * @param {str} athleteSeqItemId
     */
    getItemCapable(athleteSeqItemId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/athlete/item/capable/' + athleteSeqItemId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 删除子报项
     * @param {string} athleteSeqItemId
     */
    deleteItem(athleteSeqItemId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/athlete/item/delete/' + athleteSeqItemId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 获取子报项详情
     * @param {string} athleteSeqItemId
     */
    getItemEventInfo(athleteSeqItemId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/athlete/item/info/' + athleteSeqItemId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 获取子报项列表
     * @param {string} athleteSeqId
     */
    getItemEventList(athleteSeqId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/athlete/item/list/' + athleteSeqId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 增加子报项成员
     * @param {object} data
     */
    addEventItemMember(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/athlete/item/member/add/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 删除子报项成员
     * @param {object} athleteSeqItemMemberId
     */
    deleteEventItemMember(athleteSeqItemMemberId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/athlete/item/member/delete/' + athleteSeqItemMemberId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 已报子项运动员列表
     * @param {string} athleteSeqItemId
     */
    getItemMemberList(athleteSeqItemId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/athlete/item/member/list/' + athleteSeqItemId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 获取子报项辅助信息
     */
    getItemSupplement(athleteSeqItemId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/supplement/info/item/' + athleteSeqItemId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 编辑子报项辅助信息
     */
    setItemSupplement(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/supplement/info/item/save/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 获取子项报项成员辅助信息
     */
    getItemmemberSupplement(seqItemMemberId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/supplement/info/itemmember/' + seqItemMemberId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 修改子项报项成员辅助信息
     */
    setItemmemberSupplement(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/supplement/info/itemmember/save/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /* *******************   单位   ******************* */
    /**
     * 单位分页列表 - 管理页面
     * @param {object} data
     */
    getOrgPageList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/org/pagelist', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 设置单位账号信息
     * @param {object} data
     */
    setOrgAccount(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/org/user', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 新建单位 - 省级用户用
     * @param {object} data
     */
    editOrganByAdmin(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/org/edit/admin', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 单位详情
     * @param {object} data
     */
    getOrgInfo(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/org/info/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 新建单位 - 省级用户用
     * @param {object} data
     */
    addOrgan(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/org/add', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 修改单位信息 - 省级用户用
     * @param {object} data
     */
    modifyOrgan(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/org/modify', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 删除单位信息
     * @param {object} data
     */
    deleteOrgan(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/org/delete/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /* *******************   辅助信息类型   ******************* */

    /**
     * 获取有运动员辅助信息的项目字典列表
     */
    getSupplementTypeAthlete() {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/supplement/type/athlete/')
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 获取有运动员报项辅助信息的项目字典列表
     */
    getSupplementTypeSeq() {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/supplement/type/seq/')
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 获取有运动员子报项辅助信息的项目字典列表
     */
    getSupplementTypeSeqItem() {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/supplement/type/seq/item/')
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 获取有运动员子报项成员辅助信息的项目字典列表
     */
    getSupplementTypeSeqItemMember() {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/supplement/type/seq/item/member/')
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /**
     * 获取有运动员报项成员辅助信息的项目字典列表
     */
    getSupplementTypeSeqMember() {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/supplement/type/seq/member/')
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /* *******************   代表队官员管理   ******************* */
    /**
     * 代表队官员列表
     * @param {object} data 查询信息
     */
    getTeamOfficialPageList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/official/team/pagelist', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 代表队官员详情
     * @param {object} data 代表队官员id
     */
    getTeamOfficialInfo(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/official/team/info/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 添加代表队官员 - 省、体、俱
     * @param {object} data 代表队官员信息
     */
    addTeamOfficial(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/official/team/add', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 删除代表队官员
     * @param {object} data 需要删除的代表队官员id
     */
    deleteTeamOfficial(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/official/team/delete/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 系统管理员维护代表队官员
     * @param {object} data 代表队官员id
     */
    editTeamOfficialByAdmin(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/official/team/edit/admin', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 修改代表队官员 - 省、体、俱
     * @param {object} data 代表队官员信息
     */
    editTeamOfficial(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/official/team/modify', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 提前比赛队官员分页列表
     * @param {object} data 查询信息
     */
    getEarlyTeamOfficialPageList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/official/team/early/pagelist', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 新建提前比赛队官员 - 省、体、俱
     * @param {object} data 代表队官员信息
     */
    addEarlyTeamOfficial(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/official/team/early/add', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 管理员编辑提前比赛队官员信息（增加/修改）
     * @param {object} data 代表队官员id
     */
    editEarlyTeamOfficialByAdmin(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/official/team/early/edit/admin', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /* *******************   代表队官员报名   ******************* */
    /**
     * 队官员报名新建报项
     */
    teamEnterAdd(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/team/add/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 队官员报名审批报项
     */
    teamEnterAppRove(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/team/approve/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 队官员报名批量审批报项
     */
    teamEnterAppRoveBatch(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/team/approve/batch/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 队官员报名可报列表
     */
    teamEnterCapable(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/official/team/capable/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 队官员报名已报列表
     */
    teamEnterMemberList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/official/team/member/list/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 删除队官员报项
     */
    teamEnterDelete(officialSeqId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/team/delete/' + officialSeqId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 报项详情
     */
    teamEnterInfo(officialSeqId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/official/team/info/' + officialSeqId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 增加队官员报项成员
     */
    teamEnterMemberAdd(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/team/member/add/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 删除队官员报项成员
     */
    teamEnterMemberDelete(officialSeqMemberId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/team/member/delete/' + officialSeqMemberId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 队官员报项分页列表
     */
    teamEnterPageList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/official/team/pagelist/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 撤销队官员报项
     */
    teamEnterRevoke(officialSeqId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/team/revoke/' + officialSeqId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 提交队官员报项
     */
    teamEnterSubmit(officialSeqId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/team/submit/' + officialSeqId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 队官员报名批量提交
     */
    teamEnterSubmitBatch(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/team/submit/batch/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /* *******************   代表团官员管理   ******************* */
    /**
     * 代表团官员列表
     * @param {object} data
     */
    getDeletationList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/official/delegation/pagelist', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 新建代表团官员 - 省队
     * @param {object} data
     */
    addDeletation(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/official/delegation/add', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 修改代表团官员 - 省队
     * @param {object} data
     */
    modifyDeletation(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/official/delegation/modify', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     *系统管理员维护代表团官员信息
     * @param {object} data
     */
    editDeletationByAdmin(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/official/delegation/edit/admin', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 代表团官员详情
     * @param {object} data
     */
    getDeletationInfo(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/official/delegation/info/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 删除代表团官员
     * @param {object} data
     */
    deleteDeletation(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/official/delegation/delete/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /* *******************   代表团官员报名   ******************* */
    /**
     * 团官员报名新建报项
     */
    delegationEnterAdd(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/delegation/add', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 团官员报名审批报项
     */
    delegationEnterAppRove(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/delegation/approve/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 团官员报名批量审批报项
     */
    delegationEnterAppRoveBatch(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/delegation/approve/batch/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 团官员报名可报列表
     */
    delegationEnterCapable(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/official/delegation/capable/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 团官员报名已报列表
     */
    delegationEnterMemberList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/official/delegation/member/list/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 删除团官员报项
     */
    delegationEnterDelete(officialSeqId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/delegation/delete/' + officialSeqId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 报项详情
     */
    delegationEnterInfo(officialSeqId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/official/delegation/info/' + officialSeqId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 增加团官员报项成员
     */
    delegationEnterMemberAdd(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/delegation/member/add/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 删除团官员报项成员
     */
    delegationEnterMemberDelete(officialSeqMemberId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/delegation/member/delete/' + officialSeqMemberId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 团官员报项分页列表
     */
    delegationEnterPageList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/official/delegation/pagelist/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 撤销团官员报项
     */
    delegationEnterRevoke(officialSeqId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/delegation/revoke/' + officialSeqId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 提交团官员报项
     */
    delegationEnterSubmit(officialSeqId) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/delegation/submit/' + officialSeqId)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 团官员报名批量提交
     */
    delegationEnterSubmitBatch(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/official/delegation/submit/batch/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /* *******************   报表导出   ******************* */
    /**
   * 运动员制证数据接口
   */
    exporTaccredAthlete(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/export/accreditation/athlete', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 代表团官员制证数据接口
   */
    exporTaccredDelegation(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/export/accreditation/official/delegation', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 运动队官员制证数据接口
   */
    exporTaccredTeam(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/export/accreditation/official/team', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 提前比赛项目运动员制证数据接口
   */
    exporEarlyAthlete(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/export/early/accreditation/athlete', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 提前比赛项目运动队官员制证数据接口
   */
    exporEarlyTeam(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/export/early/accreditation/official/team', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 导出马匹信息列表
   */
    exporHorse(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/export/horse', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 导出马主信息列表
   */
    exporHorseowner(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/export/horseowner', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
    * 按身份证号导出人员照片
    */
    exporPhoto(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/export/photo', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 导出马主信息到制证
   */
    exporTaccredHorseOwner(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/export/accreditation/horseowner', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
    * 运动员报名报项表
    */
    exportSeqAthlete(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/export/seq/athlete', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 代表团官员报名报项表
   */
    exportSeqDelegation(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/export/seq/official/delegation', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 代表队官员报名报项表
   */
    exportSeqTeam(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/export/seq/official/team', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 代表队人员统计表
   */
    exportStatisticsDis(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/export/statistics/delegation/discipline', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 代表团团部人员统计表
   */
    exportStatisticsOfficial(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/export/statistics/delegation/official', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
    * 代表团人员统计表(组委会)
    */
    exportStatisticsPersonAdmin(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/export/statistics/delegation/official/admin', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 代表团人员统计表
   */
    exportStatisticsPerson(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/export/statistics/delegation/person', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 项目人员统计表
   */
    exportStatisticsDisDelegation(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/export/statistics/discipline/delegation', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },

    /* *******************   数据管理   ******************* */
    /**
     * 大项分项分页列表 - 管理页面
     */
    getSportList() {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/sport/dict')
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 大项分项分页列表 - 管理页面
     */
    getdisciplinePagelist(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/discipline/pagelist', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 新建大项分项
     * @param {array} data 字典类型list
     */
    disciplineAdd(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/discipline/add', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 编辑大项分项
     * @param {array} data 字典类型list
     */
    disciplineModify(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/discipline/modify', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 删除大项
     * @param {object} data 运动员id
     */
    disciplineDelete(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/discipline/delete/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 小项分页列表 - 管理页面
     */
    getEventPagelist(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/event/pagelist', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 新建小项分项
     * @param {array} data 字典类型list
     */
    eventAdd(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/event/add', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 编辑小项分项
     * @param {array} data 字典类型list
     */
    eventModify(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/event/modify', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 删除小项
     * @param {object} data 运动员id
     */
    eventDelete(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/event/delete/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 查询报名规则list
     * @param {object} data 查询条件
     */
    getEnterRuleList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/control/list/page', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 新增报名规则
     * @param {object} data 报名规则
     */
    addEnterRule(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/control/add', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 删除报名规则
     * @param {string} data 报名规则id
     */
    deleteEnterRule(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/control/delete/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 查询报名规则详情
     * @param {string} data 报名规则id
     */
    getEnterRuleInfo(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/control/info/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 修改报名规则
     * @param {string} data 报名规则内容
     */
    editEnterRuleInfo(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/control/modify', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 团官员报名表
     * @param {string} data 筛选条件
     */
    getOfficialTableList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/table/official/delegation/list/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 可报名的官员列表
     * @param {string} data 筛选条件
     */
    getOfficialListSeq(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/seq/table/official/delegation/capable', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 增加团官员名额
     * @param {string} data 团官员信息
     */
    addOfficialTable(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/table/official/delegation/add', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 删除团官员名额
     * @param {string} data tableSeqDelete
     */
    deleteOfficialTable(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/table/official/delegation/delete', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
     * 团官员报名
     * @param {string} data
     */
    seqOfficialTable(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/seq/table/official/delegation/seq', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /* *******************   运动员报项成员辅助信息   ******************* */
    /**
        *获取运动员报项成员辅助信息
        * @param {string} data
        */
    getSupplementInfoSeqmember(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/supplement/info/seqmember/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /* *******************   统计   ******************* */
    /**
    *根据单位统计报名数据
    * @param {string} data
    */
    getStatisticsByOrg(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/statistics/by/org/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 团官员报名数量提示信息
   * @param {string} data
   */
    getDelegationSeqNum(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/statistics/official/delegation/seq/num/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }

                })
        })
    },
    /**
    * 队官员报名数量提示信息
    * @param {string} data
    */
    getOfficialSeqNum(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/statistics/official/team/seq/num/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /* *******************   超期提交审批权限控制   ******************* */
    /**
    * 保存超期权限 - 团部官员
    * @param {string} data
    */
    controlExpireDelegation(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/control/expire/delegation/save/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
    * 移除超期权限
    * @param {string} data
    */
    controlExpireDelete(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/control/expire/delete/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
    * 超期权限列表
    * @param {string} data
    */
    getControlExpireList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/control/expire/list/page/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
    * 保存超期权限 - 运动员、代表队官员
    * @param {string} data
    */
    controlExpireTeamAndAth(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/control/expire/team/save/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /* *******************   修改密码   ******************* */
    /**
    * 修改密码
    * @param {string} data
    */
    updatePwd(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/user/password/modify', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /* *******************   马主信息   ******************* */
    /**
    * 根据id删除马主信息
    * @param {string} data
    */
    deleteHorseowner(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/horseowner/delete/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
    * 根据芯片号删除马主信息
    * @param {string} data
    */
    deleteNumberHorseowner(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/horseowner/delete/number/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   * 获取报项成员辅助信息中马匹的信息
   * @param {string} data
   */
    horseInfoSupplementMember(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/horseowner/horse/info/supplement/member/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   *获取报项辅助信息中马匹的信息
   * @param {string} data
   */
    horseInfoSupplement(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/horseowner/horse/info/supplement/seq/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   *根据id获取马主信息详情
   * @param {string} data
   */
    horseInfoById(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/horseowner/info/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   *根据芯片号获取马主信息详情
   * @param {string} data
   */
    horseOwnerInfoByMicrochip(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/horseowner/info/number/' + data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   *获取指定代表团或单位的马匹列表
   * @param {string} data
   */
    horseOwnerListHorse(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/horseowner/list/horse/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   *马主信息列表
   * @param {string} data
   */
    horseOwnerPageList(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .get('v1/horseowner/list/page/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    },
    /**
   *保存马主信息
   * @param {string} data
   */
    horseOwnerSave(data) {
        return new Promise((resolve, reject) => {
            ApiBase
                .post('v1/horseowner/save/', data)
                .then(res => {
                    if (res.status === 'SUCCESS') {
                        resolve(res);
                    } else {
                        reject(res.msg);
                    }
                })
        })
    }
}
