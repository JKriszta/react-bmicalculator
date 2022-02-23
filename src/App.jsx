import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import WeightScale from './img/weightScale.png';

function App() {
  return (
    <div className="App">
      <h1 className="text-center title m-5">bmi kalkulátor</h1>
      <div className="container">
        <div class="row">
          <img className="col-md-6 svg mt-3 mb-3 p-2 w-50"
            src={WeightScale}
            alt="WeightScale"
          />
          <div class="col-md-6">
            <form className="form">

              <div class="mb-4">
                <input type="number" id="weight" className="weight" placeholder="súly (kg)" />

              </div>
              <div class="mb-4">
                <input type="number" id="height" className="height" placeholder="magasság (cm)" />

              </div>
            </form>
            <button className="btn btn-primary btn-block">Számol</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
