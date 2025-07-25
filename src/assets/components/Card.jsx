function Card({ country }) {
  if (!country) {
    return null;
  } else {
    // console.log(country);
  }

  var flag = `https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`;
  return (
    <>
      <div className="text-center mt-4  w-full flex md:flex-row flex-col justify-center align-middle gap-10">
        <div className="image  flex justify-center md:block">
          <img className="w-64 h-auto rounded shadow-md" src={flag} alt="" />
        </div>
        <div className="info font-serif md:text-start capitalize flex justify-center md:block text-center ">
          <div>
            <h1 className="text-4xl font-bold">{country.name.common} </h1>
            <p className="italic">{country.name.official}</p>

            <div className="additional-info">
              <p>
                <span className="font-bold">Captial : </span>
                {country.capital}
              </p>
              <p>
                <span className="font-bold"> region :</span> {country.region}
              </p>
              <p>
                <span className="font-bold"> subregion :</span>
                {country.subregion}
              </p>
              <p>
                <span className="font-bold"> area :</span> {country.area} km²
              </p>
              <p>
                <span className="font-bold"> native language : </span>
                {Object.values(country.languages).join(", ")}
              </p>
              <p>
                <span className="font-bold"> currency : </span>
                {Object.values(country.currencies || {})[0] &&
                  `${Object.keys(country.currencies)[0]}  ${
                    Object.values(country.currencies)[0].name
                  } (${Object.values(country.currencies)[0].symbol})`}
              </p>
              <p>
                <span className="font-bold"> Borders :</span>{" "}
                {Object.values(country.borders).join(", ")}
              </p>
              <p>
                <span className="font-bold"> Independant :</span>{" "}
                {country.independent ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// api key : LPq3qOe4L7frcSmM35PLfeyC7FoAgVTl43UYhUa8
export default Card;
