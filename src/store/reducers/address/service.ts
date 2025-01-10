import { IAPIResponseSchema } from "@/store/type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAddress } from "./type";
import { addressAPI, createaddressAPI, deleteaddressAPI, setdefaultaddressAPI, updateaddressAPI } from "@/services/addressesServices";

export const getaddresses = createAsyncThunk<IAPIResponseSchema<IAddress[]>>("get/address", async () => {
  const result = await addressAPI();
  if (result.data) return result.data;
  return result;
});

export const deleteaddress = createAsyncThunk<IAPIResponseSchema<undefined>, string>("delete/address", async (id: string) => {
  const result = await deleteaddressAPI(id);
  if (result.data) return result.data;
  return result;
});
export const setdefaultaddress = createAsyncThunk<IAPIResponseSchema<undefined>, string>("setdefault/address", async (id: string) => {
  const result = await setdefaultaddressAPI(id);
  if (result.data) return result.data;
  return result;
});

export const createaddress = createAsyncThunk<IAPIResponseSchema<IAddress>, IAddress>("create/address", async (data: IAddress) => {
  const result = await createaddressAPI(data);
  console.log({ result, data });

  if (result.data) return result.data;
  return result;
});

export const updateaddress = createAsyncThunk<IAPIResponseSchema<IAddress>, IAddress>("update/address", async (data: IAddress) => {
  const result = await updateaddressAPI(data);
  console.log({ result, data });

  if (result.data) return result.data;
  return result;
});
