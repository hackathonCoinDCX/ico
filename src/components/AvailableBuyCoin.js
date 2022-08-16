import React from "react";


class AvailableCoinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minQuantity: 3,
      priceRangeMin: 0,
      priceRangeMax: 1000,
    };
  }
  handleChange = (event) => {
    // alert(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  };
  handleQuantityChange(event) {
    
  }
  handleSubmit = (event) => {
    // if (this.state) {
    //   console.log(this.state, "asdadsa");
    //   alert("Form Submitted..." + this.state);
    //   fetch("http://127.0.0.1:3001/submit-name", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //     body: JSON.stringify(this.state),
    //   })
    //     .then((res) => {
    //       console.log("ASDAD", res.json());
    //       alert("Form Submitted..." + this.state);
    //       return res.json();
    //     })
    //     .then((res) => {
    //       if (res.ok) {
    //         console.log("request sucess");
    //         alert("asdankd ka d");
    //         return res.json();
    //       } else {
    //         console.log("request fail");
    //         throw new Error("something went wrong..");
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       console.log("error happed");
    //     });
    //   // event.preventDefault();
    // }
    console.log("request success");
    console.log(event);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <div> Inset Coin Details or value prefilled</div>
        <h3> Buy Coin</h3>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="">Coin Id</label>
            <input type="text" />
          </div>
          <div class="form-group">
            <label for="">Coin Name</label>
            <input type="text" />
          </div>
          <div class="form-group">
            <label for="">Quantity</label>
            <input
              type="number"
              id="total-price"
              min={this.state.minQuantity}
              placeholder={"more than "+this.state.minQuantity}
              onChange={this.handleQuantityChange.bind(this)}
            />
          </div>
          <div class="form-group">
            <label for="">Enter Price</label>
            <input
              type="number"
              className="price-range"
              id="total-price1"
              min={this.state.priceRangeMin}
              max={this.state.priceRangeMax}
              placeholder={this.state.priceRangeMin+"-"+ this.state.priceRangeMax}
              onChange={this.handleQuantityChange.bind(this)}
            />
          </div>
          <div class="form-group">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default AvailableCoinForm;