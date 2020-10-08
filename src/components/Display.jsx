import React from 'react'/*importaçoes padroes.. */
import './Display.css'

export default props =>/*cria função com div propriedade display e value valor exibido no display  */
    <div className="display">{props.value}</div>