const list = document.querySelector("ul");
const stations = [ // Array with stations code and name mixed together
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) { // Loop Created for each station of the array

  const stationCode = station.slice(0,3); // 'Cuts' the first three letter using index 0 to 3(Excluded)
  const semiColon = station.indexOf(";"); // Looking for the semi-colon in the station code
  const stationName = station.slice(semiColon+1); // 'Cuts' the station name starting from the semi-colon
  const completeName = `${stationCode}: ${stationName}`; // Template literals combined with (:) to create and separate the station code and name
  


  const result = completeName; // Show the result
  const listItem = document.createElement("li"); // Creates a list of 'result' displaying all the stations names and codes
  listItem.textContent = result;
  list.appendChild(listItem);
}
