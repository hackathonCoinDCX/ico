import React from "react";
import HomePageTable from "./HomePageTable";

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
			<HomePageTable listiteam={items}></HomePageTable>
		</div>
		);
	}
}

export default App;


// import React from "react";
// import HomePageTable from "./HomePageTable";

// class HomePage extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             yourname: '',
//             items: [],
//             dataisLoaded: false
//         }
//     }

//     componentDidMount() {
//         fetch("http://127.0.0.1:3001/coinlist")
//             .then((res) => res.json())
//             .then((json) => {
//                 this.setState({
//                     items: json,
//                     DataisLoaded: true
//                 });
//             })
//     }

//     handleChange =(event)=>{
//         // alert(event.target.value)
//         // this.setState({[event.target.name]: event.target.value})
//     }

//     // handleSubmit = (event) =>{
//     //     if(this.state){
//     //         console.log(this.state, "asdadsa")
//     //         alert("Form Submitted..."+this.state)
//     //         var url = "http://127.0.0.1:3001/coinlist";
//     //         const options = {
//     //             method: 'GET'
//     //         };
//     //         var jeansp = "";
//     //         fetch(url, options).then(res => {
//     //             console.log(res);
//     //             return res.json()
//     //         }).then((data) => {
                
//     //             Object.keys(data).forEach(function(key){
//     //                 console.log("data: " + JSON.stringify(data[key]));
//     //                 jeansp+=JSON.stringify(data[key]) + "\n";
//     //             })  
//     //         })
//     //         this.setState({yourname: jeansp});
//     //     }
//     // }

//     render(){
//         console.log(this.state.items);
//         // console.log("asda  "+ this.state.yourname + "   asd");
//         const { DataisLoaded, items } = this.state;
//         if (!DataisLoaded) return <div>
//             <h1> Pleses wait some time.... </h1> </div> ;
   
//         return(
//             <div>
//                 <form onSubmit={this.handleSubmit} >
//                     <label>
//                         Enter Your Name: 
//                         <input type='text' value={this.state.value} name="yourname" onChange={this.handleChange} />
//                     </label>
//                     <input type="submit" value="Submmit" />
//                 </form>
//                 <p>{this.state.items[0]}</p>
//                 {/* <HomePageTable /> */}
//             </div>
//         );
//     }
// }
// export default HomePage;