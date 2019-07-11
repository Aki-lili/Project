import React from 'react'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: ''
        }
        this.register = this.register.bind(this)
    }
    register() {
        this.props.history.push('/register')
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }
    render() {
        return (
            <div>
                注册时
            </div>
        )
    }
}
export default Register