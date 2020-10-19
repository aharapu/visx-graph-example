import { shallow } from "enzyme"
import React from 'react'

import PostsChart from './PostsChart'

describe('PostsChart component', () => {
    it('should render without crashing', () => {
        const postsChartWrappper = shallow(<PostsChart />)
    })
    
})
