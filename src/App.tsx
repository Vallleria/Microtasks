import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'
import { Button } from './components/Button'
// import { Header } from './Site/Header'
// import { Body } from './Site/Body'
// import { Footer} from './Site/Footer';
// import {NewComponents} from './NewComponents'



// const students = [
//   {id:1, name:'BMW', age: 3},
//   {id:2, name:'A', age: 5},
//   {id:3 ,name:'B', age: 7},
//   {id:4 ,name:'W', age: 1},
//   {id:5 ,name:'W', age: 8},
//   {id:6 ,name:'W', age: 9},
//   {id:7 ,name:'W', age: 10}
// ]


//   let topCars = [
//   { manufacturer: 'BMW', model: 'm5cs' },
//   { manufacturer: 'Mercedes', model: 'e63s' },
//   { manufacturer: 'Audi', model: 'rs6' }
// ]


function App() {



  // const myFirstSubscribe = (event:MouseEvent) => {
  //   console.log('Hellow Im Valeria')
  // }
  // const mySecondSubscribe = () => {
  //   console.log('Hellow Im Dima')
  // }


  // const Button1Foo = (sub: string) => {
  //   console.log(sub)
  // }

  // const Button2Foo = (sub: string) => {
  //   console.log(sub)
  // }

  // const Button23Foo = () => {
  //   console.log('Im stuped buuton')
  // }


  // let a =1
  // let[a, setA] = useState(1)

  // const onClickHundler = () => {
  //   setA(++a)
  //   console.log(a)

  // }
  // const onClickHundler1 = () => {
  //   setA(0)
  //   console.log(a)

  // }
  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])



 const[filter, setFilter]= useState('all')

  let currentMoney = money;
    if (filter === 'dollar') {
      currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    } if (filter === 'RUBLS') {
      currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }




  const onClickFilterHundler = (nameButton: string) => {
      setFilter(nameButton)
  }


  return (
    <>
      <ul>
        {currentMoney.map((objFromMoney, index) => {
          return (
            <li key={index}>
              <span>{objFromMoney.banknots}</span>
              <span>{objFromMoney.value}</span>
              <span>{objFromMoney.number}</span>
            </li>
          )
        })}
      </ul>
      <div style={{ marginLeft: '35px' }}>
        <button onClick={() => onClickFilterHundler('all')}>All</button>
        <button onClick={() => onClickFilterHundler('RUBLS')}>ruble</button>
        <button onClick={() => onClickFilterHundler('dollar')}>dollar</button>
      </div>

    </>
  );



}






{/* <h1>{a}</h1>
<button onClick={onClickHundler}>number</button>
<button onClick={onClickHundler1}>0</button> */}


{/* <button>MyYouTubeChanel1</button>
      <button>MyYouTubeChanel2</button> */}
{/* <Button name={'MyYouTubeChanel-1'} callBack={()=>{'Valeria'}} />
    <Button name={'MyYouTubeChanel-2'} callBack={()=>'Dima'} />
    <Button name={'MyYouTubeChanel-3'} callBack={Button23Foo} /> */}


export default App;






















{/* <Header title={"New Body"}/>
      <Body titleForBody={"New Body"}/>
      <Footer titleForFooter={"New Body"}/> */}

