import { useEffect, useState } from "react";

//It's our custom hook and usecurrencyinfo is just random name and currency(var)random name for Info
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

//1) It's Part of Custom Hook Designing
export default useCurrencyInfo  