import axios from "@/composables/axios";

export function getBlogSettingsDetail() {
	return axios.get("/admin/blog/settings/detail")
}

export function updateBlogSettings(data) {
    return axios.post("/admin/blog/settings/update",data)
}