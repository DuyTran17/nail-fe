import axios from 'axios'
const getUserService = async (username,password) =>{
    return await axios.get(`${process.env.REACT_APP_API_KEY}/api/getuser`)
}
const deleteuserbyid = async (id)=>{
    return await axios.post(`${process.env.REACT_APP_API_KEY}/api/deleteuserbyid`,{
        "id":id
    })
}
export{getUserService,deleteuserbyid}