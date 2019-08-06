import React, { Component } from "react";
import axios from "axios";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ExchangeRates from "../components/exchangeRates/exchangeRates";
class IndexPage extends Component {
  state = {
    dolarVen: null,
    dolarPeso: null,
    pesoVen: null
  };
  async componentDidMount() {
    try {
      const responseVen = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://s3.amazonaws.com/dolartoday/data.json"
      );
      const responsePeso = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?base=USD"
      );
      const dolarVen = responseVen.data.USD.transferencia;
      const dolarPeso = responsePeso.data.rates.MXN;
      const pesoVen = dolarVen / dolarPeso;
      this.setState({
        dolarVen,
        dolarPeso,
        pesoVen
      });
      console.log(dolarVen);
      console.log(dolarPeso);
      console.log(pesoVen);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    let rates = null;
    if (this.state.pesoVen) {
      rates = (
        <ExchangeRates
          dolarVen={this.state.dolarVen}
          pesoVen={this.state.pesoVen.toFixed(2)}
        ></ExchangeRates>
      );
    } else {
      rates = <div>Loading...</div>;
    }
    return (
      <Layout>
        <SEO title="Home" />
        <h1>
          Hi cham@
          <span role="img" aria-label="hi">
            👋
          </span>
        </h1>
        {rates}
      </Layout>
    );
  }
}

export default IndexPage;
