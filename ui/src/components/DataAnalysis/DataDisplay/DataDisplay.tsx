import React, { FunctionComponent } from 'react'

import { DisplayVariants } from '../../../types'

import UsersTable from './UsersTable'
import PostsChart from './PostsChart'

const displayVariants: DisplayVariants = {
    users: <UsersTable />,
    posts: <PostsChart />
}

interface Props {
    dataVariant?: keyof DisplayVariants
}

const DataDisplay: FunctionComponent<Props> = ({dataVariant}) => {

    if (!dataVariant) return null

    return (
        <>
            <h2 className='data-display-title'>{dataVariant}</h2>
            {displayVariants[dataVariant]}
        </>
    )
}

export default DataDisplay
