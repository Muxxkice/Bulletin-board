import { Link } from "react-router-dom";
import { Header } from "../compornents/Header";
export const Thread = () => {
  return (
    <>
      <Header />
      <h1>Thread</h1>
      <Link to="new">new</Link>
    </>

  )
};
export default Thread;
