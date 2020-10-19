import React, { FunctionComponent } from 'react'

interface Props {
    dataSets: string[]
}

const DataMenu: FunctionComponent<Props> = ({dataSets}) => {
    return (
        <div className='options'>
            <label htmlFor='selected-data'>Data Set:</label>
            <input id='selected-data' name='selected-data' placeholder='Select Data' list='data-set-options'></input>
            <datalist id='data-set-options'>
                {dataSets.map( ds => <option key={ds} value={ds} /> )}
            </datalist>
        </div>
    )
}

export default DataMenu
