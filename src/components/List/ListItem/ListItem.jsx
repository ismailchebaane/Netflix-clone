import { Add, AddCircle, PlayArrow } from '@mui/icons-material'
import React,{useState,useEffect} from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { AddToCart,RemoveFromCart } from '../../redux/CartSystem';
function ListItem(props) {
  const dispatch=useDispatch()
  const {carts}=useSelector(item=>item.user)
  useEffect(()=>{
    localStorage.setItem("MyList",JSON.stringify(carts))
    
     },[carts]) 
   
  const [added,setadd]=useState(false)
  const[ishover,sethover]=useState(false)
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <div
         style={{left:ishover&& props.index*225-50+props.index*2.5}}
         onMouseOut={()=>{sethover(false)}} onMouseOver={()=>{sethover(true)}}
         className="ListItem        h-[120px] mr-[5px]  truncate  hover:w-[325px] hover:rounded-lg hover:h-[300px]  w-[225px]">
        <img   className={ishover?" h-[140px]  w-full cover cursor-pointer":"h-full rounded-sm w-full cover cursor-pointer"} alt="" src={props.src}></img>
       {ishover&& <>
        <Link to='/watch'>
        <video src={trailer} className=" h-[140px]  w-full cover cursor-pointer" autoPlay={true} loop></video>
        </Link>
         <div className='itemInfo    flex flex-col p-[15px]'>
           <div className='Icons   flex   justify-between  mt-2'>
          <div className='flex '>
         <Link to="/watch" className='bg-white flex items-center w-max cursor-pointer      text-blackly rounded-full mr-2'> <PlayArrow fontSize="large" /></Link> 
         <span className='flex items-center w-max rounded-full p-1 cursor-pointer text-white bg-blackly border-2 border-grayly mr-2'>
        
        { 
        added? <DoneIcon onClick={()=>{dispatch(RemoveFromCart(props));
          setadd(false)
          }} fontSize="medium" ></DoneIcon>:<Add  onClick={()=>{ dispatch(AddToCart(props));setadd(true) }} fontSize="medium" />}   
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
}

export default ListItem
