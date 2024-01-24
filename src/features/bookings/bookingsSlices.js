import { createSlice } from "@reduxjs/toolkit";
import { getBookingsListThunk } from "./bookingsThunks";

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addBooking: (state, action) => {
      state.data = [action.payload, ...state.data];
    },
    updateBooking: (state, action) => {
      const index = state.data.findIndex(
        (room) => room.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },

    deleteBooking: (state, action) => {
      state.data = state.data.filter((room) => room.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookingsListThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getBookingsListThunk.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getBookingsListThunk.pending, (state, action) => {
        state.status = "pending";
      });
  },
});

export const { addBooking, updateBooking, deleteBooking } =
  bookingsSlice.actions;
export const getBookingsData = (state) => state.bookings.data;
export const getBookingsStatus = (state) => state.bookings.status;
export const getBookingsError = (state) => state.bookings.error;

export const getRoomsCheckIn = (state) =>
  state.bookings.data.filter((booking) => booking.check === "in");

export const getRoomsCheckOut = (state) =>
  state.bookings.data.filter((booking) => booking.check === "out");

export const getRoomsCheckPending = (state) =>
  state.bookings.data.filter((booking) => booking.check === "pending");
