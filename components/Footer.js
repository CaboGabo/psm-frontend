export default class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          Av. Corredor Vía Morelos #77
          <br />
          Col.Urbana Ixhuatepec CP 55349 Ecatepec, Estado de México
          <br />
          Tels: (55) 5783-3743 y (55) 5121-7024
        </footer>

        <style jsx>
          {`
            footer {
              width: 100%;
              text-align: center;
              background: #521751;
              color: white;
              position: absolute;
              bottom: 0;
              margin-top: 10px;
              padding-top: 5px;
              padding-bottom: 5px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
