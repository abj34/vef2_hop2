import Layout from '../components/Layout';
import Link from 'next/link';

export default function fourOfour() {
    return (
        <Layout title='404'>
            <div className='centered'>
                <h2>404 - Page Not Found</h2>
                <Link href='/'>Go back home</Link>
            </div>
        </Layout>
    );
}

