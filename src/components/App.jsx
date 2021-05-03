import React from "react";
import Emojilist from "./Emojilist";
import emojipedia from "../emojipedia";

function createEmojiList(emoji) {
  return (
    <Emojilist
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmojiList)}</dl>
    </div>
  );
}

export default App;
