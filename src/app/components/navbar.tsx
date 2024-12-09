import Link from "next/link";

export default function NavbarComponent(){
    interface ListDetails{
        name: string,
        link: string,
    }
        const navItems : Array<ListDetails> = [
            {
                name:  'HOME',
                link: '/'
            },
            {
                name:  'BAGS',
                link:  '/items/bags'
            },
            {   
                name:  'ACCESSORIES',
                link:  '/items/accessories'
            },
            {
                name:  'ABOUT',
                link:  '/about'    
            },
            {
                name:  'REPAIRS',
                link:  '/repairs'
            }];    
    
    const renderNavItems = navItems.map((listDetails) => {
        return(
            <li key={listDetails.name}
                className="px-4 text-center">
                <Link href={listDetails.link} prefetch={true}>{listDetails.name}</Link>
            </li>
        )
    });
        
   
    return(
        <div className="h-52">
            <div className="border-b-2 border-b-gray-800 fixed w-full">
                <div className="flex justify-center py-5 bg-white text-black font-extrabold text-2xl">LOGO</div>
                <div className="flex justify-center bg-white text-gray-800 font-bold text-sm">
                    <ul className='flex justify-around pb-5'>
                        {renderNavItems}
                    </ul>
                </div>
            </div>
        </div>
    )
}