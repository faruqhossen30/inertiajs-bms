import { Link } from '@inertiajs/react';
import React from 'react'

export default function Leftsidebar({games}) {
  return (
    <div className='hidden lg:block lg:col-span-2 bg-white dark:bg-gray-900 border dark:border-gray-700'>
            <div className="bg-gradient-to-b from-violet-700 to-purple-900 dark:bg-gray-700">
                <h4 className="text-white font-bold p-1 text-center">Sports</h4>
            </div>
            <div className="flex flex-col space-y-1 divide-y divide-slate-200 dark:divide-gray-700">
                {
                    games.map((game, index) => {
                        return <Link href='#'  className="flex space-x-1 pl-2 last:border-b-0 p-1 hover:bg-green-100 " key={index}>
                            <img src={window.location.protocol+'//'+ window.location.host +'/'+game.image} className="h-5" alt="" />
                            <span className="dark:text-gray-400">{game.name}</span>
                        </Link>
                    })
                }

            </div>
        </div>
  )
}
