import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="container my-3">
      <div
        className="card"
        style={{
          borderRadius: "50px",
          background: "#323036",
          boxShadow: "20px 20px 30px #1d1c1f, -20px -20px 30px #47444d",
        }}
      >
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: "1" }}
        >
          {source}
        </span>
        <img
          src={
            !imageUrl
              ? "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/09/720/405/spacex-crew-civilians-Inspiration4.jpg?ve=1&tl=1"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} ...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small>
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <div className="text-center">
            <a
              href={newsUrl}
              //   target="_blank"
              className="btn btn-sm btn-danger text-center"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
