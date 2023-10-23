import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube';
import './RowPost.css'
import { imageUrl, API_KEY } from '../../constants/constants'
import axios from '../axios'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  const [visibility, setVisibility] = useState(false)
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results)
    })
  }, [props])
  const handleLeftSlide = () => {
    var slider = document.getElementById('slider' + props.rowId)
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const handleRightSlide = () => {
    var slider = document.getElementById('slider' + props.rowId)
    slider.scrollLeft = slider.scrollLeft + 500
  }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
      } else {
        console.log("Array empty");
      }
    })
  }
  return (
    <div className='row'
      visibility={visibility}
      onMouseEnter={() => { setVisibility(true) }}
      onMouseLeave={() => { setVisibility(false) }}>
      <h2>{props.title}</h2>

      <div className="posters" >
        <div className={`slide_left ${!visibility ? 'none' : ''}`}>
          <FaChevronLeft onClick={handleLeftSlide} size={40} />
        </div>
        <div className='poster-container' id={'slider' + props.rowId}>
          {movies.map((obj) =>
            <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="Poster" />
          )}
        </div>
        <div className={`slide_right ${!visibility ? 'none' : ''}`} >
          <FaChevronRight onClick={handleRightSlide} size={40} />
        </div>
      </div>

      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
