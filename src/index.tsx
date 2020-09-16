import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'

const render = ()=>{
    ReactDOM.render(
        <div className='test'>123</div>,
        document.getElementById('app')
    )
}

render()