import React, { Component } from 'react'
import Son from './son.js'
export default class Father extends Component {
    state={
        names:"我是父组件传给组件的数据"
    }
    render() {
        return (
            <div>
                我是父组件的内容
                {
                    <Son send={this.state.names} SonSend={(data)=>{console.log(data);}}></Son>
                }
            </div>
        )
    }
}
