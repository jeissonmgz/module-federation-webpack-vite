import React from 'react'

export const EmojiViewer = ({emoji}) => {
  return (
    <div>
        <div style={{fontSize: 100, lineHeight:1, paddingTop: 12}} dangerouslySetInnerHTML={{__html: emoji}}></div>
        <br/>
        <div style={{paddingTop: 4}}>{(emoji)}</div>
    </div>
  )
}