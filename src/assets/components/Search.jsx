import { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

function Search({ onCountrySelect }) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(null);
  const [suggestion, setSuggestion] = useState([]);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "/data/countries.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.log("error fetching the data :", error);
      });
  }, []);

  useEffect(() => {
    if (query == "") return;
    // console.log(query);
    var results = data.filter((country) =>
      country.name.common.toLowerCase().startsWith(query.toLowerCase())
    );
    setSuggestion(results);
  }, [query]);

  //   useEffect(() => {
  //     if (suggestion == "") return;
  //     suggestion.map((country) => {
  //       //   console.log(country.name.common);
  //     });
  //   }, [suggestion]);
  useEffect(() => {}, [data]);

  const handelSearchedCountry = (passedCountry) => {
    // setCountryToView(passedCountry);
    onCountrySelect(passedCountry);
    setSuggestion([]);
  };

  function showList(list) {
    var results = data.filter((country) =>
      country.name.common.toLowerCase().startsWith(query.toLowerCase())
    );
    console.log(results);
    setCountryList(results);
    // setSuggestion(results);
    setSuggestion([]); // 👈 Hide the suggestion panel
  }
  return (
    <>
      <div className="text-center mt-4 relative w-dvw md:block  flex justify-center flex-col">
        <div className="md:w-full w-full flex justify-center px-10 ">
          <div className="flex w-xl justify-center">
            <input
              value={query || ""}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="border border-slate-300 h-10 px-4 rounded-l-lg w-full focus:outline-0"
              placeholder="Enter Country Name"
            />
            <button
              onClick={() => {
                showList(query);
              }}
              className="bg-cyan-900 h-10 px-4 text-white rounded-r-lg"
            >
              Search
            </button>
          </div>
        </div>
        <div className="md:w-full w-4/5 absolute h-fit md:top-0 top-10 flex justify-center mt-10">
          <Suggestion
            suggestion={suggestion}
            query={query}
            onSelect={handelSearchedCountry}
          />
        </div>
        <div className="block">
          <ul className="mt-4 bg-white rounded shadow p-4 max-w-md mx-auto">
            {countryList.map((li, key) => (
              <li
                key={key}
                className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                onClick={() => {
                  onCountrySelect(li); // Send selected country to parent (App)
                  setQuery(""); // Optional: Clear the search input
                  setSuggestion([]);
                  setCountryList([]); // Clear list after selection
                }}
              >
                {li.name.common}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Search;
