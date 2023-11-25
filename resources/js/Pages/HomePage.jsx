import AppLayout from '@/Layouts/AppLayout';
import { Link, Head } from '@inertiajs/react';
import Leftsidebar from '@/Components/Homepage/Leftsidebar';
import Betlist from '@/Components/Homepage/Betlist';
import Rightsidebar from '@/Components/Homepage/Rightsidebar';
import Marquee from '@/Layouts/Marquee';

export default function Homepage({ auth,games,matches,header_notice }) {

    return (
        <AppLayout>
            <Head title="Welcome" />
            <Marquee header_notice={header_notice}/>
            <div className='grid grid-cols-12 gap-1'>
                <Leftsidebar games={games} />
                <Betlist matches={matches}/>
                <Rightsidebar matches={matches}/>
            </div>
        </AppLayout>
    );
}
