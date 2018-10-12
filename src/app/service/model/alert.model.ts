export const ALERT_DEFAULT_TIMEOUT = 3000;

export interface Alert {
  message: string;
  type: string;
  timeout?: number;
}
