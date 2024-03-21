import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <Form onSubmit={handleSearch}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form.Control
            type="text"
            placeholder="Search for movies..."
            value={query}
            style={{ width: "200px", fontSize: "16px", marginRight: "10px" }}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="primary" size="lg" type="submit">
            Search
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SearchBar;
