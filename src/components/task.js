import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import React from 'react';

class CreateDate {
    beginDate = formatDistanceToNow(new Date())
}
class Task extends React.Component {
    
    render() {
        const { label, onDeleted, onToggleDone, done } = this.props;

        let classNames;

        if (done) {
            classNames = 'completed'
        }
        return (
            <li className={classNames}>
                <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>
                        <span className="description"
                            onClick={onToggleDone}
                        >{label}</span>
                        <span className="created">Created {new CreateDate().beginDate} ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"
                        onClick={onDeleted}></button>
                </div>
            </li>
        )
    }
}

export default Task;