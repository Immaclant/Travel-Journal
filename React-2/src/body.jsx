function Body() {
  return (
    <div className="body">
      <img
        className="body-img"
        src="https://scrimba.com/links/travel-journal-japan-image-url"
        alt="Mount Fuji"
      />
      <div className="body-details">
        <div className="body-location-row">
          <span className="body-country">🌐 JAPAN</span>
          <a
            className="body-maps-link"
            href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="body-title">Mount Fuji</h2>
        <div className="body-dates">12 Jan, 2021 - 24 Jan, 2021</div>
        <p className="body-description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}

export default Body;
