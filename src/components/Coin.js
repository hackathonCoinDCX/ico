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
                                <td>dev_id: { item.dev_id }</td>
                                <td>about: { item.about }</td>
                                <td>start_date: { item.start_date }</td>
                                <td>end_date: { item.end_date }</td>
                                <td>start_price: { item.start_price }</td>
                                <td>end_price: { item.end_price }</td>
                                <td>Uplatform: { item.platform }</td>
                                <td>category: { item.category }</td>
                                <td>total_tokens: { item.total_tokens }</td>
                                <td>min_tokens : { item.min_tokens }</td>
                                <td>white_paper: { item.white_paper }</td>
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