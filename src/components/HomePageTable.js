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

    handleroute = (event) => {
        console.log("asdad");
    }



    render(){
        if(this.props.listiteam.length === 0){
            return (<><p>no entries to show in table</p></>)
        }
        return (
            <table>
                {
                    <tr>
                        {
                            Object.keys(this.props.listiteam[0]).map((k,v) => (
                                <td>
                                    {k}
                                </td>
                            ))
                        }
                    </tr>
                }
                {
                    this.props.listiteam.map((item) => {
                        var dd = Object.keys(item).map((key, index) => (
                            <>
                                <td>{item[key]}</td> 
                            </>
                        ))
                        return (
                            <>
                            <tr>
                                {dd}
                                <Link style={{ display: (this.props.tablerowlink === "")?'none':'block'}} to={this.props.tablerowlink + item.id}>asd</Link>
                            </tr> 
                            <br/> <br/> 
                            </>   
                        )
                    })
                }
            </table>
        )
    }
}
export default HomePageTable;