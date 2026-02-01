import baseUrl from "./baseUrl"
import commonApi from "./commonApi"

export const getTicketApi = async()=>{
    return await commonApi("GET",`${baseUrl}/tickets`,{})
}

export const deleteTicketApi = async(id)=>{
    return await commonApi("DELETE",`${baseUrl}/tickets/${id}`)
}

export const addTicketApi = async(data)=>{
    return await commonApi("POST",`${baseUrl}/tickets`,data)
}

export const getSingleTicketApi = (id) => {
  return commonApi("GET", `${baseUrl}/tickets/${id}`)
}

export const updateTicketApi = async(id,data)=>{
    return await commonApi("PUT",`${baseUrl}/tickets/${id}`,data)
}