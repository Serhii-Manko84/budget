const Balance = ({ balance }) => {
  return (
    <div>
      {!balance === 0 ? "Повний нуль" : null} {balance}
    </div>
  );
};

export default Balance;
