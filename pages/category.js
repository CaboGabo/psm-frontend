import Error from "next/error";
import Layout from "../components/Layout";

export default class extends React.Component {
  static async getInitialProps({ query, res }) {
    let categorySlug = query.slug;
    try {
      let reqCategory = await fetch(
        `http://localhost:5000/api/categories/${categorySlug}`
      );

      if (reqCategory.status >= 400) {
        res.statusCode = reqCategory.status;
        return {
          category: null,
          statusCode: reqCategory.status
        };
      }

      let category = await reqCategory.json();
      return { category, statusCode: 200 };
    } catch (e) {
      return { category: null, statusCode: 503 };
    }
  }

  render() {
    const { category, statusCode } = this.props;
    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout
        metatitle={category.metatitle}
        title={category.header}
        description={category.metadescription}
      ></Layout>
    );
  }
}
