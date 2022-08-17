import React from "react";

import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";
  
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

class Coin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            test:'',
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
      fetch("http://127.0.0.1:3001/coin/"+this.props.router.params.Id)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            items: json,
            DataisLoaded: true
          });
          console.log(this.state);
        })
    }

    render(){
        console.log("params : " + JSON.stringify(this.props.router.params.Id));
        return (
          <div>
            <div>
                {
                    this.state.items.map((item) => (
                    <table>
                        {/* <Link to={"/coin/:"+item.Id}> */}
                        {/* <Link to={{pathname: "/Coin/"+item.Id, param1: "Par1" }}> */}
                            <tr>
                                <td>User_Name: { item.dev_id }</td>
                                <td>User_Name: { item.about }</td>
                                <td>User_Name: { item.start_date }</td>
                                <td>User_Name: { item.end_date }</td>
                                <td>User_Name: { item.start_price }</td>
                                <td>User_Name: { item.end_price }</td>
                                <td>User_Name: { item.platform }</td>
                                <td>User_Name: { item.category }</td>
                                <td>User_Name: { item.total_tokens }</td>
                                <td>User_Name: { item.min_tokens }</td>
                                <td>User_Name: { item.white_paper }</td>
                            </tr>
                        {/* </Link> */}
                    </table>
                    ))
                }
            </div>
          </div>
        );
    }
}

export default withRouter(Coin);