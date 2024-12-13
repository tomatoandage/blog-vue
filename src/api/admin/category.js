import axios from "@/composables/axios";

export function addCategory(name) {
	return axios.post("/admin/category/addCategory", {name})
}

export function getCategoryList(name,startTime,endTime) {
    return axios.post("/admin/category/page",{name,startTime,endTime})
}