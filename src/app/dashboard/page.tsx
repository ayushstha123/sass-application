import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import React from 'react'

export default async function page(){
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log(user)
    return (
        <div className='mt-20 text-black'>{user?.email}</div>
    )
}
