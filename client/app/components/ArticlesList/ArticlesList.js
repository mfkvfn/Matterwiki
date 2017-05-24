import React from "react";
import { HelpBlock } from "react-bootstrap";

import Loader from "Loader/index";
import ArticlesListItem from "./ArticlesListItem";

const ArticlesList = props => {
  const { articles } = props;

  // TODO Do something about this.
  //      We need the Loader to be a HOC, so that we can abstract the logic away into it
  if (!articles) return <Loader message="Loading articles" />;
  if (!articles.length) {
    return (
      <HelpBlock className="center-align">
        There are no articles under this topic
      </HelpBlock>
    );
  } else {
    return (
      <div className="article-list">
        {articles.map(
            article => <ArticlesListItem key={article.id} article={article} />
        )}
      </div>
    );
  }
};

export default ArticlesList;
