import API from './config';

function secureFetch(type, body = '') {
	if (type === 'GET' || type === 'DELETE') {
		return {
			method: type,
			headers: {
				'Authorization': API.AUTH
			},
		};
	} else {
		return {
			method: type,
			headers: {
				'Authorization': API.AUTH,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(body)
		};
	}
}

export function securePost(path, body) {
	console.log('#### securePost api url : ', `${API.BASE}/${path}`, body);
	return fetch(`${API.BASE}/${path}`, secureFetch('POST', body)).then((res) => res.json());
}

export function securePut(path, body) {
	console.log('#### securePut api url : ', `${API.BASE}/${path}`, body);
	return fetch(`${API.BASE}/${path}`, secureFetch('PUT', body)).then((res) => res.json());
}

export function secureGet(path) {
	console.log('#### secureGet api url : ', `${API.BASE}/${path}`);
	return fetch(`${API.BASE}/${path}`, secureFetch('GET')).then((res) => res.json());
}

export function secureDelete(path) {
	console.log('#### secureDelete api url : ', `${API.BASE}/${path}`);
	return fetch(`${API.BASE}/${path}`, secureFetch('DELETE')).then((res) => res.json());
}

