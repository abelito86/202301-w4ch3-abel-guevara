import { FC } from 'react';
import './TaskCreator.css';

interface TaskInput {
  task: (event: React.FormEvent<HTMLFormElement>) => void;
}

const TaskCreator: FC<TaskInput> = ({ task }) => {
  return (
    <>
      <h2>TodoInput</h2>
      <form onSubmit={task} className="task-creator__form">
        <input
          data-testid="task-input"
          className="task-creator__input"
          name="task"
          placeholder="New Todo"
        ></input>
        <button type="submit" className="task-creator__button">
          Add new task
        </button>
      </form>
    </>
  );
};

export default TaskCreator;
