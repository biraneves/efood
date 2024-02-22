// Libraries
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CartState = {
  items: Product[];
  isOpen: boolean;
  formVisible: '' | 'delivery' | 'payment' | 'confirmation';
  finishedPayment: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
  formVisible: '',
  finishedPayment: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const product = state.items.find((item) => item.id === action.payload.id);

      if (!product) state.items.push(action.payload);
      else alert('O produto já está no carrinho.');
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    clear: (state) => {
      state.items = [];
    },
    showDeliveryForm: (state) => {
      state.formVisible = 'delivery';
    },
    showPaymentForm: (state) => {
      state.formVisible = 'payment';
    },
    showConfirmation: (state) => {
      state.formVisible = 'confirmation';
    },
    hideForm: (state) => {
      state.formVisible = '';
    },
    finishPayment: (state) => {
      state.finishedPayment = true;
    },
    finishPurchase: (state) => {
      state.items = [];
      state.formVisible = '';
      state.isOpen = false;
      state.finishedPayment = false;
    },
  },
});

export const {
  add,
  remove,
  open,
  close,
  clear,
  showDeliveryForm,
  showPaymentForm,
  showConfirmation,
  hideForm,
  finishPayment,
  finishPurchase,
} = cartSlice.actions;
export default cartSlice.reducer;
