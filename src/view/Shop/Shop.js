import React, { useState } from "react";
import HomeNavComponent from "../HomeNav/HomeNavComponent";
import FooterComponent from "../Footer/FooterComponent";
import ReactPaginate from 'react-paginate';
import { Menu, message } from 'antd';
import './Shop.scss'
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { CartSelector, listProductSelector } from "../../redux/selector";
import { IncreaseCart, addCart } from "../../redux/action";
function getItem(label, key, children, type) {
    return {
        key,
        children,
        label,
        type,
    };

}


const items = [
    getItem('Navigation One', 'sub1', [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
    ]),
    getItem('Navigation Two', 'sub2', [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Navigation Three', 'sub4', [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),];
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

    const showCart = () => {
        console.log(process.env.REACT_APP_API_KEY)
        
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
                        <Menu
                            mode="inline"
                            openKeys={openKeys}
                            onOpenChange={onOpenChange}
                            style={{ width: 256 }}
                            items={items}
                        />
                    </div>
                    <div className="shop-content">
                        <div className="shop-title">
                            <h1>Shop</h1>

                        </div>
                        <div className="shop-item">
                            <div className="shop-item-content">
                                {listProduct.map((x, index) =>
                                    <div key={index} className="shop-item-child">
                                        <div className="shopitem-img">
                                            <img src={`${process.env.REACT_APP_API_KEY}/static/images/${x.productImages}`} alt={x.productName} />
                                        </div>
                                        <div className="shopitem-info">
                                            <p>{x.productname}</p>
                                            <p>{x.price}VND</p>
                                            <Button type="primary" onClick={e => handleAddCart(x)} >
                                                Add to cart
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="shop-item-paginate">
                                <button onClick={showCart}>Cart</button>
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