import axios from "@/composables/axios";

export function addTag(name) {
	return axios.post("/admin/tag/addTag", {name})
}

export function getTagList(name,startTime,endTime) {
    return axios.post("/admin/tag/page",{name,startTime,endTime})
}