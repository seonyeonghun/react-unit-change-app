import React, {useState} from 'react';
import './ComponentStyle.css';
import thumb from '../static/KmToMiles.jpg';

function KmToMiles({ratio}) {
    const [amount, setAmount] = useState("0");
    const [status, setStatus] = useState(false);
    
    const handleChange = (e) => {
      setAmount(e.target.value);
    }
    const resetInput = () => {
      setAmount("");
    }
    const switchInput = () => {
      setStatus(!status);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
    }
    
    return (
      <div className="Component">
        <div className="form-wrap my-1 mx-1">
        <form onSubmit={handleSubmit}>
          <div className="input-wrap">
            <fieldset className="brdr0 flex3 d-flex space-between">
            <label className="flex1">
              <input type="text" value={status ? amount*ratio : amount} onChange={handleChange} placeholder="센티미터(cm)를 입력하세요" disabled={status} />kilometer
            </label>
            <label className="flex1">
              <input type="text" value={!status ? amount/ratio: amount} onChange={handleChange} placeholder="인치(inch)로 환산됩니다." disabled={!status} />miles
            </label>
            </fieldset>
            <fieldset className="brdr0 flex1 d-flex gap1">
              <input type="reset" onClick={resetInput} value="초기화" />
              <input type="button" onClick={switchInput} value="반전" />
            </fieldset>
          </div>
        </form>
        <figure className="img text-center">
          <img src={thumb} className="object-fit" alt="삽화" />
          <figcaption className="d-none">삽화</figcaption>
        </figure>
        </div>
      </div>
    );
  }

  export default KmToMiles;