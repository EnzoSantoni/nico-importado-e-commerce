import { useOrder } from "../../context/OrderContext"


export default function OrderSidebar() {
    const { order, total } = useOrder();

    return (
        <div className="w-100 bg-surface border-l border-borders flex flex-col overflow-hidden fixed top-0 right-0 bottom-0 z-1 transition-all duration-25 ease-in-out justify-between">
            <div className="flex flex-1 flex-col gap-4 p-4 pt-12 overflow-hidden">
                <h2 className="font-heading text-xl text-text py-4 border-b-px border-borders">Orden Actual:</h2>
                <ul className="flex flex-col gap-3 divide-y divide-accent overflow-y-scroll scrollbar-none">
                    {order.map(product => {
                        return (
                            <li className="w-full flex text-text justify-between items-center pb-2" key={product.id}>
                                    <img className="w-10 h-10 rounded-3xl" src="https://img.icons8.com/bubbles/1200/product.jpg" alt="Imagen del producto" />
                                    {product.name}
                                    <div>
                                        {product.price}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="flex w-full">
                <div className="gap-3 p-3 hover:bg-surface-hover w-full flex self-end">
                    <div className="size-16 rounded-md object-cover bg-surface-hover">Miniatura</div>
                    <div className="text-sm text-text truncate">Nombre</div>
                    <div className="text-xs text-text-muted">Items: 20</div>
                    <div>Total $ <span className="text-sm font-bold text-text tabular-nums">{total}</span></div>
                </div>
            </div>

            <div className="text-muted hover:text-error">
                Botones
            </div>
        </div>
    )
}
