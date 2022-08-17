import React from "react";
import HomePageTable from "./HomePageTable";
import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";
  import { Link} from "react-router-dom";

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

class DevDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "Sachin",
      coinlist: null,
      devID: 1,
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  componentDidMount() {
    fetch(`http://127.0.0.1:3001/user/`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          coinlist: json,
          DataisLoaded: true,
        });
        // console.log(...json);
        // console.log(this.state.selectedCoin);
      });
  }

  handleSubmit = (event) => {
//    navigate('/AddCoin');

  };
  

  render() {
    // const { DataisLoaded, selectedCoin } = this.state;
    // if (!DataisLoaded)
    //   return (
    //     <div>
    //       <h1> Pleses wait some time.... </h1>{" "}
    //     </div>
    //   );
    // const { DataisLoaded, coinlist } = this.state;
    // if (!DataisLoaded) return <div>
    //     <h1> Pleses wait some time.... </h1> </div> ;
    var mock = [
      {
        devID: 5,
        about: "abouttest",
        start_date: null,
        end_date: null,
        start_price: 0,
        end_price: 10,
        platform: "",
        category: "",
        total_tokens: 0,
        min_tokens: 0,
        white_paper: "white ppp",
      },
    ];

    return (
        
      <div>
        <h1> Welcome to DevDashboard {this.state.UserName}</h1>
        <div>
          <HomePageTable listiteam={mock} tablerowlink={""} />
        </div>
        <Link to={{pathname: "/AddCoin", param1: "Par1" }}>
        <button >Add New Coin</button>
            </Link>
        {/* <button onClick={this.handleSubmit}>Add New Coin</button> */}
      </div>
    );
  }
}
export default withRouter(DevDashboard);
