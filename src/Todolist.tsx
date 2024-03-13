import {FilterValuesTypes, TaskType} from "./App";
import {Button} from "./Button";

type PropsType = {
	title: string
	tasks: TaskType[]
	removeTask: (taskId:number)=>void
	changeFilter: (filter: FilterValuesTypes) => void;
	deleteAllTasks: () => void
}

export const Todolist = ({title, tasks,removeTask,changeFilter, deleteAllTasks}: PropsType) => {

	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input/>
				<Button title={'+'}/>
			</div>
			{
				tasks.length === 0
					? <p>Тасок нет</p>
					: <ul>
						{tasks.map((task) => {
							return <li key={task.id}>
								<input type="checkbox" checked={task.isDone}/>
								<span>
									{task.title}
								</span>
								<Button title='X' onClickHandler={()=>removeTask(task.id)}/>
							</li>
						})}
					</ul>
			}
			<div>
				<Button title={'All'} onClickHandler ={()=>changeFilter("all")} />
				<Button title={'Active'} onClickHandler ={()=>changeFilter("active")}  />
				<Button title={'Completed'} onClickHandler ={()=>changeFilter("completed")} />
				<Button title={'deleteAllTasks'} onClickHandler ={() =>deleteAllTasks()} />
			</div>
		</div>
	)
}
