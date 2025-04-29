// TODO migrar del proyecto de react la pagina de Beers
import Beer from "./Beer";


function BeerList(props) {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {props.beers.map((beer, index) => (
        <Beer
          key={index}
          name={beer.name}
          abv={beer.abv}
          label={beer.label}
          type={beer.type}
        />
      ))}
    </div>
  );
}

export default BeerList;