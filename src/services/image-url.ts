import noImage from "../assets/noimage.png"
const getCroppedImgUrl = (url:string) => {

   // Split the URL into two parts: the base URL and the file path
   try {
    const [baseUrl, filePath] = url.split('/media/');

  // Construct the new URL by adding the "crop/600/400" path to the base URL and appending the file path
  const newUrl = `${baseUrl}/media/crop/600/400/${filePath}`;
  
  return newUrl;

   } catch (error) {
    return noImage;
   }
  
}

export default getCroppedImgUrl;