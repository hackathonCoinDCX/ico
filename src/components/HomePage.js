import React, { useState } from "react";
import HomePageTable from "./utility/HomePageTable";
import NavBar from "./utility/NavBar";

function App(props) {

	const [items, setItems] = useState([]);
	// const [session, setSession] = useState([]);
	const [dataIsLoaded, setdataIsLoaded] = useState(false);

	if(dataIsLoaded == false){
		fetch("http://127.0.0.1:3001/coinlist").then((res) => res.json()).then((json) => {
		setItems(json)
		setdataIsLoaded(true)
		})

		// console.log("checksession of navbar");
		// fetch("http://127.0.0.1:3001/checksession").then((res) => res.json()).then((json) => {
		// console.log(json);
		// setSession(json)
		// })
	}

	if(items.length==0 || dataIsLoaded==false){
		return (<><p>No entries in table</p></>)
	}
	else return (
		<div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
		<div className = "App">   
			<NavBar a={"A"}></NavBar>    
			<HomePageTable listiteam={items} tablerowlink={"/Coin/"}></HomePageTable>
		</div>
		</div>
	);
}

export default App;