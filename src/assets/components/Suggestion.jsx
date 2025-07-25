function Suggestion({ suggestion, query, onSelect }) {
  if (!query || suggestion.length === 0) return null;
  return (
    <>
      <ul className="w-xl bg-gray-50 rounded-b-lg ">
        {query.length > 0
          ? suggestion.length > 0
            ? suggestion.map((country, index) => (
                <li
                  key={index}
                  className="hover:bg-gray-100 p-2 cursor-pointer"
                  onClick={() => onSelect(country)}
                >
                  {country.name.common}
                </li>
              ))
            : null
          : null}
      </ul>
    </>
  );
}
export default Suggestion;
