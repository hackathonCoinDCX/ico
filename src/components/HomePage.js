import React from "react";
import NavBar from "./NavBar";
import { ReactDOM } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            yourname:''
        }
    }
    handleChange =(event)=>{
        // alert(event.target.value)
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) =>{
        if(this.state){
            console.log(this.state, "asdadsa")
            alert("Form Submitted..."+this.state)
            fetch('http://127.0.0.1:3001/submit-name',{
                method: "POST",
                headers: {"Content-Type": "application/json",
                          "Access-Control-Allow-Origin": "*"
                         },
                body: JSON.stringify(this.state)
            })
            .then((res) => {
               console.log("ASDAD", res.json()); alert("Form Submitted..."+this.state); return res.json()})
            .then(res => {
                if(res.ok){
                    console.log("request sucess");
                    alert("asdankd ka d")
                    return res.json();
                } else {
                    console.log("request fail");
                    throw new Error("something went wrong..");
                }
            }).catch(err => {
                console.log(err);
                console.log("error happed");
            });
            // event.preventDefault();
        }
    }
    render(){
        return(
        <div>
        <NavBar/>
        <form onSubmit={this.handleSubmit} >
            <label>
                Enter Your Name: 
                <input type='text' value={this.state.value} name="yourname" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submmit" />
            
            <table >
                <tr>
                    <td>asdad</td>
                    <td>asdad</td>
                    <td>asdad</td>
                </tr>
                <tr>
                    <td>asdad</td>
                    <td>asdad</td>
                    <td>asdad</td>
                </tr>
            </table>
        </form>
        </div>
        );
    }
}
export default HomePage;