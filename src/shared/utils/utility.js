/**
 * @method handleImageFileUpload : To get uploaded image's url.
 *
 * @param {object} event: File input event.
 */
export const handleImageFileUpload = (event, data) => {
  const imageFile = event.target.files[0];
  if (!imageFile) {
    return {
      url: "",
      file: "",
    };
  }
  return {
    url: URL.createObjectURL(imageFile),
    file: imageFile,
  };
};
