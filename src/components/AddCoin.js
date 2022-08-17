import React from "react";
import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
import { Link } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

class AddCoin extends React.Component {
  constructor(props) {
    super(props);
    var id = new URLSearchParams(props.router.location.search).get("dev_id")
    this.state = {
      dev_id: id
    };
    console.log(this.state);
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value });
  };
  handleQuantityChange(event) {}

  componentDidMount() {
  }

  handleSubmit = (event) => {
    console.log("following values are set : ", this.state);
    // event.preventDefault();
    let url = "http://localhost:3001/user/developer/listnewcoin";
    let data = this.state;
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      }).then((res) => { console.log(res); res.json()})
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
        console.log(this.state);
        this.props.navigation.navigate('/Dev')
			})
      event.preventDefault();
    }
  
  render() {
    return (
      <div>
        <h1>List a new coin</h1>
        <form onSubmit={this.handleSubmit}>
            <table>
                <tr> 
                    <td>Enter Name</td>
                    <td><input name="coin_name" type='string' onChange={this.handleChange}/></td>
                </tr>
                <tr> 
                    <td>about</td>
                    <td><input name="about" type='string' onChange={this.handleChange}/></td>
                </tr>
                <tr> 
                    <td>start date</td>
                    <td><input name="start_date" type='date' onChange={this.handleChange}/></td>
                </tr>
                <tr> 
                    <td>end date</td>
                    <td><input name="end_date" type='date' onChange={this.handleChange}/></td>
                </tr>
                <tr> 
                    <td>start price</td>
                    <td><input name="start_price" type='number' onChange={this.handleChange}/></td>
                </tr>
                <tr> 
                    <td>end price</td>
                    <td><input name="end_price" type='number' onChange={this.handleChange}/></td>
                </tr>
                <tr> 
                    <td>Platform</td>
                    <td><input name="platform" type='string' onChange={this.handleChange}/></td>
                </tr>
                <tr> 
                    <td>Category</td>
                    <td><input name="category" type='string' onChange={this.handleChange}/></td>
                </tr>
                <tr> 
                    <td>total token</td>
                    <td><input name="total_tokens" type='number' onChange={this.handleChange}/></td>
                </tr>
                <tr> 
                    <td>min token</td>
                    <td><input name="min_tokens" type='number' onChange={this.handleChange}/></td>
                </tr>
                <tr> 
                    <td>upload white_paper</td>
                    <td><input name="white_paper" type='string' onChange={this.handleChange}/></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type="submit">Submit</button></td>
                </tr>
            </table>
        </form>
      </div>
    );
  }
}

export default withRouter(AddCoin);
