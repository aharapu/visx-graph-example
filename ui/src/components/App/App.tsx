import React, { FunctionComponent } from 'react'
import './App.css'
import Header from '../Header'
import DataAnalysis from '../DataAnalysis'
import { TITLE, SUBTITLE } from '../../constants/textStrings'

const App: FunctionComponent = () => {
    return (
        <>
            <Header title={TITLE} subtitle={SUBTITLE} />
            <DataAnalysis />
        </>
    )
}

export default App
