// Function will check loop through the array of artist and create a string that has a , sepratinting he artist
// function will then check if string is longer then 25 chars, if so it will chop of the string at 25 chars
// and append ...
export function fArtist(artistArray) {
  const newString = artistArray.map((i) => i + "").join();
  if (newString.length > 24) {
    const finalString = newString.substring(0, 24) + "...";
    return finalString;
  } else {
    return newString;
  }
}
