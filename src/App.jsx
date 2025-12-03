import { useState } from "react";
import { episodeList } from "./data.js";

export default function App() {
  // TODO
  const [selectedEpisode, setSelectedEpisode] = useState({});
  const [allEpisodes, setAllEpisodes] = useState(episodeList);

  const episodeClick = (episodeDetails) => {
    setSelectedEpisode(episodeDetails);
  };

  const ListOfEpisodes = () => {
    return (
      <>
        <h2>Dark Echoes Episodes</h2>
        <ul>
          {allEpisodes.map((episode) => {
            return (
              <li
                key={episode.id}
                onClick={() => {
                  episodeClick(episode);
                }}
              >
                {episode.title}
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  const EpisodeDetails = () => {
    if (!selectedEpisode.title) {
      return <p>Select an Episode for more</p>;
    }

    return (
      <>
        <h2>Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p>{selectedEpisode.description}</p>
        <button>Watch now</button>
      </>
    );
  };

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <section id="list">
          <ListOfEpisodes />
        </section>
        <section id="details">
          <EpisodeDetails />
        </section>
      </main>
    </>
  );
}
