import React, { useState } from "react";
import HomePageTable from "./HomePageTable";
import { Link } from "react-router-dom";

function App(props) {

	const [items, setItems] = useState([]);
	const [dataIsLoaded, setdataIsLoaded] = useState(false);

	if(dataIsLoaded == false){
		fetch("http://127.0.0.1:3001/coinlist").then((res) => res.json()).then((json) => {
		setItems(json)
		setdataIsLoaded(true)
		})
	}

	if(items.length==0 || dataIsLoaded==false){
		return (<><p>No entries in table</p></>)
	}
	else return (
		<div className = "App">
            <Link to="/SignUpDev">SignupDev</Link>   
			<br/>          
			<Link to="/SignUpIn">SignUpIn</Link>
			<br/>          
            <Link to="/LoginDev">LoginDev</Link>
			<br/>          
            <Link to="/LoginIn">LoginIn</Link>
			<br/>          
			<HomePageTable listiteam={items} tablerowlink={"/Coin/"}></HomePageTable>
		</div>
	);
}

export default App;