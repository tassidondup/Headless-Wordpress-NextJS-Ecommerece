import Head from 'next/head';
import Header from "./Header";
import '../styles/style.css';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>WooCommerce NextJs</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" />
                {/* <link rel="stylesheet" href="../styles/style.css" /> */}
            </Head>
            <Header />
                <div className="container">
                    { props.children }  
                </div>
        </div>
    );
}

export default Layout;