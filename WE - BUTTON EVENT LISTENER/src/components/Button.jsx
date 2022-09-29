const Button = ({ name }) => {
  return (
    <button
      onClick={() => {
        alert("You clicked Masai!");
      }}
    >
      {name}
    </button>
  );
};

export { Button };
