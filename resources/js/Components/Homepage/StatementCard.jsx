import React from 'react'

export default function StatementCard({title,icon}) {
    return (
        <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700 shadow-lg">
            {/* Icon */}
            <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 dark:from-gray-600 to-violet-600 rounded-md mx-auto">
                {icon}
            </div>
            {/* End Icon */}
            <div className="mt-3">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-400">
                    {title}
                </h3>
            </div>
        </div>
    )
}
