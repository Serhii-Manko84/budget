import { createContext, useReducer } from "react";
import defaultContent from "./defaultContent";

const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "changeCurrency": {
      return {
        ...state,
        currency: action.currency,
      };
    }

    case "setTheme": {
      return {
        ...state,
        theme: action.theme,
      };
    }

    case "setLocale": {
      return {
        ...state,
        locale: action.locale,
      };
    }

    case "reset": {
      return defaultContent;
    }
    default: {
      throw new Error("No action");
    }
  }
};

const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultContent);

  const value = { state, dispatch };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
