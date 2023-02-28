export default function EditForm({
    currentTodo,
    setIsEditing,
    onEditInputChange,
    onEditFormSubmit
  }) {
    return (
      <form onSubmit={onEditFormSubmit}>
        <h2>Edit Item</h2>
        <label htmlFor="updateList">Edit Item: </label>
        <input
          name="updateList"
          type="text"
          placeholder="Update list"
          value={currentTodo.text}
          onChange={onEditInputChange}
        />
        <button type="submit" onClick={onEditFormSubmit}>
          Update
        </button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
    );
  }
  