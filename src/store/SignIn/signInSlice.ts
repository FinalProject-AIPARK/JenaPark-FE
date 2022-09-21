// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// interface User {
//   email: string;
//   password: string;
// }

// export const addUserAsync = createAsyncThunk("ADD_USER", async (user: User) => {
//   const response = await axios.post("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   });
//   return response.data;
// }

// const initialState: User = {
//   email: '',
//   password: '',
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {},
// });

// export default userSlice.reducer;

const initialState = {
  user: {
    name: '',
  },
};

const LOGIN = 'name/LOGIN';

export function saveName(name: any) {
  return { type: LOGIN, name: name };
}

export default function reducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case 'name/LOGIN': {
      return { name: action.name };
    }
    default:
      return state;
  }
}
