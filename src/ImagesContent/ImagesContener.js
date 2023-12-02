import { useSelector } from "react-redux";
import { ImageBox } from "../components/ImageBox";
import { useState } from "react";
import { Img } from "../utils/Img";
import { FaTimes } from "react-icons/fa";

export const ImagesContener=()=>{
    const Images =useSelector(state=>state?.images);
    const [show,setShow]=useState(false);
    console.log(show);
    return(<div 
        className="row"
        style={{
            overflowY:'scroll',
            width:'90%',
            height:'90%',
            border:'2px solid #ddd',
            borderRadius:15,
            padding:'15px'
        }}
    >
        {Images.map((i,index)=><div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2 my-1" key={index}>
            <ImageBox style={{width:'100%'}}  item={i} onClick={()=>setShow(i)}   />
        </div>)}
        {show?<div  style={{position:'fixed',top:'0px',left:0,width:'100%',height:'100%',backgroundColor:'#3333',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <FaTimes size={30} style={{position:'absolute',top:10,right:10,cursor:'pointer'}} color="#f00" onClick={()=>setShow(false)} />
            <div style={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center',width:'80%',height:'80%'}}>
                <Img
                    imageFile={show?.image}    
                />
            </div>
            <div style={{position:'absolute',width:'100%',textAlign:'center',bottom:'20px'}}>
                <div style={{display:'inline-block',padding:'10px',maxWidth:'200px',color:'#fff',backgroundColor:'#000d',borderRadius:'10px'}}>
                    {show?.discrption}
                  
                </div>
            </div>

        </div>:<></>}      
    </div>);
}