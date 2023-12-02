import React, { useState } from "react";
import { FaCopy } from "react-icons/fa6";
import styles from "./Task.module.css";
import { TaskPropsI } from "./Task.interface";
import TaskItem from "features/TaskItem";
import { Draggable } from "react-beautiful-dnd";
import { addItem } from "entites/tasks/taskSlice";
import { useDispatch } from "react-redux";

const Task: React.FC<TaskPropsI> = ({ task }) => {
  const [newItemName, setNewItemName] = useState("");
  const [addNewClicked, setAddNewClicked] = useState(false);

  const dispatch = useDispatch();

  const handleAddClick = () => {
    setAddNewClicked(true);
  };


  const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNewItemName(e.target.value)
  }

  const onAddNewClick = () => {
    if(newItemName===""){
      setAddNewClicked(false)
    }else{
       dispatch(addItem({parentId: task.id, name: newItemName}))
       setNewItemName('')
    }
  } 
  return (
    <div className={styles.taskGroup}>
      <div className={styles.taskName}>
        <h4>{task.taskState}</h4>
        <button className={styles.bbutton}>
          <p>. . .</p>
        </button>
      </div>
      {task.tasks.map((item, index) => {
        return (
          <Draggable
            key={item.id}
            draggableId={item.id.toString()}
            index={index}
          >
            {(provided) => {
              return (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  <TaskItem item={item} parentId={task.id} key={item.id} />
                </div>
              );
            }}
          </Draggable>
        );
      })}
      <div className={styles.taskBottom}>
        {!addNewClicked ? (
          <div className={styles.taskBottomDiv}>
            <button className={styles.addButton} onClick={handleAddClick}>
              + Add a card
            </button>
            <button className={styles.copyButton}>
              <FaCopy />
            </button>
          </div>
        ) : (
          <div className={styles.addNew}>
            <input type="text" value={newItemName} onChange={onInputChange }/>
            <button onClick={onAddNewClick}>{newItemName!=="" ? "Add new card": 'Close'}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
