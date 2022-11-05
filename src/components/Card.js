import "./Card.css"

function Card(props) {
    return (
      <div className = "card-box">
      <div className='card'> 
      <div>
      <img className= "image-w" src={props.img}/>
        <h4>{props.name}</h4>
        <p>{props.desc}</p>
        <h4>{props.price}</h4>
        <button className="button">More Info</button>
        
        </div>
      </div>
      </div>
    );
  }
  
  export default Card;