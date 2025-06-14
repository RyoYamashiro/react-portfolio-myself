import { css } from 'styled-components';


export const media = {
  handheld: (...args) => css`
    @media (max-width: 414px) {//ここにデバイス幅を指定
      ${css(...args)};
    }
  `
};


export const green = '#c7ffea';
export const pink = '#ff8af2';
export const brown = '#b55a48';
export const font_color_default = '#666';
export const font_color_date = '#e37b89';
export const color_corp = '#f780ff';
export const font_color_sub1 = '#b6a489';

export const site_width = '980px';

export const font_size_s = '5px';
export const font_size_m = '10px';
export const font_size_default = '14px';
export const font_size_l = '20px';
export const font_size_xl = '25px';
export const font_size_xxl = '30px';
export const font_size_3l = '35px';

export const space_s = '8px';
export const space_m = '16px';
export const space_l = '24px';
export const space_xl = '32px';
export const space_xxl = '40px';
export const space_3l = '56px';

export const font_family_corp = `'Hubballi', cursive`;
