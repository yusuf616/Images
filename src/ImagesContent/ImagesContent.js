import { useEffect, useState } from "react"
import { AddBox } from "../components/AddBox"
import { ImagesContener } from "./ImagesContener"
import { MyModal } from "../components/MyModel";
import { FaRegImage } from 'react-icons/fa'
import { ImagCompressor } from "../utils/ImagCompressor";
import { useDispatch, useSelector } from "react-redux";
import { Img } from "../utils/Img";

export const ImagesContent=()=>{
    const [openModal,setOpenModal]=useState(false);
    const [image,setImage]=useState(null);
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
        images?.length?toggleModal():<></>;
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
                    <span style={{ display: 'block', fontSize: '12px' }}>Site Logo Ekle</span>
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
                                <span style={{ display: 'block', fontSize: '12px' }}> Site Logo Değiştir</span>
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
        >   
            {ModalContent}
            <AddBox 
                disabled={!image?.length}
                onClick={()=>{
                    dispatch({
                        type:'ADD_IMG',
                        payload:image?.length?image[0]:null      
                    });
                }}
                style={{width:'100px',height:'50px'}}


            />
        </MyModal>

        <div style={{width:'100%',height:'100%',display:'flex'}}>
            <div style={{width:'80%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <ImagesContener/>
            </div>
            <div style={{width:'20%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <AddBox onClick={handleClick}/>
            </div>
        </div>
    </>);
}

