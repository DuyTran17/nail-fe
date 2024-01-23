import { React, useState } from "react";
import SidebarPrivate from "../Sidebar";
import HeaderPrivate from "../HeaderPrivate";
import { Button, Form, Input, InputNumber, Upload, message } from 'antd';
import { Redirect, useNavigate } from "react-router-dom";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { uploadImg } from '../../../service/productService'
import { v4 as uuidv4 } from "uuid"
import FormData from 'form-data'
import './Product.scss'
import { getproduct } from "../../../service/productService";
import { UpdateProduct } from "../../../redux/action";
import { useDispatch } from "react-redux";
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const AddProduct = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const dispactch = useDispatch()
    const navigate = useNavigate();
    const [file, setFile] = useState();
    const [fileList, setFileList] = useState();
    const removeImg = (data) => {
        setFileList(
            fileList.filter(x => x.uid != data.uid)
        )
    }

    const onFinish = async (values) => {
        try {
            await setFileList(values.image)
            let object = await {
                id: uuidv4(),
                productName: values.productname,
                price: values.price,
            }
            let formData = await new FormData()
            await formData.append("id", object.id)
            await formData.append("file", values.image[0].originFileObj)
            await formData.append("productname", object.productName)
            await formData.append("price", object.price)
            uploadImg(formData)
            const product = await getproduct();  
            messageApi.open({
                type: 'success',
                content: 'Thêm sản phẩm thành công',
            });
            navigate("/listofproduct")
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: 'Thêm sản phẩm that bai',
            });
        }
        await setFileList(values.image)
        let object = await {
            id: uuidv4(),
            productName: values.productname,
            price: values.price,
        }
    };
    const onFinishFailed = (errorInfo) => {

    };
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            Upload
        </button>
    );

    return (
        <>
            <HeaderPrivate />
            <div className="container">
                <SidebarPrivate />
                <div className="content">
                    <div className="addproduct-form">
                        <h1>Add Product</h1>
                        <Form
                            name="product_form"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item

                                name="productname"
                                label="Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input product name',
                                    },
                                ]}
                            >
                                <Input placeholder="Please input product name" />
                            </Form.Item>
                            <Form.Item
                                name="price"
                                label="Price"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input product price',
                                    },
                                ]}
                            >
                                <InputNumber
                                    style={{
                                        width: '24rem',
                                        textAlign: "none"
                                    }}
                                    min='0'
                                    placeholder="Please input product price" />
                            </Form.Item>
                            <Form.Item label="Upload" name='image' getValueFromEvent={normFile} >
                                <Upload
                                    listType="picture-card"
                                    accept="image/png, image/jpeg"
                                    onRemove={removeImg}
                                    multiple={false}
                                    showUploadList={true}
                                    maxCount={1}
                                >
                                    {
                                        uploadButton
                                    }
                                </Upload>
                            </Form.Item>

                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    Upload
                                </Button>
                            </Form.Item>

                        </Form>
                    </div>

                </div>
            </div >
        </>
    )
}
export default AddProduct