import axios from "axios";

export const getProductsThunk = async (url, thunkAPI) => {
  try {
    const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/${url}`;
    console.log(`Making request to: ${fullUrl}`);
    const resp = await axios.get(fullUrl);
    return resp.data;
  } catch (error) {
    console.log(error.response?.data?.msg);
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};
