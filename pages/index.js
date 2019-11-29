import Layout from "../components/Layout";
export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Layout
          metatitle="metatitle"
          title="Promotora de Sillas y Muebles"
          description="metadescription"
        >
          <p>Página principal</p>
        </Layout>

        <style jsx>{`
          p {
            color: blue;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
