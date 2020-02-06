import * as axios from "axios"; 
import { savePhotoSuccess } from "../redux/profileReducer";



const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "2ef20370-8037-4b6c-bd91-6c68962a182a"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        console.log("asdasd")
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI')
        return profileAPI.getProfile(userId);
                
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
                
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);

    }
}
export const authAPI = {
   me() {
       return instance.get(`auth/me`);
   },
   login(email, password, rememberMe = false) {
       return instance.post('auth/login', {email, password, rememberMe});
   },
   logout() {
       return instance.delete('auth/login');
   }
}


