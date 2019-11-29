import Layout from "../components/Layout";
export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Layout
          metatitle="Promotora de Sillas y Muebles"
          title="Promotora de Sillas y Muebles"
          description="metadescription"
        >
          <div class="content"></div>
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
