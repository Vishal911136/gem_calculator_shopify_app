import React from 'react'

export default function SideBanner() {
  return (
    <div className="col-span-3 w-auto lg:col-span-1 rounded-[10px] overflow-hidden" style={{boxShadow:"0px 4px 58px 0px rgba(0, 0, 0, 0.25)"}}>
        <img className='object-cover h-full' src='/sidebanner.png' alt='sidebanner'/>
    </div>
  )
}
