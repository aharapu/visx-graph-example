import { shallow, ShallowWrapper } from "enzyme"
import React from 'react'
import Data from './Data'
import Options from '../Options'
import Chart from '../Chart'


describe('Data component', () => {
    let dataWrapper: ShallowWrapper

    beforeAll(() => {
        dataWrapper = shallow(<Data />)
    })

    test('should render an Options component', () => {
        const optionsComponent = dataWrapper.find(Options)
        expect(optionsComponent).toHaveLength(1)
    })

    test('should render a Chart component', () => {
        const chartComponent = dataWrapper.find(Chart)
        expect(chartComponent).toHaveLength(1)
    })
    
})
