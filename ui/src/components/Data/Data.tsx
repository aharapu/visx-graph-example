import React, { FunctionComponent, useState } from 'react'
import Options from '../Options'
import Chart from '../Chart'

import DATA_SETS from '../../mocks/dataSets'

import { DataType, UsersData, PostsData } from '../../types'

import { useQuery } from '@apollo/client'
import { POSTS_QUERY, USERS_QUERY } from '../../constants/gqlQueries'

interface PropTypes {}

const Data: FunctionComponent<PropTypes> = () => {
    const { loading: postsLoading, error: postsError, data: postsData } = useQuery<PostsData>(POSTS_QUERY)
    const { loading: usersLoading, error: usersError, data: usersData } = useQuery<UsersData>(USERS_QUERY)
    const [dataType, setDataType] = useState<DataType>("")

    console.log('usersData', usersData)
    console.log('postsData', postsData)
    return (
        <div>
            <Options dataSets={DATA_SETS} />
            <Chart />
        </div>
    )
}

export default Data
