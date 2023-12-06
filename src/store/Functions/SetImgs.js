

export const SetImgs=()=>{
    const images=JSON.parse(localStorage.getItem('images'));
    console.log(images);
    return images?images:[];
}