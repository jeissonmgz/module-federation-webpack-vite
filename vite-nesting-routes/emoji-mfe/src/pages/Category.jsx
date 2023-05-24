import React, { useCallback, useEffect, useState } from 'react'
import { EmojiService } from '../services/EmojiService';
import { EmojiViewer } from '../component/EmojiViewer';
import { useNavigateMfe } from '../hooks/useNavigateMfe';
import { EmojiCategories } from '../models/EmojiCategories';
import { encodeEmoji } from '../utils/encodeEmoji';
import { useParams } from 'react-router-dom';

const Category = () => {
    const [emojis, setEmojis] = useState([]);
    const { tag } = useParams();

    const getEmoji = useCallback(
      async() => {
        if(!tag) return;
        const emojisResponse = await EmojiService.getEmojisByCategory(tag);
        setEmojis(emojisResponse.data.map(emoji => encodeEmoji(emoji.htmlCode[0])));
      },
      [tag],
    )
    

    useEffect(() => {
        getEmoji();
    }, [tag])

    const {inside} = useNavigateMfe();
    
  return (
    <div>
        <h1>Tags</h1>
        <div>
        {
          EmojiCategories.map((category, i)=> <React.Fragment key={`${category}${i}`}> <a onClick={()=> {inside(`/tags/${category}`)}}>{category}</a> {i < EmojiCategories.length - 1 ? "|" : null}</React.Fragment>)
        }
        </div>
        <div style={{display:'flex', flexWrap:'wrap', flexDirection:'row', alignContent:'center', justifyContent:'space-between', alignItems:'center', gap:'24px'}}>
        {emojis.map((emoji, index) => <EmojiViewer key={`${emoji}${index}`} emoji={emoji} />)}
        </div>
        
        
    </div>
  )
}

export default Category