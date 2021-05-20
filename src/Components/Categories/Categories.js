import React from "react";
import { withRouter } from "react-router-dom";
const axios = require("axios");

class Categories extends React.Component {
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
    return (
      <div className="container">
        <div className="row">
          {this.state.products.map((product) => {
            <h2 className="text-center m-5">{product.category}</h2>;
            if (product.category.toLowerCase() === name) {
              return (
                <div
                  key={product.id}
                  className="col-md-3 mb-3 d-flex align-items-stretch"
                >
                  <div className="card">
                    <div className="view">
                      <a
                        href={
                          "/products/" +
                          product.name.toLowerCase().split(" ").join("-")
                        }
                      >
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt="orange-hoodie"
                        />
                      </a>
                      <div className="mask rgba-white-slight"></div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">{product.name}</h4>
                      <p className="card-text">{product.price} KR</p>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Categories);
