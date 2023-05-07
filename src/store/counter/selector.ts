import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../storeConfig";
import { Counter } from "./type";

export const getValue = createSelector(
    (state) => state.counter as Counter,
    // (counter: any) => counter.filter((counter:any) => counter.completed).length
    (counter: any) => counter.value
  )
  