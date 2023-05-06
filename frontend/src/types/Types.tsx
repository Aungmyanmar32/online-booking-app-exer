export interface User {
  name: string;
  nrcNumber: string;
  email: string;
  phoneNumber: string;
}
export interface Slot {
  time: number;
  totoalSlot: number;
  bookedSlot: number;
  availableSlot: number;
}
export interface SlotData {
  date: string;
  time: number;
  slots: Slot[];
}

export interface DefaultValue {
  bookingDate: string | null;
  time: number | null;
  user: User | null;
  updateData: (value: any) => void;
  fetchData: (value: any) => void;
  slotData: SlotData[];
}
