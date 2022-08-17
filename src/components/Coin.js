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

    render(){
        console.log(this.props.match);
        return (
            <div>
                kjnsafd
                alsd
            </div>
        );
    }
}

export default withRouter(Coin);
