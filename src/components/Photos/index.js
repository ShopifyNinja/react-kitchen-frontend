import React, { useState } from "react";
import Photos from "./component";

function PhotosContainer({ photos, setSelectedSection }) {
  const [images, setImages] = useState(photos.images.otherPhotos);
  return (
    <Photos
      photos={images}
      setSelectedSection={setSelectedSection}
      setImages={setImages}
    />
  );
}

export default PhotosContainer;
