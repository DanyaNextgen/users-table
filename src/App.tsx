import SearchForm from "./components/custom/SearchForm";
import UsersTable from "./components/custom/UsersTable";
import { useEffect, useState } from "react";

function App() {
	const [users, setUsers] = useState([])
	const [allUsers, setAllUsers] = useState([])

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => {
				setUsers(data)
				setAllUsers(data)
			})
	}, []);

	return (
		<center>
			<SearchForm users={allUsers} setUsers={setUsers} /> 
			<UsersTable users={users} />
		</center>
	);
}

export default App;
