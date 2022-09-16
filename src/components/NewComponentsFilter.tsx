import React from 'react';
import {FilterType} from '../App'


// type ButtonType = {
//   name: string
//   callback: () => void
// }
type NewComponentsFilterType = {
  money: Array<MoneyType>
  // button : ButtonType
  onClickFilterHundler: (value:FilterType) => void
};

type MoneyType = {
  banknots: string
  value: number
  number:number | string

}

export const NewComponentsFilter = (props: NewComponentsFilterType) => {

  //  const onClickFilterHundler1 = (props: ButtonType) => {
  //   props.callback()
  //  }


  return (
<>
<ul>
        {props.money.map((objFromMoney, index) => {
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
        <button onClick={()=> {props.onClickFilterHundler('all')}}>All</button>
        <button onClick={()=> {props.onClickFilterHundler('Dollars')}}>Dollars</button>
        <button onClick={()=> {props.onClickFilterHundler('RUBLS')}}>RUBLS</button>
      </div>
</>
  );
}