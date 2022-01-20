import axios from 'axios';

export const createPatch = data => {
    return axios.post('/api/patches/', data)
}

export const fetchAllPatches = () => {
    return axios.get("/api/patches")
};

export const fetchUserPatches = userId => {
    return axios.get(`/api/patches/user/${userId}`)
};

export const fetchPatch = id => {
    return axios.get(`/api/patches/${id}`)
}

export const deletePatch = id => {
    return axios.delete(`/api/patches/${id}`)
}

export const updatePatch = id => {
    return axios.put(`/api/patches/${id}`)
}