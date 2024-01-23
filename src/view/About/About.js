import React, { useState } from 'react'
import HomeNavComponent from "../HomeNav/HomeNavComponent";
import FooterComponent from "../Footer/FooterComponent";
import avt_01 from '../../img/avt_01.jpg'
import product_3 from '../../img/product_3.png'
import Service_01 from '../../img/Service_01.svg'
import img_02 from '../../img/img_02.jpg'

import './About.scss'

const About = (props) => {
    return (
        <>
            <HomeNavComponent />
            <div>
                <div className='aboutus-container'>
                    <div className='nailit-container'>
                        <div className='nailit-title'>
                            <p>"You Love It. We Nail It!"</p>
                            <h1>VỚI NAIL ROOM
                                <br />
                                “AI CŨNG CÓ THỂ TRỞ NÊN ĐẸP HƠN”</h1>
                        </div>
                        <div className='nailit-content'>
                            <div className='content-img'>
                                <img src={require('../../img/img_02.jpg')} />
                            </div>
                            <div className='content-info'>
                                Sở hữu các dịch vụ từ làm nail, spa, waxing, phun thêu lông mày, nối mi,… và một không gian cửa hàng yên tĩnh, long lanh dành riêng cho phái đẹp khiến Nail Room trở thành điểm đến yêu thích của hơn 500.000 khách hàng trong và ngoài nước.
                                <br /><br />
                                Với đội ngũ chuyên viên tài năng, dễ thương cùng hệ thống máy móc, dụng cụ nhập từ Hàn Quốc và các sản phẩm organic của Hàn – Anh – Pháp – Mỹ, 15 cơ sở của NAIL  ROOM chắc chắn sẽ đem lại những xu hướng làm đẹp mới nhất đến khách hàng
                                <br /><br />
                                Hãy ghé chơi với chúng mình để cảm nhận niềm vui từ việc yêu chiều bản thân nhé!
                            </div>
                        </div>
                        <div className='gallery'>
                            <iframe src="https://www.youtube.com/embed/Lg9Jq69Juoc?si=iuneP4PLyjqytySU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className='gallery-img '>
                            <div className='gallery-img-info'>
                                <p>Ngoài những chất lượng về dịch vụ, NAIL ROOM còn tự hào là chuỗi làm đẹp có không gian được yêu thích nhất. Với concept các tone màu sang chảnh, nền nã, NAIL ROOM luôn làm hài lòng khách yêu mỗi khi đặt chân đến. Bên cạnh đó, NAIL ROOM tự hào sở hữu kho sơn khổng lồ, đa dạng để khách yêu có thể thỏa thích lựa chọn. Đến với chúng mình để được nhận những điều tuyệt vời nhất nhé!!!</p>
                            </div>
                            <div className='gallery-content'>
                                <a href='#'>
                                    <img src={require('../../img/img_03.png')} />
                                </a>
                                <a href='#'>
                                    <img src={require('../../img/img_03.png')} />
                                </a>
                                <a href='#'>
                                    <img src={require('../../img/img_03.png')} />
                                </a>
                                <a href='#'>
                                    <img src={require('../../img/img_03.png')} />
                                </a>
                                <a href='#'>
                                    <img src={require('../../img/img_03.png')} />
                                </a>
                                <a href='#'>
                                    <img src={require('../../img/img_03.png')} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}

export default About;