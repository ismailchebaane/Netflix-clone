import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useRef, useState ,useEffect} from 'react'
import ListItem from './ListItem/ListItem'
import { useDispatch,useSelector } from 'react-redux';
function List(props) {
    const listRef=useRef()
    const [slideNb,setslide]=useState(0)
    const [isClick,setClick]=useState(false)
    const dispatch=useDispatch()
    const {carts}=useSelector(item=>item.user)
    useEffect(()=>{
      localStorage.setItem("MyList",JSON.stringify(carts))
      
       },[carts]) 
     
  
    const handleClick=(direction)=>{
        setClick(true)

        let distance=listRef.current.getBoundingClientRect().x-50
        if(direction==="left"&&slideNb>0){
            setslide(slideNb-1)
           listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if(direction==="right"&&slideNb<5){
             setslide(slideNb+1)
             listRef.current.style.transform =`translateX(${-230 +distance}px)`;
          }
    }
    return (
        <div className='List    w-full  mt-[20px]'>
           <span className='ListTitle  text-white text-[20px] font-medium ml-[50px]  '>{props.title}</span>
           <div className='wrapper   relative  '>
             <ArrowBackIosOutlined  onClick={()=>{ handleClick("left")}} style={{height: "100%",width:"50px",display:!isClick&&"none"}} className='sliderArrow  left' />
             <div className="containerr mt-[10px] w-max  flex  ml-[50px]" ref={listRef}> 
              
              <ListItem id={0+props.id}   index={0} src={props.src[0]} />
              <ListItem id={1+props.id}   index={1} src={props.src[1]}  />
              <ListItem id={2+props.id}   index={2}  src={props.src[2]} />           
              <ListItem id={3+props.id}   index={3}  src={props.src[3]}/>
              <ListItem id={4+props.id}   index={4}  src={props.src[4]} />
              <ListItem id={5+props.id}   index={5} src={props.src[5]} />
              <ListItem id={6+props.id}   index={6} src={props.src[1]} />
              <ListItem id={7+props.id}   index={7} src={props.src[0]}  />
              <ListItem id={8+props.id}   index={8} src={props.src[4]} />           
              <ListItem id={9+props.id}   index={9} src={props.src[3]} />
              
             </div>
             <ArrowForwardIosOutlined  onClick={()=>{ handleClick("right")}} style={{height: "100%",width:"50px"}} className='sliderArrow right' />
           </div>
        </div>
    )
}

export default List
