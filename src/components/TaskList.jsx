function Tasklist({toDos, completed, handleCompleted, handleDelete}){
 return(
    <div className="task-container">
    <div className="task-categories">
        <p>Pending({toDos.length})</p>
        <p>Completed({completed.length})</p>

    </div>
    {toDos.map((item)=>(
        <div className="task-item" key={item.taskNo}>
            <p style={{color:'#303030'}}>  {item.title} </p>
            <div className="button-container">
            <button className="button" style={{backgroundColor:'green'}} onClick={()=> handleCompleted(item.taskNo)}> Completed! </button>
            <button className="button" style={{backgroundColor:'#ba182b'}} onClick={()=> handleDelete(item.taskNo)}> Delete! </button>
            </div>
        </div>
    ))}
    

    {/* {completed.map((e)=>(
           <div className="task-item" key={e.taskNo}>
               <p style={{color:'#303030'}}>  {e.title} </p>
               <div className="button-container">
               <button className="button" style={{backgroundColor:'#ba182b'}} onClick={()=> handleDelete(e.taskNo)}> Delete! </button>
               </div>
           </div>
       ))} */}


    </div>
    )
}


export default Tasklist;