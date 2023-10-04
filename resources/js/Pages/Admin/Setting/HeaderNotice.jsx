import { useForm, usePage } from '@inertiajs/react'
import React from 'react'
import { ClipboardIcon } from '@heroicons/react/24/outline'

export default function HeaderNotice() {
    const {headerNotice} = usePage().props
    const { data, setData, post, processing, errors } = useForm({
        header_notice: headerNotice ?? '',
    })

    console.log(headerNotice);

    function submit(e) {
        e.preventDefault()
        console.log(data);
        post(route('admin.setting.headernotice'));
    }

    return (
        <div id="vertical-tab-with-border-2" className="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-2">

            <form onSubmit={submit}>
                <div>
                    <label htmlFor="hs-feedback-post-comment-textarea-1" className="block mb-2 text-sm font-medium dark:text-white">Header Notice</label>
                    <div className="mt-1">
                        <textarea id="hs-feedback-post-comment-textarea-1"
                        value={data.header_notice} onChange={e => setData('header_notice', e.target.value)}
                        name="hs-feedback-post-comment-textarea-1" rows="3" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder="Leave your comment here...">
                        </textarea>
                    </div>
                </div>
                <div>
                <p className="text-sm text-red-600 mt-2">{errors.header_notice}</p>
                </div>
                <button type="submit" className="mt-3 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                    <ClipboardIcon className="h-4 w-4" />
                    Save
                </button>
            </form>
        </div>
    )
}
