
export const userLogin = (data) => {
    return {
        type: 'user/Login',
        payload: data
    }
}
// export const userDelete = (data) => {
//     return {
//         type: 'user/Delete',
//         payload: data
//     }
// }
export const productDelete = (data) => {
    return {
        type: 'product/Delete',
        payload: data
    }
}
export const addBooking = (data) => {
    return {
        type: 'booking/Add',
        payload: data
    }
}
export const addCart = (data) => {
    return {
        type: 'cart/Add',
        payload: data
    }
}
export const ResetCart = (data) => {
    return {
        type: 'cart/Reset',
    }
}
export const IncreaseCart = (data) => {
    return {
        type: 'cart/Increase',
        payload: data
    }
}
export const DecreaseCart = (data) => {
    return {
        type: 'cart/Decrease',
        payload: data
    }
}
export const ChangeQuanityCart = (data) => {
    return {
        type: 'cart/ChangeQuanity',
        payload: data
    }
}
export const DeleteCart = (data) => {
    return {
        type: 'cart/Delete',
        payload: data
    }
}
export const AddOrder = (data) => {
    return {
        type: 'order/Add',
        payload: data
    }
}
export const UpdateProduct = (data) => {
    return {
        type: 'product/Update',
        payload: data
    }
}
export const UpdateOrder = (data) => {
    return {
        type: 'order/Update',
        payload: data
    }
}
export const UpdateUser = (data) => {
    return {
        type: 'user/Update',
        payload: data
    }
}
export const UpdateBooking = (data) => {
    return {
        type: 'booking/Update',
        payload: data
    }
}