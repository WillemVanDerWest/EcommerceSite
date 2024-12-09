import Link from "next/link"

interface ProductListInformation{
    id: number,
    name: string,
    category: string,
    inStock: boolean,
    price: number,
    onSpecial: boolean,
    description: string,
    imageUrl: string
}

interface ProductProps{
    productCardInformation:ProductListInformation
}

export default function ProductCard({productCardInformation} : ProductProps){
    productCardInformation.imageUrl=`https://prd.place/400/600?${productCardInformation.id}`
    
    return(
        <Link href={{
            pathname: '/products/',
            query: {productInfo: JSON.stringify(productCardInformation.name)}
        }}>
            <div key={productCardInformation.id} >
                <img className="bg-stone-200 p-5" src={productCardInformation.imageUrl} alt={productCardInformation.description} width='400' height='600'/>
                <div className="pt-4">
                    <header className="text-sm font-bold text-gray-700">{productCardInformation.name}</header>
                    <p className="text-gray-400 text-sm">{`R ${productCardInformation.price}.00`}</p>
                </div>
            </div>
        </Link>
    )
}