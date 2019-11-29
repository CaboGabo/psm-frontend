import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";

export default class Layout extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { metatitle, title, description, children } = this.props;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="page">
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
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <div className="title">
          <h1>{title}</h1>
        </div>

        {children}
        <Footer />

        <style jsx>
          {`
            .title h1 {
              margin-top: 64px;
              text-align: center;
              font-size: 23px;
              color: #521751;
            }
            .page {
              height: 100%;
            }
          `}
        </style>

        <style jsx global>
          {`
            body {
              margin: 0;
              font-family: Arial;
              height: 100%;
            }

            html {
              margin: 0;
              height: 100%;
            }
          `}
        </style>
      </div>
    );
  }
}
