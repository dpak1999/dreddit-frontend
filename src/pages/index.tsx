/** @format */

import { withUrqlClient } from "next-urql";
import { Navbar } from "../components/Navbar";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => (
  <div>
    <Navbar />
    <h1>Hello world</h1>
  </div>
);

export default withUrqlClient(createUrqlClient)(Index);
