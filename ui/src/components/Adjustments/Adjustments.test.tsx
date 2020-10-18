import { shallow, ShallowWrapper } from "enzyme"
import React from 'react'
import Adjustments from './Adjustments'

describe('Adjustments component', () => {
    let adjustmentsWrapper: ShallowWrapper

    it('renders without crashing', () => {
        adjustmentsWrapper = shallow(<Adjustments />)
    })
    
})
