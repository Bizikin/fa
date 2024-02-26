import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsThunk } from "./thunk";

const initialState = {
  isLoading: false,
  isRestaurantModal: true,
  isModalMenu: false,
  currentAddress: "",
  isDeliveryModal: false,
  products: [],
  currentCategory: "",
};

export const getProducts = createAsyncThunk(
  "products/rgetproducts",
  async (info, thunkAPI) => {
    const url = `api/product?restaurantId=${info.restaurantId}&categoryId=${info.categoryId}`;
    return getProductsThunk(url, thunkAPI);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    restaurantModalHandler: (state, { payload }) => {
      state.isRestaurantModal = payload;
    },
    modalMenuHandler: (state, { payload }) => {
      state.isModalMenu = payload;
    },
    currentAddressHandler: (state, { payload }) => {
      state.currentAddress = payload;
    },
    deliveryModalHandler: (state, { payload }) => {
      state.isDeliveryModal = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
      console.log(payload);
    });
    builder.addCase(getProducts.rejected, (state, { payload }) => {
      state.isLoading = false;
      // toast.error(payload);
      console.error(payload);
    });
  },
});

export const {
  restaurantModalHandler,
  modalMenuHandler,
  currentAddressHandler,
  deliveryModalHandler,
} = userSlice.actions;
export default userSlice.reducer;
