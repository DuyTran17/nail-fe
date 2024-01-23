import { React,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'boxicons'
import { userLogin } from '../../redux/action';
import { Menu } from 'antd'
import { useNavigate, Link} from 'react-router-dom'
import { userSelector } from '../../redux/selector';
function getItem(label, key, children, icon) {
    return {
        key,
        icon,
        children,
        label,

    };

}
const SidebarPrivate = () => {
    const dispactch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();
    
    const handleLogOut = () => {
        return (
            dispactch(userLogin({
                username: '',
                password: '',
                status: false
            })),
            navigate("/login")
        )
    }
    const rootSubmenuKeys = ['sub5', 'sub2', 'sub3', 'sub4','sub5','sub6'];
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    
    const items =
        [
            getItem(<Link to='/dashboard'>Home</Link>, '', [
            ], <box-icon name='home' ></box-icon>),
            getItem('Product', 'sub2', [
                getItem(<Link to='/addproduct'>Add Product</Link>, '1',),
                getItem(<Link to='/listofproduct'>List of Product</Link>, '2'),
            ], <box-icon name='package' ></box-icon>),
            getItem('User', 'sub3', [
                getItem(<Link to='/listofuser'>List of User</Link>, '3'),
            ], <box-icon name='user' ></box-icon>),
            getItem('Order', 'sub4', [
                getItem(<Link to='/listofOrder'>List of Order</Link>, '4'),
            ], <box-icon name='briefcase' ></box-icon>),
            getItem('Booking', 'sub5', [
                getItem(<Link to='/listbooking'>List of Booking</Link>, '5'),
            ], <box-icon name='briefcase' ></box-icon>),
            getItem('Account', 'sub6', [
                getItem(<p onClick={() => handleLogOut()} >Logout</p>, '6'),
                getItem(<Link to='/login'>Option</Link>, '7'),
            ], <box-icon name='cog' ></box-icon>)
        ]
    return(
    <div className='sidebar'>
        <div className='user'>
            <div className='avatar'>
                <img src={require('../../img/avt_01.jpg')} alt='' />
            </div>
            <div className='username'>
                <p>{user.username}</p>
            </div>
        </div>
        <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={items}
        />
    </div>
    )
}
export default SidebarPrivate