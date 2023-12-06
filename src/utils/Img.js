export const Img = ({

    imageFile = null,
    resimYolu = '#',
    children
}) => {
    let url = null;
    console.log(imageFile);
    if (imageFile && typeof (imageFile) === 'object')
        url = URL.createObjectURL(imageFile);


    return (<>
        {url ? <img alt='img' src={url} style={{ height: '100%', width: '100%', objectFit: 'contain' }} /> : <img alt='img' src={resimYolu} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />}
        {children}
    </>)
}