import { useEffect, useState } from "react";
// 0会被当成false取消掉，这里判断一下
export const isFalsy = (value) => value === 0 ? false : !value;

export const cleanObject = (object) => {
    console.log(object, 'object');
    const result = { ...object }
    Object.keys(object).forEach(key => {
        const value = object[key]
        // 如果是除零以外的false就从复制的新对象里删除同名键，比如''取反为true删除掉这一项，1取反为false不删除
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result;
}


export const useMount = (callback) => {
    useEffect(() => {
        callback()
    }, [])
}

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value)
    //执行当前 effect 之前对上一个 effect 进行清除
        useEffect(() => {
        const timeout = setTimeout(() => { setDebounceValue(value) }, delay)
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounceValue;
}