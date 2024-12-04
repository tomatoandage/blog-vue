import axios from "@/composables/axios";

export function login(username, password) {
	return axios.post("/login", {username,password})
}