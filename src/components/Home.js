import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>

        <div className="postTextContainer">
          今はreacrtの学習中ですこれから頑張ってreactエンジニアとして頑張ります
        </div>
        <div className="nameAndDeleteButton">
          <h3>kanemichi</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
