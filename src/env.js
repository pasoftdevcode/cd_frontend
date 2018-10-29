/* ==== > Domain - Url < ==== */
export const apiDomain = 'http://127.0.0.1:8000/'
export const loginUrl = apiDomain + 'oauth/token'
export const userUrl = apiDomain + 'api/user'
/* ==== > / Domain - Url < ==== */

/* ==== > env < ==== */
export const client_id = 2
export const client_secret = 'w31TvSu4HQvJlq4aR8F9MKHgwCFmZ1E4peugcSBz'
/* ==== > / env < ==== */

export const getHeader = function(){
	const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
	const headers = {
		'Accept': 'application/json',
		'Authorization': 'Bearer ' + tokenData.access_token
	}
	return headers;
}
