import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: {
    /*
    '1234-adsf-asdf-asdf': {
      id: '1234-asdf-asdf-asdf',
      name: 'name of topic',
      icon: 'icon url',
      quizIds: ['123', '456']
    }
    */
  }
};

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic(state, action) {
      state.topics[action.payload.id] = { ...action.payload, quizIds: [] };
    },
    addQuizIdToTopic(state, action) {
      // payload: { quizId: '123', topicId: '456' }
      state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
    }
  }
});

//export selectors
export const selectTopics = (state) => state.topics.topics;

//export actions
export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;

//export reducers
export default topicsSlice.reducer;
