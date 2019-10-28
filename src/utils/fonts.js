import './fonts/fonts.scss'

export const secondaryFont = {
  fontFamily: 'manksa',
  fontWeight: 'normal',
  lineHeight: '90%',
}

export const fontWeightNormal = 400;
export const fontWeightBold = 700;

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
