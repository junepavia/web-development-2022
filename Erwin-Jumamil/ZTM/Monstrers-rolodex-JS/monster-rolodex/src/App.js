// import { Component } from "react";
import { useState, useEffect } from "react";
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/search-box/search-box.component";
import "./App.css";

export const App = () => {
  const [searchField, setSearchField] = useState(" ");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">MONSTER ROLODEX</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="Search Monster"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }
//   onSearchCahnge = (event) => {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchCahnge } = this;

//     const filterMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">MONSTER ROLODEX</h1>
//         <SearchBox
//           className="monsters-search-box"
//           placeholder="Search Monster"
//           onChangeHandler={onSearchCahnge}
//         />
//         <CardList monsters={filterMonsters} />
//       </div>
//     );
//   }
// }
