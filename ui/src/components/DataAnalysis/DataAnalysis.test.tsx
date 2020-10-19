import { mount, ReactWrapper } from 'enzyme'
import React from 'react'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import DataAnalysis from './DataAnalysis'
import DataMenu from './DataMenu'
import DataDisplay from './DataDisplay'

describe('DataAnalysis component', () => {
    let dataAnalysisWrapper: ReactWrapper

    // !! Make sure local server is running
    const client = new ApolloClient({
        uri: 'http://localhost:4000/',
        cache: new InMemoryCache(),
    })

    beforeAll(() => {
        dataAnalysisWrapper = mount(<DataAnalysis />, {
            wrappingComponent: ApolloProvider,
            wrappingComponentProps: { client: client },
        })
    })

    test('should render an DataMenu component', () => {
        const optionsComponent = dataAnalysisWrapper.find(DataMenu)
        expect(optionsComponent).toHaveLength(1)
    })

    test('should render a DataDisplay component', () => {
        const chartComponent = dataAnalysisWrapper.find(DataDisplay)
        expect(chartComponent).toHaveLength(1)
    })

    // When using a function component cannot use wrapper.state()
    // TODO -> find a way to test state

    // it('holds "dataSet" state', () => {
    //     expect(dataAnalysisWrapper.state()).toBeTruthy
    //     expect(dataAnalysisWrapper.state().dataSet).toBeTruthy
    // })
})
