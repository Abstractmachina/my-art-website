import { cn } from '@/utils/tailwind/cn';
import React from 'react';


type Props = {
  className?: string
}

const BlogInMaintenance = ({className}:Props) => {
  return (
    <div className={cn("h-80 w-full flex justify-center items-center",className)}>Sorry! This page is currently down for maintenance! Please check back later.</div>
  )
}

export default BlogInMaintenance;