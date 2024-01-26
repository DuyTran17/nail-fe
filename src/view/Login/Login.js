import { React, useState } from 'react'
import HomeNavComponent from '../HomeNav/HomeNavComponent';
import FooterComponent from '../Footer/FooterComponent';
import { Button, Checkbox, Form, Input, message as ms_antd } from 'antd';
import { Redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../redux/action';
import './Login.scss'
import { listuserSelector, userSelector } from '../../redux/selector';
import {userLogin as loginService} from '../../service/loginService'
import axios from 'axios'

const Login = () => {
    const [messageApi, contextHolder] = ms_antd.useMessage();
    const dispactch = useDispatch();
    const navigate = useNavigate();
    const listuser = useSelector(listuserSelector);
    const user = useSelector(userSelector);
    const onFinish = async (values) => {
        let recived = await loginService(values.username, values.password)
        if (recived.data.message) {
            messageApi.open({
                type: 'error',
                content: recived.data.message,
              });
        } else {
            dispactch(userLogin(
                recived.data
            ))
            navigate("/dashboard")
        }


    };
    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo)
        messageApi.open({
            type: 'error',
            content: 'Nhap sai mat khau hoac username',
          });
    };
    return (
        <>
            {contextHolder}
            <HomeNavComponent />
            <div className='login-container'>
                <div className='title'>
                    Login
                </div>
                <div className='font-login'>
                    <Form
                        name="loginForm"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input placeholder="duyway" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password placeholder="123" />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}

                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}

export default Login;