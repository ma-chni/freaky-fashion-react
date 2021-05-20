import React from "react";
import { withRouter } from "react-router-dom";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
const axios = require("axios");


class ProductDetails extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get("http://localhost:4000/api/products").then((res) => {
      this.setState({ products: res.data });
    });
  }

  render() {
    const name = this.props.match.params.name;
    console.log(name);
    return (
      <div className="container">
          {this.state.products.map((product) => {
            let productName = product.name.toLowerCase().split(" ").join("-");
            if (productName === name) {
              return (
                <div className="row">
                  <div className="col">
                    <img
                      id="product-image"
                      className="d-block w-60"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="col mb-2">
                    <h1 className="product-info">Produkt detaljer</h1>
                    <h5 className="mt-3">
                      <span className="text-muted">Namn:</span>&nbsp;{product.name}
                    </h5>
                    <h5>
                      <span className="text-muted">Artikelnummer:</span>
                      &nbsp;{product.articlenumber}
                    </h5>
                    <h5>
                      <span className="text-muted"> Beskrivning:</span>
                      &nbsp;{product.description}
                    </h5>
                    <h5>
                      <span className="text-muted">Pris:</span>&nbsp;{product.price} SEK
                    </h5>
                    <form method="post">
                      <input type="hidden" />
                      <button className="btn btn-primary mt-2">Köp</button>
                    </form>
                  </div>
                  <RecommendedProducts />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
    );
  }
}

export default withRouter(ProductDetails);
