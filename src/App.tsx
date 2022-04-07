import React, { FunctionComponent, useEffect, useState } from 'react';
import { getAllJSDocTagsOfKind } from 'typescript';
import { InternsDto } from './api/dto/intern.dto';
import { InternsAPI } from './api/interns.api';
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
  const [interns, setInterns] = useState<InternsDto[]>([])
 
  useEffect(() => {
     async function fetchAll() {
       const resp = await InternsAPI.getAll();
       
       setInterns(resp);

     }

     fetchAll()
  }, [])

  return (
    <div>
      <h1>Interns App UI</h1>
      <MyForm />
      {/* <Button text='Some thing'/> */}

      <div className='App'>
        <ul>
        {
            interns.map(intern =>{
              return (//<li key={intern.id}>{intern.name}
                      <li>
                        Name: {intern.name}
                      <br/>
                        Email: {intern.email}
                      <br/>
                         Age: {intern.age}
                      <br/>
                         Salary: {intern.salary}
                      </li>
            )
          })
        }
        </ul>

      </div>

    </div>
  );
}

export default App;
