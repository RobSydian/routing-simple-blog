import React from "react";

import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

export default function QuoteDetail() {
  const params = useParams();

  return (
    <>
      <div>Quote Detail</div>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
}
