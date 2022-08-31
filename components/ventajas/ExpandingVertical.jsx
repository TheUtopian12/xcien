import React,{useState} from "react";
import Card from "./Card";
import CardVertical from "./CardVertical";

const ExpandingVertical = (props) => {
  const [data, setData] = useState(props.data)
  const onCardClick =(id)=>{
    const newState =[...data]
    newState.map((item) => item.id === id ? item.active = true : item.active =false )
    setData(newState)
  }
  if (!data && data.length <= 0) {
    return "No data";
  }

  return (
    <section className="cardsV flex justify-center">
      {data.map((card) => (
        <CardVertical key={card.id} data={card} onCardClick={onCardClick} />
    ))}
    
    </section>
  );
};

export default ExpandingVertical;
