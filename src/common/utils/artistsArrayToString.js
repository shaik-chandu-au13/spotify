export default function artistsArrayToString(arrayArtists) {
  let strResult = "";
  arrayArtists.forEach((artist, index) => {
    strResult += artist.name;
    if (index + 1 !== arrayArtists.length) strResult += ", ";
  });

  return strResult;
}
