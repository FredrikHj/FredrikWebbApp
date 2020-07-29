const widthSize = {
  mobile1: '300px',
  mobile2: '450px',
  mobile3: '600px',
  tablet1: '700px',
  laptop1: '800px',
  laptop2: '1000px',
  laptop3: '1200px',
  laptop4: '1400px',
  desktop1: '1600px',
  desktop2: '1800px',
  desktop3: '2000px',
}
const heightSize = {
  mobile1: '300px',
  mobile2: '450px',
  mobile3: '600px',
  tablet1: '700px',
  laptop1: '800px',
  laptop2: '1000px',
  laptop3: '1200px',
  laptop4: '1400px',
  desktop1: '1600px',
  desktop2: '1800px',
  desktop3: '2000px',
}
console.log(`(min-width: ${widthSize.mobile2}) and (max-width: ${widthSize.mobile3}${-1})`);

export const responsiveDeviceSize = {
  mobile1: `(min-width: ${widthSize.mobile1}) and (max-width: ${`${widthSize.mobile2}`-1})`,
  mobile2: `(min-width: ${widthSize.mobile2}) and (max-width: ${`${widthSize.mobile3}`-1})`,
  mobile3: `(min-width: ${widthSize.mobile3})`,
  tablet1: `(min-width: ${widthSize.tablet1})`,
  laptop1: `(min-width: ${widthSize.laptop1})`,
  laptop2: `(min-width: ${widthSize.laptop2})`,
  laptop3: `(min-width: ${widthSize.laptop3})`,
  laptop4: `(min-width: ${widthSize.laptop4})`,
  desktop1: `(min-width: ${widthSize.desktop1})`,
  desktop2: `(min-width: ${widthSize.desktop2})`,
  desktop3: `(min-width: ${widthSize.desktop3})`,
}
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