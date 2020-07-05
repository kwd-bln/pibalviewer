import { AppState } from '../store'

export const getToken = (state: AppState): string => state.state.token

export const getUsername = (state: AppState): string => state.state.username

export const getPassword = (state: AppState): string => state.state.password