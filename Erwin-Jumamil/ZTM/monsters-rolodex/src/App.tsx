import * as React from "react";
import "./App.css";

const { useState, useEffect } = React;
interface Monsters {
  name: string;
  id: number;
  email: string;
}
export const App = (): JSX.Element => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState(" ");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster: Monsters) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (
    callEvent: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const searchFieldString = callEvent.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <>
      <div>
        <input
          placeholder="SearchMonster"
          type="search"
          className="search-box"
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster: Monsters) => {
          const { id, name, email } = monster;
          return (
            <div className="card-container">
              <img
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                alt={`monster ${name}`}
              />
              <h1>{name}</h1>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
