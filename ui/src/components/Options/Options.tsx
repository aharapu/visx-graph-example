import React, { FunctionComponent } from 'react'

interface Props {
    dataSets: string[]
}

const Options: FunctionComponent<Props> = ({dataSets}) => {
    return (
        <div className='options'>
            <label htmlFor='data-set'>Data Set:</label>
            <input id='data-set' name='data-set' placeholder='Select Data' list='data-set-list'></input>
            <datalist id='data-set-list'>
                {dataSets.map( ds => <option key={ds} value={ds} /> )}
            </datalist>
        </div>
    )
}

export default Options
