import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getNews } from "../../store/actions";
import PostCard from "../../components/PostCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

function HomePage({ getNews, posts }) {
  console.log(posts, "posts");
  const [currentId, setCurrentId] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!posts) {
      getNews();
    }
  }, []);

  const toggleShow = (id) => {
    if (id === currentId) {
      setCurrentId(-1);
    }
    setCurrentId(id);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <div>
      <div className="position-relative">
        <Form.Control
          className="m-4 w-50 position-relative t-0"
          type="text"
          placeholder="Search"
          onChange={(e) => handleChange(e)}
          value={value}
        />
        {value && (
          <span
            role="button"
            onClick={handleClear}
            style={{ top: 6, right: "50%" }}
            className="position-absolute"
          >
            ✖
          </span>
        )}
      </div>

      {posts &&
        posts
          .filter((name) =>
            name.title.toLowerCase().includes(value.toLowerCase())
          )
          .map((post) => {
            return (
              <>
                <Card className="m-4">
                  <Card.Body>
                    <PostCard key={post.id} post={post} currentId={currentId} />
                    {currentId !== post.id && (
                      <Row className="p-3">
                        <Button
                          className="w-25"
                          variant="outline-secondary"
                          onClick={() => toggleShow(post.id)}
                        >
                          Comments
                        </Button>
                      </Row>
                    )}
                  </Card.Body>
                </Card>
              </>
            );
          })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.news,
});

const mapDispatchToProps = {
  getNews: getNews,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
