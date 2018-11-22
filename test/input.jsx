import React from 'react';
import {    Form, Icon, Input, Button } from 'antd';

const storage = require('store');

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validateStatus1: '',
            help1: '',
            validateStatus2: '',
            help2: '',
            username: '',
            pasword: '',
        };
    }

    componentWillMount() {
        // console.log(this.props);
        const username = storage.get('username');
        if (username) {
            storage.remove('username');
        }
    }

    componentDidMount() {}

    Login() {
        const { username, pasword } = this.state;
        if (username === '') {
            this.setState({
                validateStatus1: 'error',
                help1: '*请输入您的用户名',
            });
            return;
        }
        if (pasword === ' ') {
            this.setState({
                validateStatus2: 'error',
                help2: '*请输入您的密码',
            });
            return;
        }
        // 联网成功之后
        const { history } = this.props;
        history.push({
            pathname: '/home',
        });
        storage.set('username', username);
    }

    render() {
        const FormItem = Form.Item;
        const {
            help1, help2, validateStatus1, username, validateStatus2, pasword,
        } = this.state;
        return (
            <div>
                <style>
                    {`
                    .formDiv {width: 400px;position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);}
                    .has-error .ant-form-explain,.has-error .ant-form-split {padding-top: 5px;font-size: 12px;}
                   `}
                </style>
                <div className="formDiv">
                    <Form className="login-form">
                        <FormItem>
                            <h2 style={{ textAlign: 'center' }}>WZACC管理系统</h2>
                        </FormItem>
                        <FormItem
                            validateStatus={validateStatus1}
                            help={help1}
                        >
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                value={username}
                                onChange={(e) => {
                                    this.setState({
                                        validateStatus1: '',
                                        help1: '',
                                        username: e.target.value,
                                    });
                                }}
                            />
                        </FormItem>
                        <FormItem
                            validateStatus={validateStatus2}
                            help={help2}
                        >
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                value={pasword}
                                type="password"
                                placeholder="Password"
                                onChange={(e) => {
                                    this.setState({
                                        validateStatus2: '',
                                        help2: '',
                                        pasword: e.target.value,
                                    });
                                }}
                            />
                        </FormItem>
                        <FormItem>
                            <Button type="primary" block onClick={() => { this.Login(); }}>登 录</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}
