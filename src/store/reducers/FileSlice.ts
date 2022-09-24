import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFile } from '../../types/Files';

interface IFileSlice {
  activeFile: IFile | null;
}

const initialState: IFileSlice = {
  activeFile: null,
};

const FileSlice = createSlice({
  name: 'fileSlice',
  initialState,
  reducers: {
    setActiveFile: (state, action: PayloadAction<IFile>) => {
      state.activeFile = action.payload;
    },
  },
});

export const { setActiveFile } = FileSlice.actions;
export default FileSlice.reducer;
