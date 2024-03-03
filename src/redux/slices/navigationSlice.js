import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assortment: [
    {
      id: 1,
      title: "Գազի կաթսաներ",
      children: [
        {
          id: 1,
          title: "Գազի կաթսաներ",
          children: [{ id: 1, title: "Գազի կաթսաներ", children: [] }],
        },
        { id: 2, title: "Գազի կաթսաներ", children: [] },
        {
          id: 3,
          title: "Գազի կաթսաներ",
          children: [],
        },
      ],
    },
    {
      id: 2,
      title: "Գազի կաթսաներ",
      children: [
        { id: 1, title: "Գազի կաթսաներ", children: [] },
        { id: 2, title: "Գազի կաթսաներ", children: [] },
      ],
    },
    {
      id: 3,
      title: "Գազի կաթսաներ",
      children: [
        {
          id: 1,
          title: "Գազի կաթսաներ",
          children: [
            {
              id: 1,
              title: "Գազի կաթսաներ",
              children: [{ id: 1, title: "Գազի կաթսաներ", children: [] }],
            },
          ],
        },
        { id: 2, title: "Գազի կաթսաներ", children: [] },
        {
          id: 3,
          title: "Գազի կաթսաներ",
          children: [],
        },
      ],
    },
  ],
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {},
});

export default navigationSlice.reducer;
export const {} = navigationSlice.actions;
