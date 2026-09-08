import { useParams } from "react-router";

export default function ProductDetail() {
const { id } = useParams();

console.log(id)


    return (
        <>
            <h1>Product Detail</h1>
        </>
    )
}