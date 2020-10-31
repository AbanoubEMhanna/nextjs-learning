import Link from "next/link";
import Head from 'next/head'

export default function Details() {
    return (
        <>
            <Head>
                <title>Details Page</title>
            </Head>
            <div>
                <Link href="/">
                    <a >back to home</a>
                </Link>
                <h2>Details</h2>
                <Link as="/elpop/store" href="/[pathParent]/[pathChild]">
                    <a >el pop store</a>
                </Link>
            </div>
        </>
    )
}