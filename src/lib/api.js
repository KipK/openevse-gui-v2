const EvseClient_OpenEVSE_Manual = 65537 // Openevse Manual Client ID 



export const override = {
	getOverride: async () => {
		return await httpAPI("GET", "/override")
	},
	setOverride: async (data) => {
		return await httpAPI("POST", "/override",JSON.stringify(data))
	},
	clearOverride: async (id) => {
		return await httpAPI("DELETE", "/override",id)
	},
	toggleOverride: async () => {
		return await httpAPI("TOGGLE", "/override")
	}
}



export async function httpAPI(method,url,body=null) {
	let data = {
		method: method,
		headers: {
			'Content-Type': 'application/json'
		},
	}
	if (body) {
		data.body = body
	}
	const response = await fetch(url, data)
	if(response) {
		const json_response = response.json()
		return json_response
	}
	throw Error(response.statusText)
}