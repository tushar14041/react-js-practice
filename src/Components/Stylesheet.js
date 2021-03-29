import React from 'react'
import myStyle from './myStyle.css'


function Stylesheet(props) {
    const primary = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${primary} font-xl `}  > Stylesheet </h1>

        </div>
    )
}

export default Stylesheet
