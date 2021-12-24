export function fArtist(artistArray) {
  const newString = artistArray.map((i) => i + "").join();
  const finalString = newString.substring(0, 24) + "...";
  console.log("STRING:::", newString);
  return finalString;
  //   });
}
