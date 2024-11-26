/* eslint-disable react/prop-types */
const ListItem = ({ todo, removeTodo }) => {
  return (
    <div className="self-start flex justify-start w-full">
      <ul className="w-full">
        {todo.map((item, i) => (
          <div key={i} className="flex justify-between items-center pb-5">
            <li className="flex-1 hover:border-b-2">
              {i + 1}. {item}
            </li>
            <button
              onClick={() => removeTodo(i)}
              className="bg-red-500 hover:bg-red-300 text-white px-2 rounded-md h-9"
            >
              Remove
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
