

export const DeleteImg=({
    images=[],
    payload=null
})=>{
    console.log(images);
    return [...images.filter((image)=>image?.id!==payload?.id)]
}