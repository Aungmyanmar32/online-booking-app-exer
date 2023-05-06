export interface Slot {
  time: number;
  totoalSlot: number;
  bookedSlot: number;
  availableSlot: number;
}

export interface Availability {
  date: string;
  month: number;
  slots: Slot[];
}

export const availability: Availability[] = [
  {
    date: "07-05-2023",
    month: 4,
    slots: [
      { time: 9, totoalSlot: 100, bookedSlot: 50, availableSlot: 50 },
      { time: 10, totoalSlot: 100, bookedSlot: 0, availableSlot: 0 },
      { time: 11, totoalSlot: 100, bookedSlot: 20, availableSlot: 80 },
      { time: 12, totoalSlot: 100, bookedSlot: 100, availableSlot: 0 },
      { time: 13, totoalSlot: 100, bookedSlot: 60, availableSlot: 40 },
    ],
  },
  {
    date: "08-05-2023",
    month: 4,
    slots: [
      { time: 9, totoalSlot: 100, bookedSlot: 50, availableSlot: 50 },
      { time: 10, totoalSlot: 100, bookedSlot: 70, availableSlot: 30 },
      { time: 11, totoalSlot: 100, bookedSlot: 20, availableSlot: 80 },
      { time: 12, totoalSlot: 100, bookedSlot: 100, availableSlot: 0 },
      { time: 13, totoalSlot: 100, bookedSlot: 60, availableSlot: 40 },
    ],
  },
  {
    date: "10-05-2023",
    month: 4,
    slots: [
      { time: 9, totoalSlot: 100, bookedSlot: 50, availableSlot: 50 },
      { time: 10, totoalSlot: 100, bookedSlot: 70, availableSlot: 30 },
      { time: 11, totoalSlot: 100, bookedSlot: 20, availableSlot: 80 },
      { time: 12, totoalSlot: 100, bookedSlot: 100, availableSlot: 0 },
      { time: 13, totoalSlot: 100, bookedSlot: 60, availableSlot: 40 },
    ],
  },
  {
    date: "01-06-2023",
    month: 5,
    slots: [
      { time: 9, totoalSlot: 100, bookedSlot: 50, availableSlot: 50 },
      { time: 10, totoalSlot: 100, bookedSlot: 70, availableSlot: 30 },
      { time: 11, totoalSlot: 100, bookedSlot: 20, availableSlot: 80 },
      { time: 12, totoalSlot: 100, bookedSlot: 100, availableSlot: 0 },
      { time: 13, totoalSlot: 100, bookedSlot: 60, availableSlot: 40 },
    ],
  },
  {
    date: "11-06-2023",
    month: 5,
    slots: [
      { time: 9, totoalSlot: 100, bookedSlot: 50, availableSlot: 50 },
      { time: 10, totoalSlot: 100, bookedSlot: 70, availableSlot: 30 },
      { time: 11, totoalSlot: 100, bookedSlot: 20, availableSlot: 80 },
      { time: 12, totoalSlot: 100, bookedSlot: 100, availableSlot: 0 },
      { time: 13, totoalSlot: 100, bookedSlot: 60, availableSlot: 40 },
    ],
  },
];
