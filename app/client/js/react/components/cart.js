import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux'

class Cart extends Component {
    render() {
        return ( < aside className = "cart" >
            < h1 > 购物车 < /h1>

            < table className = "products" >
            < thead >
            < tr >
            < th > 商品名称 < /th> < th > 数量 < /th > < /tr> < /thead >

            < tbody > {
                this.props.cart.ids.map(id => {
                    return renderCartRow(id, this.props)
                })
            } < /tbody> < /table >

            < div className = "total" >
            < span className = "label" > 总计: < /span> < span className = "amount" > ￥{
            calculateTotal(this.props)
        } < /span> < /div > < /aside>
    )
}
}

const renderCartRow = (id, props) => {
    const item = {
        ...props.products.find(p => p.id === id),
        quantity: props.cart.quantities[id]
    }

    return ( < tr key = {
            id
        } >
        < td > {
            item.name
        } < /td> < td > {
        item.quantity
    } < /td> < /tr >
)
}

const calculateTotal = props => {
    const {
        cart,
        products
    } = props
    const {
        ids,
        quantities
    } = cart
    let total = 0

    ids.forEach(id => {
        const price = products.find(p => p.id === id).price
        total += price * quantities[id]
    })

    return total.toFixed(2)
}

const mapStateToProps = state => ({
    cart: state.cart,
    products: state.products
})

export default connect(mapStateToProps)(Cart)