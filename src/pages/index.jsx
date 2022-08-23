import { useSelector } from "react-redux";
import PostForm from "../components/form/PostForm";
import PostCard from "../components/form/PostCard";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <p className="text-[50px]">Home</p>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((c) => (
        <PostCard key={c.id} post={c} />
      ))}
    </div>
  );
};

export default Home;
