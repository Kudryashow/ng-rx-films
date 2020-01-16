import { Action } from "@ngrx/store";
import { IUser } from "../../models/user";
import { IConfig } from "../../models/config";

export enum EConfigActions {
  GetConfig = '[Config] Get Config',
  GetConfigSuccess = '[Config] Get Config Success',
}

export class GetConfig implements Action{
  public readonly type: EConfigActions.GetConfig;
}

export class GetConfigSuccess implements Action{
  public readonly type: EConfigActions.GetConfigSuccess;
  constructor(public payload: Array<IConfig>) {}
}

export type ConfigActions = GetConfig | GetConfigSuccess;