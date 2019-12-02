import Layout from "../components/Layout";
import CategoryList from "../components/CategoryList";
import Error from "next/error";

export default class extends React.Component {
  static async getInitialProps({ res }) {
    try {
      let req = await fetch("http://localhost:5000/api/categories");
      const categories = await req.json();
      return { categories, statusCode: 200 };
    } catch (e) {
      res.statusCode = 503;
      console.log(e);
      return { categories: null, statusCode: 503 };
    }
  }

  render() {
    const { categories, statusCode } = this.props;

    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <React.Fragment>
        <Layout
          metatitle="Nuestros productos"
          title="Categorías"
          description="metadescription"
        >
          <div className="content">
            <CategoryList categories={categories} />
          </div>
        </Layout>

        <style jsx>
          {`
            .content {
              margin-left: 10px;
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              gap: 15px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
