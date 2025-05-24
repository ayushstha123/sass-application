import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

export default async function page(){
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if(!user || !user.id) redirect('/auth-callback?origin=dashboard')
    return (
        <div className='mt-20 text-black'>{user?.email}</div>
    )
}
