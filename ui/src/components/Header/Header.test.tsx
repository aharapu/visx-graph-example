import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Header from './Header'

describe('Header component', () => {
    const title = 'Header Title'
    const subtitle = 'Header Subtitle'
    let headerWrapper: ShallowWrapper

    beforeAll(() => {
        headerWrapper = shallow(<Header title={title} subtitle={subtitle} />)
    })

    it('contains a single h1 element', () => {
        const h1 = headerWrapper.find('h1')
        expect(h1).toHaveLength(1)
    })
    it('renders a title prop inside the h1 element', () => {
        const h1 = headerWrapper.find('h1')
        expect(h1.text()).toContain(title)
    })
    it('contains a single h3 element', () => {
        const h3 = headerWrapper.find('h3')
        expect(h3).toHaveLength(1)
    })
    it('renders a subtitle prop inside the h3 element', () => {
        const h3 = headerWrapper.find('h3')
        expect(h3.text()).toContain(subtitle)
    })
})
