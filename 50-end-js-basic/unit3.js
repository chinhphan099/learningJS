// get file extention

function getExtensionFilename(filename) {
  return filename.slice(filename.lastIndexOf('.') + 1);
}
console.log(getExtensionFilename('video.mp4'));
