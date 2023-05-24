import axios from 'axios';

const API = 'https://emojihub.yurace.pro/api';

const getRandomEmoji = ()=> axios.get(`${API}/random`);

const getRandomEmojis = ()=> axios.get(`${API}/all`);

const getEmojisByCategory = (category)=> axios.get(`${API}/all/category/${category}`);

const getEmojisByGroup = (group)=> axios.get(`${API}/all/group/${group}`);

export const EmojiService = {
    getRandomEmoji,
    getRandomEmojis,
    getEmojisByCategory,
    getEmojisByGroup
}