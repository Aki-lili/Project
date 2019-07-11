// 1个reducer
/*
import { createStore, combineReducers, applyMiddleware } from 'redux'

var simpleReducer = function(state = {}, action) {
  return {
    user: {
      name: 'redux'
    }
  }
}
var store = createStore(simpleReducer)
console.log(store.getState())
*/

// 创建多个reducer
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
function user(state = { name: 'redux' }, action) {
    switch (action.type) {
        case 'CHANGE_USER_NAME':
            return {
                ...state,
                name: action.name
            }
        default: return state
    }
}
function project(state = { name: 'min-react' }, action) {
    switch (action.type) {
        case 'CHANGE_PROJECT_NAME':
            return {
                ...state,
                name: action.name
            }
        default: return state
    }
}
var rootReducer = combineReducers({
    user,
    project
})
//store部分做如下修改
const finalCreateStore = compose(applyMiddleware(thunk))(createStore)
const store = finalCreateStore(rootReducer, {})
// var store = createStore(rootReducer)
function render(state = store.getState()) {
    var UserName = document.getElementById('userName')
    UserName.innerHTML = state.user.name
}
store.subscribe(function () {
    render()
})

// 绑定用户事件
var UserNameInput = document.getElementById('userNameInput')
var UserNameButton = document.getElementById('userNameButton')
UserNameButton.onclick = function () {
    var value = UserNameInput.value;
    store.dispatch(function (dispatch, getState) {
        setTimeout(() => {
            dispatch({
                type: "CHANGE_USER_NAME",
                name: value
            })
        }, 1000)
    })

}
console.log(store.getState())