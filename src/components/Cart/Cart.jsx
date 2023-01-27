import { Add, AddCircle, PlayArrow } from '@mui/icons-material'
import React,{useState,useEffect} from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneIcon from '@mui/icons-material/Done';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { AddToCart,RemoveFromCart } from '../redux/CartSystem';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"
import ListItem from "../List/ListItem/ListItem"
function Cart() {
    const dispatch=useDispatch()
    const {carts}=useSelector(item=>item.user)
    useEffect(()=>{
      localStorage.setItem("MyList",JSON.stringify(carts))
     
       },[carts]) 

       const [added,setadd]=useState(true)
       const[ishover,sethover]=useState(false)
  
 
    return (
        <div className='bg-blackly h-max w-full'>
            <NavBar />.
            <h1 className="text-white text-3xl mt-14 mb-20 ml-10" >My List</h1>
         <div className="cart grid  gap-10   md:grid-cols-6 lg:grid-cols-4 grid-cols-[auto-fit_minmax(100px,_1fr)] px-10 pb-40">
       
            {carts.map(p=>{
           return (
            
            <div
         
            onMouseOut={()=>{sethover(false)}} onMouseOver={()=>{sethover(true)}}
            className="   hover:shadow-md hover:shadow-black   h-[120px]   truncate  hover:w-[275px] hover:rounded-lg hover:h-max  w-[225px]">
           <Link to='/watch'>
         
           <img   className={ishover?" h-[120px] w-full cover cursor-pointer":"h-full rounded-sm w-full cover cursor-pointer"} alt="" src={p.src}></img>
           </Link>
          {ishover&& <>
         
            <div className='itemInfo    flex flex-col p-[15px]'>
              <div className='Icons   flex   justify-between  mt-2'>
             <div className='flex '>
            <Link to="/watch" className='bg-white flex items-center w-max cursor-pointer      text-blackly rounded-full mr-2'> <PlayArrow fontSize="large" /></Link> 
            <span onClick={()=>{ dispatch(RemoveFromCart(p)) }} className='flex items-center w-max rounded-full  cursor-pointer text-white bg-blackly  mr-2'>
           
           {added? <HighlightOffIcon fontSize="large" ></HighlightOffIcon>:<Add fontSize="medium" />}   
             </span> 
            <span className='flex items-center w-max rounded-full p-1 cursor-pointer   text-grayly bg-blackly  mr-2'> <ThumbUpOutlinedIcon  fontSize="medium"/> </span> 
        
            <span className='flex items-center w-max rounded-full p-1  cursor-pointer   text-grayly bg-blackly  mr-2'>     <ThumbDownOffAltOutlinedIcon fontSize="medium" /></span>   
           </div>
           <span className='flex items-center w-max rounded-full p-1  cursor-pointer  text-white bg-blackly border-2 border-grayly mr-2'> <KeyboardArrowDownIcon /> </span>
       
              </div>
              <div className='ItemInfoTop flex mt-4'>
             <span className='text-grenly font-semibold mt-1  '>92% Match</span>
              <span className=' border ml-2 h-max  border-graly px-2 text-white font-semibold flex items-center w-max  '>16+</span>
               <span className='text-white  font-semibold ml-2 mt-1'>1h 49m</span>
             
               <span className=' border ml-2   border-graly px-1 text-white text-xs h-max mt-1  rounded-sm '>HD</span>
             </div>
             
   
              
            
             <div className='Genre  mt-2  flex  '>
                  <span className='text-white flex items-center font-semibold'>Action</span>
                  <span className='text-white flex items-center font-semibold'><div className='h-1 w-1 ml-2 mr-1   flex items-center  rounded-full bg-grayly'></div>True Crime</span>
                  <span className='text-white flex items-center font-semibold'><div className='h-1 w-1  ml-2 mr-1  flex items-center  rounded-full bg-grayly'></div>Fraud</span>
             </div>
   
            </div>
            
            </>
            }
            </div>
     
      
           )

            })

            }

         </div>


            <Footer />
        </div>
    )
}

export default Cart
