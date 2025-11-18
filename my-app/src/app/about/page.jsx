"use client"

import Image from "next/image";
import {useRouter} from "next/navigation"

export default function About()
{
  const router = useRouter();

  return(<>
    <h1>AYE BRUDDA DIS DE ABAUT SECTIAN</h1>
    <button onClick = {() => {
      alert("Executing");
      router.push("/");
    }}>Click Router</button>
  </>)
}
