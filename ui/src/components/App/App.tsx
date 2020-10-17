import React, { FunctionComponent } from 'react'
import './App.css'
import Header from '../Header'
import Data from '../Data'
import { TITLE, SUBTITLE } from '../../constants/textStrings'

const App: FunctionComponent = () => {
    return (
        <>
            <Header title={TITLE} subtitle={SUBTITLE} />
            <Data />
        </>
    )
}

export default App
