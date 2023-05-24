import { importShared } from './__federation_fn_import.js';
import { j as jsxs, a as jsx } from './__federation_expose_Mount-aebef47e.js';
import { E as EmojiService, e as encodeEmoji, a as EmojiViewer } from './encodeEmoji-2fa5be85.js';

const React = await importShared('react');
const {useCallback,useEffect,useState} = React;
const Home = () => {
  const [emoji, setEmoji] = useState(null);
  const getEmoji = useCallback(
    async () => {
      const emojiResponse = await EmojiService.getRandomEmoji();
      setEmoji(encodeEmoji(emojiResponse.data.htmlCode[0]));
    },
    []
  );
  useEffect(() => {
    getEmoji();
  }, []);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Emojis" }),
    /* @__PURE__ */ jsx(EmojiViewer, { emoji }),
    /* @__PURE__ */ jsx("button", { onClick: () => getEmoji(), children: "Try again" })
  ] });
};

export { Home as default };
