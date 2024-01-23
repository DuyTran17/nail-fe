import axios from 'axios'

const userLogin = (username,password) =>{
    return axios.post(`${process.env.REACT_APP_API_KEY}/api/login`,{
        "username":username , "password":password
    })
}

export {userLogin} 