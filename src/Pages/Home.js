import React, { useState, useEffect } from "react";
import CardHome from "../Components/Home/CardHome";
import Layout from "../Components/Layout/Layout";

export default function Home() {
    const [etatLampe, setEtatLampe] = useState(true)
    useEffect(() => {
        setEtatLampe(true)
    }

    
    )
    
  return (
    <Layout>
      <div className="flex space-x-4 py-16 ">
         

        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
      </div>
    </Layout>
  );
}
