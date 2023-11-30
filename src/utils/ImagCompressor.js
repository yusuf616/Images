import Compressor from 'compressorjs'


export const ImagCompressor = async ({ file = null, storageFiles = null, setFiles = () => { }, firstImage = true, quality = .2 }) => {
    const loop = () => { };

    file ? await new Compressor(file, {
        quality: quality,
        success(result) {
            firstImage ? setFiles([result]) : setFiles(prv => [...prv, result]);
        }
    }) : loop();
}
