import Head from 'next/head';
import Header from "./Header";
import '../styles/style.css';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>WooCommerce NextJs</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" />
            </Head>
            <Header />
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;