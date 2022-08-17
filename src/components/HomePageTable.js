import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

function HomePageTable(props) {
    return (
        <Table striped bordered hover>
            {
                <thead>
                    {
                        Object.keys(props.listiteam[0]).map((k,v) => (
                            <td>
                                {k}
                            </td>
                        ))
                    }
                </thead>
            }
            {
                props.listiteam.map((item) => {
                    var dd = Object.keys(item).map((key, index) => (
                            <th>{item[key]}</th> 
                    ))
                    return (
                        <tbody>
                        <tr>
                            {dd}
                            <Link style={{ display: (props.tablerowlink === "")?'none':'block'}} to={props.tablerowlink + item.id}>asd</Link>
                        </tr> 
                        </tbody>   
                    )
                })
            }
        </Table>
    );
}

export default HomePageTable;