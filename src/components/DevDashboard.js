import React, { useState } from "react";
import HomePageTable from "./HomePageTable";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function DevDashboard(props) {
  const params = useParams()
  console.log(params)
  console.log(props);

	const [coinlist, setCoinlist] = useState([]);
	const [dataIsLoaded, setdataIsLoaded] = useState(false);

	if(dataIsLoaded == false){
		fetch(`http://127.0.0.1:3001/user/developer/coinlist`)
      .then((res) => res.json())
      .then((json) => {
        setCoinlist(json)
        setdataIsLoaded(true)
    });
	}

	if(coinlist.length==0 || dataIsLoaded==false){
		return (<><p>No entries in table</p></>)
	}
	if(coinlist.length === 0){
    return (
      <><p>No entries in table</p></>
    );
  }
  return (
    <div>
      <h1> Welcome to DevDashboard </h1>
      <div>
        <HomePageTable listiteam={coinlist} tablerowlink={""} />
      </div>
      <Link to={{pathname: "/AddCoin", search: `?dev_id=${coinlist[0].dev_id}`}}>
      <button>Add New Coin</button>
      </Link>
    </div>
  );
}

export default DevDashboard;
