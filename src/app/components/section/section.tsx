import { Libre_Bodoni } from 'next/font/google';

const libreBodoni = Libre_Bodoni({
    subsets: ['latin'],
    weight: ['400', '700'],
  });

let Section = () => {
    return( 
    <main className={libreBodoni.className} >
      <div className='flex justify-center'>
          <div className='mt-[194px]'>
              <div className='w-[496px] h-[189px] text-[40px] leading-[65.8px] fontbold'> 
                 <h1 className='text-black'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
              </div>
              <div className='h-[147px] w-[902px] pt-[48px] pb-[48px]'>
                 <p className=' text-[#787054] leading-[49.35px] text-[30px] font-medium'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
              </div>
              <div className='pt-[48px]'>
                 <button className='bg-[#A29875] text-[#FFFFFF] w-[248px] h-[58px] leading-[37.5px] p-[8.6px] gap-[8.6px] text-[30px] rounded-[8.5px] ' >Explore Now</button> 
              </div>
          </div>
          <div className='pl-[24px]' >
            <img className='mt-[138px] ml-[36px]' src="/img.png" alt="image" width={420} height={647}/>
          </div>
      </div>
    </main>
    )
}

export default Section