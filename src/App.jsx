import { useState } from "react";
import cat1 from './assets/cat1.webp' 
import cat2 from './assets/cat2.webp' 
import cat3 from './assets/cat3.webp' 
import cat4 from './assets/cat4.webp' 

function App() {

const [SelectedImage, setSelectedImage] = useState(null);

const handleClick=(image)=>{
  
  setSelectedImage(image);
  
  
  
}


  return (
    <div>
      <h1>Image Gallery !!</h1>
      <p>Click on the any Image!</p>
      <div>
        <img onClick={()=>{
          handleClick({url:cat1,value:"cat1"})
        }}  src={cat1}  width={80} />
        <img onClick={()=>{
          handleClick({url:cat2,value:"cat2"})
        }} src={cat2} width={80} />
        <img onClick={()=>{
          handleClick({url:cat3,value:"cat3"})
        }} src={cat3} width={80} />
        <img onClick={()=>{
          handleClick({url:cat4,value:"cat4"})
        }} src={cat4} width={80} />
      </div>
      <div>
         {SelectedImage && <div>
            <h3>Selected Image</h3>
            <img src={SelectedImage.url} />
          </div>}
      </div>
    </div>
  )
}

export default App
