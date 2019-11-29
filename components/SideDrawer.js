import Link from "next/link";

export default class SideDrawer extends React.Component {
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <nav className={drawerClasses}>
        <ul>
          <li>
            <Link href="/about">
              <a>¿Quiénes somos?</a>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              <a>Productos</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contacto</a>
            </Link>
          </li>
        </ul>

        <style jsx>{`
          .side-drawer {
            height: 100%;
            background: white;
            box-shadow: 1px 8px 7px rgba(0, 0, 0, 0.5);
            position: fixed;
            top: 0;
            left: 0;
            width: 70%;
            max-width: 400px;
            z-index: 200;
            transform: translateX(-100%);
            transition: transform 0.3s ease-out;
          }

          .side-drawer.open {
            transform: translateX(0);
          }

          .side-drawer ul {
            list-style: none;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .side-drawer li {
            margin: 0.5rem;
          }

          .side-drawer a {
            color: #521751;
            text-decoration: none;
            font-size: 1.2rem;
          }

          .side-drawer a:hover,
          .side-drawer a:active {
            color: #fa923f;
          }

          @media (min-width: 769px) {
            .side-drawer {
              display: none;
            }
          }
        `}</style>
      </nav>
    );
  }
}
