import { importShared } from './__federation_fn_import.js';
import { u as useParams, b as useNavigateMfe, j as jsxs, a as jsx } from './__federation_expose_Mount-aebef47e.js';
import { E as EmojiService, e as encodeEmoji, a as EmojiViewer } from './encodeEmoji-2fa5be85.js';

const EmojiCategories = [
    "smileys and people",
    "animals and nature",
    "food and drink",
    "travel and places",
    "activities",
    "objects",
    "symbols",
    "flags"
];

const React = await importShared('react');
const {useCallback,useEffect,useState} = React;
const Category = () => {
  const [emojis, setEmojis] = useState([]);
  const { tag } = useParams();
  const getEmoji = useCallback(
    async () => {
      if (!tag)
        return;
      const emojisResponse = await EmojiService.getEmojisByCategory(tag);
      setEmojis(emojisResponse.data.map((emoji) => encodeEmoji(emoji.htmlCode[0])));
    },
    [tag]
  );
  useEffect(() => {
    getEmoji();
  }, [tag]);
  const { inside } = useNavigateMfe();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Tags" }),
    /* @__PURE__ */ jsx("div", { children: EmojiCategories.map((category, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
      " ",
      /* @__PURE__ */ jsx("a", { onClick: () => {
        inside(`/tags/${category}`);
      }, children: category }),
      " ",
      i < EmojiCategories.length - 1 ? "|" : null
    ] }, `${category}${i}`)) }),
    /* @__PURE__ */ jsx("div", { style: { display: "flex", flexWrap: "wrap", flexDirection: "row", alignContent: "center", justifyContent: "space-between", alignItems: "center", gap: "24px" }, children: emojis.map((emoji, index) => /* @__PURE__ */ jsx(EmojiViewer, { emoji }, `${emoji}${index}`)) })
  ] });
};

export { Category as default };
