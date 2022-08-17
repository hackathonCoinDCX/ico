import React, { useState } from "react";
import { useParams } from 'react-router-dom';

function Coin(props) {
  const params = useParams()
  console.log(params)
  console.log(props);

	const [items, setItems] = useState([]);
	const [dataIsLoaded, setdataIsLoaded] = useState(false);

	if(dataIsLoaded == false){
		fetch("http://127.0.0.1:3001/coin/"+params.Id)
      .then((res) => res.json())
      .then((json) => {
        setItems(json)
        setdataIsLoaded(true)
        console.log(items);
    });
	}

	if(items.length==0 || dataIsLoaded==false){
		return (<><p>No entries in table</p></>)
	}
	else {
    return (
      <div>
        <div>
            {
              items.map((item) => (
              <table>
                      <tr>
                          <td>dev_id: { item.dev_id }</td>
                          <td>about: { item.about }</td>
                          <td>start_date: { item.start_date }</td>
                          <td>end_date: { item.end_date }</td>
                          <td>start_price: { item.start_price }</td>
                          <td>end_price: { item.end_price }</td>
                          <td>Uplatform: { item.platform }</td>
                          <td>category: { item.category }</td>
                          <td>total_tokens: { item.total_tokens }</td>
                          <td>min_tokens : { item.min_tokens }</td>
                          <td>white_paper: { item.white_paper }</td>
                      </tr>
                  {/* </Link> */}
              </table>
              ))
            }
        </div>
      </div>
    );
  }
}

export default Coin;