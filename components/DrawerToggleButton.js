export default class DrawerToggleButton extends React.Component {
  render() {
    return (
      <button className="toggle-button" onClick={this.props.click}>
        <div className="line" />
        <div className="line" />
        <div className="line" />

        <style jsx>{`
          .toggle-button {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 24px;
            width: 30px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            box-sizing: border-box;
          }

          .toggle-button:focus {
            outline: none;
          }

          .line {
            width: 30px;
            height: 2px;
            background: white;
          }
        `}</style>
      </button>
    );
  }
}
