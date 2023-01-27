import { createSlice } from "@reduxjs/toolkit";

const initialState={
    carts:localStorage.getItem("MyList")?JSON.parse(localStorage.getItem("MyList")):[],
    quantity:0,
    sum:[],
    allquantity:0
}


const cartSystem = createSlice({
    name:"user",
    initialState,
    reducers:{
        AddToCart:(state,action)=>{
           const find =state.carts.findIndex(item=>item.id===action.payload.id)
           if(find>=0){
             state.carts[find].quantity+=1
           }else{
            const tempvar={...action.payload,quantity:1}
            state.carts.push(tempvar)
           }

           
        },
        RemoveFromCart:(state,action)=>{
           const nextCartItem=state.carts.filter((item)=>
            item.id!=action.payload.id
           );
           state.carts=nextCartItem;

        },
        DecreaseQuantite:(state,action)=>{
            const find =state.carts.findIndex(item=>item.id===action.payload.id)
            if(state.carts[find].quantity-1>1){ state.carts[find].quantity-=1
               }else{
                state.carts[find].quantity=1
               }
           
        },
        IncreaseQuantite:(state,action)=>{
            const find =state.carts.findIndex(item=>item.id===action.payload.id)
           state.carts[find].quantity+=1
             
              
           
        },
        SumAllInCart:(state,action)=>{
           
         let total= state.carts.map(p=>{
            return ((p.price>400?p.price-200:p.price)  *p.quantity)
         })
       
        
         state.sum =  total
       
        }


    }
})

export const {AddToCart,RemoveFromCart,DecreaseQuantite,IncreaseQuantite,SumAllInCart}=cartSystem.actions;
export default cartSystem.reducer;