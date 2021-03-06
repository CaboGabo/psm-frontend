import Layout from "../components/Layout";
import "isomorphic-fetch";

export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Layout
          metatitle="Promotora de Sillas y Muebles"
          title="Promotora de Sillas y Muebles"
          description="metadescription"
        >
          <div className="content"></div>
        </Layout>

        <style jsx>{`
          p {
            color: blue;
          }

          .content {
            display: grid;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
