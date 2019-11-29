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

        <div className="content">
          <h1>{title}</h1>
          {children}
        </div>
        <Footer />

        <style jsx>
          {`
            .content {
              margin-top: 64px;
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
              height: 100%;
            }
          `}
        </style>
      </div>
    );
  }
}
