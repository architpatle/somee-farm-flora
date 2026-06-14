import React from 'react'
import ProductsHero from '../components/ProductsHero'
import ProductsSection from '../components/ProductsSection'
import WhyOurProducts from '../components/WhyAreProducts'
import ProductsCTA from '../components/ProductsCTA'

const Products = () => {
    return (
        <div>
            <ProductsHero />
            <ProductsSection />
            <WhyOurProducts />
            <ProductsCTA />
        </div>
    )
}

export default Products
