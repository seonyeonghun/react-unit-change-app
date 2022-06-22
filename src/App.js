import './App.css';
import './Rwd.css';

import {useState} from 'react';

function App() {
  const [centimeter, setCentimeter] = useState("0");
  const [inch, setInch] = useState("0");
  const [status, setStatus] = useState(true);
  // centimer 변수, setCentimeter 수정함수(=centimeter 변수의 값을 업데이트 & App 컴포넌트를 재 렌더링)
  const handleCentimeter = (e) => {
    setCentimeter(e.target.value); // cm 입력폼의 수정된 값으로 centimeter 변수 업데이트
  }
  const handleInch = (e) => {
    setInch(e.target.value); // cm 입력폼의 수정된 값으로 centimeter 변수 업데이트
  }
  const handleSubmit = (e) => {
    e.preventDefault(); // 이벤트 전파를 막는 메소드 (폼 이벤트 submit 새로고침을 금지)
  }
  const resetInput = () => {
    setCentimeter("값을 입력하세요");
    setInch("변환된 값이 표시됩니다");
  }
  const switchInput = () => {
    setStatus(!status);
  }
  return (
    <div className="App">
      <h1 className="title-text text-center text-white my-0 py-1">단위 환산</h1>
      {/* cm를 2.54로 나누면 inch, inch를 2.54 곱하면 cm */}
      <p className="info py-1 my-0">cm를 inch로 환산하는 앱</p>
      <div className="form-wrap my-1">
        <form onSubmit={handleSubmit}>
          <div className="input-wrap">
            <label>
              <input type="number" value={centimeter} onChange={handleCentimeter} placeholder="센티미터(cm)를 입력하세요" disabled={!status} />cm
            </label>
            <label>
              <input type="number" value={inch} onChange={handleInch} placeholder="인치(inch)로 환산됩니다." disabled={status} />inch
            </label>
            <input type="submit" value="환산하기" />
            <input type="reset" onClick={resetInput} value="초기화" />
            <input type="button" onClick={switchInput} value="입력반전" />
          </div>
        </form>
      </div>
      <p className="owner text-center text-white py-1 fixed w100 bottom0">&copy; hanul.</p>
    </div>
  );
}

export default App;
