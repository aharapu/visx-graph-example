import React, { Component } from 'react'
import Options from '../Options'
import Chart from '../Chart'
import DATA_SETS from '../../mocks/dataSets'
import { DataType } from "../../types"

interface PropTypes {

}

type DataState = {
    dataType: DataType
}

class Data extends Component<PropTypes, DataState> {
    constructor(props: PropTypes) {
        super(props)
        this.state = {
            dataType: ""
        }
    }

    render() {
        return (
            <div>
                <Options dataSets={DATA_SETS} />
                <Chart />
            </div>
        )
    }  
}

export default Data
