import { privateAxios } from "./privateAxios";

async function apiBase(url, options) {
  const response = await privateAxios(url, options);
  return response.data;
}

async function readData(url, headers, type) {
  const options = {
    headers: headers,
    method: "GET",
    responseType: type,
  };
  return await apiBase(url, options);
}

async function createData(url, data, headers, uploadProgress) {
  const options = {
    method: "POST",
    headers: headers,
    data: data,
    onUploadProgress: uploadProgress,
  };

  return await apiBase(url, options);
}

async function updateData(url, data, headers) {
  const options = {
    method: "PUT",
    headers: headers,
    data: JSON.stringify(data),
  };

  return await apiBase(url, options);
}

async function patchData(url, data, headers) {
  const options = {
    method: "PATCH",
    headers: headers,
    data: JSON.stringify(data),
  };

  return await apiBase(url, options);
}

async function deleteData(url, headers) {
  const options = {
    method: "DELETE",
    headers: headers,
  };

  return await apiBase(url, options);
}

export { createData, readData, updateData, deleteData, patchData };
