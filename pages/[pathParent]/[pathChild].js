import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router'
export default function Duck() {
    const router = useRouter()
    console.log(router.query);
    return (
        <>
            <Head>
                <title>{router.query.pathParent}-{router.query.pathChild}</title>
            </Head>
            <div>
                <Link href="/">
                    <a>home</a>
                </Link>
                <div>path: {router.query.pathParent}/{router.query.pathChild} wilcome ducks</div>
            </div>
        </>

    )

}