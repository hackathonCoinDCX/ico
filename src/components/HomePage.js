import React, { useState } from "react";
import HomePageTable from "./HomePageTable";

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
		<div>
		<div className = "App">       
			<HomePageTable listiteam={items} tablerowlink={"/Coin/"}></HomePageTable>
		</div>
		</div>
	);
}

export default App;