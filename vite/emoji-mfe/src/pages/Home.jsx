import React, { useCallback, useEffect, useState } from 'react'
import { EmojiService } from '../services/EmojiService';
import { EmojiViewer } from '../component/EmojiViewer';
import { encodeEmoji } from '../utils/encodeEmoji';
import { useNavigateMfe } from '../hooks/useNavigateMfe';

const Home = () => {
    const {outside} = useNavigateMfe();
    const [emoji, setEmoji] = useState(null);

    const getEmoji = useCallback(
      async() => {
        const emojiResponse = await EmojiService.getRandomEmoji();
        setEmoji(encodeEmoji(emojiResponse.data.htmlCode[0]));
      },
      [],
    )
    

    useEffect(() => {
        getEmoji();
    }, [])
    
  return (
    <div>
        <h1>Emojis</h1>
        <EmojiViewer emoji={emoji} />
        <button onClick={()=> getEmoji()}>Try again</button>
        <hr/>
        <button onClick={()=>{outside('/')}}>Home</button>
        <button onClick={()=>{outside('/color')}}>Colors</button>
    </div>
  )
}

export default Home