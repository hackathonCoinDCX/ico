import React from "react";
import HomePageTable from "./HomePageTable";
import { Link } from "react-router-dom";

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch("http://127.0.0.1:3001/coinlist")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}

	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
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
}

export default App;