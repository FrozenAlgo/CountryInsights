import { useEffect, useState } from "react";
import "./App.css";
import Card from "./assets/components/Card";
import Search from "./assets/components/Search";

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };
  useEffect(() => {
    // console.log(selectedCountry);
  }, [selectedCountry]);
  return (
    <>
      <div className="w-full h-full min-h-dvh bg-blue-50">
        <div className="text-center">
          <h1 className="text-3xl pt-3.5 font-bold">Country Insight App</h1>
        </div>
        <Search onCountrySelect={handleCountrySelect} />
        <Card country={selectedCountry} />
      </div>
    </>
  );
}

export default App;
