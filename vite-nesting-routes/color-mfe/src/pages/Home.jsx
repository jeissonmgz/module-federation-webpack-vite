import React, { useCallback, useEffect, useState } from 'react'
import { ColorService } from '../services/ColorService';
//import { encodeEmoji } from '../utils/encodeEmoji';

const hexadecimalColorRegex=/^([0-9a-f]{3}){1,2}$/i;

const Home = () => {
  
  const [colorInfo, setColorInfo] = useState(null);
    


  const [hexColor, setHexColor] = useState("");
    const getColorInfo = useCallback(
      async() => {
        const colorResponse = await ColorService.getHex(hexColor);
        setColorInfo(colorResponse.data)
        //setEmoji(encodeEmoji(emojiResponse.data.htmlCode[0]));
      },
      [hexColor],
    )
    

    const handleInputChange = (event) => {
      const {value} = event.target;
      
      const isValidColor = hexadecimalColorRegex.test(value)
      setHexColor(isValidColor?value.toUpperCase():'');
  }
    
  return (
    <div>
        <h1>Colors</h1>
        #<input style={{fontSize:24, width:96}} onChange={handleInputChange} onKeyDown={(event) => {
        if (!/[0-9a-fA-F]/.test(event.key)) {
          event.preventDefault();
        }
      }}
 maxLength={6} minLength={3} pattern={hexadecimalColorRegex}/>
        
        <br />
        <button onClick={()=> {getColorInfo()}} disabled={hexColor === ""}>Get Info</button>

        {
          colorInfo && (
            <>
            <br/>
            <hr/>
              <h2>{colorInfo.name.value}</h2>
              <img src={colorInfo.image.named} alt={colorInfo.name.value} width={100} height={100} />
              <ul>
                <li>Hexadecimal:<code>{colorInfo.hex.value}</code></li>
                <li>HSL:<code>{colorInfo.hsl.value}</code></li>
                <li>HSV:<code>{colorInfo.hsv.value}</code></li>
                <li>RGB:<code>{colorInfo.rgb.value}</code></li>
              </ul>
            </>
          )
        }
    </div>
  )
}

export default Home