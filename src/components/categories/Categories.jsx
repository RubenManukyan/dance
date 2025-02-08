import './categories.scss';

const Categories = ({item}) => {
  return (
    <div className='fullDance'>
        <span className='balletDance'>{item.title}</span>
        <span className='danceTypes'>{item.playlist} playlists</span>
        <span className='fourPlaylist'>{item.video} videos</span>
    </div>
  )
}

export default Categories;