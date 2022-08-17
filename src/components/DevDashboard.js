import React from "react";
import HomePageTable from "./HomePageTable";
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
      });
  }

  render() {
    if(this.state.coinlist.length === 0){
      return (
        <><p>No entries in table</p></>
      );
    }
    return (
      <div>
        <h1> Welcome to DevDashboard </h1>
        <div>
          <HomePageTable listiteam={this.state.coinlist} tablerowlink={""} />
        </div>
        <Link to={{pathname: "/AddCoin", params: "Par1", search: `?dev_id=${this.state.coinlist[0].dev_id}`}}>
        <button>Add New Coin</button>
        </Link>
      </div>
    );
  }
}
export default withRouter(DevDashboard);
