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
  categories: [],
};

export const getProducts = createAsyncThunk(
  "products/getproducts",
  async (info, thunkAPI) => {
    const url = `api/product?restaurantId=${info.restaurantId}&categoryId=${info.categoryId}`;
    return getProductsThunk(url, thunkAPI);
  }
);

export const getCategories = createAsyncThunk(
  "categories/getcategiries",
  async (info, thunkAPI) => {
    const url = `api/category?restaurantId=${info.categoryId}`;
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
    currentCategoryHandler: (state, { payload }) => {
      state.currentCategory = payload;
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
    });
    builder.addCase(getProducts.rejected, (state, { payload }) => {
      state.isLoading = false;
    });

    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload;
    });
    builder.addCase(getCategories.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});

export const {
  restaurantModalHandler,
  modalMenuHandler,
  currentAddressHandler,
  deliveryModalHandler,
  currentCategoryHandler,
} = userSlice.actions;
export default userSlice.reducer;
