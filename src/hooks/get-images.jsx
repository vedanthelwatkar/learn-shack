export const getImageFromS3 = (images, filename) => {
  if (!Array.isArray(images)) return "";

  return (
    images.find((img) => img.key.includes(`public/${filename}`))?.url || ""
  );
};
