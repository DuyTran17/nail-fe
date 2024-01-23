
const initState = {
    user:
    {
        id: '',
        username: '',
        status: false
    },
    listUser: [

    ],
    listProduct: [
    ],
    Listbooking: [

    ],
    Cart: [

    ],
    ListofOrder: [
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'user/Login':
            return {
                ...state,
                user: {
                    ...state.user = action.payload
                }

            }
        case 'product/Update':
            return {
                ...state, listProduct: [
                    ...state.listProduct = action.payload
                ]
            }
        case 'user/Update':
            return {
                ...state, listUser: [
                    ...state.listUser = action.payload
                ]
            }
        case 'order/Update':
            return {
                ...state, ListofOrder: [
                    ...state.ListofOrder = action.payload
                ]
            }
        case 'booking/Update':
            return {
                ...state, Listbooking: [
                    ...state.Listbooking = action.payload
                ]
            }
        // case 'user/Delete':
        //     return {
        //         ...state,
        //         userInfo: state.userInfo.filter(x => x.id !== action.payload)
        //     }
        // case 'product/Delete':
        //     return {
        //         ...state,
        //         listProduct: state.listProduct.filter(x => x.id !== action.payload)

        //     }
        case 'booking/Add':
            return {
                ...state,
                Listbooking: [
                    ...state.Listbooking,
                    action.payload
                ]

            }
        case 'cart/Add':
            return {
                ...state,
                Cart: [
                    ...state.Cart,
                    action.payload
                ]
            }
        case 'cart/Reset':
            return {
                ...state,
                Cart: []
            }
        case 'cart/Increase':
            state.Cart[action.payload].quanity++
            state.Cart[action.payload].totalprice = state.Cart[action.payload].unit_price * state.Cart[action.payload].quanity
            return {
                ...state
            }
        case 'cart/Decrease':
            if (state.Cart[action.payload].quanity > 1) {
                state.Cart[action.payload].quanity--
                state.Cart[action.payload].totalprice = state.Cart[action.payload].unit_price * state.Cart[action.payload].quanity
            } else {

                const array = [...state.Cart]
                return {
                    ...state,
                    Cart: state.Cart.filter(x => x.product_id !== array[action.payload].product_id)
                }
            }
            return {
                ...state
            }
        case 'cart/ChangeQuanity':
            state.Cart[action.payload.index].quanity = action.payload.quanity
            state.Cart[action.payload.index].totalprice = state.Cart[action.payload.index].unit_price * state.Cart[action.payload.index].quanity
            return {
                ...state
            }
        case 'cart/Delete':
            const array = [...state.Cart]
            return {
                ...state,
                Cart: state.Cart.filter(x => x.product_id !== array[action.payload].product_id)
            }
        case 'order/Add':
            return {
                ...state,
                ListofOrder: [
                    ...state.ListofOrder,
                    action.payload
                ]

            }
        default:
            return state;
    }
}
export default rootReducer