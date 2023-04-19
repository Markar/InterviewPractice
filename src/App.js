import logo from './logo.svg';
import './App.css';
import { phoneData, PhoneNumber } from "./Questions/PhoneNumber";
import { AddCommas } from './Questions/Fundamentals/AddCommas';
import { HtmlTable } from './Questions/React/HtmlTable';
import { SortedArrays } from './Questions/DsAlgo/SortedArrays';
import { NGram } from './Questions/DsAlgo/NGram';
import { TwoSum } from './Questions/DsAlgo/TwoSum';
import { PrefixSum } from './Questions/NextDoor/PrefixSum';
import { LetterPhoneNumber } from './Questions/NextDoor/LetterPhoneNumber';
import { EmployeeChart } from './Questions/NextDoor/Recusive';
import { TicTacToe } from './Questions/React/TicTacToe';
import { ToDo } from './Questions/React/Todo';

export function App() {
  return (
    <div className="App">
      {/* <HtmlTable /> */}
      {/* <PhoneNumber data={phoneData}/> */}
      {/* <AddCommas /> */}
      {/* <SortedArrays /> */}
      {/* <NGram /> */}
      {/* <TwoSum /> */}
      {/* <PrefixSum /> */}
      {/* <LetterPhoneNumber /> */}
      {/* <EmployeeChart /> */}
      {/* <TicTacToe /> */}
      <ToDo />
    </div>
  );
}