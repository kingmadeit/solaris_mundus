import React from 'react'

const Copyright = () => {
  return (
    <section className='w-full flex py-4 text-gray-700 text-xs'>
      <span><small>&copy;</small> {new Date().getUTCFullYear()}</span>
      <span className='ml-2'>Solaris Mundus LLC.</span>
    </section>
  )
}

export default Copyright