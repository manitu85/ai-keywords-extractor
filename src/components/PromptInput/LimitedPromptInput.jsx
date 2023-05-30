import { useCallback, useState } from 'react';

export default function LimitedPromptInput({ rows, cols, value, limit }) {
  const [content, setContent] = useState(value.slice(0, limit));

  const setFormattedContent = useCallback(
    text => {
      setContent(text.slice(0, limit));
    },
    [limit, setContent]
  );

  return (
    <>
      <textarea
        rows={rows}
        cols={cols}
        onChange={event => setFormattedContent(event.target.value)}
        value={content}
      />
      <p>
        {content.length}/{limit}
      </p>
    </>
  );
}
//* Usage
//  <LimitedTextarea limit={32} value='Hello!' />;
