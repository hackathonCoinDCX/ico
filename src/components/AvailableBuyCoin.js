import React from "react";
import { useState } from "react";

const AvailableCoinForm = (props) => {

  const [dataIsLoaded, setdataIsLoaded] = useState(false);
  const [bidData, setBidData] = useState({
    selectedCoin: "",
    bid_quantity: "",
    bid_price:  "",
    id: 2,
    status: "",
    todaydate: new Date(),
    expDate: new Date(),
    startDate: new Date(),
  });

  if (dataIsLoaded == false) {
    fetch(`http://127.0.0.1:3001/coinlist/${2}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setBidData(json);
        setdataIsLoaded(true);
      });
  }
  
  const handleChange = (event) => {
    let input = {[event.target.name]: event.target.value};
    setBidData({...bidData, ...input});
  };

  const handleSubmit = (event) => {
    console.log("request success");
    console.log(event);
    event.preventDefault();
  };

  const renderForm = (selectedCoin) => {
    return (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="">Enter quantity </label>
          <input
            type="number"
            id="total-price"
            min={selectedCoin[0].min_tokens}
            placeholder={"more than " + selectedCoin[0].min_tokens}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>Enter Price</label>
          <input
            type="number"
            className="price-range"
            id="total-price1"
            min={selectedCoin[0].start_price}
            max={selectedCoin[0].end_price}
            placeholder={
              selectedCoin[0].start_price + "-" + selectedCoin[0].end_price
            }
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  };

  const rendorNotActive = () => {
    if (bidData.todaydate.getTime() < bidData.startDate.getTime())
      return <div>Please be patient</div>;
    else return <div> You're late</div>;
  };

  return (
    <div>
      <h3> Buy Coin</h3>
      <div>
        Coin Name : <span>{bidData.coin_name}</span>
      </div>
      <div>
        category : <span>{bidData.category}</span>
      </div>
      <div>
        about : <span>{bidData.about}</span>
      </div>
      <div>
        endDate : <span>{bidData.end_date}</span>
      </div>
      <div>
        min token limit : <span>{bidData.min_tokens}</span>
      </div>
      <div>
        platform : <span>{bidData.platform}</span>
      </div>
      <div>
        price range :{" "}
        <span>
          {bidData.start_price}-{bidData.end_price}
        </span>
      </div>
      <div>
        white paper : <span>{bidData.white_paper}</span>
      </div>
      {/* <div>{this.renderForm(bidData/div> */}

      {/* <div>
        {
        this.state.todaydate.getTime() > this.state.startDate.getTime() && this.state.todaydate.getTime() < this.state.expDate.getTime() ? this.renderForm(bidData:this.rendorNotActive(this.state.status))
        }
      </div> */}
    </div>
  );
}

export default AvailableCoinForm;
