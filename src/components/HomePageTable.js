import React, { useState } from "react";
import { Link } from "react-router-dom";

function HomePageTable(props) {
    return (
        <table>
            {
                <tr>
                    {
                        Object.keys(props.listiteam[0]).map((k,v) => (
                            <td>
                                {k}
                            </td>
                        ))
                    }
                </tr>
            }
            {
                props.listiteam.map((item) => {
                    var dd = Object.keys(item).map((key, index) => (
                        <>
                            <td>{item[key]}</td> 
                        </>
                    ))
                    return (
                        <>
                        <tr>
                            {dd}
                            <Link style={{ display: (props.tablerowlink === "")?'none':'block'}} to={props.tablerowlink + item.id}>asd</Link>
                        </tr> 
                        <br/> <br/> 
                        </>   
                    )
                })
            }
        </table>
    );
}

export default HomePageTable;