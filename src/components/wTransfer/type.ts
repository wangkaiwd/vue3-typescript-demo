export type Key = string | number;

export interface DataItem {
  key: Key;
  label: string;
  disabled: boolean;
}

export type Props = {
  [K in keyof DataItem]: string
}

export interface TransferProps {
  data: DataItem [];
  props: Props;
  modelValue: Key;
}