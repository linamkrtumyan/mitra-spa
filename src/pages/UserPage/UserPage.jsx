import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUser, getUserPosts } from "../../store/actions";
import UserCard from "../../components/UserCard";
import Loader from "../../components/Loader";
import Post from "../../components/Post";

function UserPage({
  getUSer,
  user,
  loading,
  getUserPosts,
  userPosts,
  postsLoading,
}) {
  let { id } = useParams();
  const navigate = useNavigate();

  const toBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getUSer(id);
    getUserPosts(id);
  }, []);

  if (loading || postsLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div>
      <p className="p-4" onClick={toBack}>
        &#8592;
      </p>
      {user && <UserCard user={user} />}
      <div className="d-flex align-content-start flex-wrap  m-4">
        {userPosts && userPosts.map((post) => <Post post={post} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.userLoading,
  user: state.user,
  userPosts: state.userPosts,
  postsLoading: state.userPostsLoading,
});

const mapDispatchToProps = {
  getUSer: getUser,
  getUserPosts: getUserPosts,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
