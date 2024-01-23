import { React, useState, useEffect } from "react";
import HomeNavComponent from "../HomeNav/HomeNavComponent";
import FooterComponent from "../Footer/FooterComponent";
import { useSelector, useDispatch } from "react-redux";
import PhoneInput from 'react-phone-number-input/input'
import { CartSelector, OrderSelector } from "../../redux/selector";
import './CartCheckOut.scss'
import {
    Button as Btn_antd,
    Form,
    Input,
    message,
    Select
} from 'antd';
import { addOrder ,addOrderDetail} from "../../service/orderService";
import { AddOrder, ResetCart } from "../../redux/action";
import { v4 as uuidv4 } from 'uuid';
const CartCheckOut = () => {
    const carts = useSelector(CartSelector)
    const [messageApi, contextHolder] = message.useMessage();
    const order = useSelector(OrderSelector)
    const dispactch = useDispatch()
    const [thiscart, setThiscart] = []
    const [total, setTotal] = useState(0)
    const onClickSendButton =  async (e) => {
        if (carts.length < 1) {
            messageApi.open({
                type: 'error',
                content: 'Gio hang dang trong',
            });
        } else {
            
            let order = {
                        order_id: uuidv4(),
                        guest_name: e.name,
                        address: e.address,
                        phone: e.phone,
                        payment: e.payment,
                        total:total,
            }

            console.log(total)
            await addOrder(order)
            await carts.map(e => addOrderDetail(order,e))
            dispactch(ResetCart())
            order ={}
            messageApi.open({
                type: 'success',
                content: 'Dat hang thanh cong',
            });
        }
    }

    useEffect(() => {
        let n = 0
        for (let i = 0; i < carts.length; i++) {
            n = n + carts[i].totalprice
        }
        setTotal(n)
    });
    const { Option } = Select;
    const [form] = Form.useForm();
    return (
        <>
            {contextHolder}
            <HomeNavComponent />
            <div className="container">
                <div className="form-container">
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
                            name="address"
                            label="Your address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your address!',
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
                            name="payment"
                            label="Payment Method"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select payment method!',
                                },
                            ]}
                        >
                            <Select placeholder="select your payment method">
                                <Option value="card">Ngan hang</Option>
                                <Option value="cash">Tien mat</Option>
                            </Select>
                        </Form.Item>
                        <Btn_antd className="btn-antd" htmlType="submit" >Gửi</Btn_antd>
                    </Form>
                </div>
                <div className="checkout-submit-container">
                    <div className="checkout-submit-table">
                        <div className="left">
                            Total:
                        </div>
                        <div className="right">
                            {total.toLocaleString()} VND
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}
export default CartCheckOut;