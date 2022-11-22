import axios from 'axios';
import { useSelector } from 'react-redux';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

axios.interceptors.request.use(function (config) {
	const token = localStorage.getItem('token');
	config.headers.Authorization = token ? `Bearer ${token}` : '';
	return config;
});


