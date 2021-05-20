import React from "react";
const axios = require("axios");

class PopularCategories extends React.Component {
  state = {
    categories: [],
  };
  componentDidMount() {
    axios.get("http://localhost:4000/api/categories").then((res) => {
      this.setState({ categories: res.data });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="card-deck">
          {this.state.categories.map((category) => {
            if (category.id < 4) {
              return (
                <div
                key={category.id}
                  className="card bg-white col mt-4"
                  style={{
                    maxWidth: "31rem",
                    height: "200px",
                    lineHeight: "150px",
                  }}
                >
                  <div className="card-body">
                    <a id="category-btn" href={"/categories/" + category.name.toLowerCase()}>
                      <p className="card-title text-center">{category.name}</p>
                    </a>
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

export default PopularCategories;
