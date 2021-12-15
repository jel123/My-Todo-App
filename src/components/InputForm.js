function InputForm({onClick, onAdd, todo}) {
    return (
        <div className="add-task">
            <input type="text"
            value={todo || ''} 
            placeholder="Add a Task"
            onChange={onClick}/>
            <button type="button" onClick={onAdd}> + </button>
        </div>
    )
}

export default InputForm
