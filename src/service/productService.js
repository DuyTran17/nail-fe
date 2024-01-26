import axios from 'axios'

const getproduct = () => {
    return axios.get(`${process.env.REACT_APP_API_KEY}/api/getproduct`)
}
const deleteproduct = async (id,img) => {
    return await axios.post(`${process.env.REACT_APP_API_KEY}/api/deleteproductbyid`, {
        "id": id,
        "img":img
    })
}
const uploadImg = async (body) => {
    await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_KEY}/api/addProduct`,
        data: body,
        headers: { "Content-Type": "multipart/form-data" },
    })
}
export { getproduct, deleteproduct, uploadImg } 