import { useState } from "react";
 

function App() {

const [SelectedImage, setSelectedImage] = useState("");

const handleClick=(url)=>{
  
  setSelectedImage(url);
  
}

  return (
    <div>
      <h1>Image Gallery !!</h1>
      <p>Click on the any Image!</p>
      <div>
        <img onClick={()=>{
          handleClick("src/assets/cat1.webp")
        }}  src="src/assets/cat1.webp"  width={80} />
        <img onClick={()=>{
          handleClick("src/assets/cat2.webp")
        }} src="src/assets/cat2.webp" width={80} />
        <img onClick={()=>{
          handleClick("src/assets/cat3.webp")
        }} src="src/assets/cat3.webp" width={80} />
        <img onClick={()=>{
          handleClick("src/assets/cat4.webp")
        }} src="src/assets/cat4.webp" width={80} />
      </div>
      <div>
         {SelectedImage && <div>
            <h3>Selected Image</h3>
            <img src={SelectedImage} />
          </div>}
      </div>
    </div>

  )
}

export default App
