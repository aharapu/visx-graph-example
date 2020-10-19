import { shallow, ShallowWrapper } from "enzyme"
import React from 'react'
import DataMenu from './DataMenu'
import Adjustments from '../../Adjustments/Adjustments'

describe('DataMenu component', () => {
    
    let optionsWrapper: ShallowWrapper

    test('should display data options menu', () => {
        optionsWrapper = shallow(<DataMenu dataSets={[]} />)
        const menuContainer = optionsWrapper.find('div.options')
        expect(menuContainer).toHaveLength(1)
    })

    describe('Select Data input element', () => {
        it('should display a "Data Set" input with label and datalist', () => {
            const input = optionsWrapper.find('input#selected-data')
            expect(input).toHaveLength(1)
            
            const label = optionsWrapper.find('label[htmlFor="selected-data"]')
            expect(label.text()).toEqual('Data Set:')
            
            const datalist = optionsWrapper.find('datalist[id="data-set-options"]')
            expect(datalist).toHaveLength(1)
        })
    
        it('takes a dataSet array as prop and passes object keys to "selected-data" input datalist options', () => {
            let DATA_SETS: string[]
            let datalistOptions: ShallowWrapper

            // case zero
            DATA_SETS = []
            optionsWrapper = shallow(<DataMenu dataSets={DATA_SETS} />)
            datalistOptions = optionsWrapper.find('datalist option')
            expect(datalistOptions.length).toEqual(0)

            // case one
            DATA_SETS=['test for one']
            optionsWrapper = shallow(<DataMenu dataSets={DATA_SETS} />)
            datalistOptions = optionsWrapper.find('datalist option')
            expect(datalistOptions.length).toEqual(1)

            // case many
            DATA_SETS=['one', 'two', 'three']
            optionsWrapper = shallow(<DataMenu dataSets={DATA_SETS} />)
            datalistOptions = optionsWrapper.find('datalist option')

            datalistOptions.forEach( (dataOptWrap, idx) => {
                expect(dataOptWrap.props().value).toEqual(DATA_SETS[idx])
            })
        })
    }) 

    describe('Adjustments as child component', () => {
        
        it('renders an Adjustments component', () => {
            const adjustments = optionsWrapper.find(Adjustments)
        })
        
    })
    
})
