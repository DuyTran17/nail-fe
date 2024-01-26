import React, { useState, useEffect } from "react";
import HomeNavComponent from "../HomeNav/HomeNavComponent";
import FooterComponent from "../Footer/FooterComponent";
import ReactPaginate from 'react-paginate';
import { Menu, message, Pagination, Button } from 'antd';
import './Shop.scss'
import { useSelector, useDispatch } from "react-redux";
import { CartSelector, listProductSelector } from "../../redux/selector";
import { IncreaseCart, addCart } from "../../redux/action";
const Shop = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const dispactch = useDispatch()
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    const listProduct = useSelector(listProductSelector);
    const [data, setData] = useState([])
    const totalpage = Math.floor(listProduct.length, 3)
    const updatedata = (index) => {
        setData([])
        for (let i = (index - 1) * 3; i < index * 3; i++) {
            if (typeof listProduct[i] !== 'undefined')
            setData(e => [...e, listProduct[i]])
        }
    }
    useEffect(() => {
        updatedata(1)
    }, []);
    const carts = useSelector(CartSelector);
    const handleAddCart = (data) => {
        messageApi.open({
            type: 'success',
            content: 'Thêm sản phẩm thành công',
        });
        const isExits = { status: false, index: 0, }
        for (let i = 0; i < carts.length; i++) {
            if (carts[i].product_id === data.id) {
                isExits.status = true
                isExits.index = i
                break;
            }
        }
        isExits.status ?
            dispactch(IncreaseCart(isExits.index))
            :
            dispactch(addCart(
                {
                    product_id: data.id,
                    productname: data.productName,
                    quanity: 1,
                    images: data.productImages,
                    unit_price: data.price,
                    totalprice: data.price
                }
            ))

    }
    const handlpagination = (page) => {
        updatedata(page)
    }
    return (

        <>
            {contextHolder}
            <header>
                <HomeNavComponent
                />
            </header>
            <div >
                <div className="shop-container">
                    <div className="sidebar">
                    </div>
                    <div className="shop-content">
                        <div className="shop-title">
                            <h1>Shop</h1>

                        </div>
                        <div className="shop-item">
                            <div className="shop-item-content">
                                {
                                    data.map((x, index) =>
                                        <div key={index} className="shop-item-child">
                                            <div className="shopitem-img">
                                                <img src={`${process.env.REACT_APP_API_KEY}/static/images/${x.productImages}`} alt={x.productName} />
                                            </div>
                                            <div className="shopitem-info">
                                                <p>{x.productName}</p>
                                                <p>{x.price.toLocaleString()} VND</p>
                                                <Button type="primary" onClick={e => handleAddCart(x)} >
                                                    Add to cart
                                                </Button>
                                            </div>
                                        </div>
                                    )
                                }
                                <Pagination defaultCurrent={1} total={listProduct.length} pageSize={3} onChange={handlpagination} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <FooterComponent />
            </footer>
        </>
    )
}

export default Shop;