import { importShared } from './__federation_fn_import.js';
import { j as jsx, Button } from './__federation_expose_Button-4099a69f.js';
import { r as reactDomExports } from './__federation_shared_react-dom.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const App$1 = '';

const {useState} = await importShared('react');
function App() {
  useState(0);
  return /* @__PURE__ */ jsx("div", { className: "App", children: /* @__PURE__ */ jsx(Button, {}) });
}

const index = '';

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
);
