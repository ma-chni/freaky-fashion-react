import "./App.css";
import PageHeader from "./Components/PageHeader/PageHeader";
import PageFooter from "./Components/PageFooter/PageFooter";
import {
  BrowserRouter as Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import React from "react";
import PopularProducts from "./Components/PopularProducts/PopularProducts";
import PopularCategories from "./Components/PopularCategories/PopularCategories";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Categories from "./Components/Categories/Categories";
import Search from "./Components/Search/Search";
import HeroSlideShow from "./Components/HeroSlideShow/HeroSlideShow";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Switch>
        <Route exact path="/">
          <HeroSlideShow />
          <PopularCategories />
          <PopularProducts />
        </Route>
        <Route exact path="/products/:name">
          <ProductDetails/>
        </Route>
        <Route exact path="/categories/:name">
          <Categories />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
      </Switch>
      <PageFooter />
    </BrowserRouter>
  );
}

export default App;
