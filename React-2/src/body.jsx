


function Body ({ img, title, country, googleMapsLink, dates, text }) {
  return (
    <article className="body">
      <img className="body-img" src={img.src} alt={img.alt} />
      <div className="body-details">
        <div className="body-location-row">
          <span className="body-country">🌐 {country}</span>
          <a
            className="body-maps-link"
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="body-title">{title}</h2>
        <div className="body-dates">{dates}</div>
        <p className="body-description">{text}</p>
      </div>
    </article>
  );
}

export default Body
