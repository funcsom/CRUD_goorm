const TodoNavigation = ({ setFilter }) => {
  const onClickFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div>
      <button
        onClick={() => {
          onClickFilter("All");
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          onClickFilter(false);
        }}
      >
        Active
      </button>
      <button
        onClick={() => {
          onClickFilter(true);
        }}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoNavigation;
