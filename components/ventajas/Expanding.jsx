import React,{useState} from "react";
import Card from "./Card";

const Expanding = (props) => {
  const [data, setData] =useState(props.data)
  const onCardClick =(id)=>{
    const newState =[...data]
    newState.map((item) => item.id === id ? item.active = true : item.active =false )
    setData(newState)
  }
  if (!data && data.length <= 0) {
    return "No data";
  }

  return (
    <section className="cards">
      {data.map((card) => (
        <Card key={card.id} data={card} onCardClick={onCardClick}/>
    ))}
    </section>
  );
};

export default Expanding;
