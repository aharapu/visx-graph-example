import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'

import DataDisplay from './DataDisplay'
import UsersTable from './UsersTable'
import PostsChart from './PostsChart'

describe('DataDisplay component', () => {
    let dataDisplayWrapper: ShallowWrapper

    it('should render without crashing', () => {
        dataDisplayWrapper = shallow(<DataDisplay />)
    })

    describe('dataVariant prop', () => {
        it('should trigger a null return when undefined', () => {
            dataDisplayWrapper = shallow(
                <DataDisplay dataVariant={undefined} />
            )
            expect(dataDisplayWrapper.html()).toBeNull()
        })

        it('renders appropriate title when provided', () => {
            const DATA_VARIANT = 'users'
            dataDisplayWrapper = shallow(
                <DataDisplay dataVariant={DATA_VARIANT} />
            )
            const h2 = dataDisplayWrapper.find('h2.data-display-title')
            expect(h2.text()).toEqual(DATA_VARIANT)
        })
    })

    it('renders UsersTable component when appropiate dataVariant prop is provided', () => {
        dataDisplayWrapper = shallow(<DataDisplay dataVariant="users" />)
        expect(dataDisplayWrapper.find(UsersTable)).toHaveLength(1)
    })

    it('renders PostsChart component when appropiate dataVariant prop is provided', () => {
        dataDisplayWrapper = shallow(<DataDisplay dataVariant="posts" />)
        expect(dataDisplayWrapper.find(PostsChart)).toHaveLength(1)
    })
})
