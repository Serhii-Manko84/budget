import { useState, useEffect, useCallback } from "react";
import { STATUSESS } from "../constants";
import { addItem, getItems } from "../utils/indexdb";

export const useBoolenToggle = () => {
  const [status, setStatus] = useState(false);

  const handleStatusChange = () => {
    setStatus((currentStatus) => !currentStatus);
  };

  return {
    status,
    handleStatusChange,
  };
};

export const useDate = () => {
  const [state, setState] = useState({
    transactions: [],
    error: "",
    status: STATUSESS.IDLE,
  });

  useEffect(() => {
    setState({
      ...state,
      status: STATUSESS.PENDING,
    });
    getItems()
      .then((transactions) => {
        setState({
          ...state,
          transactions,
          status: STATUSESS.SUCCESS,
        });
      })
      .catch((error) =>
        setState({
          ...state,
          transactions: [],
          status: STATUSESS.ERROR,
          error: error,
        })
      );
  }, []);

  const pushTransaction = useCallback(
    (data) => {
      const transaction = {
        ...data,
        value: +data.value,
        id: Date.now(),
      };

      setState((state) => ({
        ...state,
        transactions: [transaction, ...state.transactions],
      }));

      addItem(transaction);
    },
    [setState]
  );

  const onDelete = useCallback(
    (id) => {
      setState((state) => ({
        ...state,
        transactions: state.transactions.filter((item) => item.id !== id),
      }));
    },
    [setState]
  );

  const onStartClick = useCallback(
    (id) => {
      setState((state) => ({
        ...state,
        transactions: state.transactions.map((item) =>
          item.id !== id ? item : { ...item, isChecked: !item.isChecked }
        ),
      }));
    },
    [setState]
  );

  return {
    ...state,
    pushTransaction,
    onDelete,
    onStartClick,
  };
};
