import React, { useState, useEffect } from 'react'
import qs from 'qs'
import ListTable from './ListTable'
import Search from './Search'
import { cleanObject, useDebounce, useMount } from 'utils/Utils'
import '../../App.css'
const apiUrl = process.env.REACT_APP_API_URL
export default function Index() {
    // console.log(apiUrl, 'aaaa');
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const debouncedParam = useDebounce(param, 2000)
    console.log(debouncedParam,'aaa');

    const [list, setList] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`)
            .then(async res => {
                // console.log( await res.json(),'resss');
                setList(await res.json())
                console.log(list, 'list11');
            })
    }, [debouncedParam])
    useMount(() => {
        fetch(`${apiUrl}/users`)
            .then(async res => {
                setUsers(await res.json())
            })
    }, [])
    console.log(qs, 'qs');

    return (
        <div>
            <Search param={param} users={users} setParam={setParam}></Search>
            <ListTable users={users} list={list}></ListTable>
        </div>
    )
}