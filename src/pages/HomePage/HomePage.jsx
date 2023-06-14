import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getNews } from "../../store/actions";
import PostCard from "../../components/PostCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import PaginationComponent from "../../components/PaginationComponent";

function HomePage({ getNews, posts }) {
  const [currentId, setCurrentId] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [value, setValue] = useState("");
  const [postPerPage, setPostPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!posts) {
      getNews();
    }
    setAllPosts(posts);
  }, [posts]);

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

  const handleSortByAsc = () => {
    setAllPosts([...allPosts.sort((a, b) => a.title.localeCompare(b.title))]);
  };

  const handleSortByDesc = () => {
    setAllPosts([...allPosts.sort((a, b) => b.title.localeCompare(a.title))]);
  };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  return (
    <div>
      <Row>
        <Col>
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
        </Col>
        <Col className="m-4 d-flex justify-content-end">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Sort by
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleSortByAsc}>A-Z</Dropdown.Item>
              <Dropdown.Item onClick={handleSortByDesc}>Z-A</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      {allPosts &&
        allPosts
          .filter((name) =>
            name.title.toLowerCase().includes(value.toLowerCase())
          )
          .slice(indexOfFirstPost, indexOfLastPost)
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

      {allPosts && (
        <div className="d-flex justify-content-center">
          <PaginationComponent
            totalPosts={allPosts.length}
            postPerPage={postPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
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
