import styled from "styled-components";
import { useGetAllProductsQuery } from "../services/api";

export function ProductCard({product}) {
    const {id,
        title,
        price,
        description,
        cetegory,
        image,
        rating} = product;
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p><strong>Category:</strong>{cetegory}</p>
            <p>{description}</p>
        </div>
    )
}

export function ProductList() {
    const { data: products, isLoading } = useGetAllProductsQuery();
    return <p>{isLoading? 'loading...' : products.map(product => <ProductCard product={product} />
    
    
   )}</p>
}