import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import WeightScale from './img/weightScale.png';
import { Result_comp } from './components/Result_comp';
import React, { useState, useEffect } from 'react';

function App() {


  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(1);
  const [show, setShow] = useState(false);

  let result = 0;

  // 	80 kg súlyú 1,65 m magasságú személy esetén:

  // 80/(1,65x1,65)=29,38 kg/m2

  // BMI értékek csoportosítása:
  // 16 alatt kóros soványság
  // 16-17 mérsékelt soványság
  // 17-18,5 enyhe soványság
  // 18,5-25 normális testsúly
  // 25-30 túlsúly
  // 30-35 elhízás
  // 35-40 túlzott elhízás
  // 40 fölött extrém elhízás

  const caluclateResult = () => {
    console.log(weight);
    console.log(height);
    result = weight / (height * height);
    // setShow(true);
  }


  return (
    <div className="App">
      <h1 className="text-center title m-5">bmi kalkulátor</h1>
      <div className="container">
        <div className="row">

          <img className="col-md-5 svg mt-5 mb-5 div"
            src={WeightScale}
            alt="WeightScale"
          />

          <div className="col-md-4 p-5 m-5">
            <form className="form">
              <p className="description">Mindössze két adatot kell megadnod a testtömeg index kiszámításához.</p>

              <div className="mb-4 pt-5">
                <input type="number" id="weight" className="weight form-control h-100" placeholder="súly (kg)" onChange={(e) => setWeight(parseInt(e.target.value))} />

              </div>
              <div className="mb-4">
                <input type="number" id="height" className="height form-control h-100" placeholder="magasság (cm)" onChange={(e) => setHeight(parseInt(e.target.value))} />
              </div>
            </form>

            <button className="btn btn-primary btn-block w-100 mt-4" onClick={caluclateResult(height, weight)}>Számol</button>
            <Result_comp result={result} show={show} />
          </div>
        </div>
      </div>
    </div >
  );
}
export default App;
