const availability = [
  {
    date: "11-7-2023",
    month: 6,
    slot: [
      { time: "10", reserved: 20, totalAvailability: 20, availability: 0 },
      { time: "11", reserved: 50, totalAvailability: 50, availability: 0 },
      { time: "12", reserved: 100, totalAvailability: 100, availability: 0 },
      { time: "13", reserved: 10, totalAvailability: 10, availability: 0 },
    ],
  },
  {
    date: "12-7-2023",
    month: 6,
    slot: [
      { time: "10", reserved: 60, totalAvailability: 120, availability: 60 },
      { time: "11", reserved: 30, totalAvailability: 190, availability: 160 },
      { time: "12", reserved: 80, totalAvailability: 200, availability: 120 },
      { time: "13", reserved: 40, totalAvailability: 120, availability: 80 },
    ],
  },
  {
    date: "13-7-2023",
    month: 6,
    slot: [
      { time: "10", reserved: 20, totalAvailability: 120, availability: 100 },
      { time: "11", reserved: 50, totalAvailability: 170, availability: 120 },
      { time: "12", reserved: 100, totalAvailability: 250, availability: 150 },
      { time: "13", reserved: 10, totalAvailability: 120, availability: 110 },
    ],
  },
  {
    date: "13-8-2023",
    month: 7,
    slot: [
      { time: "10", reserved: 60, totalAvailability: 120, availability: 60 },
      { time: "11", reserved: 30, totalAvailability: 190, availability: 160 },
      { time: "12", reserved: 80, totalAvailability: 200, availability: 120 },
      { time: "13", reserved: 40, totalAvailability: 120, availability: 80 },
    ],
  },
];
module.exports = availability;
