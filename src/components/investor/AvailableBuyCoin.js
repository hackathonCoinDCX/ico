import React from "react";
import { useState } from "react";
// import { useLocation } from "react";

const AvailableCoinForm = (props) => {
  // const location = useLocation();
  // var dead = new URLSearchParams(location.search).get("inv_id");
  var dead = 2;
  var status = true;
  var todaydate = new Date();
  // console.log("id: ", dead);
  const [dataIsLoaded, setdataIsLoaded] = useState(false);
  const [bidData, setBidData] = useState({
    bid_quantity: 0,
    bid_price: 0,
    todaydate: new Date(),
  });

  const [selectedCoin, setSelectedCoin] = useState({});
  const [condition, setCondition] = useState(0);

  if (dataIsLoaded == false) {
    fetch(`http://127.0.0.1:3001/coinlist/${dead}`)
      .then((res) => res.json())
      .then((json) => {
        setSelectedCoin(json[0]);
        setdataIsLoaded(true);
      });
  }

  console.log("selectedCoin", selectedCoin);
  console.log(new Date(selectedCoin.start_date));

  // const fetchingCondition=() => {
  //   if((bidData.todaydate.getTime() > bidData.startDate.getTime()) && (bidData.todaydate.getTime() < bidData.expDate.getTime()))
  // }

  const handleChange = (event) => {
    let input = { [event.target.name]: event.target.value };
    setBidData({ ...bidData, ...input });
  };

  const handleSubmit = (event) => {
    console.log(event);
    setBidData({
      bid_quantity: 10,
      bid_price: 30,
      todaydate: new Date(),
    });

    
  };

  // const renderForm = () => {
  //   return (
  //     <form className="form-horizontal" onSubmit={handleSubmit}>
  //       <div class="form-group">
  //         <label for="">Enter quantity </label>
  //         <input
  //           type="number"
  //           name="total-quantity"
  //           id="total-quantity"
  //           min={selectedCoin.min_tokens}
  //           placeholder={"more than " + selectedCoin.min_tokens}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div class="form-group">
  //         <label>Enter Price</label>
  //         <input
  //           type="number"
  //           className="price-range"
  //           name="total-price"
  //           id="total-price"
  //           min={selectedCoin.start_price}
  //           max={selectedCoin.end_price}
  //           placeholder={
  //             selectedCoin.start_price + "-" + selectedCoin.end_price
  //           }
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div class="form-group">
  //         <input type="submit" value="Submit" />
  //       </div>
  //     </form>
  //   );
  // };

  const rendorNotActive = () => {
    // if (bidData.todaydate.getTime() < bidData.startDate.getTime())
    //   return (<div>Please be patient</div>);
    // else return (<div> You're late</div>);
    return (<div> running</div>);
  };

  const renderFormIfActive = () => {
    // const bidData = this.state.bidData;
    // console.log("bidData: ", bidData);
    // if((bidData.todaydate.getTime() > bidData.startDate.getTime()) && (bidData.todaydate.getTime() < bidData.expDate.getTime())){
    // render form here
    // return renderForm();
    if (status) {
      return (
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="">Enter quantity </label>
            <input
              type="number"
              name="total-quantity"
              id="total-quantity"
              min={selectedCoin.min_tokens}
              placeholder={"more than " + selectedCoin.min_tokens}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label>Enter Price</label>
            <input
              type="number"
              className="price-range"
              name="total-price"
              id="total-price"
              min={selectedCoin.start_price}
              max={selectedCoin.end_price}
              placeholder={
                selectedCoin.start_price + "-" + selectedCoin.end_price
              }
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <input type="submit" value="Submit" />
          </div>
        </form>
      );
    } else if (true){
      return (<div> Please be patient</div>);
    }
    else { 
      return (<div>you are late</div>);
    }
    // return (<div>renderFormIfActive</div>)
    // } else {
    //   if (bidData.todaydate.getTime() < bidData.startDate.getTime())
    //     return (<div>Please be patient</div>);
    //   else
    //     return (<div> You're late</div>);
    // };
  };

  return (
    <div>
      <h3> Buy Coin</h3>
      <div>
        Coin Name : <span>{selectedCoin.coin_name}</span>
      </div>
      <div>
        category : <span>{selectedCoin.category}</span>
      </div>
      <div>
        about : <span>{selectedCoin.about}</span>
      </div>
      <div>
        endDate : <span>{selectedCoin.end_date}</span>
      </div>
      <div>
        min token limit : <span>{selectedCoin.min_tokens}</span>
      </div>
      <div>
        platform : <span>{selectedCoin.platform}</span>
      </div>
      <div>
        price range :
        <span>
          Rs {selectedCoin.start_price} to {selectedCoin.end_price}
        </span>
      </div>
      <div>
        white paper : <span>{selectedCoin.white_paper}</span>
      </div>
      {renderFormIfActive()}
    </div>
  );
};

export default AvailableCoinForm;
