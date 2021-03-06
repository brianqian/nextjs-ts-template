interface HexCodes {
  [index: number]: any;
}

const theme = {
  color: {
    white: '#EFEFF9',
    red: '#F15C5F',
    gray: '#3b3e3b',
    blue: '#225371',
    black: '#282829',
  },
  changeOpacity: (color: string, opacity: number) => {
    const opacityHexCodes: HexCodes = {
      0: '00',
      1: '03',
      2: '05',
      3: '08',
      4: '0A',
      5: '0D',
      10: '1A',
      20: '33',
      25: '40',
      30: '4D',
      40: '66',
      50: '80',
      60: '99',
      70: 'B3',
      75: 'BF',
      80: 'CC',
      90: 'E6',
      100: 'FF',
    };
    return color + opacityHexCodes[opacity];
  },
  tailwind: {
    green1: '#F0FFF4',
    green2: '#C6F6D5',
    green3: '#9AE6B4',
    green4: '#68D391',
    green5: '#48BB78',
    green6: '#38A169',
    green7: '#2F855A',
    green8: '#276749',
    green9: '#22543D',

    gray1: '#F7FAFC',
    gray2: '#EDF2F7',
    gray3: '#E2E8F0',
    gray4: '#CBD5E0',
    gray5: '#A0AEC0',
    gray6: '#718096',
    gray7: '#4A5568',
    gray8: '#2D3748',
    gray9: '#1A202C',

    teal1: '#E6FFFA',
    teal2: '#B2F5EA',
    teal3: '#81E6D9',
    teal4: '#4FD1C5',
    teal5: '#38B2AC',
    teal6: '#319795',
    teal7: '#2C7A7B',
    teal8: '#285E61',
    teal9: '#234E52',

    blue1: '#EBF8FF',
    blue2: '#BEE3F8',
    blue3: '#90CDF4',
    blue4: '#63B3ED',
    blue5: '#4299E1',
    blue6: '#3182CE',
    blue7: '#2B6CB0',
    blue8: '#2C5282',
    blue9: '#2A4365',

    pink1: '#FFF5F7',
    pink2: '#FED7E2',
    pink3: '#FBB6CE',
    pink4: '#F687B3',
    pink5: '#ED64A6',
    pink6: '#D53F8C',
    pink7: '#B83280',
    pink8: '#97266D',
    pink9: '#702459',
  },
  // ORIGINAL VALUE bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  bs: '0 12px 24px 0 rgba(0, 0, 0, 1)',
  textFont: 'Source Sans Pro',
  accent: 'darkorange',
};

export { theme };
