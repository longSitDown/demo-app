import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'

import style from './index.less'

const render = () => {
    ReactDOM.render(
        <div className={style.test}>
            <Button type='primary' className={style.test}>按钮</Button>
            <Button type='dashed'>按钮</Button>
            <Button type='default'>按钮</Button>
            <Button type='link'>按钮</Button>
            <Button type='text'>按钮</Button>
            <Button type='ghost'>按钮</Button>
        </div>,
        document.getElementById('app')
    )
}

render()