import { useState } from "react"
import { Img } from "../utils/Img"


export const ImageBox=({
    img=null,
    style={},
    className,
    onClick=()=>{},
})=>{
    const [hover,setHover]=useState(false);
    
    const ComponentStyle={...{overflow:'hidden',width:'200px',height:'200px',display:'flex',justifyContent:'center',alignItems:'center',position:'relative'},...style}
    const ComponentClassName=" border rounded "+className
    return(<div style={ComponentStyle} className={ComponentClassName} onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)}>
        <Img
            imageFile={img} 
        />
    
        <div style={{position:'absolute',width:'100%',height:'100%',top:0,left:0 , backgroundColor:hover?'#0003':'#0000'}} onClick={onClick} ></div>
        {/* <img style={{width:'100%',height:'100%',objectFit:'contain'}} alt="img" src={'#'}/> */}
        {/* {show?<div onClick={()=>setShow(false)} style={{position:'fixed',top:'0px',left:0,width:'100%',height:'100%',backgroundColor:'#3333',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center',width:'80%',height:'80%'}}>
                <Img
                    imageFile={img}    
                />
            </div>
        </div>:<></>}         */}
    </div>)
}