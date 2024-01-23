import { React,useState,useEffect} from 'react'
import 'boxicons'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux';
import HeaderPrivate from '../HeaderPrivate';
import SidebarPrivate from '../Sidebar';
import {  Table, Popconfirm } from 'antd';
import { listuserSelector,userSelector} from '../../../redux/selector';
import './ListOfUser.scss'
import { getUserService,deleteuserbyid } from '../../../service/userService';
import { UpdateUser, userDelete } from '../../../redux/action';
const ListOfUser = (props) => {
    const dataSource =useSelector(listuserSelector)
    const getdata = async () => {
        const user = await getUserService();
        dispactch(UpdateUser(user.data))
      }
      useEffect(() => {
        getdata()
      }, []);
    
    const user = useSelector(userSelector)  
    const dispactch = useDispatch();
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'First name',
            dataIndex: 'fname',
        },
        {
            title: 'Last name',
            dataIndex: 'lname',
        
        },
        {
            title: 'Address',
            dataIndex: 'address',
         
        },
        {
            title: 'Username',
            dataIndex: 'username',
            
        },
        {
            title: 'Delete',
            dataIndex: 'Delete',
            render: (_, record) =>
              dataSource.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
                  <button>Delete</button>
                </Popconfirm>
              ) : null,
          }
    ]
    const handleDelete = (key) => {
        key === user.id?
            alert('Bạn không thể xóa tài khoản đang đăng nhập')
        :
            deleteuserbyid(key)
            getdata()
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
                    <div className='user-info'>
                        <Table dataSource={dataSource} columns={columns} rowKey="id"  />
                    </div>

                </div>
            </div>
            <footer>
                Copyright DuyTran2023
            </footer>
        </>
    )
}
export default ListOfUser