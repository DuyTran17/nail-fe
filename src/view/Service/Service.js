import { React, useState } from "react";
import './Service.scss'
import HomeNavComponent from "../HomeNav/HomeNavComponent";
import FooterComponent from "../Footer/FooterComponent";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import banner_01 from '../../img/banner_01.jpg'
import banner_02 from '../../img/banner_02.jpg'
import banner_03 from '../../img/banner_03.jpg'
import banner_04 from '../../img/banner_04.jpg'
import banner_05 from '../../img/banner_05.jpg'
import banner_06 from '../../img/banner_06.jpg'
import banner_07 from '../../img/banner_07.jpg'
import banner_08 from '../../img/banner_08.jpg'
import banner_09 from '../../img/banner_09.jpg'
import banner_10 from '../../img/banner_10.jpg'
const Service = () => {
    const [image, setImage] = useState([
        {
            src: banner_01,
            style: { height: '500px' }
        },
        {
            src: banner_02,
            style: { height: '500px' }
        },
        {
            src: banner_03,
            style: { height: '500px' }
        },
        {
            src: banner_04,
            style: { height: '500px' }
        },
        {
            src: banner_05,
            style: { height: '500px' }
        },
        {
            src: banner_06,
            style: { height: '500px' }
        },
        {
            src: banner_07,
            style: { height: '500px' }
        },
        {
            src: banner_08,
            style: { height: '500px' }
        },
        {
            src: banner_09,
            style: { height: '500px' }
        },
        {
            src: banner_10,
            style: { height: '500px' }
        },
    ])
    const setImages = () => {
        setImage(

        )
    }
    return (
        <>
            <HomeNavComponent />
            <div className="container">
                <div className="content">
                    <div className="content-header">
                        <Carousel images={image} isLoop={true} hasMediaButton={false} hasSizeButton={false} hasIndexBoard={false}/>
                        <div>
                            <h1>Nail</h1>
                            <p>Là dịch vụ được yêu thích nhất hien nay, với những mẫu nail hot trend, luôn đi đầu xu hướng</p>
                        </div>
                    </div>
                    <div className="content-middle">
                        <h1>QUY TRÌNH THỰC HIỆN</h1>
                        <div className="content-middle-box">
                            <div className="children"> 
                                <h4>1. VỆ SINH MÓNG VÀ NHẶT DA</h4>
                                <p>Khách hàng sẽ ngâm tay và được các chuyên viên vệ sinh sạch sẽ. Sau đó, các chuyên sẽ sẽ nhặt sạch da chết xung quanh móng</p>
                            </div>
                            <div className="children"> 
                                <h4>2. TẠO FORM MÓNG</h4>
                                <p>Khách hàng lựa chọn form móng yêu thích và các chuyên viên sẽ dũa móng để tạo được form chuẩn</p>
                            </div>
                            <div className="children"> 
                                <h4>3. SƠN MỘT LỚP NỀN (SƠN BASE)</h4>
                                <p>Chuyên viên sẽ sơn một lớp nền lên móng. Sau đó, móng sẽ được hong khô dưới đèn khoảng 20s - 30s</p>
                            </div>
                            <div className="children"> 
                                <h4>4. SƠN GEL, TẠO KIỂU</h4>
                                <p>Khách hàng sẽ lựa chọn dòng gel và mẫu nail theo mong muốn. Các chuyên viên sẽ design theo mẫu của khách hàng</p>
                            </div>
                            <div className="children"> 
                                <h4>5. SƠN BÓNG GEL ( SƠN GEL TOP NONE CLEANER)</h4>
                                <p>Sau khi đã làm xong bộ nail ưng ý, chuyên viên sẽ sơn một lớp sơn top giúp móng trở nên bóng và bảo vệ móng bền hơn</p>
                            </div>
                            <div className="children"> 
                                <h4>6. DƯỠNG VIỀN MÓNG</h4>
                                <p>Bước cuối cùng, chuyên viên sẽ dưỡng viền móng để tránh việc da bị khô sau khi làm móng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}
export default Service