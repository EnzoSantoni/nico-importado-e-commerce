export default function Login () {
    function handleSubmit () {

    }

    const inputStlye = "bg-bg border border-borders text-text placeholder:text-text-muted placeholder:text-xs focus:border-accent outline-none p-1.5 rounded-md"

    return (
            <div className="w-full flex flex-1 flex-col items-center justify-center mx-auto overflow-hidden relative p-8">
                <div className="fixed z-0 w-screen h-screen pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 m-auto blur-[100px]">
                    <div className="rounded-[99999px] absolute inset-0 m-auto w-full h-full overflow-hidden bg-accent scale-60">
                        <div className="absolute inset-0 m-auto bg-conic from-text-on-accent via-accent  to-text-on-accent animate-spining "></div>
                    </div>
                </div>
                <form action="" className="flex flex-col px-3 gap-1 bg-surface border-borders border w-full sm:max-w-sm rounded-md font-sans z-2" onSubmit={handleSubmit}>
                    <h1 className="p-4 text-3xl text-text font-heading border-b-accent border-b w-full text-center mb-4">Ingresar</h1>
                    <label className="text-text text-sm">Correo electronico</label>
                    <input className={`${inputStlye} mb-4`} type="text" name="email" placeholder="Correo electronico" required />

                    <label className="text-text text-sm" htmlFor="">Contraseña</label>
                    <input className={inputStlye} type="password" name="password" placeholder="Contraseña" required />

                    <button type="submit" className="bg-accent text-text-on-accent rounded p-1 my-3" >Ingresar</button>
                </form>
            </div>
    )
}