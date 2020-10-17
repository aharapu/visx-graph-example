import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import App from './App'
import Header from '../Header'
import Data from '../Data'

describe('App component', () => {
    let appWrapper: ShallowWrapper

    beforeAll(() => {
        appWrapper = shallow(<App />)
    })

    it('renders a Header component', () => {
        expect(appWrapper.find(Header)).toHaveLength(1)
    })

    it('renders a Data component', () => {
        expect(appWrapper.find(Data)).toHaveLength(1)
    })
})
