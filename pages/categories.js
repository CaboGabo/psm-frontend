import Layout from "../components/Layout";

export default class extends React.Component {
  static async getInitialProps({ res }) {
    try {
      let req = await fetch("http://localhost:5000/api/categories");
      const categories = await req.json();
      return { categories };
    } catch (e) {
      return { categories: null, error: e };
    }
  }

  render() {
    const { categories } = this.props;
    return (
      <React.Fragment>
        <Layout
          metatitle="Nuestros productos"
          title="Categorías"
          description="metadescription"
        >
          <div className="content">
            <div className="category">Nombre 1</div>
            <div className="category">Nombre 2</div>
            <div className="category">Nombre 3</div>
            <div className="category">Nombre 4</div>
            <div className="category">Nombre 5</div>
            <div className="category">Nombre 6</div>
            <div className="category">Nombre 7</div>
            {/* {categories.map(category => (
              <div key={category.id} className="category">
                {category.name}
              </div>
            ))} */}
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

            .content .category {
              height: 250px;
              border: 1px solid black;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
