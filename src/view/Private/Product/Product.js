import { React,useState,useEffect } from 'react'
import 'boxicons'
import { useSelector,useDispatch } from 'react-redux';
import HeaderPrivate from '../HeaderPrivate';
import SidebarPrivate from '../Sidebar';
import {  Table, Popconfirm } from 'antd';
import { listProductSelector, listuserinfoSelector} from '../../../redux/selector';
import { UpdateProduct} from '../../../redux/action';
import {deleteproduct,getproduct } from '../../../service/productService'
import './Product.scss'
const ListProduct = (props) => {
    const dispactch = useDispatch();
    // update redux on event
    const getProduct = async () => {
        const check = await getproduct();
        dispactch(UpdateProduct(check.data))
    }
    useEffect(() => {
        getProduct()
      },[]);
    const dataSource = useSelector(listProductSelector)

    const columns = [
        {
            title: 'Product name',
            dataIndex: 'productName',
            key: 'productname'
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Images',
            dataIndex: 'productImages',
            render: (_, record) =>
            <>
            <img src={`${process.env.REACT_APP_API_KEY}/static/images/${record.productImages}`}></img>
            </>
         
        },
        {
            title: 'Edit',
            render: () =>
            <>
            <button>Edit</button>
            </>
            
        },
        {
            title: 'Delete',
            dataIndex: 'Delete',
            render: (_, record) =>
              dataSource.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id,record.productImages)}>
                  <button>Delete</button>
                </Popconfirm>
              ) : null,
        }
    ]
    const handleDelete = async(id,img) => {
        await deleteproduct(id,img)
        getProduct()
      };
    return (
        <>
            <HeaderPrivate />
            <div className='container'>
                <SidebarPrivate />
                <div className='content'>
                    <div className='dashboard-title'>
                        <p>Welcome back , Admin</p>

                    </div>
                    <div className='product-info'>
                        <Table dataSource={dataSource} columns={columns} rowKey="id" pagination={{pageSize:5}} />
                    </div>

                </div>
            </div>
            <footer>
                Copyright DuyTran2023
            </footer>
        </>
    )
}
export default ListProduct