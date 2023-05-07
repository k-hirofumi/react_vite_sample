import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../storeConfig";
import { Auth } from "./type";

export const getAuthenticated = createSelector(
    (state) => state.auth as Auth,
    // (counter: any) => counter.filter((counter:any) => counter.completed).length
    (auth: any) => auth.authenticated
  )

export const getToken = createSelector(
    (state) => state.auth as Auth,
    (auth: any) => auth.token
  )

export const getUserName = createSelector(
    (state) => state.auth as Auth,
    (auth: any) => auth.userName
  )

  