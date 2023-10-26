///---TASK--38--//

function describeCity(city: string, country: string = "Unknown"): void {
    console.log(`${city} is the city of ${country}.`);
  }
  
  // Calling the function for three different cities
  describeCity("Karachi", "Pakistan");
  describeCity("New York"); // Using the default country value
  describeCity("Tokyo", "Japan");
  