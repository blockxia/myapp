import React, {Component} from 'react'
import {Button,Toast} from 'antd-mobile'

export default class App extends Component {
    handleClick=()=>{
        Toast.success('哈哈哈')
    }
    render() {
        return (
            <Button type='primary' onClick={this.handleClick}>测试按钮antd mobile</Button>
        )
    }
}