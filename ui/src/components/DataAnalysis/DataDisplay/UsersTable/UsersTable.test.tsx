import { shallow, ShallowWrapper } from "enzyme"
import React from 'react'
import UsersTable from './UsersTable'


describe('UsersTable component', () => {

    let usersTable: ShallowWrapper

    beforeAll(() => {
        usersTable = shallow(<UsersTable />)
    })

    it('should render without crashing', () => {
        const usersTableWrapper = shallow(<UsersTable />)
    })

    it('displays a single container with class "users-table"', () => {
        expect(usersTable.find('.users-table')).toHaveLength(1)
    })
    
    
})
