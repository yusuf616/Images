import { useEffect, useState } from "react"
import { AddBox } from "../components/AddBox"
import { ImagesContener } from "./ImagesContener"
import { MyModal } from "../components/MyModel";
import { FaPlus, FaRegImage } from 'react-icons/fa'
import { ImagCompressor } from "../utils/ImagCompressor";
import { useDispatch, useSelector } from "react-redux";
import { Img } from "../utils/Img";

export const ImagesContent=()=>{
    const [imagesNumber,setImagesNumber]=useState(null);
    const [openModal,setOpenModal]=useState(false);
    const [image,setImage]=useState(null);
    const [discrption,setDiscrption]=useState('');
    const [hover, setHover] = useState(false);
    const dispatch=useDispatch();
    const images=useSelector(state=>state?.images);
    const toggleModal=()=>{
        setImage(null);
        setOpenModal(!openModal)
    }
    const handleClick=()=>{
        toggleModal();
        
    }

    const handleImageChange=(e)=>{

        ImagCompressor({
            file: e.target.files[0],
            setFiles:setImage
        })
    }

    useEffect(()=>{
       setImagesNumber(images?.length); 
    },[]);

    useEffect(()=>{
        if(images?.length>imagesNumber){
            toggleModal();
           
        }
        setDiscrption('');
        setImagesNumber(images?.length); 
    },[images]);

    const ModalContent=<div style={{height:'200px',width:'200px',margin:'auto',position:'relative'}}>
        <input
            type="file"
            name='foto'
            id="upload"
            hidden
            // multiple
            onChange={handleImageChange}
            accept="image/jpeg, image/png, image/jpg"
        />
        {!image?.length ?
            <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0009' }}>
                <label style={{ textAlign: 'center', cursor: 'pointer', color: "#fff" }} htmlFor="upload" >
                    <FaRegImage
                        size={40}
                    />
                    <span style={{ display: 'block', fontSize: '12px' }}>Add Image</span>
                </label>
            </div> :
            <div
                style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onPointerEnter={() => setHover(true)}
                onPointerLeave={() => setHover(false)}
            >
                {
                    <Img imageFile={image?.length ? image[0] : null} >
                        <div style={{ position: 'absolute', top: 0, display: 'flex', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', opacity: hover ? 1 : 0, backgroundColor: '#0004' }}>

                            <label style={{ textAlign: 'center', cursor: 'pointer', color: "#fff" }} htmlFor="upload" >
                                <FaRegImage
                                    size={40}
                                />
                                <span style={{ display: 'block', fontSize: '12px' }}> Change Image</span>
                            </label>
                        </div>
                    </Img>
                }
        </div>}


      
    </div>


    return (<>
        <MyModal
            isOpen={openModal}
            toggle={toggleModal}
            title="Add Image"
            modalFooter={ <AddBox  
                disabled={!image?.length}
                onClick={()=>{
                    dispatch({
                        type:'ADD_IMG',
                        payload:{image:image?.length?image[0]:null,discrption:discrption}      
                    });
                }}
                style={{width:'100px',height:'50px'}}

            />}
        >   
            {ModalContent}
            <textarea onChange={(e)=>setDiscrption(e?.target?.value)} style={{width:'100%',height:'200px',resize:'none',marginTop:'10px',padding:'10px',textAlign:'justify',borderRadius:'10px'}} placeholder="discrption..." >

            </textarea>
        </MyModal>

        <div className="add-button">
            <AddBox onClick={handleClick}>
                <FaPlus size={30}/>
            </AddBox>
        </div>
        <div style={{width:'100%',height:'100%',display:'flex'}}>
            <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <ImagesContener/>
            </div>
        </div>
        
    </>);
}

