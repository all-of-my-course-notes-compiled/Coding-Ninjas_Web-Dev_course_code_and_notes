
import { useSelector, useDispatch } from "react-redux";
// import { deleteNote } from "../../redux/actions/noteActions";
import { actions } from "../../redux/reducers/noteReducer";
import styles from "./NoteList.module.css";

function NoteList() {
    const notes=useSelector((state)=> state.noteReducer.notes);
    const dispatch=useDispatch();

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li className={styles.item}>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className={styles.notecontent}>{note.text}</p>
            <button className={"btn btn-danger "+styles.button}
            onClick={()=> dispatch(actions.delete(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
