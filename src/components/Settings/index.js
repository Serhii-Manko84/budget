import { useContext } from "react";
import { saveToStorage } from "../../utils/sessionStorage";
import { useBoolenToggle } from "../hooks";
import { AppContext } from "../providers/context";
import LOCALES from "../providers/context/i18n/constans";

const Settings = () => {
  const { state, dispatch } = useContext(AppContext);
  const { status, handleStatusChange } = useBoolenToggle();

  const onChange = (event) => {
    const { value } = event.target;

    dispatch({
      type: "changeCurrency",
      currency: value,
    });

    saveToStorage("currency", value);
  };

  const onChangeLocale = (event) => {
    const { value } = event.target;

    dispatch({
      type: "setLocale",
      locale: value,
    });

    saveToStorage("locale", value);
  };
  return (
    <>
      <h1>Settings</h1>
      <div>
        <form>
          <div>
            <label>
              Валюта:{" "}
              <select
                name="currency"
                value={state.currency}
                onChange={onChange}
              >
                <option value="UAH">Гривня</option>
                <option value="USD">дол.США</option>
                <option value="EUR">Євро</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Мова:{" "}
              <select
                name="currency"
                value={state.locale}
                onChange={onChangeLocale}
              >
                <option value={LOCALES.UKRAINIAN}>Українська</option>
                <option value={LOCALES.ENGLISH}>English</option>
              </select>
            </label>
          </div>
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
