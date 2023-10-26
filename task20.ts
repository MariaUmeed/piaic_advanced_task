// array to store a list of countries
const countries: string[] = ["United States","Canada","United Kingdom","France","Germany","Australia","Japan","South Africa",];
  
  // Function to print the list of countries
  function printCountryList(countryList: string[]) {
    console.log("List of Countries:");
    for (const country of countryList) {
      console.log(country);
    }}
  
  // Call the function to print the list of countries
  printCountryList(countries);
  