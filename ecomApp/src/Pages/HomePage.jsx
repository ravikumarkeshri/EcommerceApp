import React from 'react'
import Navbar from '../features/navbar/Navbar'
import ProductList from '../features/product-list/ProductList'
import LoginPage from '../Pages/LoginPage'
import SignUpPage from './SignUpPage'

const HomePage = () => {
    return (
        <div>
            <Navbar>
                <ProductList />


            </Navbar>
            <LoginPage />
            <SignUpPage />

        </div>
    )
}

export default HomePage