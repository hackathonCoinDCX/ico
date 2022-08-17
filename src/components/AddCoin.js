import React from "react";

class AddCoin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  handleChange = (event) => {
    // alert(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
  };
  handleQuantityChange(event) {}

  componentDidMount() {
  }

  handleSubmit = (event) => {
    console.log("request success");
    console.log(event);
    event.preventDefault();
    
  };

  
  render() {
    // const { DataisLoaded, selectedCoin } = this.state;
    // if (!DataisLoaded)
    //   return (
    //     <div>
    //       <h1> Pleses wait some time.... </h1>{" "}
    //     </div>
    //   );

    return (
      <div>
        <h1>List a new coin</h1>
        <form onSubmit={this.handleSubmit}>
            <table>
                <tr> 
                    <td>Enter Name</td>
                    <td><input type='string'></input></td>
                </tr>
                <tr> 
                    <td>about</td>
                    <td><input type='string'></input></td>
                </tr>
                <tr> 
                    <td>start date</td>
                    <td><input type='date'></input></td>
                </tr>
                <tr> 
                    <td>end date</td>
                    <td><input type='date'></input></td>
                </tr>
                <tr> 
                    <td>start price</td>
                    <td><input type='number'></input></td>
                </tr>
                <tr> 
                    <td>end price</td>
                    <td><input type='number'></input></td>
                </tr>
                <tr> 
                    <td>Platform</td>
                    <td><input type='string'></input></td>
                </tr>
                <tr> 
                    <td>Category</td>
                    <td><input type='string'></input></td>
                </tr>
                <tr> 
                    <td>total token</td>
                    <td><input type='number'></input></td>
                </tr>
                <tr> 
                    <td>min token</td>
                    <td><input type='number'></input></td>
                </tr>
                <tr> 
                    <td>upload white_paper</td>
                    <td><input type='string'></input></td>
                </tr>
                <tr> 
                    <td></td>
                    <td><button type="submit" >Submit</button></td>
                </tr>
            </table>
        </form>
        
      </div>
    );
  }
}
export default AddCoin;
