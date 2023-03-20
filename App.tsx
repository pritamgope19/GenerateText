import * as React from 'react';
import './style.css';

export default function App() {
  const [optChar, setOptChar] = React.useState('');
  const [optNum, setOptNum] = React.useState('');
  const [text, setText] = React.useState('');

  const reset = () => {
    setOptChar('');
    setOptNum('');
    setText('');
  };
  return (
    <div className="App">
      <div className="container m-2">
        <div className="optCharContainer d-flex">
          <button
            onClick={() => setOptChar('A')}
            className={`btn ${
              optChar == 'A' ? 'btn-success' : 'btn-primary'
            } m-1`}
          >
            A
          </button>
          <button
            onClick={() => setOptChar('B')}
            className={`btn ${
              optChar == 'B' ? 'btn-success' : 'btn-primary'
            } m-1`}
          >
            B
          </button>
          <button
            onClick={() => setOptChar('C')}
            className={`btn ${
              optChar == 'C' ? 'btn-success' : 'btn-primary'
            } m-1`}
          >
            C
          </button>
          <button
            onClick={() => setOptChar('D')}
            className={`btn ${
              optChar == 'D' ? 'btn-success' : 'btn-primary'
            } m-1`}
          >
            D
          </button>
        </div>
        <div className="optNumContainer d-flex">
          <button
            onClick={() => setOptNum('1')}
            className={`btn ${
              optNum == '1' ? 'btn-success' : 'btn-primary'
            } m-1`}
          >
            1
          </button>
          <button
            onClick={() => setOptNum('2')}
            className={`btn ${
              optNum == '2' ? 'btn-success' : 'btn-primary'
            } m-1`}
          >
            2
          </button>
          <button
            onClick={() => setOptNum('3')}
            className={`btn ${
              optNum == '3' ? 'btn-success' : 'btn-primary'
            } m-1`}
          >
            3
          </button>
          <button
            onClick={() => setOptNum('4')}
            className={`btn ${
              optNum == '4' ? 'btn-success' : 'btn-primary'
            } m-1`}
          >
            4
          </button>
        </div>
        <div className="textAreaContainer d-flex mt-3">
          <textarea name="text" defaultValue={text} readOnly />
          <button
            onClick={() =>
              optChar &&
              optNum &&
              setText(`The user has chosen ${optChar} with ${optNum}. Thanks!`)
            }
            className={`btn btn-warning m-1`}
          >
            Generate Text
          </button>
          <button onClick={() => reset()} className={`btn btn-danger m-1`}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
