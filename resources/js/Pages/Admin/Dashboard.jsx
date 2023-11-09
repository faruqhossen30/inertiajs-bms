import CardDashboard from '@/Components/Admin/CardDashboard';
import Breadcum from '@/Components/Dashboard/Breadcum';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CurrencyBangladeshiIcon, TrophyIcon, UserIcon } from '@heroicons/react/24/outline';
import { Head } from '@inertiajs/react';

export default function Dashboard({bets}) {
    let betAmount = bets.reduce((accumulator, object) => {
        return accumulator + object.bet_amount;
    }, 0)
    let returnAmount = bets.reduce((accumulator, object) => {
        return accumulator + object.return_amount;
    }, 0)

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <Breadcum />
            <div className="bg-white dark:bg-gray-800 dark:text-slate-400 p-2 m-2">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
                    <CardDashboard title="Today Submit" data={bets.length} icon={<TrophyIcon className="h-7 text-slate-500 dark:text-slate-400 dark:hover:text-slate-300"/>} />
                    <CardDashboard title="Today Bet Amoount" data={`TK ${betAmount}`} icon={<CurrencyBangladeshiIcon className="h-7 text-slate-500 dark:text-slate-400 dark:hover:text-slate-300"/>} />
                    <CardDashboard title="Today Return Amoount" data={`TK ${returnAmount}`} icon={<CurrencyBangladeshiIcon className="h-7 text-slate-500 dark:text-slate-400 dark:hover:text-slate-300"/>} />
                </div>
            </div>
            {/* <!-- Icon Blocks --> */}


        </AuthenticatedLayout>
    );
}
