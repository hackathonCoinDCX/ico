import React, {useState} from "react";
import { useLocation } from "react-router-dom";

function AddCoin(props) {

  const location = useLocation()
  var dead = new URLSearchParams(location.search).get("dev_id")
  console.log("id: ", dead);

  const [items, setItems] = useState([])
  const [dataisLoaded, setDataisLoaded] = useState(false)

  const [coinlistobj, setCoinlistobj] = useState({
    dev_id: dead,
    coin_name: "",
    about: "",
    start_date: "",
    end_date: "",
    start_price: "",
    end_price: "",
    platform: "",
    category:"",
    total_tokens: "",
    min_tokens: "",
    white_paper:""
  });

  const handleChange = (event) => {
    let input = {[event.target.name]:event.target.value};
    setCoinlistobj({...coinlistobj, ...input});
    // console.log(coinlistobj);
  }

  function handleSubmit(event) {
    console.log("following values are set : ", coinlistobj);
    // event.preventDefault();
    let url = "http://localhost:3001/user/developer/listnewcoin";
    let data = coinlistobj;
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      }).then((res) => { console.log(res); res.json()})
			.then((json) => {
        setItems(json);
        setDataisLoaded(true);
        console.log(items);
        // this.props.navigation.navigate('/Dev')
			})
      event.preventDefault();
    }
	
  return (
    <div>
      <h1>List a new coin</h1>
      <form onSubmit={handleSubmit}>
          <table>
              <tr> 
                  <td>Enter Name</td>
                  <td><input name="coin_name" type='string' onChange={handleChange}/></td>
              </tr>
              <tr> 
                  <td>about</td>
                  <td><input name="about" type='string' onChange={handleChange}/></td>
              </tr>
              <tr> 
                  <td>start date</td>
                  <td><input name="start_date" type='date' onChange={handleChange}/></td>
              </tr>
              <tr> 
                  <td>end date</td>
                  <td><input name="end_date" type='date' onChange={handleChange}/></td>
              </tr>
              <tr> 
                  <td>start price</td>
                  <td><input name="start_price" type='number' onChange={handleChange}/></td>
              </tr>
              <tr> 
                  <td>end price</td>
                  <td><input name="end_price" type='number' onChange={handleChange}/></td>
              </tr>
              <tr> 
                  <td>Platform</td>
                  <td><input name="platform" type='string' onChange={handleChange}/></td>
              </tr>
              <tr> 
                  <td>Category</td>
                  <td><input name="category" type='string' onChange={handleChange}/></td>
              </tr>
              <tr> 
                  <td>total token</td>
                  <td><input name="total_tokens" type='number' onChange={handleChange}/></td>
              </tr>
              <tr> 
                  <td>min token</td>
                  <td><input name="min_tokens" type='number' onChange={handleChange}/></td>
              </tr>
              <tr> 
                  <td>upload white_paper</td>
                  <td><input name="white_paper" type='string' onChange={handleChange}/></td>
              </tr>
              <tr>
                  <td></td>
                  <td><button type="submit">Submit</button></td>
              </tr>
          </table>
      </form>
    </div>
  );
}

export default AddCoin;
