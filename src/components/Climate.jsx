 import { useEffect, useState } from 'react'

function Climater() {
  
          const [isColor, setIsColor] = useState(true)   
          const changeColor = ()=>{
           setIsColor(!isColor) 
                    
          }
    console.log(isColor)
          useEffect(()=> {
          console.log('Render');
          if(isColor===false){
              document.body.style = `background: radial-gradient(circle, #D5F3FF 0%, black)`
          }else{
              document.body.style = `background: radial-gradient(circle, #D5F3FF 0%, #51B4E8)`
          }
 
          },[isColor])// Hace que se ejecute la logica solo cuando uso el boton de ocultar contraseña
    return (
      <>
        <div>
          <input type="checkbox" id="switch" /><label for="switch" onClick={changeColor}>Toggle</label>
        </div>
       
      </>
    );
  }
  export default Climater;

