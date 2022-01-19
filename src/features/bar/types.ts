export type Timer = ReturnType<typeof setTimeout>;

export interface BarState {
  visible: boolean;
  message: string | null;
  timer: Timer | null;
}
