import { useSelector } from "react-redux";
import { ImageBox } from "../components/ImageBox";
import { useState } from "react";
import { Img } from "../utils/Img";

export const ImagesContener=()=>{
    const Images =useSelector(state=>state?.images);
    const [show,setShow]=useState(false);
    return(<div style={{
        width:'90%',
        height:'90%',
        border:'2px solid #ddd',
        borderRadius:15,
        padding:'15px'
    }}>
        {Images.map((i,index)=><div style={{display:'inline-block',padding:'10px',margin:'auto'}} key={index}>
            <ImageBox img={i.img} onClick={()=>setShow(i.img)}   />
        </div>)}
        {show?<div onClick={()=>setShow(false)} style={{position:'fixed',top:'0px',left:0,width:'100%',height:'100%',backgroundColor:'#3333',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center',width:'80%',height:'80%'}}>
                <Img
                    imageFile={show}    
                />
            </div>
        </div>:<></>}      
    </div>);
}