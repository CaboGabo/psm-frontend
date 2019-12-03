import { Link } from "../routes";

export default class ProductList extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <React.Fragment>
        {category.products.map(product => (
          <div key={product.id} className="product">
            <Link
              route="product"
              params={{ slugCategory: category.slug, slug: product.slug }}
              key={product.id}
            >
              <a>
                <img
                  className="image"
                  src="static/silla_oficina.jpg"
                  alt="Silla oficina"
                />
                <div className="name">
                  <p className="title">{product.header}</p>
                  <p className="description">{product.description}</p>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
