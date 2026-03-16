import Header from "./Header";
import Body from "./body";
import data from "./data.js"

function App() {

  const Mapped = data.map((dat,i)=> {
    return <Body
      key={dat.id}
      img={{ src: dat.img.src, alt: dat.img.alt }}
      title={dat.title}
      country={dat.country}
      googleMapsLink={dat.googleMapsLink}
      dates={dat.dates}
      text={dat.text}
    />
  })
  

  
  return (
    <>
      <Header />
      {Mapped}
      {/* <Body
      img = {{src: "https://scrimba.com/links/travel-journal-japan-image-url", alt: "Mount Fuji"}}
      title = "Mount Fuji"
      country= "Japan"
      googleMapsLink= "https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9"
      dates= "12 Jan, 2021 - 24 Jan, 2021"
      text= "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
 
      /> */}
    </>
  )
}

export default App;



