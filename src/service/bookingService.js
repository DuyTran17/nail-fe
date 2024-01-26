import axios from 'axios'

const addBooking =async (data) =>{
    return await axios.post(`${process.env.REACT_APP_API_KEY}/api/addbooking`,{
        "name": data.name,
        "phone": data.phone,
        "service": data.service,
        "date": data.date,
        "time": data.time
    })
}
const getBooking =async()=>{
    return await axios.get(`${process.env.REACT_APP_API_KEY}/api/getbooking`)
}

export {addBooking,getBooking} 