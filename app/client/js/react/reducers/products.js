const defaultProducts = [{
    id: 1,
    name: '商品一',
    price: 148,
    image: '/images/store/565951c3Ncbedcad1.jpg'
}, {
    id: 2,
    name: '商品二',
    price: 158,
    image: '/images/store/55d2c45eN28bdb893.jpg'
}]

export default (state = defaultProducts, action) => {
    switch (action.type) {
        default: return state
    }
}