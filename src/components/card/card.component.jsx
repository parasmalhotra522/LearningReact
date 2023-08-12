import "./card.component.css";
const Card = (props) => { 
        const {name, email, id }= props.monster;
        return (
            <div className="card-container" key={id}>
            <img alt={name} 
            src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            
                <h2>{name}</h2>
                <p>{email}</p>
                
        </div>
        );
   }
export default Card;