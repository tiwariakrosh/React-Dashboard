import React from 'react';
import User from "../users.json"

export default function useAxios() {
    return (
        <div className=''>
            {User.map((curElm) => {
                return curElm.category;
            })}
<h1>Hello UseAxios</h1>
        </div>
    )
}
