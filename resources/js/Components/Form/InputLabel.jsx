import React from 'react'

export default function InputLabel({labelFor}) {
  return (
    <label htmlFor={labelFor} className="block text-sm font-medium mb-2 dark:text-white capitalize">{labelFor}</label>
  )
}
