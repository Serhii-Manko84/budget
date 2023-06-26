import { useContext } from "react";
import { useBoolenToggle } from "../hooks";
import { AppContext } from "../providers/context";

const Settings = () => {
  const { state, dispatch } = useContext(AppContext);
  const { status, handleStatusChange } = useBoolenToggle();

  const onChange = (event) => {
    const { value } = event.target;
    dispatch({
      type: "changeCurrency",
      currency: value,
    });
  };
  return (
    <>
      <h1>Settings</h1>
      <div>
        <form>
          <label>
            Валюта:{" "}
            <select name="currency" value={state.currency} onChange={onChange}>
              <option value="UAH">Гривня</option>
              <option value="USD">дол.США</option>
              <option value="EUR">Євро</option>
            </select>
          </label>
        </form>
      </div>
      <div>
        <button onClick={handleStatusChange}>Add Settings</button>
        {status ? (
          <div>
            <h2> Add Settings</h2>
            <p>...</p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Settings;
