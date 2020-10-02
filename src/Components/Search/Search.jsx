import React, { useState, useEffect } from "react";
import axios from "axios";

export const Search = () => {
  const [term, setTerm] = useState("cats");
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    axios
      .get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      })
      .then((res) => {
        setResults(res.data.query.search);
      });
  }, [term]);

  const renderedResults = results.map((item) => {
    return (
      <div className="item" key={item.pageid}>
        <div className="content">
          <div className="header">{item.title}</div>
          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};
