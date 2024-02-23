import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {} from "./thunk";

const initialState = {
  isLoading: false,
  isRestaurantModal: true,
  isModalMenu: false,
  currentAddress: "",
  isDeliveryModal: false,
};

// export const registerUser = createAsyncThunk(
//   "user/registerUser",
//   async (user, thunkAPI) => {
//     return registerUserThunk("/auth/signup", user, thunkAPI);
//   }
// );

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
    // builder.addCase(addClient.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(addClient.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.clients.push(payload);
    // });
    // builder.addCase(addClient.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   toast.error(payload);
    // });
  },
});

export const {
  restaurantModalHandler,
  modalMenuHandler,
  currentAddressHandler,
  deliveryModalHandler,
} = userSlice.actions;
export default userSlice.reducer;
