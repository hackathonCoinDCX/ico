import React from "react";

class AvailableCoinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCoin: null,
      bid_quantity: 0,
      bid_price: 0,
      id:2,
      status: '',
      todaydate: new Date(),
      expDate: new Date(),
      startDate: new Date()

    };
  }
  handleChange = (event) => {
    // alert(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  };
  handleQuantityChange(event) {}

  componentDidMount() {
    fetch(`http://127.0.0.1:3001/coinlist/${this.state.id}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          selectedCoin: json,
        //   status: json.status,
        expDate: new Date(json[0].end_date),
        startDate: new Date(json[0].start_date),
        status: 'active',
          DataisLoaded: true,
        });
        console.log(json);
        console.log('today date',this.state.todaydate);
        console.log('start date',this.state.startDate);
        console.log('end date',this.state.expDate)

      });
  }

  handleSubmit = (event) => {
    console.log("request success");
    console.log(event);
    event.preventDefault();
  };

  renderForm(selectedCoin){
    return (
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="">Enter quantity </label>
            <input
              type="number"
              id="total-price"
              min={selectedCoin[0].min_tokens}
              
              placeholder={"more than " + selectedCoin[0].min_tokens}
              onChange={this.handleQuantityChange.bind(this)}
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
              onChange={this.handleQuantityChange.bind(this)}
            />
          </div>
          <div class="form-group">
            <input type="submit" value="Submit" />
          </div>
        </form>
    );
  }

  rendorNotActive(){
    if (this.state.todaydate.getTime()<this.state.startDate.getTime()) return(<div>Please be patient</div>);
    else return (<div> You're late</div>)
  }

  render() {
    const { DataisLoaded, selectedCoin } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div>
        <h3> Buy Coin</h3>
        <div>
          Coin Name : <span>{selectedCoin[0].coin_name}</span>
        </div>
        <div>
          category : <span>{selectedCoin[0].category}</span>
        </div>
        <div>
          about : <span>{selectedCoin[0].about}</span>
        </div>
        <div>
          endDate : <span>{selectedCoin[0].end_date}</span>
        </div>
        <div>
          min token limit : <span>{selectedCoin[0].min_tokens}</span>
        </div>
        <div>
          platform : <span>{selectedCoin[0].platform}</span>
        </div>
        <div>
          price range :{" "}
          <span>
            {selectedCoin[0].start_price}-{selectedCoin[0].end_price}
          </span>
        </div>
        <div>
          white paper : <span>{selectedCoin[0].white_paper}</span>
        </div>
        {/* <div>{this.renderForm(selectedCoin)}</div> */}

       <div>{(this.state.todaydate.getTime()>this.state.startDate.getTime() && this.state.todaydate.getTime()<this.state.expDate.getTime()) ?  (this.renderForm(selectedCoin)): (this.rendorNotActive(this.state.status))}</div> 

        {/* <div> 
            {if(this.state.status === 'active') {
                this.renderForm(selectedCoin)
            }}
        </div> */}

        {/* if(this.state.status === 'active'){
            renderForm();
        } else if(this.state.status === 'upcoming'){
            // render upcoming
            renderUpcomingComponent();
        } */}

        
      </div>
    );
  }
}
export default AvailableCoinForm;