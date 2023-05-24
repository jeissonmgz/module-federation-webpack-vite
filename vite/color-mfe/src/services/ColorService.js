import axios from 'axios';

const API = 'https://www.thecolorapi.com';

const getHex = (hex)=> axios.get(`${API}/id?hex=${hex}&format=json`);

const getRgb = (rgb)=> axios.get(`${API}/id?rgb=${rgb}&format=json`);

const getHsl = (hsl)=> axios.get(`${API}/id?hsl=${hsl}&format=json`);

const getCmyk = (cmyk)=> axios.get(`${API}/id?cmyk=${cmyk}&format=json`);

export const ColorService = {
    getHex,
    getRgb,
    getHsl,
    getCmyk
}