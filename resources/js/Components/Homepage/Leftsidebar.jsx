import { Link } from '@inertiajs/react';
import React from 'react'

export default function Leftsidebar({games}) {
  return (
    <div className='hidden lg:block lg:col-span-2 bg-white border border-purple-300'>
            <div className="bg-purple-800">
                <h4 className="text-white font-bold p-1 text-center">Sports</h4>
            </div>
            <div className="flex flex-col space-y-1 divide-y divide-slate-200">
                {
                    games.map((game, index) => {
                        return <Link href='#'  className="flex space-x-1 pl-2 last:border-b-0 p-1 hover:bg-green-100 " key={index}>
                            <img src={window.location.protocol+'//'+ window.location.host +'/'+game.image} className="h-5" alt="" />
                            <span>{game.name}</span>
                        </Link>
                    })
                }

            </div>
        </div>
  )
}
