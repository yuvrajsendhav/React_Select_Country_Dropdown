import { useState } from "react"

let Country_Drop = () =>
{
    let [i, setI] = useState(null);
    let [u, setU]   = useState(null);
    let Country =["INDIA","USA"];
    let iState = ["MP","UP"];
    let uState = ["ALABAMA","TEXAS"]
    let ArrCountry = Country.map((Country)=>
    {
        return<option>{Country}</option>
    })
    let indias=iState.map((iState)=>{
        return<option>{iState}</option>
    })
    let s=<select>{indias}</select>
    let usas=uState.map((uState)=>{
        return <option>{uState}</option>
    });
    let t=<select>{usas}</select>
    var x="";
    const fIndia =(e)=>
    {
        setI(e.target.value);
        if(e.target.value=="INDIA")
        {
            x=s;
        }
        else{
            x=t;
        }
        setU(x);
    }
    return(
        <div>
            <select onChange={(e)=>fIndia(e)}>
                <option>Select Country</option>
                {ArrCountry}
            </select>
            {u}
        </div>
    )
}
export default Country_Drop;