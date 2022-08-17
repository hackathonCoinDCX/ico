import React from "react";
import { Link } from "react-router-dom";

class HomePageTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            test:''
        }
    }

    handleChange =(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        return (
            <div>
                {
                    this.props.listiteam.map((item) => (
                    <table>
                        {/* <Link to={"/coin/:"+item.Id}> */}
                        <Link to={{pathname: "/Coin/"+item.Id, param1: "Par1" }}>
                            <tr>
                                <td>User_Name: { item.dev_id }</td>
                                <td>User_Name: { item.about }</td>
                                <td>User_Name: { item.start_date }</td>
                                <td>User_Name: { item.end_date }</td>
                                <td>User_Name: { item.start_price }</td>
                                <td>User_Name: { item.end_price }</td>
                                <td>User_Name: { item.platform }</td>
                                <td>User_Name: { item.category }</td>
                                <td>User_Name: { item.total_tokens }</td>
                                <td>User_Name: { item.min_tokens }</td>
                                <td>User_Name: { item.white_paper }</td>
                            </tr>
                        </Link>
                    </table>
                    ))
                }
            </div>
        );
    }
}
export default HomePageTable;