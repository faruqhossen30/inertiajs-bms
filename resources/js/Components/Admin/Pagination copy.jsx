import { Link } from '@inertiajs/react';
import React from 'react'

export default function Pagination({ links }) {
    console.log(links);
    return (
        <nav className="flex items-center space-x-2 py-2">
            {/* <a className="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md pointer-events-none" href="#">
                <span aria-hidden="true">«</span>
                <span>Previous</span>
            </a> */}
            {
                links.map((item, index) => {
                    return(
                        <Link href={item.url} key={index} className="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium" aria-current="page">{item.label.replace('&laquo;', '').replace('&raquo;', '')}</Link>
                    );
                    // {
                    //     item.active == 'true' ?
                    //         <Link href={item.url} key={index} className="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full" aria-current="page">{item.label}</Link>
                    //         :
                    //         <a className="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md pointer-events-none" href="#">
                    //             <span aria-hidden="true">«</span>
                    //             <span>Previous</span>
                    //         </a>
                    // }



                })
            }


            {/* <a className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md" href="#">
                <span>Next</span>
                <span aria-hidden="true">»</span>
            </a> */}
        </nav>
    )
}
