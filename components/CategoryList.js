import { Link } from "../routes";

export default class CategoryList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <React.Fragment>
        {categories.map(category => (
          <div key={category.id} className="category">
            <Link
              route="category"
              params={{ slug: category.slug }}
              key={category.id}
            >
              <a>
                <img
                  className="image"
                  src="/static/silla_oficina.jpg"
                  alt="Silla oficina"
                />
                <div className="name">{category.name}</div>
              </a>
            </Link>
          </div>
        ))}

        <style jsx>
          {`
            .category {
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
