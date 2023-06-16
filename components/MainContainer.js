
import Head from 'next/head';
import A from './A';

const MainContainer = ({ children, keywords }) => {
    return (
        <>
             <Head>
                <meta keywords={"nextjs" + keywords}></meta>
                <title>Main Page</title>
            </Head>

    <div className='navbar'>
                <A href={'/'} text="Main"></A>
                <A href={'/users'} text="Users"></A>
            </div>
            <div>
                {children}
            </div>
                 <style jsx>
                {
                    `
                    .navbar {
                        display: flex;
                        background: yellow;
                        padding: 15px;
                    }
                    `}
            </style>
        </>
    )
}
export default MainContainer;