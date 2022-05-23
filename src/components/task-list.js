import Task from './task';

const TaskList = () => {
    return (
        <ul className="todo-list">
            {/* <li className="completed">
                <div className="view">
                    
                    <label>
                        <span className="description">Completed task</span>
                        <span className="created">created 17 seconds ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
                </div>
            </li>
            <li className="editing">
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>
                        <span className="description">Editing task</span>
                        <span className="created">created 5 minutes ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
                </div>
               <input type="text" className="edit" value="Editing task" />
            </li> */}

            <Task id='1' value='Completed task' />
            <Task id='2' value='Editing task' />
            <Task id='3' value='Active task' />
        </ul>
    );
}

export default TaskList;