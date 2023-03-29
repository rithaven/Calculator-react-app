import { useState } from "react"
import Button from "./components/Button"

export default function App() {
  const [input, setInput] = useState("")
  const [previousVal, setPreviousVal] = useState("")
  const [operator, setOperator] = useState(null)

  function holdClick(number) {
    if (operator === null) {
      setPreviousVal(preValue => preValue + number);
    } else {
      setInput(prevNumber => prevNumber + number);
    }
  }

  function holdOperator(newOperator) {
    setOperator(newOperator)
  }

  function holdplusminus() {
    return input ? setInput(Number(input) * -1) : setPreviousVal(Number(previousVal * -1))
  }

  function holdClear() {
    setInput("")
    setPreviousVal("")
    setOperator(null)

  }

  function holdEqual() {
    let result = 0;
    switch (operator) {
      case '+':
        result = Number(previousVal) + Number(input);
        break;
      case '-':
        result = Number(previousVal) - Number(input);
        break;
      case '*':
        result = Number(previousVal) * Number(input);
        break;
      case '/':
        result = Number(previousVal) / Number(input);
        break;
      case '%':
        result = Number(previousVal) / 100 * Number(input);
        break;
      default:
        result = Number(input);
        break;
    }
    setInput(result);
    setOperator(null);
    setPreviousVal("");
  }

  return (
    <div className="container flex flex-col items-center justify-center h-screen mx-auto">
      <div className="grid grid-cols-4 text-center cursor-pointer">
        <div className="bg-[#7b7a89] text-white w-full text-2xl p-4 font-bold flex col-span-4 justify-end">{input || previousVal || "0"}</div>
        <Button holdClick={holdClear} style="text-lg">AC</Button>
        <Button holdClick={holdplusminus}>+/-</Button>
        <Button holdClick={() => holdOperator('%')}>%</Button>
        <Button holdClick={() => holdOperator('/')} style="bg-[#f48637] text-white" >÷</Button>
        <Button holdClick={() => holdClick('7')}>7</Button>
        <Button holdClick={() => holdClick('8')}>8</Button>
        <Button holdClick={() => holdClick('9')}>9</Button>
        <Button holdClick={() => holdOperator('*')} style="bg-[#f48637] text-white" >x</Button>
        <Button holdClick={() => holdClick('4')}>4</Button>
        <Button holdClick={() => holdClick('5')}>5</Button>
        <Button holdClick={() => holdClick('6')}>6</Button>
        <Button holdClick={() => holdOperator('-')} style="bg-[#f48637] text-white">-</Button>
        <Button holdClick={() => holdClick('1')}>1</Button>
        <Button holdClick={() => holdClick('2')}>2</Button>
        <Button holdClick={() => holdClick('3')}>3</Button>
        <Button holdClick={() => holdOperator('+')} style="bg-[#f48637] text-white">+</Button>
        <Button holdClick={() => holdClick('0')} style="col-span-2" >0</Button>
        <Button holdClick={() => holdClick('.')}>.</Button>
        <Button holdClick={holdEqual} style="bg-[#f48637] text-white">=</Button>
      </div>
    </div >
  )
}