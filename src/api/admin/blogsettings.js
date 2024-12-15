import axios from "@/composables/axios";

export function getBlogSettingsDetail(name) {
	return axios.get("/admin/blog/settings/detail", {name})
}

export function getTagList(name,startTime,endTime) {
    return axios.post("/admin/tag/page",{name,startTime,endTime})
}