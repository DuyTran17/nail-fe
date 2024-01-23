import { React } from 'react'
import { Table, Popconfirm } from 'antd';
import HeaderPrivate from '../HeaderPrivate';
import SidebarPrivate from '../Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { listBookingSelector } from '../../../redux/selector';
const Booking = () => {
    const dispatch = useDispatch();
    const dataSource = useSelector(listBookingSelector)
    console.log(dataSource)
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key:'id',
        },
        {
            title: 'Guest name',
            dataIndex: 'name',

        },
        {
            title: 'Phone',
            dataIndex: 'phone',


        },
        {
            title: 'Service',
            dataIndex: 'service',
            render: (_, record) => {
                switch (record.service) {
                    case 'sv1':
                        return <>Sơn mắt mèo</>;
                    case 'sv2':
                        return <>Sơn tráng gương</>;
                    case 'sv3':
                        return <>Sơn đắp bột</>;
                    default:
                        return;
                }
            }

        },
        {
            title: 'Day',
            dataIndex: 'date',
        },
        {
            title: 'Time',
            dataIndex: 'time',
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
        }]
    const handleDelete = () => {

    }
    return (
        <>
            <HeaderPrivate />
            <div className='container'>
                <SidebarPrivate />
                <div className='content'>
                    <div className='content-title'>
                        <h1>List of Booking</h1>
                    </div>
                    <div className='content-info'>
                        <Table dataSource={dataSource} columns={columns} rowKey="id"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Booking