import React from 'react';
import Head from "next/head";
import Layout from "./Layout";


const PageNotFound = () => {
    return (
        <Layout>
            <Head>
                <title>Page Not Found - Rzal Car Hire</title>
            </Head>
            <div className='tw-w-[100%] tw-min-h-[20rem] tw-grid tw-place-items-center tw-font-medium'>404 - Page not found</div>
        </Layout>
    )
}

export default PageNotFound

export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}