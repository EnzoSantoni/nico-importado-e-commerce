import { createContext, useContext, useState } from "react"

const OrderContext = createContext()

export const useOrder = () => useContext(OrderContext)

export const OrderProvider = ({ children }) => {
    //estado de la orden
    const [ order, setOrder ] = useState([
        {id: 100, name: 'XBOX', price: 1000, quantity: 1},
        {id: 222, name: 'PS5', price: 2000, quantity: 3},
        {id: 333, name: 'Nintendo Switch', price: 5000, quantity: 2},
    ])

    const [total, setTotal] = useState(0);
    //estado de desplegar o no el sidebar
    //estados total

    //function agregar producto
    function addOrderItem(prod) {
        prod.quantity = 1;
        setOrder([...order, prod]);
        console.log(`addOrdenItem context function`);
        calculateTotal();
    }
    //calcular total
    function calculateTotal() {
        let totalCount = 0;

        order.forEach(prod => {
            totalCount += prod.price * prod.quantity
        })

        setTotal(totalCount);
    }
    // remover elemento de la carta
    //toggle

    return (
        <OrderContext.Provider value={{order, addOrderItem, total}}>
            { children }
        </OrderContext.Provider>
    )
}



