import React, { useEffect, useReducer, useState } from "react";
import HomeNavComponent from "../HomeNav/HomeNavComponent";
import FooterComponent from "../Footer/FooterComponent";
import { Link} from 'react-router-dom'
import { Table, Popconfirm } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { CartSelector } from "../../redux/selector";
import './Cart.scss'
import { IncreaseCart, DecreaseCart, ChangeQuanityCart, DeleteCart } from "../../redux/action";
const Cart = () => {
    const dispactch = useDispatch();
    const data = useSelector(CartSelector)
    const [Total, setTotal] = useState(0);
    useEffect(() => {
        let n = 0
        for (let i = 0; i < data.length; i++) {
            n = n + data[i].totalprice
        }
        setTotal(n)
    });
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);
    const handleChange = (record, e) => {
        if (e.target.value < 1)// Không cho quanity bằng 0
        {
            let n = 0
            for (let i = 0; i < data.length; i++) {
                if (data[i].product_id === record.product_id) {
                    n = i
                    break;
                }
            }

            dispactch(ChangeQuanityCart(
                {
                    index: n,
                    quanity: 1
                }
            ))
            forceUpdate()
        } else {
            let n = 0
            for (let i = 0; i < data.length; i++) {
                if (data[i].product_id === record.product_id) {
                    n = i
                    break;
                }
            }

            dispactch(ChangeQuanityCart(
                {
                    index: n,
                    quanity: e.target.value
                }
            ))
            forceUpdate()
        }

    }
    const HandleIncrease = (record) => {
        let index = 0
        for (let i = 0; i < data.length; i++) {
            if (data[i].product_id === record.product_id) {
                index = i
                break;
            }
        }
        dispactch(IncreaseCart(index))
        forceUpdate()
    }
    const handleDelete = (record) => {
        let index = 0
        for (let i = 0; i < data.length; i++) {
            if (data[i].product_id === record.product_id) {
                index = i
                break;
            }
        }
        dispactch(DeleteCart(index))
        forceUpdate()
    }
    const handleDecrease = (record) => {
        let index = 0
        for (let i = 0; i < data.length; i++) {
            if (data[i].product_id === record.product_id) {
                index = i
                break;
            }
        }
        dispactch(DecreaseCart(index))
        forceUpdate()
    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'productname',
            key: 'name',
        },
        {
            title: 'Images',
            render: (_, record) =>
                <img src={`http://localhost:1711/static/images/${record.images}`} alt="" />
        },
        {
            title: 'Unit price',
            render: (_, record) =>
                <>
                    {record.unit_price.toLocaleString()} VND
                </>
        },
        {
            title: 'Quanity',
            render: (_, record) =>
                <>
                    <button className="button-quanity" onClick={x => handleDecrease(record)}>-</button>
                    <input className="input-quanity" value={record.quanity} onChange={x => handleChange(record, x)} />
                    <button className="button-quanity" onClick={x => HandleIncrease(record)}>+</button>
                </>
        },
        {
            title: 'Total price',
            render: (_, record) =>
                <>
                    {record.totalprice.toLocaleString()} VND

                </>
        },
        {
            title: 'Delete',
            render: (_, record) =>
                data.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record)}>
                        <button>Delete</button>
                    </Popconfirm>
                ) : null,

        },
    ];
    return (
        <>
            <HomeNavComponent />
            <div className="container">
                <div className="cart-table">
                    <Table
                        dataSource={data}
                        columns={columns}
                        pagination={false}
                        rowKey={record => record.product_id}
                        className="table-product-cart"
                        size="small"
                        
                    />
                </div>
                <div className="cart-checkout">
                    <div className="list-product-checkout">
                        <div className="product-checkout-list">
                            <div className="list-product-checkout-name">
                                Product name
                            </div>
                            <div className="list-product-checkout-price">
                                Total
                            </div>
                        </div>
                        {data.map((x, index) =>
                            <div key={index} className="product-checkout-list">
                                <div className="list-product-checkout-name">
                                    {x.productname}
                                </div>
                                <div className="list-product-checkout-price">
                                    {x.totalprice.toLocaleString()} VND
                                </div>
                            </div>
                        )}
                        <div className="list-product-checkout--total">
                            <div className="list-product-checkout--total-title">
                                Total
                            </div>
                            <div><h1>{Total.toLocaleString()} VND</h1></div>
                        </div>
                    </div>
                    <div className="Cart-checkout-button">
                        <Link to='/CartCheckOut' >Checkout</Link>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}
export default Cart