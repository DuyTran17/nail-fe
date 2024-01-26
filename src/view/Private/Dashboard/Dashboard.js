import { React } from 'react'
import './Dashboard.scss'
import 'boxicons'
import { userLogin } from '../../../redux/action';
import HeaderPrivate from '../HeaderPrivate';
import SidebarPrivate from '../Sidebar';
import { useSelector } from 'react-redux'
import { OrderSelector, listProductSelector, listuserSelector } from '../../../redux/selector';

const Dashboard = (props) => {
    const listUser = useSelector(listuserSelector)
    const listProduct =useSelector(listProductSelector)
    console.log(listProduct,)
    const listOrder = useSelector(OrderSelector)
    return (
        <>
            <HeaderPrivate/>
            <div className='container'>
                <SidebarPrivate/>
                <div className='content'>
                    <div className='dashboard-title'>
                        <p>Welcome back , Admin</p>

                    </div>
                    <div className='overview-cards'>
                        <div className="card product-card">
                            <div className="title">
                                <h2>Products</h2>
                            </div>
                            <span className="product-content">
                                <box-icon name='package' color='#e2dada' ></box-icon>
                                <div className="number">
                                    <h4>{listProduct.length}</h4>
                                </div>
                            </span>
                        </div>
                        <div className="card user-card">
                            <div className="title">
                                <h2>Users</h2>
                            </div>
                            <span className="product-content">
                                <box-icon name='user' color='#e2dada' ></box-icon>
                                <div className="number">
                                    <h4>{listUser.length}</h4>
                                </div>
                            </span>
                        </div>
                        <div className="card order-card">
                            <div className="title">
                                <h2>Orders</h2>
                            </div>
                            <span className="product-content">
                                <box-icon name='briefcase' color='#e2dada' ></box-icon>
                                <div className="number">
                                    <h4>{listOrder.length}</h4>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                Copyright DuyTran2023
            </footer>
        </>
    )
}
export default Dashboard