import "./card-list.style.css";
import { Card } from "../card/card.component";
// import { Component } from "react";

export const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return (
        <div key={monster.id}>
          <Card monster={monster} />
        </div>
      );
    })}
  </div>
);

// export default class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card card={monster} />;
//         })}
//       </div>
//     );
//   }
// }
