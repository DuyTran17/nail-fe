import React, { useState, useEffect } from "react";
import dayjs from 'dayjs';
import 'boxicons'
import PhoneInput from 'react-phone-number-input/input'
import './HomeNavComponent.scss';
import { useDispatch ,useSelector} from 'react-redux'
import {ShoppingCartOutlined } from '@ant-design/icons'
import {
    Button as Btn_antd,
    Form,
    Input,
    TimePicker,
    Select,
    DatePicker
} from 'antd';
import { Link} from "react-router-dom";
import { Flex } from "antd";
import { CartSelector, listBookingSelector } from "../../redux/selector";
import { addBooking } from "../../redux/action";
import {addBooking as addNewBooking} from '../../service/bookingService'
function HomeNavComponent(props) {
    const dispactch = useDispatch();
    const dataCart = useSelector(CartSelector)
    const disabledDate = (current) => {
        return current && current < dayjs().endOf('day');
    };
    const hours = []
    const disabledTime = (props) => {

        for (let i = 0; i <= 23; i++) {
            if (i < 8 || i > 20)
                hours.push(i)
        }
        return {disabledHours: () => hours}
    }
    const [clicked, setClicked] = useState('booking-popup');
    const [isProp, setIsProp] = useState();
    useEffect(() => {
        if (props.isclick)
            setClicked(props.isclick)
    });
    const onClickSendButton = (values) => {
        const booking={
            name: values.name,
            phone: values.phone,
            service: values.service,
            date: `${values.date.$D}/${values.date.$M+1}/${values.date.$y}`,
            time:`${values.time.$H}:${values.time.$m}`
        }
        console.log(booking)
        addNewBooking(booking)
        onChangehandlebooking()
        form.resetFields();
    }
    const allowNumber = (e) => {

        for (let i; i < 10; i++) {
            if (e.key) {
                console.log(i)
            }
            else
                console.log(i)
        }
    }
    const { Option } = Select;
    const [form] = Form.useForm();
    const format = 'HH:mm';
    const onChangehandlebooking = () => {
        if (props.isclick)
            props.handleClickPopUp()
        else {
            if (clicked === 'booking-popup is-invisible')
                setClicked('booking-popup ')
            else
                setClicked('booking-popup is-invisible')
        }

    }


    return (
        <header>
            <div className={clicked} >
                <div className="booking-content" >
                    <h1>Booking Appointment</h1>
                    <Form onFinish={onClickSendButton} form={form} layout="vertical" autoComplete="off">
                        <Form.Item
                            name="name"
                            label="Your Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <Input
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <PhoneInput
                                country="VN"
                                style={{
                                    width: '100%',
                                    height: '25px',
                                    border: '1px solid #d9d9d9',
                                    borderradius: '6px',
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="service"
                            label="Service"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select service!',
                                },
                            ]}
                        >
                            <Select placeholder="select your service">
                                <Option value="sv1">Sơn mắt mèo</Option>
                                <Option value="sv2">Sơn tráng gương</Option>
                                <Option value="sv3">Đắp bột</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="date"
                            label="Date "
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select Date!',
                                },
                            ]}
                        >
                            <DatePicker
                                disabledDate={disabledDate}
                                style={{
                                    width: '100%',
                                }} />
                        </Form.Item>
                        <Form.Item
                            name="time"
                            label="Time "
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select Time!',
                                },
                            ]}
                        >
                            <TimePicker
                                disabledTime={disabledTime}
                                minuteStep={15}
                                format={format}
                                style={{
                                    width: '100%',
                                }} />
                        </Form.Item>
                        <Btn_antd className="btn-antd" htmlType="submit" >Gửi</Btn_antd>
                        <Btn_antd onClick={() => onChangehandlebooking()} >X</Btn_antd>
                    </Form>

                </div>


            </div>
            <nav className="navbar-container">
                <div className="navbar-contact">
                    <div className="navbar-contact-link">
                        <a href='https://www.tiktok.com/@shb.dtus'><box-icon type='logo' name='tiktok'></box-icon></a>
                        <a href='https://www.facebook.com/hcy.shb'><box-icon type='logo' name='facebook'></box-icon></a>
                        <a href='https://www.instagram.com/shb.agt11/'><box-icon type='logo' name='instagram'></box-icon></a>
                    </div>
                    <div className="navbar-contact-name">
                        <Link to="/" ><h1>MBT nails</h1></Link>
                    </div>
                    <div className="navbar-login-link">
                        <Link to="/login" ><h1>Login</h1></Link>
                        <Link to="/cart" ><h1><ShoppingCartOutlined />({dataCart.length})</h1></Link>
                    </div>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-content-child">
                    <Link to="/service" >Service Menu</Link>
                    </div>
                    <div className="navbar-content-child">
                        <a href='#' onClick={() => onChangehandlebooking()}>Book Appointment</a>
                    </div>
                    <div className="navbar-content-child">
                        <Link to="/shop" >Looking my nail</Link>
                    </div>
                    <div className="navbar-content-child">
                        <Link to="/about" >About Us</Link>
                    </div>
                    <div className="navbar-content-child">
                        <a href='#'>Contact Us</a>
                    </div>
                </div>
            </nav>
            <div className="wrapper-container">
                <div className="wrapper-home-title">
                    <h1>MBT Art Nail</h1>
                </div>
                <Flex gap="middle" wrap="wrap" justify="center" align="center" className="wrapper-home-button-container">
                    <button className="wrapper-home-button-active" onClick={() => onChangehandlebooking()}>Book Appointment</button>
                    <button className="wrapper-home-button"        >View Service Menu</button>
                </Flex>
                <div>

                </div>
            </div>
        </header >
    )
}
export default HomeNavComponent;