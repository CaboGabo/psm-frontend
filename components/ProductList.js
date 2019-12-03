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
                  src="/static/silla_oficina.jpg"
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

        <style jsx>
          {`
            .product {
              height: 250px;
              text-align: center;
              position: relative;
            }

            .image {
              height: 100%;
              transition: 0.5s ease;
              backface-visibility: hidden;
            }

            .name {
              transition: 0.5s ease;
              opacity: 0;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              font-size: 25px;
            }

            .category:hover .image {
              opacity: 0.3;
            }

            .category:hover .name {
              opacity: 1;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
