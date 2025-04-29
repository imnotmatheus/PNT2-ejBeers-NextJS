// TODO migrar del proyecto de react la pagina de Beers
import Link from "next/link";
import "./beerCard.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Beer(props) {
  // TODO: Agregar boton comprar, cada vez que se presiona incrementa el contador del
  // componente de Carrito
//   const [liked, setLiked] = useState(false);
  const id = props.name.replace(/ /g,'')

//   const toggleLike = () => {
//     setLiked(!liked);
//   };

  return (
    
    <div className="beer-card">
        <Link href={`/beers/${id}`}>
      <div className="beer-card-image-container">
        <img
          src={"https://images.ctfassets.net/wyfly6ekgxs8/1fZ9xQ9eAOXV9CslAep8XB/66452aa07b4cfdc8368fbfda3d0bbf1f/what_is_light_beer-banner.jpg"}
          alt={`Etiqueta de ${props.name}`}
          className="beer-card-image"
        />
        {/* // <button
        //   className={`heart-button ${liked ? "liked" : ""}`}
        //   onClick={toggleLike}
        //   aria-label={liked ? "Quitar Me gusta" : "Dar Me gusta"}
        // >
        </button> */}
      </div>
      
      <div className="beer-card-content">
        
        <h3 className="beer-card-title">{props.name}</h3>
        <p className="beer-card-type">{props.type}</p>
        <p className="beer-card-abv">ABV: {props.abv}%</p>
        
      </div>
      </Link>
    </div>
    
  );
}

export default Beer;