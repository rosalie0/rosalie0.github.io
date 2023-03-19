import React from "react";

const ComingSoon = () => {
  const styles = {
    left: "0",
    right: "0",
    marginLeft: "auto",
    marginRight: "auto",
  };
  return (
    <div className="container">
      <div
        className="bg-emerald-600 text-xl text-white h-36 font-frag flex items-center justify-center mt-14"
        style={styles}
      >
        coming soon...
      </div>
    </div>
  );
};

export default ComingSoon;
