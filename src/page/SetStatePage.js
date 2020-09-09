import React, { Component } from 'react';

export default class SetStatePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            counter: 0
        }
    };
    // 组件挂载完后执行
    componentDidMount() {
        // this.changeValue(1)
        document.getElementById("test").addEventListener("click", this.setCounter, false)
    }
    changeValue = v => {
        // setState在合成事件和生命周期中是异步的，这里说的异步其实是批量更新，达到了优化性能的目的
        // this.setState({
        //     counter: this.state.counter + v
        // }, () => {
        //     console.log("counter", this.state.counter);
        // })
        // State的更新会被合并 问题，使用State的函数传值方式
        /* this.setState( (state) => {
            // console.log("state", state)
            return {
                counter: state.counter + v
            }
        }) */ 
        this.setState(state => ({ counter: state.counter + v }));
    };
    setCounter = () => {
        // setState在setTimeout中是同步的
        // setTimeout(() => {
            this.changeValue(1);
            this.changeValue(2);
            this.changeValue(3);
        // }, 0);
    };
    render() {
        return (
            <div>
                <h3>SetStatePage</h3>
                <button onClick={this.setCounter}>{this.state.counter}</button>
                <button id="test">原生事件*{this.state.counter}</button>
            </div>
        );
    }
}