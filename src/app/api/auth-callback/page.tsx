import { trpc } from '@/app/_trpc/client'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const page = async() => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')
    
    const {data,isLoading}=trpc.authCallback.useQuery(undefined,{
      onSuccess:({success}:{success:boolean})=>{
        if(success){
          //user is synced to db
          router.push(origin ? `/${origin}`:'/dashboard')
        }
      }
    })
    return (
    <div>page</div>
  )
}

export default page