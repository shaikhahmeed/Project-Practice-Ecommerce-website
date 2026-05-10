import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IoHeartOutline } from 'react-icons/io5'
import { TbArrowsCross } from 'react-icons/tb'
import ProductSlide from "product-slide";


const ProductDetails = () => {
    const images = [
  "/images/product1.jpg",
  "/images/product2.jpg",
  "/images/product3.jpg",
];
  return (
     <section>
      <div className="container">
        <div className="md:flex mt-16 gap-11">
          <div className='w-1/3'>
              <ProductSlide
      images={images}
      settings={{
        direction: "horizontal",
        zoom: true,
        thumbnailPosition: "bottom",
        transitionDuration: 300,
      }}
    />
          </div>
          <div className='pt-16'>
            <h2 className='max-w-md font-bold  md:text-4xl text-primary'>Lorem ipsum dolor sit amet.</h2>
            <ul className='flex gap-12 items-center pt-4 cursor-pointer'>
                  <li>
                    <p className='text-amber-400 '><FaStar/></p>
                   </li>
                  <li>
                      <p>(4)</p>
                  </li>
              </ul>
            <div className='flex gap-2.5 items-end'>
              <p className='font-bold text-4xl md:text-6xl text-brand'>$180</p>
              <p className='font-bold text-xl md:text-3xl text-secondary line-through'>$20</p>
            </div>
            <p className='pt-9 font-medium text-base text-[#7E7E7E] max-w-md'>Lorem ipsum dolor sit amet.</p>
                <div className='flex pt-4 gap-2'>
                  <input
                  min="1"
                   type="number"  className='border-2 outline-0 text-center py-1 md:py-3 cursor-pointer border-brand w-20 rounded-xl'/>
                  <button onClick={handleAddCart} className='py-1 md:py-3.5 px-1.5 md:px-5 bg-brand font-bold text-xs md:text-base text-[#FFFFFF] rounded-xl cursor-pointer flex items-center gap-0.5 md:gap-1'><IoCartOutline />Add to cart</button>
                  <div className='p-4 bg-[#FFFFFF] border border-[#FFFFFF] cursor-pointer'><IoHeartOutline /></div>
                  <div className='p-4 bg-[#FFFFFF] border border-[#FFFFFF] cursor-pointer'><TbArrowsCross /></div>
                </div>
          </div>
        </div>
        <div className='pt-10'>
          <h2 className='font-bold text-lg text-brand bg-[#ECECEC] rounded-4xl w-fit py-3 px-6 cursor-pointer '>Description</h2>
          <p className='font-medium text-base text-[#7E7E7E] pt-4'>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced
            goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and
            wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch</p>
            <p className='font-medium hidden md:block text-base text-[#7E7E7E] pt-3'>mastodon goodness gnashed a jellyfish and one however because.Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes
              minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the
              raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespectivelimpet.</p>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails