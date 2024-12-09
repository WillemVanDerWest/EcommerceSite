'use client';
import { useSearchParams } from "next/navigation";
import NavbarComponent from "../components/navbar";
import { products } from "../data/info";


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

export default function ProductPage(){

    const param = useSearchParams()
    const productInfo = param.get('productInfo')
    const extractedProductName = JSON.parse(productInfo);
    let results : ProductListInformation = products[1];
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === extractedProductName){
            results = products[i]
        }
    }
    const stockedStyle = results.inStock ? 'text-green-600 border-green-600': 'text-red-700 border-red-600'
    return(
        <div>
            <NavbarComponent/>
            <div className="flex justify-center">
                <div className="px-8">
                    <img className="bg-stone-100 from-slate-800 px-10" src={results.imageUrl} width='400' height='600'/>
                </div>
                <div className="w-4/12 max-w-md min-w-52 text-gray-600">
                    <header className="text-3xl pb-3">{results.name.toUpperCase()}</header>
                    <p className="text-2xl text-gray-300 pb-3">{`R ${results.price}.00`}</p>
                    <p className={`${stockedStyle}  border-b-2 pb-3`}>{results.inStock ? 'Stocked': 'Out of Stock'}</p>
                    <p className="pb-10">{`${results.description}`}</p>
                    <button className="py-4 px-3 bg-gray-800 text-white w-11/12">ADD TO BASKET</button>
                    <button className="py-4 px-3 mt-5 bg-white border-black border-2 text-black w-11/12">ADD TO WISHLIST</button>
                </div>
            </div>
        </div>
    )
}