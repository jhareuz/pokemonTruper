/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { Platform } from 'react-native';
import { _axios } from './interceptors';
import axios from 'axios';

export const listHome = () => _axios.get('pokemon', {
    showPayload: true,
}).then(({ data }) => data);

export const listHomePokemon = (url: string) => axios.get(`${url}`, {
    showPayload: true,
}).then(({ data }) => data);