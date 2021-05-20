import React from "react";
const axios = require("axios");

class HeroSlideShow extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get("http://localhost:4000/api/products").then((res) => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <a
            className="carousel-control-prev"
            href="#hero"
            role="button"
            data-slide="prev"
            style={{ marginLeft: "50px" }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
        </div>
        <div className="col-8">
          <div id="hero" className="hero carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {this.state.products.map((product, i) => {
                let active = i === 0 ? "carousel-item active" : "carousel-item";
                return (
                  <div key={product.id} className={active}>
                    <div className="d-block w-50 float-left text-center">
                      <h2>{product.name}</h2>
                      <p>{product.description}</p>
                      <p>{product.price} SEK</p>
                      <a
                        id="button"
                        className="btn btn-primary"
                        href={
                          "/products/" +
                          product.name.toLowerCase().split(" ").join("-")
                        }
                      >
                        Mer info
                      </a>
                    </div>
                    <img
                      className="d-block w-50 img-responsive"
                      id="carousel-img"
                      src={product.image}
                      alt={product.name}
                      style={{ width: "400px", height: "500px", marginLeft:"500px"}}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col">
          <a
            className="carousel-control-next"
            href="#hero"
            role="button"
            data-slide="next"
            style={{ marginRight: "50px" }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default HeroSlideShow;
