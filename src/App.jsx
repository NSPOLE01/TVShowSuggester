import s from "./style.module.css";
import { tvShowAPI } from "./api/tv-show";
import { useEffect, useState } from "react";
import { BACKDROP_URL } from "./config";
import { TVShowDetail } from "./TVShowDetail/TVShowDetail";
import { Logo } from "./Logo/Logo";
import logoImage from "./assets/images/logo.png";
import { TVShowList } from "./TVShowList/TVShowList";
import { SearchBar } from "./SearchBar/SearchBar";

export function App() {
  const [currentTV, setCurrentTV] = useState();
  const [reccomendationList, setReccomendationList] = useState([]);

  async function fetchPopulars() {
    try {
      const TVShowList = await tvShowAPI.fetchPopulars();
      if (TVShowList.length > 0) {
        setCurrentTV(TVShowList[0]);
      }
    } catch (error) {
      alert("Something went wrong when fetching popular TV shows");
    }
  }

  async function fetchReccomendations(tvShowId) {
    try {
      const reccomendationListResp = await tvShowAPI.fetchReccomendations(
        tvShowId
      );
      if (reccomendationListResp.length > 0) {
        setReccomendationList(reccomendationListResp.slice(0, 10));
      }
    } catch (error) {
      alert(
        "Something went wrong when fetching popular TV show reccomendations"
      );
    }
  }

  async function fetchByTitle(title) {
    try {
      const searchResponse = await tvShowAPI.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setCurrentTV(searchResponse[0]);
      }
    } catch (error) {
      alert("Something went wrong when fetching searched TV show");
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTV) {
      fetchReccomendations(currentTV.id);
    }
  }, [currentTV]);

  function updateTV(tvShow) {
    setCurrentTV(tvShow);
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTV
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_URL}${currentTV.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              image={logoImage}
              title="Watowatch"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTV && <TVShowDetail tvShow={currentTV} />}
      </div>
      <div className={s.reccomended_tv_shows}>
        {currentTV && (
          <TVShowList onClickItem={updateTV} tvShowList={reccomendationList} />
        )}
      </div>
    </div>
  );
}
