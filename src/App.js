import './App.css';
import './Rwd.css';

import {useState} from 'react';
import CmToInch from './component/CmToInch';
import MinutesToHours from './component/MinutesToHours';
import KmToMiles from './component/KmtoMiles';


function App(){
  const [index, setIndex] = useState("0");
  const [img, setImg] = useState(["CmToInch","KmToMiles","MinutesToHours"])
  const onSelect= (e) => {
    setIndex(e.target.value);
    console.log(img[index])
  }
  return (
    <div className="App">
      <h1 className="App-title text-white text-center my-0 py-1 cap">Unit Covert - 단위 변환기</h1>
      <div className="info py-1 d-flex justify-center">
        <select value={index} onChange={onSelect}>
          <option value="0">Centimeter &amp; Inch</option>
          <option value="1">Minutes &amp; Hours</option>
          <option value="2">Kilometer &amp; Miles</option>
        </select>
      </div>
      {index === "0" ? <CmToInch ratio={2.54} /> : null }
      {index === "1" ? <MinutesToHours ratio={60} /> : null }
      {index === "2" ? <KmToMiles ratio={1.609} /> : null }
    </div>
  )
}

export default App;
