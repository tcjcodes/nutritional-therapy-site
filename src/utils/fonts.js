// FIXME https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#file-assets-fonts-pdfs--are-imported-as-es-modules
export const secondaryFont = {
  fontFamily: 'manksa',
  fontWeight: 'normal',
  lineHeight: '90%',
}

export const fontWeightNormal = 400
export const fontWeightBold = 700

export const serifFont = {
  fontFamily: 'vollkorn',
  textTransform: 'lowercase',
  fontWeight: fontWeightNormal,
  lineHeight: '105%',
}

export const serifFontBold = {
  ...serifFont,
  fontWeight: fontWeightBold,
}
