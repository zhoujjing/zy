import React, { Component } from 'react'
import '../page/son.css'
export default class Son extends Component {
    render() {
        return (
            <div>
                子组件内容
                {
                    this.props.send
                }
                <hr></hr>
                <div onClick={() => { this.props.SonSend('我是子组件传给父组件的数据') }}>点击发送数据到父组件</div>
            </div>
        )
    }
}
