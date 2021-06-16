import PostList from '../components/PostList';
//import logo from '../logo.svg';

const HomePage = () => {
    

    return (
        //creates props.posts in PostLkst component
      <div className="recent-posts">
          <h1 className="title">Recent Posts</h1>
          <PostList/>
      </div>
    )
}
export default HomePage;