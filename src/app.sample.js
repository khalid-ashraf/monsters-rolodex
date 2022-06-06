import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";
import "./App.css";

const App = () => {
	const [searchField, setSearchField] = useState("");
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilterMonsters] = useState([]);

	useEffect(() => {
		if (!monsters.length) {
			fetch("https://jsonplaceholder.typicode.com/users")
				.then((response) => response.json())
				.then((users) => setMonsters(users));
		}
		if (searchField) {
			const newFilteredMonsters = monsters.filter((monster) => {
				return monster.name.toLocaleLowerCase().includes(searchField);
			});

			setFilterMonsters(newFilteredMonsters);
		}
	}, [searchField]);

	const onSearchChange = (event) => {
		debugger;
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Rolodex</h1>

			<SearchBox
				className='monsters-search-box'
				onChangeHandler={onSearchChange}
				placeholder='search monsters'
			/>
			<CardList monsters={searchField ? filteredMonsters : monsters} />
		</div>
	);
};

export default App;
