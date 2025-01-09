
function AnimeCard({anime}) {

    function onFavoriteClick() {
        alert("clicked")
    }


    return (
        <div className= "anime-card">
            <div className="anime-poster">
            <img src={anime.url} alt={anime.title} />
                <div className="anime-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>♥</button>
                </div>
            </div>
        <div className="anime-info">
            <h3>{anime.title}</h3>
            <p>{anime.release_data}</p>
        </div>
        </div>
    )
}

export default AnimeCard