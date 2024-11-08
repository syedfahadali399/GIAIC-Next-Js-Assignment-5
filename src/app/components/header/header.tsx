import Image from "next/image"
import { Rye } from "next/font/google"
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
// // import { faMagnifyingGlass} from '@fortawesome/react-fontawesome'

// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

byPrefixAndName.fas['house']

const inter = Rye({ subsets: ['latin'],
 weight : ['400']
 })

let Header = () => {
    return(
        <header className="">
            <nav>
                <div className="flex flex-row bg-[#A29875] text-[#FFFFFF] items-center justify-between p-8">
                    <div>
                        <h1 className="text-4xl text-[67px] font-rye">PURITY</h1>
                    </div>
                    <div>
                       {/* <label className="flex flex-row">
                           <input className="p-2 w-[768px] h-[57px] rounded-[14px]" type="text" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"/><img src="/magnifying.svg" alt="" width={50}/>
                        </label> */}
                        <button>
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                        <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />
                        </button>
                    </div>
                    <div className="flex flex-row gap-6 text-[#FFFFFF]">
                        <span className="text-[#FFFFFF]"><img className="text-[#FFFFFF]" src="\heart.svg" alt="heart" width={50}/></span>
                        <span><img src="\person.svg" alt="person" width={50}/></span>
                        <span><img src="\cart.svg" alt="cart" width={50}/></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header