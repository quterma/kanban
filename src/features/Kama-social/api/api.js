import * as axios from "axios";

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY": "9d885aec-0e55-4d92-a640-1f14725751f5",
	},
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 5) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
	},

	unfollow(id) {
		return instance.delete(`follow/${id}`).then(response => response.data);
	},

	follow(id) {
		return instance.post(`follow/${id}`, {}).then(response => response.data);
	},
};

export const authAPI = {
	getAuth() {
		return instance.get(`auth/me`).then(response => response.data);
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, { email, password, rememberMe, captcha });
	},
	logout() {
		return instance.delete(`auth/login`);
	},
};

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => response.data);
	},

	getStatus(userId) {
		return instance.get(`profile/status/${userId}`).then(response => response.data);
	},

	updateStatus(status) {
		return instance.put(`profile/status`, { status });
	},

	savePhoto(file) {
		const formData = new FormData();
		formData.append("image", file);
		return instance.put(`profile/photo`, formData, { headers: { "Content-Type": "multipart/form-data" } });
	},

	saveProfile(profile) {
		return instance.put(`profile`, profile);
	},
};

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`);
	},
};
