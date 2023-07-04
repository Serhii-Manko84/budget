import { useContext } from "react";
import { IntlProvider } from "react-intl";
import { AppContext } from "../../context";

import messages from "./messages";
import LOCALES from "./constans";

const IntlAppProvider = ({ children }) => {
  const { state } = useContext(AppContext);
  return (
    <IntlProvider
      messages={messages[state.locale]}
      locale={state.locale}
      defaultLocale={LOCALES.ENGLISH}
    >
      {children}
    </IntlProvider>
  );
};

export default IntlAppProvider;
