import { useEffect } from "react"

export default function Display({getData}){
  useEffect(() => {
    console.log("GetData Changed");
  }, [getData])

  const counterData = getData();
  return counterData.map(data => <p key={data}>{data}</p>)
}