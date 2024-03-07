import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProductsThunk,
  getCategoriesThunk,
  createSessionThunk,
  getCartThunk,
  incCartThunk,
  decCartThunk,
  editCartThunk,
  orderThunk,
} from "./thunk";

const initialState = {
  isLoading: false,
  isRestaurantModal: true,
  isModalMenu: false,
  currentAddress: "",
  isDeliveryModal: false,
  products: [],
  currentCategory: "",
  categories: [],
  basket: {},
  items: 0,
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
    return getCategoriesThunk(url, thunkAPI);
  }
);

export const createSession = createAsyncThunk(
  "session/createsession",
  async (info, thunkAPI) => {
    const url = `api/basket`;
    return createSessionThunk(url, thunkAPI);
  }
);

export const getCart = createAsyncThunk("cart/show", async (info, thunkAPI) => {
  const url = `api/basket`;
  return getCartThunk(url, thunkAPI);
});

export const incCart = createAsyncThunk("cart/inc", async (info, thunkAPI) => {
  const url = `api/basket/${info.productId}/inc`;
  return incCartThunk(url, thunkAPI);
});

export const decCart = createAsyncThunk("cart/dec", async (info, thunkAPI) => {
  const url = `api/basket/${info.productId}/dec`;
  return decCartThunk(url, thunkAPI);
});

export const editCart = createAsyncThunk(
  "cart/edit",
  async (info, thunkAPI) => {
    const url = `api/basket/${info.productId}`;
    return editCartThunk(url, thunkAPI);
  }
);

export const order = createAsyncThunk("cart/order", async (info, thunkAPI) => {
  const url = `api/order`;
  return orderThunk(url, info, thunkAPI);
});

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
    cleanBasketHandler: (state) => {
      state.basket = {};
      state.items = 0;
    },
    cleanCurentAddressHandler: (state) => {
      state.currentAddress = "";
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

    builder.addCase(createSession.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createSession.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    });
    builder.addCase(createSession.rejected, (state, { payload }) => {
      state.isLoading = false;
    });

    builder.addCase(getCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCart.fulfilled, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(getCart.rejected, (state, { payload }) => {
      state.isLoading = false;
    });

    builder.addCase(incCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(incCart.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.basket = payload.basketItems;
      state.items = payload.countOfItems;
    });
    builder.addCase(incCart.rejected, (state, { payload }) => {
      state.isLoading = false;
    });

    builder.addCase(decCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(decCart.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.basket = payload.basketItems;
      state.items = payload.countOfItems;
    });
    builder.addCase(decCart.rejected, (state, { payload }) => {
      state.isLoading = false;
    });

    builder.addCase(editCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editCart.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.basket = payload.basketItems;
      state.items = payload.countOfItems;
    });
    builder.addCase(editCart.rejected, (state, { payload }) => {
      state.isLoading = false;
    });

    builder.addCase(order.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(order.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.basket = {};
      state.total = 0;
    });
    builder.addCase(order.rejected, (state, { payload }) => {
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
  cleanBasketHandler,
  cleanCurentAddressHandler,
} = userSlice.actions;
export default userSlice.reducer;
