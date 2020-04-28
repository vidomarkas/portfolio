import React, { useState, useEffect } from "react";
import StarSvg from "../assets/img/star.svg";
import "../sass/GithubFeed.scss";

function GithubFeed() {
  const [repos, setRepos] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchRepos = () => {
    console.log("fetching Repos");
    fetch(
      "https://api.github.com/users/vidomarkas/repos?type=public&sort=pushed&direction=desc"
    )
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching the project data. ", err);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchRepos();
    // eslint-disable-next-line
  }, []);

  if (!loading) {
    console.log("repos", repos);
    return (
      <div
        className=" app-item app-item--GithubFeed"
        style={{
          backgroundColor: "#151728",
        }}
      >
        <h2 className="github-feed-title">GitHub Feed</h2>
        <h3 className="github-feed-subtitle">5 latest repos</h3>
        <div className="github-feed-container">
          {repos ? (
            <ul className="github-feed-list">
              {repos.map((repo, index) => {
                return index < 5 ? (
                  <a key={index} target="_blank" href={repo.html_url}>
                    <li className="github-feed-list-item">
                      <h3 className="github-feed-list-item-title">
                        {repo.name}
                      </h3>
                      <p className="github-feed-list-item-language">
                        {repo.language}
                      </p>
                      {repo.description ? (
                        <p className="github-feed-list-item-description">
                          {repo.description}
                        </p>
                      ) : null}
                      <br />
                      <div className="github-feed-list-item-details">
                        <p className="github-feed-list-item-updated">
                          Updated {repo.pushed_at.slice(0, 10)}
                        </p>
                        <div className="github-feed-list-item-star">
                          <img
                            className="github-feed-list-item-star"
                            src={StarSvg}
                            alt=""
                          />
                          <p> {repo.stargazers_count}</p>
                        </div>
                      </div>
                    </li>
                  </a>
                ) : null;
              })}
            </ul>
          ) : (
            <h3>Downloading repos...</h3>
          )}
        </div>
      </div>
    );
  } else {
    return <h3>Downloading repos...</h3>;
  }
}

export default GithubFeed;
