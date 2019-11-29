import DrawerToggleButton from "./DrawerToggleButton";
import Link from "next/link";

export default class Navbar extends React.Component {
  render() {
    return (
      <header className="toolbar">
        <nav className="navigation">
          <div className="toggle-button">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <div className="logo">
            <Link href="/">
              <a>The logo</a>
            </Link>
          </div>
          <div className="spacer" />
          <div className="navigation-items">
            <ul>
              <li>
                <Link href="/about">
                  <a>¿Quiénes somos?</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a>Productos</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contacto</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <style jsx>{`
          .toolbar {
            width: 100%;
            position: fixed;
            background: #521751;
            height: 56px;
            top: 0;
          }

          .logo {
            margin-left: 1rem;
          }

          .navigation {
            display: flex;
            height: 100%;
            align-items: center;
            padding: 0 1rem;
          }

          .logo a {
            color: white;
            text-decoration: none;
            font-size: 1.5rem;
          }

          .navigation-items a {
            color: white;
            text-decoration: none;
          }

          .navigation-items ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
          }

          .navigation-items li {
            padding: 0 0.5rem;
          }

          .navigation-items a:hover,
          .navigation-items a:active {
            color: #fa923f;
          }

          .spacer {
            flex: 1;
          }

          @media (max-width: 768px) {
            .navigation-items {
              display: none;
            }
          }

          @media (min-width: 769px) {
            .toggle-button {
              display: none;
            }

            .logo {
              margin-left: 0;
            }
          }
        `}</style>
      </header>
    );
  }
}
