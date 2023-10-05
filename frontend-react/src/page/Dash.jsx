import React from "react";
import { useParams } from "react-router-dom";

const Dash = () => {
  let {user} = useParams();

  return (
    <div >
      this is dash {user}
    </div>
  );
};

export default Dash;
