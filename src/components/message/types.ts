export interface Options {
  message: string;
  duration?: number;
  type?: string;
  onClose?: () => void;
}

export type MessageOptions = Options | string