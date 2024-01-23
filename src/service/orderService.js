import axios from 'axios'

const addOrder = (order) => {
    return axios.post(`${process.env.REACT_APP_API_KEY}/api/addorder`, {
        "order_id": order.order_id,
        "guest_name": order.guest_name,
        "address": order.address,
        "phone": order.phone,
        "payment": order.payment,
        "total": order.total
    })
}
const addOrderDetail = (order,cart) => {
    return axios.post(`${process.env.REACT_APP_API_KEY}/api/addorderdetail`, {
        "order_id": order.order_id,
        "product_id": cart.product_id,
        "quanity": cart.quanity,
        "unit_price": cart.unit_price,
        "total_price": cart.totalprice
    })
}
const getOrder = () =>{
    return axios.get(`${process.env.REACT_APP_API_KEY}/api/getorder`)
}

export { addOrder, addOrderDetail,getOrder } 