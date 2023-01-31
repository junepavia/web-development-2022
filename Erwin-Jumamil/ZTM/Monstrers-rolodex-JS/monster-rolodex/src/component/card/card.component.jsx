import "./card.style.css";
// import { Component } from "react";

export const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
// export default class Card extends Component {
//   render() {
//     const { name, email, id } = this.props.card;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt={`monster ${name}`}
//         />
//         <h1>{name}</h1>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }
