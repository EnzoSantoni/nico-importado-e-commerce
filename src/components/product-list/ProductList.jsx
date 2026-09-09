const URL = 'https://69f20a88b15130b973526bd8.mockapi.io/api'

import { useEffect, useState } from "react";
import ProductCard from "../product-card/ProductCard";
import axios from "axios";

export default function ProductList() {
    // generar un estado para nuestros productos []
    const [products, setProducts] = useState([])
    // UseEffect hacer una peticion controlada
    useEffect(() => {
        async function getProducts() {
            try {
                const response = await axios.get(`${URL}/products`);

                setProducts(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    }, [])

    console.log(products)

    return (
        <div>
            <h2>LISTA DE PRODUCTOS</h2>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3">
                {
                    products.map(prod => (
                        <ProductCard key={prod.id} prod={prod}/>
                    ))
                }
            </div>
        </div>
    )
}