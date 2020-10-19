import { shallow } from "enzyme"
import React from 'react'
import UsersTable from './UsersTable'


describe('UsersTable component', () => {
    it('should render without crashing', () => {
        const usersTableWrapper = shallow(<UsersTable />)
    })
    
})
