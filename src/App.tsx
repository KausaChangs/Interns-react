import React, { FunctionComponent } from 'react';
import logo from './logo.svg';


function add(a: number, b: number): number {
  return a + b;
}

const add3: Function = (a: number, b: number): number => {
  return a + b;
}

interface ButtonProps {
  text: string;
  ourClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  return (
    <div>
      <button style={{ border: "1px solid black" }} onClick={props.ourClick}>{props.text}</button>
    </div>
  )
}

interface ButtonWithNumberProps {
  number: number;
  ourClick?: () => void;
}

const ButtonWithNumber: FunctionComponent<ButtonWithNumberProps> = (props) => {
  return (
    <div>
      <button style={{ border: "1px solid black" }} onClick={props.ourClick}>{props.number}</button>
    </div>
  )
}

const someObject = {
  target: {
    value: "my value"
  }
}

const ourvalue = someObject.target.value; 


function MyForm() {
  const submitDetails = () => {
    window.alert('Details submitted');
  }

  


  return (
    <div id="container">
      <div id="form">
        <form>
          <div id="inputs">
            <div id="input">
              <label>Enter Intern email:
                <input type="text" onChange={(event) => console.log(event.target.value)}/>
              </label>
            </div>
            <div id="input">
              <label>Enter Intern name:
                <input type="text" onChange={(event) => console.log(event.target.value)} />
              </label>
            </div>
            <div id="input">
              <label>Enter Intern age:
                <input type="number" onChange={(event) => console.log(event.target.value)}/>
              </label>
            </div>
            <div id="input">
              <label>Enter Intern salary:
                <input type="number" onChange={(event) => console.log(event.target.value)}/>
              </label>
            </div>
          </div>
          
          <Button text='Submit intern' ourClick={() => submitDetails()} />
          
        </form>
      </div>
    </div>
  )

}


function App() {
  return (
    <div>
      <h1>Interns App UI</h1>
      <MyForm />
      {/* <Button text='Some thing'/> */}

    </div>
  );
}

export default App;
