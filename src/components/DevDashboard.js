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
      coinlist: [],
      devID: 1,
    };
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:3001/user/developer/coinlist`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          coinlist: json,
          DataisLoaded: true,
        });
        // console.log(this.state.coinlist);
      });
  }

  handleSubmit = (event) => {
//    navigate('/AddCoin');

  };
  

  render() {
    // var mock = [
    //   {
    //     devID: 5,
    //     about: "abouttest",
    //     start_date: null,
    //     end_date: null,
    //     start_price: 0,
    //     end_price: 10,
    //     platform: "",
    //     category: "",
    //     total_tokens: 0,
    //     min_tokens: 0,
    //     white_paper: "white ppp",
    //   },
    // ];

    return (
        
      <div>
        <h1> Welcome to DevDashboard </h1>
        <div>
          <HomePageTable listiteam={this.state.coinlist} tablerowlink={""} />
        </div>
        <Link to={{pathname: "/AddCoin", param1: "Par1" }}>
        <button >Add New Coin</button>
        </Link>
      </div>
    );
  }
}
export default withRouter(DevDashboard);
