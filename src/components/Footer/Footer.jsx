import React from 'react'

function Footer() {
    return (
        <div id="footer">
         
      <div className="bg-black h-max mt-10 lg:flex  lg:justify-around px-4  lg:px-24 py-12 w-full">
<div>
   <h1 className="text-white font-bold mb-6 text-2xl">Join the Mailing List</h1>
   <p  className="text-white text-lg  mb-3">Subscribe <span className='responsive'> to our newsletter </span> and receive all news from Netflix</p>
 
  <div className="flex mt-4 mb-4 ">  
   <input type="text" className="bg-black p-max  text-white w-full   border-white border solid" name="" id=""  placeholder="  Type your email..." />
 <button className="border text-white p-4  border-white"><h2>Subscribe</h2></button>
 </div>
 </div>
<div className="list flex justify-between">
    <div ><ul>
        <li><h1 className="text-white text-xl mb-6 font-bold">The Small Print</h1></li>
        <li className=" my-1 "><a className="text-white text-lg hover:underline" href="">Delivery</a></li>
        <li className=" my-1 "><a className="text-white text-lg hover:underline" href="">Returns</a></li>
        <li className=" my-1 "><a className="text-white text-lg hover:underline" href="">FAQ</a></li>

    </ul></div>
    
    <div className="ml-20">  <ul>
        <li><h1 className="text-white text-xl mb-6 font-bold">Social Media</h1></li>
        <li className=" my-1 "><a className="text-white text-lg my-3 hover:underline" href="https://www.facebook.com/profile.php?id=100078698447262">Facebook</a></li>
        <li className=" my-1 "><a className="text-white text-lg my-3 hover:underline" href="https://www.instagram.com/ismail_chebane/">Instagram</a></li>
        <li className=" my-1 "><a className="text-white text-lg my-3 hover:underline" href="https://www.linkedin.com/in/ismail-chebaane-555b75146/">Linkedin</a></li>

    </ul></div>
  

</div>

      </div>
      
      <div className="h-[40px] flex justify-center">
        <h1  className="mt-3 ">Proudly Powered by <a href='https://www.linkedin.com/in/ismail-chebaane-555b75146/'> CHEBAANE ismail</a></h1>
      </div>
      
       </div>
    )
}

export default Footer
