import React, { Suspense } from "react";
import "./ListPage.scss";
// import { listData } from "../../lib/dummyData";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
const ListPage = () => {
  // const data = listData;
  const posts = useLoaderData();

  console.log("posts---", posts);
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={posts?.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.map((post) => <Card key={post.id} item={post} />)
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={posts?.postResponse}
            errorElement={<p>Error loading Map!</p>}
          >
            {(postResponse) => <Map items={postResponse} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ListPage;
