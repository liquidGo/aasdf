import React from 'react'
import '../../App.css'

export default function ListTable({users, list }) {
    console.log(list,users,'kkkkk');
    return (
        <table style={{ margin: '0 auto' }}>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{users.find(user=>user.id===item.id)?.name||'未知'}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
