import React from "react";

import { ReactComponent as Send } from "../../assets/enviar.svg";
import { useFetch } from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../api";

export function PhotoCommentsForm({ id }) {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    await request(url, options);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Send />
      </button>
    </form>
  );
}
