import './App.css';
import {Todolist} from "./Todolist";
import React, {useState} from "react";

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}



export type FilterValuesTypes = "all" | "completed" | "active"

function App() {
	// const tasks1: Array<TaskType> =
	const [tasks, setTasks] = useState([
		{id: 1, title: 'HTML&CSS', isDone: true},
		{id: 2, title: 'JS', isDone: true},
		{id: 3, title: 'ReactJS', isDone: false},
		{id: 4, title: 'Redux', isDone: false},
		{id: 5, title: 'Typescript', isDone: false},
		{id: 6, title: 'RTK query', isDone: false},
	])
	const deleteAllTasks = () => {
		setTasks([])
	}

	const [filter, setFilter] = useState<FilterValuesTypes>("all")
	const removeTask = (taskId: number) => {
		const updateState = tasks.filter(task => task.id !== taskId)
		setTasks(updateState)
	}
	function changeFilter(filter: FilterValuesTypes) {
		setFilter(filter)
	}




	// let getFilteredTasks = tasks
	// if(filter === "active"){
	// 	getFilteredTasks = tasks.filter( task => task.isDone === false)
	// }
	// if (filter === "completed"){
	// 	getFilteredTasks = tasks.filter(t=>t.isDone === true)
	// }
	// const getFilteredTasks = filter === "active"
	// 	? 	tasks.filter(t=>t.isDone === false)
	// 	:   filter === "completed"
	// 	?   tasks.filter(t => t.isDone === true)
	// 	:   tasks
	const getFilteredTasks = (allTasks: Array<TaskType>, currentFilter: FilterValuesTypes): Array<TaskType> => {
		switch (currentFilter) {
			case "active":
				return allTasks.filter(t => t.isDone === false);
			case "completed":
				return allTasks.filter(t => t.isDone === true);
			default:
				return allTasks;
		}
	}
	const filteredTasks = getFilteredTasks(tasks,filter)
	return (
		<div className="App">
			<Todolist
				title="What to learn"
				tasks={filteredTasks}
				removeTask={removeTask}
				changeFilter={changeFilter}
				deleteAllTasks ={deleteAllTasks}
			/>

		</div>
	);
}




export default App;
