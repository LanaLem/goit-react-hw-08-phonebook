import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchAll } from './operations';

const actions = [addContacts, deleteContacts, fetchAll];

const handleFetchContacts = (state, action) => {
    state.items = action.payload;
};

const handleAddContacts = (state, action) => {
    state.items.push(action.payload);
};

const handleDeleteContacts = (state, action) => {
    const idx = state.items.findIndex(item => item.id === action.meta.arg);
    state.items.splice(idx, 1);
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder =>
        builder
            .addCase(fetchAll.fulfilled, handleFetchContacts)
            .addCase(addContacts.fulfilled, handleAddContacts)
            .addCase(deleteContacts.fulfilled, handleDeleteContacts)
            .addMatcher(
                isAnyOf(...actions.map(action => action.fulfilled)),
                state => {
                    state.isLoading = false;
                    state.error = null;
                }
            )
            .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
                state.isLoading = true;
            })
            .addMatcher(
                isAnyOf(...actions.map(action => action.rejected)),
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            ),
},
);

export const contactsReducer = contactsSlice.reducer;
