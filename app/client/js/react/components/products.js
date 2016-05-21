import React, {
    Component
} from 'react'
import {
    connect
} from 'react-redux'
import {
    addToCart
} from '../actions'

class Products extends Component {
    render() {
        return ( < section className = "product_summary_collection" > {
                this.props.products.map(p => {
                    return <Product product = {
                        p
                    }
                    onAddToCart = {
                        this.onAddToCart.bind(this)
                    }
                    key = {
                        p.id
                    }
                    />
                })
            } < /section>)
        }

        onAddToCart(id) {
            this.props.addToCart(id)
        }
    }

    class Product extends Component {
        render() {
            const p = this.props.product

            return ( < article className = "product_summary" >
                < img className = "product_image"
                src = {
                    `${p.image}`
                }
                alt = {
                    p.name
                }
                /> < h1 className = "product_title" > {
                p.name
            } < /h1> < span className = "product_price" > ￥{
            p.price.toFixed(2)
        } < /span> < a className = "add_to_cart"
        href = "#"
        onClick = {
                () => this.props.onAddToCart(p.id)
            } >
            加入购物车 < /a> < /article >
    )
}
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps, {
    addToCart
})(Products)