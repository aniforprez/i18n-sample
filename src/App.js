import logo from "./logo.svg";
import "./App.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import backend from "i18next-xhr-backend";
import { useState } from "react";

i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["en", "es"],
    ns: ["common", "random"],
    interpolation: {
      escapeValue: false,
    },
    nsSeparator: "."
  });

function App() {
  const { t, i18n } = useTranslation();

  const [lang, setLang] = useState("en");

  const changeLang = (e) => {
    e.preventDefault();
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('common.select-language')}:{" "}
          <select value={lang} onChange={changeLang}>
            <option value="en">{t('common.lang-en')}</option>
            <option value="es">{t('common.lang-es')}</option>
          </select>
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("common.learn-react", "Default Value")}
        </a>
        <p>{t('random.random-text')}</p>
        <p>{t('random.nested.more-random-text')}</p>
        <p>{t('common.interpolate-value', {"thingy": "text thing"})}</p>
      </header>
    </div>
  );
}

export default App;
