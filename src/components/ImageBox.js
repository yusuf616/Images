import { useState } from "react"
import { Img } from "../utils/Img"
import { FaExpand, FaTimes } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import * as ReduxActions from '../store/actions/actionsTypes'
export const ImageBox=({
    // img=null,
    style={},
    item=null,
    className,
    onClick=()=>{},
})=>{
    const dispatch=useDispatch();
    const [hover,setHover]=useState(false);

    const handleDelete=async()=>{
        console.log('delete');
        dispatch({
            type:ReduxActions.DELETE_IMG,
            payload:item
        })
    }
    const ComponentStyle={...{overflow:'hidden',width:'200px',height:'200px',display:'flex',justifyContent:'center',alignItems:'center',position:'relative'},...style}
    const ComponentClassName=" border rounded "+className
    return(<div style={ComponentStyle} className={ComponentClassName} onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)}>
        <Img
            imageFile={item.image} 
        />
    
        <div style={{position:'absolute',width:'100%',height:'100%',top:0,left:0,display:'flex',justifyContent:'center',alignItems:'center' , backgroundColor:'#0003',opacity:hover?1:0}}  >
            <FaTimes style={{position:'absolute',top:10,right:10,cursor:'pointer'}} color="#f00" onClick={()=>handleDelete()} />
            <FaExpand style={{cursor:'pointer'}} size={30} color='#fff' onClick={onClick}/>
        </div>
    </div>)
}