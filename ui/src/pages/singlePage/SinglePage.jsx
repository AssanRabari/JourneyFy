import React, { useContext, useState } from "react";
import axios from "axios";
import "./SinglePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";

import { singlePostData, userData } from "../../lib/dummyData";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const SinglePage = () => {
  const [saved, setSaved] = useState(post.isSaved);
  const post = useLoaderData();
  const { currentUser } = useContext(AuthContext);
  const router = useNavigate();

  const handleSave = async () => {
    setSaved((prev) => !prev);
    if (!currentUser) {
      router.navigate("/login");
    }
    try {
      await axios.post("http://localhost:8800/api/users/save", {
        postId: post.id,
      });
    } catch (error) {
      console.log(error);
      setSaved((prev) => !prev);
    }
  };
  console.log("post", post);
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{post.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>{post.postDetails[0]?.utilities}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>{post.postDetails[0]?.petPolicy}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{post.postDetails[0]?.size}sq feet</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{post?.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{post?.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizental">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{post.postDetails[0]?.school}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetails[0]?.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetails[0]?.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button onClick={handleSave}>
              <img src="/save.png" alt="" />
              {saved ? "Placce Saved" : "Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
