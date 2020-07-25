const sizeWidth = {
    mobile: '1100px',
    tablet: '768px',
    laptop: '1000px',
    desktop: '1980px'
}
const sizeHeight = {
    mobile: '640px',
    tablet: '768px',
    laptop: '800px',
    desktop: '1500px'
  }
export const responsiveDevice = {
  mobile: `(max-width: ${sizeWidth.mobile})`,
  tablet: `(min-width: ${sizeWidth.tablet}) and (max-height: ${sizeHeight.tablet})`,
  laptop: `(min-width: ${sizeWidth.laptop}) and (max-height: ${sizeHeight.laptop})`,
  desktop: `(min-width: ${sizeWidth.desktop})`,
};