import { Rye } from "next/font/google";

const inter = Rye({ subsets: ['latin'],
    weight : ['400']
})

let Header = () => {
    return(
        <main className={inter.className}>
            <header>
            <nav>
                <div className="flex flex-row bg-[#A29875] text-[#FFFFFF] items-center justify-between p-8">
                    <div>
                        <h1 className="text-4xl text-[67px]">PURITY</h1>
                    </div>
                    <div>
                       <label className="flex flex-row">
                           <input className="p-2 w-[768px] h-[57px] rounded-[14px]" type="text" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"/>
                        </label>
                    </div>
                    <div className="flex flex-row gap-8 text-[#FFFFFF]">
                        <span><img src="\heart.svg" alt="heart" width={50}/></span>
                        <span><img src="\person.svg" alt="person" width={50}/></span>
                        <span><img src="\cart.svg" alt="cart" width={50}/></span>
                    </div>
                </div>
            </nav>
        </header>
        </main>
    )
}

export default Header