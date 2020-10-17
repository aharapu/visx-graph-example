import React, { FunctionComponent } from 'react'
import propTypes from './propTypes'

const Header: FunctionComponent<propTypes> = ({title, subtitle}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    )
}

export default Header
