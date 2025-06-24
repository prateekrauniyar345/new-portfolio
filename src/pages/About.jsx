// About.jsx
import { getRandomInt } from '../utils/Random';

const images = ['IMG_1100.png', 'IMG_1544.png', 'IMG_1819.png', 'IMG_4681.png'];

const baseCardStyle = {
  width: 200,
  height: 250,
  marginRight: 10,
  borderRadius: 10,
  overflow: 'hidden',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export default function About() {
  return (
    <>
      <div className="d-flex flex-column mt-4">
        <h3>About</h3>
        <p>Who am I?</p>
      </div>

      <div className="d-flex flex-row flex-nowrap overflow-auto mt-4 p-5" style={{overflow:"hidden"}} >
        {images.map((file, i) => {
          /* ▶︎ Compute a random tilt for THIS card */
          const degree = getRandomInt(10, 15) * (i % 2 === 0 ? 1 : -1); // alternate direction
          const rotation = `rotate(${degree}deg)`;

          /* ▶︎ Clone the base styles and add the rotation */
          const cardStyle = { ...baseCardStyle, transform: rotation };
        //   const imgStyle  = { ...baseImgStyle, transform: rotation };

          return (
            <div style={cardStyle} key={file}>
              <img src={`/pp/${file}`} alt={`gallery ${i}`} style={imgStyle} />
            </div>
          );
        })}
      </div>
    </>
  );
}
