const previewWidth = 20;
const previewHeight = 24;

export const createPreview = () => {
  //return new Array(previewHeight);
  return Array.from(Array(previewHeight), () => {
    return new Array(previewWidth).fill([0, "clear"]);
  });
};
