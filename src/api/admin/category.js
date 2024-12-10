import axios from "@/composables/axios";

export function addCategory(name) {
	return axios.post("/category/addCategory", {name})
}

export function getCategoryList(name,startTime,endTime) {
    return axios.get("/category/page",{name,startTime,endTime})
}