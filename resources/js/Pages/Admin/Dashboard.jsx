import CardDashboard from '@/Components/Admin/CardDashboard';
import Breadcum from '@/Components/Dashboard/Breadcum';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CurrencyBangladeshiIcon, FaceFrownIcon, PuzzlePieceIcon, TrophyIcon, UserIcon } from '@heroicons/react/24/outline';
import { Head } from '@inertiajs/react';

export default function Dashboard(
    { bets, user_blance,club_blance }
) {
    let betAmount = bets.reduce((accumulator, object) => {
        return accumulator + object.bet_amount;
    }, 0)
    let returnAmount = bets.reduce((accumulator, object) => {
        return accumulator + object.return_amount;
    }, 0)

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <Breadcum page="Overview" />

            <div className="px-2 pb-2 inline-flex rounded-lg shadow-sm">
                <button type="button" className="py-2 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    All
                </button>
                <button type="button" className="py-2 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Today
                </button>
                <button type="button" className="py-2 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Week
                </button>
                <button type="button" className="py-2 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    This Month
                </button>
            </div>

            <div className="dark:text-slate-400 px-2">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-2 md:gap-6">
                    <CardDashboard title="Bet Submit" data={bets.length} icon={<PuzzlePieceIcon className="h-7 text-gray-800 dark:text-gray-400 dark:hover:text-slate-300" />} />
                    {/* <CardDashboard title="User Win" data='0' icon={<TrophyIcon className="h-7 text-gray-800 dark:text-gray-400 dark:hover:text-slate-300" />} />
                    <CardDashboard title="User Loss" data={bets.length} icon={<FaceFrownIcon className="h-7 text-gray-800 dark:text-gray-400 dark:hover:text-slate-300" />} />
                    <CardDashboard title="Total Income" data={bets.length} icon={<CurrencyBangladeshiIcon className="h-7 text-gray-800 dark:text-gray-400 dark:hover:text-slate-300" />} />
                    <CardDashboard title="Total Deposit" data={bets.length} icon={<CurrencyBangladeshiIcon className="h-7 text-gray-800 dark:text-gray-400 dark:hover:text-slate-300" />} />
                    <CardDashboard title="Total Withdraw" data={bets.length} icon={<CurrencyBangladeshiIcon className="h-7 text-gray-800 dark:text-gray-400 dark:hover:text-slate-300" />} />
                    <CardDashboard title="Total Withdraw" data={bets.length} icon={<CurrencyBangladeshiIcon className="h-7 text-gray-800 dark:text-gray-400 dark:hover:text-slate-300" />} /> */}
                    <CardDashboard title="Today Bet Amoount" data={`TK ${betAmount}`} icon={<CurrencyBangladeshiIcon className="h-7 text-gray-800 dark:text-gray-400 dark:hover:text-slate-300" />} />
                    <CardDashboard title="Today Return Amoount" data={`TK ${returnAmount}`} icon={<CurrencyBangladeshiIcon className="h-7 text-gray-800 dark:text-gray-400 dark:hover:text-slate-300" />} />
                    <CardDashboard title="Total User Balance" data={`৳ ${user_blance}`} icon={<CurrencyBangladeshiIcon className="h-7 text-gray-800 dark:text-gray-400 dark:hover:text-slate-300" />} />
                    <CardDashboard title="Total Club Balance" data={`৳ ${club_blance}`} icon={<CurrencyBangladeshiIcon className="h-7 text-gray-800 dark:text-gray-400 dark:hover:text-slate-300" />} />
                </div>
            </div>
            {/* <!-- Icon Blocks --> */}


        </AuthenticatedLayout>
    );
}
