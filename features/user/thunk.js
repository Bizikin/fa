import axios from "axios";

export const getProductsThunk = async (url, thunkAPI) => {
  try {
    const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/${url}`;
    const resp = await axios.get(fullUrl);
    return resp.data;
  } catch (error) {
    console.log(error.response?.data?.msg);
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};

export const getCategoriesThunk = async (url, thunkAPI) => {
  try {
    const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/${url}`;
    const resp = await axios.get(fullUrl);
    return resp.data;
  } catch (error) {
    console.log(error.response?.data?.msg);
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};

export const createSessionThunk = async (url, thunkAPI) => {
  try {
    const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/${url}`;
    const resp = await axios.get(fullUrl, { withCredentials: true });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error.response?.data?.msg);
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};

export const getCartThunk = async (url, thunkAPI) => {
  try {
    const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/${url}`;
    const resp = await axios.get(fullUrl, { withCredentials: true });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error.response?.data?.msg);
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};

export const incCartThunk = async (url, thunkAPI) => {
  try {
    const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/${url}`;
    const resp = await axios.put(fullUrl, {}, { withCredentials: true });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error.response?.data?.msg);
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};

export const decCartThunk = async (url, thunkAPI) => {
  try {
    const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/${url}`;
    const resp = await axios.put(fullUrl, {}, { withCredentials: true });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error.response?.data?.msg);
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};

export const editCartThunk = async (url, thunkAPI) => {
  try {
    const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/${url}`;
    const resp = await axios.put(fullUrl, {}, { withCredentials: true });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error.response?.data?.msg);
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};

export const orderThunk = async (url, info, thunkAPI) => {
  try {
    const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/${url}`;
    console.log(`Making request to: ${fullUrl}`);
    const resp = await axios.post(fullUrl, info, { withCredentials: true });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error.response?.data?.msg);
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};
