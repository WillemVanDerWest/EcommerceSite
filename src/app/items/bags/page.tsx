import NavbarComponent from "@/app/components/navbar";
import ProductCard from "@/app/components/productCard";
import {products} from '@/app/data/info'

export default function BagPage(){
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

    const listOfAllProducts: Array<ProductListInformation> = products;
    

    const handleListOfAllProducts = listOfAllProducts.map((product)=> {
        return(
            <ProductCard key={product.id} productCardInformation={product}/>
        )
    })

    return(
        <div>
            <NavbarComponent/>
            <p className="py-5 border-y-2 border-gray-200 mb-10 flex text-sm text-gray-400 font-extralight justify-center">{`${products.length} products`}</p>
            <div className="flex justify-center">
                <div className="grid grid-cols-4 mx-auto gap-6 justify-center">
                    {handleListOfAllProducts}
                </div>
            </div>
        </div>
    )
}