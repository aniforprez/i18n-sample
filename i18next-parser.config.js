const config = {
  defaultNamespace: "common",
  defaultValue: "",
  namespaceSeparator: ".",
  output: "public/locales/$LOCALE/$NAMESPACE.json",
  locales: ["en", "es", "fr"],
  input: ["src/**/*.{js,jsx,ts,tsx}"],
};

export default config;
