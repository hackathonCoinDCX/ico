import React, { useState } from "react";
import HomePageTable from "../utility/HomePageTable";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Link , Routes, Route, useNavigate} from "react-router-dom";
import AvailableCoinForm from "./AvailableBuyCoin";
import App from "../HomePage";
import { Button } from "react-bootstrap";
// const route = new Route();
// const {dev_id} = route.params;
function InvDashboard() {
    const navigate = useNavigate();
  // console.log("params are: " + JSON.stringify(props.user))
  const params = useParams();
  // const {dev_id} = route.params;
  console.log("params are: " + JSON.stringify(params))
  // console.log("props are: " + JSON.stringify(props));
  // console.log("developer!!!!", JSON.stringify(dev_id));
    const [coinlist, setCoinlist] = useState([]);
    const [dataIsLoaded, setdataIsLoaded] = useState(false);
    if(dataIsLoaded == false){
    console.log("Hello", params.id);
        fetch(`http://127.0.0.1:3001/user/investor/coinlist/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setCoinlist(json)
        setdataIsLoaded(true)
    });
    }
    function onSignoutClick(){
        fetch('http://127.0.0.1:3001/deletesession')
        .then(response => response.json())
        .then( (data) => {
            // setUser({id: data.id})
            console.log(data);
        });
    }
    if(coinlist.length==0 || dataIsLoaded==false){
        return (<>
        <Button
          color="primary"
          onClick={onSignoutClick}
        >
            <Link to='/'>Sign Out</Link></Button>
        <p>No entries in table</p>
        <Link to={{pathname: "/AvailableCoinForm", search: `?inv_id=${params.id}`}}>
      <button>Bid Coin</button>
      </Link>
      </>)
    }
    if(coinlist.length === 0){
    return (
      <>
      <Button
          color="primary"
          onClick={onSignoutClick}
        >
            <Link to='/'>Sign Out</Link></Button>
      <p>No entries in table</p>
      <Link to={{pathname: "/AvailableCoinForm", search: `?inv_id=${params.id}`}}>
      <button>Bid Coin</button>
      </Link>
      </>
    );
    }
  return (
    <div>
        <Button
          color="white"
          onClick={onSignoutClick}
        >
            <Link to='/'>Sign Out</Link></Button>
      <h1> Welcome to InvDashboard </h1>
      <div>
        <HomePageTable listiteam={coinlist} tablerowlink={""} />
      </div>
      <Link to={{pathname: "/AvailableCoinForm", search: `?inv_id=${params.id}`}}>
      <button>Bid Coin</button>
      </Link>
    </div>
  );
}
export default InvDashboard;