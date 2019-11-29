import Head from "next/head";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  render() {
    const { metatitle, title, description, children } = this.props;
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="description" content={description} />
          <title>{metatitle}</title>
        </Head>
        <Header />
        <Navbar />
        <div className="content">
          <h1>{title}</h1>
          {children}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
