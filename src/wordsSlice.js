import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchWords = createAsyncThunk('words/fetchWords', async () => {
	try {
		const resp = await fetch('/api/words');
		if (!resp.ok) {
			throw new Error('Failed to fetch data');
		}
		return await resp.json();
	} catch (error) {
		console.error('Error fetching words:', error);
		throw error;
	}
});
export const deleteWord = createAsyncThunk(
	'words/deleteWord',
	async (wordId) => {
		try {
			const resp = await fetch(`/api/words/${wordId}/delete`, {
				method: 'POST',
			});
			if (!resp.ok) {
				throw new Error('Failed to delete word');
			}
			await resp.json();
			return wordId;
		} catch (error) {
			console.error('Error deleting word:', error);
			throw error;
		}
	}
);
export const updateWord = createAsyncThunk(
	'words/updateWord',
	async (updatedWord) => {
		try {
			const resp = await fetch(`/api/words/${updatedWord.id}/update`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedWord),
			});
			if (!resp.ok) {
				throw new Error('Failed to update word');
			}
			await resp.json();
			return updatedWord;
		} catch (error) {
			console.error('Error updating word:', error);
			throw error;
		}
	}
);
const wordsSlice = createSlice({
	name: 'word',
	initialState: {
		words: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchWords.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.words = action.payload;
			})
			.addCase(fetchWords.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchWords.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(deleteWord.fulfilled, (state, action) => {
				state.words = state.words.filter((word) => word.id !== action.payload);
			})
			.addCase(deleteWord.rejected, (state, action) => {
				state.error = action.error.message;
			})
			.addCase(updateWord.fulfilled, (state, action) => {
				state.words = state.words.map((word) =>
					word.id === action.payload.id ? action.payload : word
				);
			})
			.addCase(updateWord.rejected, (state, action) => {
				state.error = action.error.message;
			});
	},
});
export const selectWords = (state) => state.words.words;
export default wordsSlice.reducer;
