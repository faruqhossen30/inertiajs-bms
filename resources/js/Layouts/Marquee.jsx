import React from 'react'

export default function Marquee({header_notice}) {
    return (
        <section className="z-0">
            <marquee className=" text-purple-800 dark:text-slate-100 text-sm pt-2">
                {header_notice}
            </marquee>
        </section>
    )
}
