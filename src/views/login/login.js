import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'
@connect(
    state => state.userInfo,
    { login }
)
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loginForm: {
                userName: "", //用户名
                userKey: "", //密码
                verifyCode: "" //验证码
            },
            veriImgSrc: ""
        }
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.getVerify = this.getVerify.bind(this)
    }
    componentDidMount() {
        this.getVerify()
        
    }
    // 获取验证码
    getVerify() {
        this.setState({
            veriImgSrc: global.API_URL + "v1/common/verify/image?" + Math.random()
        })
    }
    // 注册
    register() {
        this.props.history.push('/register')
    }
    handleChange(key, val) {
        this.setState({
            loginForm: { ...this.state.loginForm, [key]: val }
        });
    }
    handleLogin() {
        this.props.login(this.state.loginForm)
    }
    render() {
        return (
            <div>
                <WingBlank>
                    <List>
                        {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
                        <InputItem onChange={v => this.handleChange('userName', v)}>用户</InputItem>
                        <WhiteSpace />
                        <InputItem onChange={v => this.handleChange('userKey', v)} type='password'>密码</InputItem>
                        <InputItem onChange={v => this.handleChange('verifyCode', v)}>验证码</InputItem>
                        <img src={this.state.veriImgSrc} alt="" />
                        <Button onClick={this.getVerify} inline>验证码</Button>
                    </List>
                    <WhiteSpace />
                    <Button onClick={this.handleLogin} type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}
export default Login