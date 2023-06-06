import PropTypes from "prop-types";
import { Wrapper } from "./styles";

const Transaction = ({ transaction: { value, label } }) => {
  return (
    <Wrapper value={value}>
      label:{label}
      <p>value: {value}</p>
    </Wrapper>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

export default Transaction;
