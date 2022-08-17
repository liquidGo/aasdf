import React from 'react'
import '../../style/iii.less'

type Props = {}

export default function Login({ }: Props) {
    const handleSubmit = () => {
    }
    return (
        <div className='box-color'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>账户：</label>
                    <input type='text' id='username'></input>
                </div>
                <div>
                    <label htmlFor='password'>密码：</label>
                    <input type='password' id='password'></input>
                </div>
                <button type='submit'>登录</button>
            </form>
        </div>

    )
}