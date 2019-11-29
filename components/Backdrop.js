export default class Backdrop extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="backdrop" onClick={this.props.click} />

        <style jsx>
          {`
            .backdrop {
              position: fixed;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.3);
              z-index: 100;
              left: 0;
              top: 0;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
