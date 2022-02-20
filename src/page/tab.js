import React, { Component } from 'react'

export default class Tab extends Component {
    state = {
        arr: [
            {
                tit: "标题一",
                con: "内容11111111111111111"
            },
            {
                tit: "标题二",
                con: "内容2222222222222222"
            },
            {
                tit: "标题一",
                con: "内容3333333333333333333"
            }
        ],
        index: 0
    }
    changeIndex(ind) {
        this.setState({
            index: ind
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.arr.map((item, index) => {
                        return <span key={index} style={{ marginLeft: "20px" }} onClick={this.changeIndex.bind(this,index)} className={index==this.state.index?"active":""}>{item.tit}</span>
                    })
                }
                {
                    <div>{this.state.arr[this.state.index].con}</div>
                }
            </div>
        )
    }
}
