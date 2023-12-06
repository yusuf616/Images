
export const AddImg=({
    images=[],
    payload=null
})=>{

    images.push({id:images?.length?images[images?.length-1]?.id+1:1,...payload})
    localStorage.setItem("images",JSON.stringify(images));
    console.log(images);
    return images;
};