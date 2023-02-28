export default function AddItemForm({
    Item,
    onAddFormSubmit,
    onAddInputChange
  }) {
    return (
      <form onSubmit={onAddFormSubmit}>
        <h2>Market List</h2>
        <label htmlFor="Item">Add Item: </label>
        <input
          name="Item"
          type="text"
          placeholder="Item"
          value={Item}
          onChange={onAddInputChange}
        />
      </form>
    );
  }
  