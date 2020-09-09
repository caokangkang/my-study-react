import React, {Component} from "react";
import {createForm} from "rc-form";
// import {createForm} from "../components/my-rc-from";
import Input from "../components/Input";

@createForm()
class MyRCForm extends Component {
    constructor (props) {
        super(props);
        /* this.state = {
            username: "",
            passname: ""
        } */
    }
    submit = () => {
        console.log("submit", this.state);
    }
    render () {
        // const {username, password} = this.state;
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <h3>MyRCForm</h3>
                {getFieldDecorator("username")(<Input placeholder="Username"/>)}
                {getFieldDecorator("password")(<Input placeholder="password"/>)}
                {/* <Input placeholder="Username" value={username} onChange={e => this.setState({username: e.target.value})}/>
                <Input placeholder="Password" value={password} onChange={e => this.setState({password: e.target.value})}/> */}
                <button onClick={this.submit}>submit</button>
            </div>
        )
    }
}