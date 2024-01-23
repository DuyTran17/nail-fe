import { React,useEffect } from 'react'
import 'boxicons'
import { useSelector } from 'react-redux';
import HeaderPrivate from '../HeaderPrivate';
import SidebarPrivate from '../Sidebar';
import { Table } from 'antd';
import { OrderSelector,listProductSelector } from '../../../redux/selector';
import '../User/ListOfUser.scss'
import { getOrder } from '../../../service/orderService';
import { useDispatch } from 'react-redux';
import { UpdateOrder } from '../../../redux/action';
const ListOfOrder = (props) => {
    const dispactch =useDispatch()
    const product = useSelector(listProductSelector)
    const dataSource = useSelector(OrderSelector)
    const getorder = async () => {
        const check = await getOrder();
        dispactch(UpdateOrder(check.data))
    }
    useEffect(() => {
        getorder()
      },[]);
    const expandedRowRender = (record) => {
        const columns = [
            {
                title: 'Product name',
                key: 'id',
                render: (_, record) =>
                product.map(e=>
                    e.id==record.product_id?
                    e.productName
                    : null
                )
                
            },
            {
                title: 'Quanity',
                dataIndex: 'quanity',
                key: 'quanity'
            },
            {
                title: 'Unit price',
                dataIndex: 'unit_price',
            },
            {
                title: 'Total price',
                dataIndex: 'total_price',
            },

        ];
        const data = record.listProduct
        return <Table columns={columns} dataSource={data} pagination={false} rowKey={(x) => x.product_id} />;
    }
    const columns = [
        {
            title: 'Id',
            dataIndex: 'order_id',
            key: 'id'
        },
        {
            title: 'Guest name',
            dataIndex: 'guest_name',
        },
        {
            title: 'Address',
            dataIndex: 'address',

        },
        {
            title: 'Phone',
            dataIndex: 'phone',

        },
        {
            title: 'Payment method',
            dataIndex: 'payment',

        },
        {
            title: 'Total',
            dataIndex: 'total',

        },

    ]
    return (
        <>
            <HeaderPrivate />
            <div className='container'>
                <SidebarPrivate />
                <div className='content'>
                    <div className='dashboard-title'>
                        <p>Welcome back , Admin</p>

                    </div>
                    <div className='user-info'>
                        <Table dataSource={dataSource} columns={columns} rowKey={(record) => record.order_id}
                            expandable={{
                                expandedRowRender,
                                defaultExpandedRowKeys: ['0'],
                            }} />;
                    </div>

                </div>
            </div>
            <footer>
                Copyright DuyTran2023
            </footer>
        </>
    )
}
export default ListOfOrder