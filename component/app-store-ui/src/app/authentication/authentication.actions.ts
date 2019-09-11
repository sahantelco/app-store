import { Action } from "@ngrx/store";
import { LoginFormData, LoginResponseData, ClientRegParam, RegClientData, TokenData, TokenGenerationParam } from "./authentication.models";
import {
  SigUpUserParam,
  ResetPasswordParam
} from "./authentication.data.models";

export const DO_LOGIN = "DO_LOGIN";
export const LOGIN_SUCCESS = "DO_LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const DO_LOGOUT = "DO_LOGOUT";
export const DO_LOGOUT_SUCCESS = "DO_LOGOUT_SUCCESS";

export const SET_LAST_AUTH_REQUIRED_ROUTE = "SET_LAST_AUTH_REQUIRED_ROUTE";

export const SIGNUP_USER = "SIGNUP_USER";
export const SIGNUP_USER_SUCCESS = "SIGNUP_USER_SUCCESS";

export const CHANGE_USER_PW = "CHANGE_USER_PW";
export const CHANGE_USER_PW_SUCCESS = "CHANGE_USER_PW_SUCCESS";

export const CLIENT_REG_APPLICATIONS = 'CLIENT_REG_APPLICATIONS';
export const CLIENT_REG_APPLICATIONS_SUCCESS = 'CLIENT_REG_APPLICATIONS_SUCCESS';

export const TOKEN_GENERATION = 'TOKEN_GENERATION';
export const TOKEN_GENERATION_SUCCESS = 'TOKEN_GENERATION_SUCCESS';

export class DoLoginAction implements Action {
  readonly type: string = DO_LOGIN;

  constructor(public payload: LoginFormData) { }
}

export class LoginSuccessAction implements Action {
  readonly type: string = LOGIN_SUCCESS;
  constructor(public payload: LoginResponseData) { }
}

export class DoLogoutAction implements Action {
  readonly type: string = DO_LOGOUT;
  public payload: any;
}

export class DoLogoutSuccessAction implements Action {
  readonly type: string = DO_LOGOUT_SUCCESS;
  public payload: any;
}

export class SetLastAuthRequiredRouteAction implements Action {
  readonly type: string = SET_LAST_AUTH_REQUIRED_ROUTE;
  constructor(public payload: string) { }
}

export class SignupUserAction implements Action {
  readonly type: string = SIGNUP_USER;
  constructor(public payload: SigUpUserParam) { }
}
export class SignupUserSuccessAction implements Action {
  readonly type: string = SIGNUP_USER_SUCCESS;
  constructor(public payload: any) { }
}

export class ChangeUserPwAction implements Action {
  readonly type: string = CHANGE_USER_PW;
  constructor(public payload: ResetPasswordParam) { }
}

export class ChangeUserPwSuccessAction implements Action {
  readonly type: string = CHANGE_USER_PW_SUCCESS;
  constructor(public payload: any) { }
}

export class ClientRegistrationAction implements Action {
  readonly type: string = CLIENT_REG_APPLICATIONS;
  constructor(public payload: ClientRegParam) { }
}

export class ClientRegistrationSuccessAction implements Action {
  readonly type: string = CLIENT_REG_APPLICATIONS_SUCCESS;
  constructor(public payload: RegClientData) { }
}

export class TokenGenerationAction implements Action {
  readonly type: string = TOKEN_GENERATION;
  constructor(public payload: TokenGenerationParam) { }
}

export class TokenGenerationSuccessAction implements Action {
  readonly type: string = TOKEN_GENERATION_SUCCESS;
  constructor(public payload: TokenData) { }
}

export type Actions =
  | DoLoginAction
  | LoginSuccessAction
  | DoLogoutAction
  | DoLogoutSuccessAction
  | SignupUserAction
  | SignupUserSuccessAction
  | ChangeUserPwAction
  | ChangeUserPwSuccessAction
  | ClientRegistrationAction
  | ClientRegistrationSuccessAction
  | TokenGenerationAction
  | TokenGenerationSuccessAction;
