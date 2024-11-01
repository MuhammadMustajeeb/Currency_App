import { useState } from 'react'
import { InputBox } from '../index'
import useCurrencyInfo from '../../hooks/useCurrencyInfo'
import { hero } from '../../assets/index'


function Converter() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-gradient-to-r from-pink-800 via-[#11001c] to-[#11001c] relative rounded-b-[35px]"
    >
        <img src={hero} alt='hero' className='w-[35%] h-[80%] absolute -mr-[750px]' />
        <h1 className='text-white text-6xl font-semibold tracking-wider text-balance font-Bebas text-center'>Get instant result by 
            <br className='sm:block hidden'/> <span className='text-pink-800'>Currency</span> Conversion.</h1>
        <div className="w-full">
            <div className="w-full max-w-lg mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-pink-800 hover:bg-pink-950 text-white px-2 py-0.5 text-sm font-medium"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-pink-800 text-white px-4 py-3 rounded-lg shadow-lg text-sm font-medium hover:bg-pink-950">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default Converter