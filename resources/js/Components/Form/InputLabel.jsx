import React from 'react'

export default function InputLabel({ labelFor,isRequired=false }) {
    return (
        <label htmlFor={labelFor} className="block text-sm font-medium dark:text-white capitalize">
            {labelFor}
            {isRequired ? <span className="text-sm text-red-600">*</span> : <span className="text-xs text-gray-600 px-1">(Optional)</span>}
            {/* <span className="text-sm text-red-600 mt-2">*</span> */}
            {/* <span className="text-xs text-gray-600 px-2">(Optional)</span> */}
        </label>
    )
}
