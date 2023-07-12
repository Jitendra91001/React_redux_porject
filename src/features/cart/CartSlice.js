import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchItem,DeleteItem } from './cartAPI';
import axios from 'axios';

const initialState = {
  item: [],
  status: 'idle',
};
export const fetchAsync = createAsyncThunk(
  'cart/fetchcart',
  async (userId, thunkAPI) => {
    const response = await axios.get('http://localhost:8080/cart');
    return response.data;
  }
);

export const addSync = createAsyncThunk(
  'cart/addSync',
  async (item) => {
    const{id, title,brand,description,thumbnail,price}=item
    const response = await axios.post('http://localhost:8080/cart',{id, title,brand,description,thumbnail,price,quantity:1});
    return response;
  }
);

export const DeleteSync = createAsyncThunk(
  'cart/DeleteSync',
  async (id) => {
    axios.delete(`http://localhost:8080/cart/${id}`)
    return id;
  }
);

export const UpdateSync = createAsyncThunk(
  'cart/UpdateSync',
  async (id,item) => {
    console.log({id,item})
    const response = await axios.patch(`http://localhost:8080/cart/${id.id}`,id.item);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
        console.log("pending fetch")
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.item = action.payload
      })
      .addCase(fetchAsync.rejected, (state, action) => {
        state.status = 'failed';
        console.log(action)
      })
      .addCase(addSync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.item.push(action.payload);
      })
      .addCase(addSync.pending, (state, action) => {
        state.status = 'pending'
        // state.item.push(action.payload);
      })
      .addCase(addSync.rejected, (state, action) => {
        state.status = 'failed';
        // state.item.push(action.payload);
      })
      .addCase(DeleteSync.fulfilled, (state, action) => {
       state.status = 'success';
       const index=state.item.findIndex(item=>item.id===action.payload)
       console.log(index)
      state.item.splice(index,1);
      })
      .addCase(UpdateSync.fulfilled, (state, action) => {
        state.status = 'success';
        const index=state.item.findIndex(item=>item.id===action.payload.id)
       state.item.splice(index,1,action.payload);
       });

  },
});
export const {increment} = cartSlice.actions;
export default cartSlice.reducer;
