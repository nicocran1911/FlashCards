import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: {
    /*
    '123': {
      id: '123',
      front: 'front text',
      back: 'back text'
    },
    '456': {
      etc.
    }
    */
  }
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state, action) {
      const { id } = action.payload;
      state.cards[id] = action.payload;
    }
  }
});

export const selectCards = (state) => state.cards.cards;

export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;
