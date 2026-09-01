const statusColumns = ["Paid", "Hold", "Prospek", "Connected", "No Respon", "Lost Deal", "Invalid", "Talk Time"];
const fuStatusColumns = statusColumns.filter((status) => status !== "Talk Time");
const transitionRank = {
  "Belum di FU": 0,
  "Lost Deal": 1,
  "No Respon": 2,
  Connected: 3,
  Prospek: 4,
  Hold: 5,
  Paid: 6
};

const fallbackAgents = [
  {
    "name": "Rosnawati",
    "position": "Student Advisor",
    "branch": "Makassar - Cendrawasih"
  },
  {
    "name": "Dian Fadhila",
    "position": "Student Advisor",
    "branch": "Makassar - Cendrawasih"
  },
  {
    "name": "Nurhikmah Rahmadhani Syam, S.I.Kom",
    "position": "Student Advisor",
    "branch": "Makassar - Cendrawasih"
  },
  {
    "name": "Anggun Hapsari Jafar",
    "position": "Admin Officer",
    "branch": "Makassar - Cendrawasih"
  },
  {
    "name": "Husnayaini",
    "position": "Student Advisor Kids",
    "branch": "Makassar - Cendrawasih"
  },
  {
    "name": "Zakia",
    "position": "Student Advisor",
    "branch": "Makassar - Perintis"
  },
  {
    "name": "Indah Lestari Syardianti",
    "position": "Student Advisor",
    "branch": "Makassar - Perintis"
  },
  {
    "name": "Riri Reza",
    "position": "Student Advisor",
    "branch": "Makassar - Perintis"
  },
  {
    "name": "Muhlisa Jamaluddin",
    "position": "Student Advisor",
    "branch": "Makassar - Hertasning"
  },
  {
    "name": "Anggithan Pratiwi Alfian",
    "position": "Student Advisor",
    "branch": "Makassar - Hertasning"
  },
  {
    "name": "Hilman",
    "position": "Student Advisor",
    "branch": "Makassar - Hertasning"
  },
  {
    "name": "Miftahul Jannah",
    "position": "Student Advisor",
    "branch": "Makassar - Hertasning"
  },
  {
    "name": "Nahdhiah Alfiah",
    "position": "Student Advisor Kids",
    "branch": "Makassar - Hertasning"
  },
  {
    "name": "Annisa Reskiani",
    "position": "Student Advisor",
    "branch": "Makassar - Baruga"
  },
  {
    "name": "Fenny Rahmadani Hakim",
    "position": "Student Advisor",
    "branch": "Makassar - Baruga"
  },
  {
    "name": "Fitria Fajrin",
    "position": "Student Advisor",
    "branch": "Makassar - Baruga"
  },
  {
    "name": "Maghfira Nur Raodatuljannah",
    "position": "Student Advisor",
    "branch": "Makassar - Baruga"
  },
  {
    "name": "Andi Ariani Ariska",
    "position": "Student Advisor",
    "branch": "Makassar - Sudiang"
  },
  {
    "name": "Muhammad Rasul",
    "position": "Student Advisor",
    "branch": "Makassar - Sudiang"
  },
  {
    "name": "Nurul Ayu Istiqamah",
    "position": "Student Advisor",
    "branch": "Makassar - Sudiang"
  },
  {
    "name": "Kurniati A",
    "position": "Student Advisor",
    "branch": "Gowa - Sungguminasa"
  },
  {
    "name": "Andi Armayani",
    "position": "Student Advisor",
    "branch": "Gowa - Sungguminasa"
  },
  {
    "name": "Hasmiatul Janna",
    "position": "Student Advisor",
    "branch": "Gowa - Sungguminasa"
  },
  {
    "name": "Febri Wulandari",
    "position": "Student Advisor",
    "branch": "Bone - Ahmad Yani"
  },
  {
    "name": "Andi Musdalifah",
    "position": "Student Advisor",
    "branch": "Bone - Ahmad Yani"
  },
  {
    "name": "Andi Nur F",
    "position": "Student Advisor",
    "branch": "Bone - Ahmad Yani"
  },
  {
    "name": "Siska Sulistiani",
    "position": "Student Advisor",
    "branch": "Soppeng - Lalabata"
  },
  {
    "name": "Sri Wulandari",
    "position": "Student Advisor",
    "branch": "Soppeng - Lalabata"
  },
  {
    "name": "Tiara Buana Malika",
    "position": "Student Advisor",
    "branch": "Palopo - Andi Kambo"
  },
  {
    "name": "Satriyana Muis",
    "position": "Student Advisor",
    "branch": "Palopo - Andi Kambo"
  },
  {
    "name": "Nataniel Dendang",
    "position": "Student Advisor",
    "branch": "Toraja Utara - Poros Bolu"
  },
  {
    "name": "Winda Saputri,S.S.",
    "position": "Student Advisor",
    "branch": "Toraja Utara - Poros Bolu"
  },
  {
    "name": "Lyvia Bella Ayu",
    "position": "Student Advisor",
    "branch": "Toraja Utara - Poros Bolu"
  },
  {
    "name": "Pingkan Bamba Lamba",
    "position": "Student Advisor Kids",
    "branch": "Toraja Utara - Poros Bolu"
  },
  {
    "name": "Andi Septi Dwi Alifah Mustamin",
    "position": "Student Advisor",
    "branch": "Pangkep - Sultan Hasanuddin"
  },
  {
    "name": "Ilma Nur Fahmi Sali",
    "position": "Student Advisor",
    "branch": "Pangkep - Sultan Hasanuddin"
  },
  {
    "name": "Mutmainnah Nur Annisa Wahyuddin",
    "position": "Student Advisor",
    "branch": "Wajo - Jend. Sudirman"
  },
  {
    "name": "Nurfatmawati Sam",
    "position": "Student Advisor",
    "branch": "Wajo - Jend. Sudirman"
  },
  {
    "name": "Riswan Deris",
    "position": "Student Advisor Kids",
    "branch": "Wajo - Jend. Sudirman"
  },
  {
    "name": "Andi Annisa Juliana Saputri",
    "position": "Student Advisor",
    "branch": "Pinrang - Jend. Sudirman"
  },
  {
    "name": "Ade Safitri Biri",
    "position": "Student Advisor",
    "branch": "Pinrang - Jend. Sudirman"
  },
  {
    "name": "Wilda Adelia",
    "position": "Student Advisor",
    "branch": "Pinrang - Jend. Sudirman"
  },
  {
    "name": "Ivan",
    "position": "Student Advisor",
    "branch": "Tana Toraja - Makale"
  },
  {
    "name": "Valentine Yoel",
    "position": "Student Advisor",
    "branch": "Tana Toraja - Makale"
  },
  {
    "name": "Riska Anugra Putri",
    "position": "Student Advisor",
    "branch": "Parepare - Mattirotasi"
  },
  {
    "name": "Aminah",
    "position": "Student Advisor",
    "branch": "Parepare - Mattirotasi"
  },
  {
    "name": "Erwin",
    "position": "Student Advisor",
    "branch": "Bulukumba - Jend. Sudirman"
  },
  {
    "name": "A. Mulkaida Istiqamah",
    "position": "Student Advisor",
    "branch": "Bulukumba - Jend. Sudirman"
  },
  {
    "name": "Annisa Nurul Fahira",
    "position": "Student Advisor",
    "branch": "Bulukumba - Jend. Sudirman"
  },
  {
    "name": "Anugrah Nurdin",
    "position": "Student Advisor",
    "branch": "Sidrap - Jenderal Sudirman"
  },
  {
    "name": "Riska Dwi Apriyani",
    "position": "Student Advisor",
    "branch": "Sidrap - Jenderal Sudirman"
  },
  {
    "name": "Prilly Diani Prastowo",
    "position": "Student Advisor",
    "branch": "Manado - Wenang Selatan"
  },
  {
    "name": "Nurul Dwi Lestari",
    "position": "Student Advisor",
    "branch": "Manado - Wenang Selatan"
  },
  {
    "name": "Stefharen Elshaday",
    "position": "Student Advisor Kids",
    "branch": "Manado - Wenang Selatan"
  },
  {
    "name": "Natalia Frida Kawulur",
    "position": "Student Advisor",
    "branch": "Manado - Sario"
  },
  {
    "name": "Eukharistio Euangelion Yululano",
    "position": "Student Advisor",
    "branch": "Manado - Sario"
  },
  {
    "name": "Willy Chandra Theo",
    "position": "Student Advisor Kids",
    "branch": "Manado - Sario"
  },
  {
    "name": "Jeasika Amelia Tamboto",
    "position": "Student Advisor",
    "branch": "Bitung - Girian"
  },
  {
    "name": "Mirelle Hengkengbala",
    "position": "Student Advisor",
    "branch": "Bitung - Girian"
  },
  {
    "name": "Wineke Oktaviana Manahera",
    "position": "Student Advisor",
    "branch": "Tomohon - Matani"
  },
  {
    "name": "Alfanny Dwins Feronica Sitompul",
    "position": "Student Advisor",
    "branch": "Tomohon - Matani"
  },
  {
    "name": "Anita Aprilia Bela Rau",
    "position": "Student Advisor Kids",
    "branch": "Tomohon - Matani"
  },
  {
    "name": "Novita R. Baruadi",
    "position": "Student Advisor",
    "branch": "Gorontalo - Nani Wartabone"
  },
  {
    "name": "Nopriyanto Torana",
    "position": "Student Advisor",
    "branch": "Gorontalo - Nani Wartabone"
  },
  {
    "name": "Silvana Lasundre",
    "position": "Admin Officer",
    "branch": "Gorontalo - Nani Wartabone"
  },
  {
    "name": "Annisa Rahmawati Tegela",
    "position": "Student Advisor Kids",
    "branch": "Gorontalo - Nani Wartabone"
  },
  {
    "name": "Sri Devy Ramadhani",
    "position": "STAR",
    "branch": "Bone - Ahmad Yani"
  },
  {
    "name": "Roswana",
    "position": "STAR",
    "branch": "Palopo - Andi Kambo"
  },
  {
    "name": "Miftahur Risqi",
    "position": "STAR",
    "branch": "Pinrang - Jend. Sudirman"
  },
  {
    "name": "Eriska Dinda Al-Fizah",
    "position": "STAR",
    "branch": "Manado - Sario"
  },
  {
    "name": "Elbra Naomi Leoni Moningka",
    "position": "STAR",
    "branch": "Manado - Wenang Selatan"
  },
  {
    "name": "Asnita Putri",
    "position": "STAR",
    "branch": "Soppeng - Lalabata"
  },
  {
    "name": "Mutia Aristya",
    "position": "STAR",
    "branch": "Makassar - Cendrawasih"
  },
  {
    "name": "Wd. Rischa Widyasari F. Suri",
    "position": "STAR",
    "branch": "Makassar - Cendrawasih"
  },
  {
    "name": "Thaisha Chintia Febyola Ering",
    "position": "STAR",
    "branch": "Tomohon - Matani"
  },
  {
    "name": "Muh Sandy",
    "position": "STAR",
    "branch": "Pangkep - Sultan Hasanuddin"
  },
  {
    "name": "Agung Adi Prayuda",
    "position": "STAR",
    "branch": "Palopo - Andi Kambo"
  },
  {
    "name": "Miftahul Khair",
    "position": "STAR",
    "branch": "Pangkep - Sultan Hasanuddin"
  },
  {
    "name": "Musfira Munir",
    "position": "STAR",
    "branch": "Pangkep - Sultan Hasanuddin"
  },
  {
    "name": "Moh. Fahriwan Mointi",
    "position": "STAR",
    "branch": "Makassar - Perintis"
  },
  {
    "name": "Nurul Anugrahyarti",
    "position": "STAR Kids",
    "branch": "Makassar - Sudiang"
  },
  {
    "name": "Fina Maulina",
    "position": "STAR",
    "branch": "Gowa - Sungguminasa"
  },
  {
    "name": "Ika Pratiwi As'Ad",
    "position": "STAR",
    "branch": "Wajo - Jend. Sudirman"
  },
  {
    "name": "Titania Nurul Latifah Hapsa",
    "position": "STAR",
    "branch": "Makassar - Perintis"
  },
  {
    "name": "Mutia Nur Alfiah Dunggio",
    "position": "STAR",
    "branch": "Bitung - Girian"
  },
  {
    "name": "Nurhamdani",
    "position": "STAR",
    "branch": "Pinrang - Jend. Sudirman"
  },
  {
    "name": "Risaldi Jufri",
    "position": "STAR",
    "branch": "Wajo - Jend. Sudirman"
  },
  {
    "name": "Stephen Richard Jeconiah Tjandinegara",
    "position": "STAR",
    "branch": "Parepare - Mattirotasi"
  },
  {
    "name": "Hapsa Nurika Sukardi",
    "position": "STAR",
    "branch": "Parepare - Mattirotasi"
  },
  {
    "name": "Wiranti Rezki Uttami",
    "position": "STAR",
    "branch": "Gowa - Sungguminasa"
  }
];

const sampleRows = [
  { date: "2026-08-04", agent: "Anggithan Pratiwi Alfian", position: "Student Advisor", status: "No Respon", count: 26 },
  { date: "2026-08-04", agent: "Hilman", position: "Student Advisor", status: "Prospek", count: 2 },
  { date: "2026-08-04", agent: "Hilman", position: "Student Advisor", status: "No Respon", count: 3 },
  { date: "2026-08-04", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Paid", count: 1 },
  { date: "2026-08-04", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Prospek", count: 2 },
  { date: "2026-08-04", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Connected", count: 4 },
  { date: "2026-08-04", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "No Respon", count: 51 },
  { date: "2026-08-04", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Invalid", count: 1 },
  { date: "2026-08-04", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Talk Time", count: 1 },
  { date: "2026-08-05", agent: "Anggithan Pratiwi Alfian", position: "Student Advisor", status: "Paid", count: 1 },
  { date: "2026-08-05", agent: "Anggithan Pratiwi Alfian", position: "Student Advisor", status: "Connected", count: 7 },
  { date: "2026-08-05", agent: "Anggithan Pratiwi Alfian", position: "Student Advisor", status: "No Respon", count: 67 },
  { date: "2026-08-05", agent: "Hilman", position: "Student Advisor", status: "Hold", count: 1 },
  { date: "2026-08-05", agent: "Hilman", position: "Student Advisor", status: "No Respon", count: 22 },
  { date: "2026-08-06", agent: "Miftahul Jannah", position: "Student Advisor", status: "Connected", count: 5 },
  { date: "2026-08-06", agent: "Miftahul Jannah", position: "Student Advisor", status: "No Respon", count: 46 },
  { date: "2026-08-06", agent: "Miftahul Jannah", position: "Student Advisor", status: "Lost Deal", count: 5 },
  { date: "2026-08-06", agent: "Nahdhiah Alfiah", position: "Student Advisor Kids", status: "Paid", count: 3 },
  { date: "2026-08-06", agent: "Nahdhiah Alfiah", position: "Student Advisor Kids", status: "Hold", count: 1 },
  { date: "2026-08-06", agent: "Nahdhiah Alfiah", position: "Student Advisor Kids", status: "Prospek", count: 2 },
  { date: "2026-08-06", agent: "Nahdhiah Alfiah", position: "Student Advisor Kids", status: "Connected", count: 5 },
  { date: "2026-08-06", agent: "Nahdhiah Alfiah", position: "Student Advisor Kids", status: "No Respon", count: 70 },
  { date: "2026-08-06", agent: "Nahdhiah Alfiah", position: "Student Advisor Kids", status: "Invalid", count: 3 },
  { date: "2026-08-07", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Paid", count: 4 },
  { date: "2026-08-07", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Hold", count: 2 },
  { date: "2026-08-07", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Prospek", count: 11 },
  { date: "2026-08-07", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Connected", count: 4 },
  { date: "2026-08-07", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "No Respon", count: 54 },
  { date: "2026-08-07", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Lost Deal", count: 2 },
  { date: "2026-08-07", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Invalid", count: 9 },
  { date: "2026-07-08", agent: "Anggithan Pratiwi Alfian", position: "Student Advisor", status: "Paid", count: 24 },
  { date: "2026-07-08", agent: "Anggithan Pratiwi Alfian", position: "Student Advisor", status: "Hold", count: 11 },
  { date: "2026-07-08", agent: "Anggithan Pratiwi Alfian", position: "Student Advisor", status: "Prospek", count: 7 },
  { date: "2026-07-08", agent: "Anggithan Pratiwi Alfian", position: "Student Advisor", status: "Connected", count: 18 },
  { date: "2026-07-08", agent: "Anggithan Pratiwi Alfian", position: "Student Advisor", status: "No Respon", count: 250 },
  { date: "2026-07-08", agent: "Anggithan Pratiwi Alfian", position: "Student Advisor", status: "Lost Deal", count: 4 },
  { date: "2026-07-08", agent: "Anggithan Pratiwi Alfian", position: "Student Advisor", status: "Invalid", count: 1 },
  { date: "2026-07-08", agent: "Anggithan Pratiwi Alfian", position: "Student Advisor", status: "Null", count: 49 },
  { date: "2026-07-08", agent: "Anggithan Pratiwi Alfian", position: "Student Advisor", status: "Talk Time", count: 13 },
  { date: "2026-07-11", agent: "Hilman", position: "Student Advisor", status: "Paid", count: 6 },
  { date: "2026-07-11", agent: "Hilman", position: "Student Advisor", status: "Hold", count: 2 },
  { date: "2026-07-11", agent: "Hilman", position: "Student Advisor", status: "Prospek", count: 7 },
  { date: "2026-07-11", agent: "Hilman", position: "Student Advisor", status: "Connected", count: 25 },
  { date: "2026-07-11", agent: "Hilman", position: "Student Advisor", status: "No Respon", count: 257 },
  { date: "2026-07-11", agent: "Hilman", position: "Student Advisor", status: "Lost Deal", count: 16 },
  { date: "2026-07-11", agent: "Hilman", position: "Student Advisor", status: "Invalid", count: 1 },
  { date: "2026-07-11", agent: "Hilman", position: "Student Advisor", status: "Null", count: 18 },
  { date: "2026-07-11", agent: "Hilman", position: "Student Advisor", status: "Talk Time", count: 22 },
  { date: "2026-07-14", agent: "Miftahul Jannah", position: "Student Advisor", status: "Paid", count: 5 },
  { date: "2026-07-14", agent: "Miftahul Jannah", position: "Student Advisor", status: "Hold", count: 3 },
  { date: "2026-07-14", agent: "Miftahul Jannah", position: "Student Advisor", status: "Prospek", count: 9 },
  { date: "2026-07-14", agent: "Miftahul Jannah", position: "Student Advisor", status: "Connected", count: 47 },
  { date: "2026-07-14", agent: "Miftahul Jannah", position: "Student Advisor", status: "No Respon", count: 357 },
  { date: "2026-07-14", agent: "Miftahul Jannah", position: "Student Advisor", status: "Lost Deal", count: 7 },
  { date: "2026-07-14", agent: "Miftahul Jannah", position: "Student Advisor", status: "Invalid", count: 19 },
  { date: "2026-07-14", agent: "Miftahul Jannah", position: "Student Advisor", status: "Null", count: 5 },
  { date: "2026-07-14", agent: "Miftahul Jannah", position: "Student Advisor", status: "Talk Time", count: 15 },
  { date: "2026-07-18", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Paid", count: 13 },
  { date: "2026-07-18", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Hold", count: 3 },
  { date: "2026-07-18", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Prospek", count: 46 },
  { date: "2026-07-18", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Connected", count: 30 },
  { date: "2026-07-18", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "No Respon", count: 207 },
  { date: "2026-07-18", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Lost Deal", count: 17 },
  { date: "2026-07-18", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Invalid", count: 9 },
  { date: "2026-07-18", agent: "Muhlisa Jamaluddin", position: "Student Advisor", status: "Talk Time", count: 12 }
];

const state = {
  rows: [
    ...(window.centralFuRows || []),
    ...(window.sulselFuRows || [])
  ].length
    ? [...(window.centralFuRows || []), ...(window.sulselFuRows || [])].filter((row) => isIsoDate(row.date))
    : [...(window.embeddedFuRows || sampleRows), ...(window.sulselFuRows || [])].filter((row) => isIsoDate(row.date)),
  leadDetails: [
    ...(window.centralLeadDetails || []),
    ...(window.sulselLeadDetails || [])
  ].length
    ? [...(window.centralLeadDetails || []), ...(window.sulselLeadDetails || [])]
    : [...(window.embeddedLeadDetails || []), ...(window.sulselLeadDetails || [])],
  mainLeadRecords: enrichMainLeadRecords(
    [
      ...(window.centralMainLeadRecords || window.embeddedMainLeadRecords || window.embeddedLeadDetails || []),
      ...(window.sulselMainLeadRecords || [])
    ],
    [
      ...(window.centralLeadDetails || window.embeddedLeadDetails || []),
      ...(window.sulselLeadDetails || [])
    ]
  ),
  transitions: [
    ...(window.centralTransitions || []),
    ...(window.embeddedTransitions || [])
  ],
  cbcSchools: window.embeddedCbcSchools || [],
  agents: fallbackAgents,
  activePeriod: "daily",
  selectedRegional: "all",
  selectedBranch: "all",
  selectedDate: latestDateFromRows([
    ...(window.centralFuRows || window.embeddedFuRows || sampleRows),
    ...(window.sulselFuRows || [])
  ].filter((row) => isIsoDate(row.date))),
  selectedWeek: "2026-W32",
  selectedMonth: "2026-08",
  selectedAgentDetail: "all",
  selectedLastStatus: "all",
  selectedCbcSchool: "",
  selectedCbcWeek: "",
  lockedBranch: ""
};

const recapFilterState = {
  branch: "all"
};

const defaultSheetUrl = "https://docs.google.com/spreadsheets/d/1m-UZxq6jTF5bOCEVlcoqy1pRYL02or5MqEPp-xzzi7k/edit?gid=0#gid=0";
const sulselBranchSources = [
  { name: "Bone - Ahmad Yani", gid: "197168761" },
  { name: "Bulukumba - Jend. Sudirman", gid: "44730269" },
  { name: "Palopo - Andi Kambo", gid: "134935314" },
  { name: "Pangkep - Sultan Hasanuddin", gid: "547170870" },
  { name: "Parepare - Mattirotasi", gid: "634092400" },
  { name: "Pinrang - Jend. Sudirman", gid: "2010932017" },
  { name: "Sidrap - Jenderal Sudirman", gid: "1982935978" },
  { name: "Soppeng - Lalabata", gid: "2080861767" },
  { name: "Tana Toraja - Makale", gid: "2040436994" },
  { name: "Toraja Utara - Poros Bolu", gid: "1992483139" },
  { name: "Wajo - Jend. Sudirman", gid: "1946854586" }
];
const autoSyncIntervalMs = 60_000;
let autoSyncTimer = null;
let isSyncing = false;
const dashboardCredentials = window.dashboardCredentials || {};
const credentialSalt = String(dashboardCredentials.salt || "");
const credentialIterations = Number(dashboardCredentials.iterations) || 120_000;
const adminPasswordHash = String(dashboardCredentials.adminPasswordHash || "").toLowerCase();
const branchPasswordHashes = dashboardCredentials.branchPasswordHashes || {};
const dashboardApiBase = String(window.dashboardApiBase || "").trim().replace(/\/+$/, "");
const dashboardSessionKey = "dashboardSessionToken";
const localApiHostnames = new Set(["localhost", "127.0.0.1", "::1"]);
const dashboardApiTimeoutMs = 3_000;

function dashboardApiUrl(pathname) {
  return `${dashboardApiBase}${pathname}`;
}

function shouldUseDashboardApi() {
  return Boolean(dashboardApiBase)
    || (window.location.protocol === "http:" && localApiHostnames.has(window.location.hostname));
}

function dashboardApiHeaders() {
  const token = sessionStorage.getItem(dashboardSessionKey);
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function requestDashboardApi(pathname, options = {}, timeoutMs = dashboardApiTimeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(dashboardApiUrl(pathname), {
      ...options,
      headers: {
        Accept: "application/json",
        ...dashboardApiHeaders(),
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        ...(options.headers || {})
      },
      signal: controller.signal
    });
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

async function readJsonResponse(response) {
  try {
    return await response.json();
  } catch {
    return {};
  }
}

function isDashboardApiUnavailable(response) {
  return !response || response.status === 404 || response.status === 405;
}

async function loginWithDashboardApi(password) {
  if (!shouldUseDashboardApi()) return { available: false };

  const response = await requestDashboardApi("/api/login", {
    method: "POST",
    body: JSON.stringify({ password })
  });
  if (isDashboardApiUnavailable(response)) return { available: false };

  const payload = await readJsonResponse(response);
  if (response.ok && payload.ok && payload.token) {
    return {
      available: true,
      ok: true,
      token: String(payload.token),
      accessMode: payload.accessMode,
      branch: String(payload.branch || "")
    };
  }
  return {
    available: true,
    ok: false,
    message: String(payload.message || "Login gagal. Silakan coba lagi.")
  };
}

async function readDashboardSession() {
  if (!shouldUseDashboardApi()) return { available: false, session: null };

  const response = await requestDashboardApi("/api/session");
  if (isDashboardApiUnavailable(response)) return { available: false, session: null };

  const payload = await readJsonResponse(response);
  if (response.ok && payload.ok && ["admin", "branch"].includes(payload.accessMode)) {
    return {
      available: true,
      session: {
        accessMode: payload.accessMode,
        branch: String(payload.branch || "")
      }
    };
  }
  return { available: true, session: null };
}

function clearSavedLogin() {
  sessionStorage.removeItem(dashboardSessionKey);
  sessionStorage.removeItem("dashboardAccessMode");
  sessionStorage.removeItem("dashboardBranchAccess");
}
const allowedRegionals = ["Regional - Makassar Raya", "Regional - Sulawesi Selatan"];
const branchRegionalMap = {
  "Makassar - Cendrawasih": "Regional - Makassar Raya",
  "Makassar - Perintis": "Regional - Makassar Raya",
  "Makassar - Hertasning": "Regional - Makassar Raya",
  "Makassar - Baruga": "Regional - Makassar Raya",
  "Makassar - Sudiang": "Regional - Makassar Raya",
  "Gowa - Sungguminasa": "Regional - Makassar Raya",
  "Bone - Ahmad Yani": "Regional - Sulawesi Selatan",
  "Bulukumba - Jend. Sudirman": "Regional - Sulawesi Selatan",
  "Palopo - Andi Kambo": "Regional - Sulawesi Selatan",
  "Pangkep - Sultan Hasanuddin": "Regional - Sulawesi Selatan",
  "Parepare - Mattirotasi": "Regional - Sulawesi Selatan",
  "Pinrang - Jend. Sudirman": "Regional - Sulawesi Selatan",
  "Sidrap - Jenderal Sudirman": "Regional - Sulawesi Selatan",
  "Soppeng - Lalabata": "Regional - Sulawesi Selatan",
  "Tana Toraja - Makale": "Regional - Sulawesi Selatan",
  "Toraja Utara - Poros Bolu": "Regional - Sulawesi Selatan",
  "Wajo - Jend. Sudirman": "Regional - Sulawesi Selatan"
};

const el = {
  loginScreen: document.querySelector("#loginScreen"),
  loginForm: document.querySelector("#loginForm"),
  branchPassword: document.querySelector("#branchPassword"),
  loginError: document.querySelector("#loginError"),
  dailyPicker: document.querySelector("#dailyPicker"),
  weeklyPicker: document.querySelector("#weeklyPicker"),
  monthlyPicker: document.querySelector("#monthlyPicker"),
  dailyHead: document.querySelector("#dailyHead"),
  weeklyHead: document.querySelector("#weeklyHead"),
  monthlyHead: document.querySelector("#monthlyHead"),
  cbcLeadHead: document.querySelector("#cbcLeadHead"),
  nrAnalysisPanel: document.querySelector("#nrAnalysisPanel"),
  dailyBody: document.querySelector("#dailyBody"),
  weeklyBody: document.querySelector("#weeklyBody"),
  monthlyBody: document.querySelector("#monthlyBody"),
  cbcLeadBody: document.querySelector("#cbcLeadBody"),
  totalFu: document.querySelector("#totalFu"),
  totalPaid: document.querySelector("#totalPaid"),
  totalHold: document.querySelector("#totalHold"),
  totalProspect: document.querySelector("#totalProspect"),
  totalConnected: document.querySelector("#totalConnected"),
  totalNoResponse: document.querySelector("#totalNoResponse"),
  totalLostDeal: document.querySelector("#totalLostDeal"),
  totalTalkTime: document.querySelector("#totalTalkTime"),
  sheetUrl: document.querySelector("#sheetUrl"),
  syncButton: document.querySelector("#syncButton"),
  syncStatus: document.querySelector("#syncStatus"),
  regionalFilter: document.querySelector("#regionalFilter"),
  branchFilter: document.querySelector("#branchFilter"),
  alertList: document.querySelector("#alertList"),
  transitionTitle: document.querySelector("#transitionTitle"),
  transitionList: document.querySelector("#transitionList"),
  topAgents: document.querySelector("#topAgents"),
  branchSummaryTitle: document.querySelector("#branchSummaryTitle"),
  branchSummary: document.querySelector("#branchSummary"),
  agentBranchRecapHead: document.querySelector("#agentBranchRecapHead"),
  agentBranchRecapBody: document.querySelector("#agentBranchRecapBody"),
  agentBranchRecapPeriod: document.querySelector("#agentBranchRecapPeriod"),
  branchRecapFilter: document.querySelector("#branchRecapFilter"),
  regionalInsight: document.querySelector(".regional-insight"),
  regionalInsightTitle: document.querySelector("#regionalInsightTitle"),
  regionalInsightPeriod: document.querySelector("#regionalInsightPeriod"),
  regionalInsightBody: document.querySelector("#regionalInsightBody"),
  paidAgentRanking: document.querySelector("#paidAgentRanking"),
  connectedAgentRanking: document.querySelector("#connectedAgentRanking"),
  noResponseAgentRanking: document.querySelector("#noResponseAgentRanking"),
  talkAgentRanking: document.querySelector("#talkAgentRanking"),
  agentRecapHead: document.querySelector("#agentRecapHead"),
  agentRecapBody: document.querySelector("#agentRecapBody"),
  agentRecapPanel: document.querySelector("#agentRecapPanel"),
  agentDetailFilter: document.querySelector("#agentDetailFilter"),
  agentStatusFilter: document.querySelector("#agentStatusFilter"),
  agentDetailPanel: document.querySelector("#agentDetailPanel"),
  agentDetailTitle: document.querySelector("#agentDetailTitle"),
  agentDetailCount: document.querySelector("#agentDetailCount"),
  agentDetailHead: document.querySelector("#agentDetailHead"),
  agentDetailBody: document.querySelector("#agentDetailBody"),
  periodTabs: document.querySelectorAll(".period-tab"),
  periodFilters: document.querySelectorAll(".period-filter"),
  periodBoards: document.querySelectorAll(".period-board")
};

function parseDate(value) {
  const parsed = new Date(`${value}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? new Date(value) : parsed;
}

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function formatDay(value) {
  return new Intl.DateTimeFormat("id-ID", { weekday: "long", day: "2-digit", month: "long", year: "numeric" }).format(parseDate(value));
}

function monthName(value) {
  return new Intl.DateTimeFormat("id-ID", { month: "long", year: "numeric" }).format(parseDate(`${value}-01`));
}

function getWeekPeriodMonth(weekStart) {
  const weekEnd = new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + 6);
  if (weekStart.getMonth() === weekEnd.getMonth()) {
    return new Date(weekStart.getFullYear(), weekStart.getMonth(), 1);
  }

  const startMonthDays = new Date(weekStart.getFullYear(), weekStart.getMonth() + 1, 0).getDate()
    - weekStart.getDate() + 1;
  const endMonthDays = weekEnd.getDate();
  return startMonthDays > endMonthDays
    ? new Date(weekStart.getFullYear(), weekStart.getMonth(), 1)
    : new Date(weekEnd.getFullYear(), weekEnd.getMonth(), 1);
}

function getWeekKey(value) {
  const date = parseDate(value);
  const mondayOffset = (date.getDay() + 6) % 7;
  const weekStart = new Date(date.getFullYear(), date.getMonth(), date.getDate() - mondayOffset);
  const periodMonth = getWeekPeriodMonth(weekStart);
  const monthStart = new Date(periodMonth.getFullYear(), periodMonth.getMonth(), 1);
  const firstCandidate = new Date(
    monthStart.getFullYear(),
    monthStart.getMonth(),
    monthStart.getDate() - ((monthStart.getDay() + 6) % 7)
  );
  const firstWeekStart = getWeekPeriodMonth(firstCandidate).getTime() === periodMonth.getTime()
    ? firstCandidate
    : new Date(firstCandidate.getFullYear(), firstCandidate.getMonth(), firstCandidate.getDate() + 7);
  const weekNumber = Math.round((weekStart - firstWeekStart) / (7 * 86400000)) + 1;
  return `${periodMonth.getFullYear()}-${String(periodMonth.getMonth() + 1).padStart(2, "0")}-W${String(weekNumber).padStart(2, "0")}`;
}

function getWeekLabel(weekKey) {
  const match = String(weekKey).match(/^(\d{4})-(\d{2})-W0?(\d+)$/);
  if (!match) return weekKey;
  const month = new Intl.DateTimeFormat("id-ID", { month: "long" }).format(
    new Date(Number(match[1]), Number(match[2]) - 1, 1)
  );
  return `W${Number(match[3])} ${month}`;
}

function getMonthKey(value) {
  return value.slice(0, 7);
}

function uniqueSorted(values) {
  return [...new Set(values)].sort();
}

function latestDateFromRows(rows) {
  const today = isoDate(new Date());
  return uniqueSorted(rows.map((row) => row.date).filter((value) => isIsoDate(value) && value <= today)).at(-1) || today;
}

function isIsoDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return false;
  const [year, month, day] = value.split("-").map(Number);
  if (year < 2020 || year > new Date().getFullYear() || month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return parsed.getUTCFullYear() === year
    && parsed.getUTCMonth() === month - 1
    && parsed.getUTCDate() === day
    && parsed <= new Date();
}

function isVacantName(name) {
  return !name || name.toLowerCase().includes("vacant");
}

function mergeAgentMaster(validationAgents = []) {
  const byName = new Map();
  [...fallbackAgents, ...validationAgents]
    .filter((agent) => agent && !isVacantName(agent.name))
    .forEach((agent) => {
      const existing = byName.get(agent.name);
      const validBranch = agent.branch && Object.prototype.hasOwnProperty.call(branchRegionalMap, agent.branch)
        ? agent.branch
        : existing?.branch;
      byName.set(agent.name, {
        ...(existing || {}),
        ...agent,
        branch: validBranch || "Tanpa Cabang",
        position: agent.position || existing?.position || "Student Advisor",
        regional: agent.regional || existing?.regional || branchRegionalMap[validBranch] || "Tanpa Regional"
      });
    });
  return [...byName.values()];
}

function regionalForAgent(agent) {
  return agent.regional || branchRegionalMap[agent.branch] || "Tanpa Regional";
}

function getAgentMaster(rows = []) {
  const agentDirectory = mergeAgentMaster(state.agents);
  const branchByAgent = new Map(agentDirectory.map((agent) => [agent.name, agent.branch || "Tanpa Cabang"]));
  const regionalByAgent = new Map(agentDirectory.map((agent) => [agent.name, regionalForAgent(agent)]));
  const fromRows = rows.map((row) => ({
    name: row.agent,
    position: row.position || "Student Advisor",
    branch: branchByAgent.get(row.agent) || row.branch || "Tanpa Cabang",
    regional: regionalByAgent.get(row.agent) || row.regional || branchRegionalMap[row.branch] || "Tanpa Regional"
  }));
  const byName = new Map([...agentDirectory, ...fromRows]
    .filter((agent) => !isVacantName(agent.name))
    .map((agent) => [agent.name, agent]));

  return [...byName.values()]
    .filter((agent) => state.selectedRegional === "all" || regionalForAgent(agent) === state.selectedRegional)
    .filter((agent) => state.selectedBranch === "all" || agent.branch === state.selectedBranch)
    .sort((a, b) => a.name.localeCompare(b.name));
}

function sumRows(rows, status) {
  return rows
    .filter((row) => row.status === status)
    .reduce((total, row) => total + Number(row.count || 0), 0);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatSchoolTitle(value) {
  return String(value || "-")
    .toLowerCase()
    .replace(/\b([a-z])/g, (letter) => letter.toUpperCase());
}

function formatShortDate(value) {
  if (!value) return "-";
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short", year: "numeric" }).format(parseDate(value));
}

function daysSince(value) {
  if (!value) return "-";
  const last = parseDate(value);
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const lastStart = new Date(last.getFullYear(), last.getMonth(), last.getDate());
  const diff = Math.max(0, Math.floor((todayStart - lastStart) / 86400000));
  return `${diff} hari`;
}

function statusTone(status) {
  if (["Paid", "Connected", "Prospek"].includes(status)) return "good";
  if (["Hold"].includes(status)) return "warn";
  if (["No Respon", "Lost Deal", "Invalid"].includes(status)) return "risk";
  return "";
}

function utilizeTone(percent) {
  if (percent >= 70) return "high";
  if (percent >= 40) return "medium";
  return "low";
}

function rowsForDaily() {
  return state.rows.filter((row) => row.date === state.selectedDate);
}

function rowsForWeekly() {
  return state.rows.filter((row) => getWeekKey(row.date) === state.selectedWeek);
}

function rowsForMonthly() {
  return state.rows.filter((row) => getMonthKey(row.date) === state.selectedMonth);
}

function applyDashboardFilters(rows) {
  return rows.filter((row) => {
    const rowRegional = row.regional || branchRegionalMap[row.branch] || "Tanpa Regional";
    const matchesRegional = state.selectedRegional === "all" || rowRegional === state.selectedRegional;
    const matchesBranch = state.selectedBranch === "all" || row.branch === state.selectedBranch;
    return matchesRegional && matchesBranch;
  });
}

function applyLeadDetailFilters(details) {
  return details.filter((detail) => {
    const rowRegional = detail.regional || branchRegionalMap[detail.branch] || "Tanpa Regional";
    const matchesRegional = state.selectedRegional === "all" || rowRegional === state.selectedRegional;
    const matchesBranch = state.selectedBranch === "all" || detail.branch === state.selectedBranch;
    const matchesAgent = state.selectedAgentDetail === "all" || detail.agent === state.selectedAgentDetail;
    const matchesStatus = state.selectedLastStatus === "all" || detail.lastStatus === state.selectedLastStatus;
    return matchesRegional && matchesBranch && matchesAgent && matchesStatus;
  });
}

function applyTransitionFilters(transitions) {
  return transitions.filter((transition) => {
    const rowRegional = transition.regional || branchRegionalMap[transition.branch] || "Tanpa Regional";
    const matchesRegional = state.selectedRegional === "all" || rowRegional === state.selectedRegional;
    const matchesBranch = state.selectedBranch === "all" || transition.branch === state.selectedBranch;
    return matchesRegional && matchesBranch;
  });
}

function renderHead(target) {
  target.innerHTML = `
    <tr>
      <th>Nama Agen</th>
      <th>Posisi</th>
      ${statusColumns.map((status) => `<th>${status}</th>`).join("")}
      <th>Total FU</th>
    </tr>
  `;
}

function renderBody(target, rows) {
  const filteredRows = applyDashboardFilters(rows);
  const master = getAgentMaster(filteredRows)
    .map((agent) => {
      const agentRows = filteredRows.filter((row) => row.agent === agent.name);
    const total = fuStatusColumns.reduce((sum, status) => sum + sumRows(agentRows, status), 0);
      return { ...agent, total };
    })
    .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name));

  target.innerHTML = master.map((agent) => {
    const agentRows = filteredRows.filter((row) => row.agent === agent.name);
    const statusCells = statusColumns.map((status) => {
      const value = sumRows(agentRows, status);
      return `<td class="${value ? "" : "empty-cell"}">${value || "-"}</td>`;
    }).join("");
    return `
      <tr class="${agent.total ? "" : "no-data-row"}">
        <td>${agent.name}</td>
        <td>${agent.position}</td>
        ${statusCells}
        <td class="total-cell ${agent.total ? "" : "empty-cell"}">${agent.total || "-"}</td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="${statusColumns.length + 3}" class="empty-table">Tidak ada ejen pada filter ini.</td></tr>`;
}

function renderBranchOptions() {
  if (state.lockedBranch) {
    state.selectedBranch = state.lockedBranch;
    el.branchFilter.innerHTML = `<option value="${state.lockedBranch}">${state.lockedBranch}</option>`;
    el.branchFilter.value = state.lockedBranch;
    el.branchFilter.disabled = true;
    return;
  }

  const branchDisabled = state.selectedRegional === "all";
  if (branchDisabled) state.selectedBranch = "all";
  const branchSources = [
    ...Object.keys(branchRegionalMap),
    ...state.agents.map((agent) => agent.branch),
    ...state.rows.map((row) => row.branch),
    ...state.mainLeadRecords.map((lead) => lead.branch),
    ...state.cbcSchools.map((school) => school.branch)
  ];
  const branches = uniqueSorted(branchSources
    .filter((branch) => branch && branch !== "#N/A" && branch !== "Tanpa Cabang")
    .filter((branch) => {
      const regional = branchRegionalMap[branch] || "Tanpa Regional";
      return state.selectedRegional === "all" || regional === state.selectedRegional;
    }));

  if (state.selectedBranch !== "all" && !branches.includes(state.selectedBranch)) {
    state.selectedBranch = "all";
  }

  el.branchFilter.innerHTML = `<option value="all">Semua Cabang</option>${branches
    .map((branch) => `<option value="${branch}">${branch}</option>`)
    .join("")}`;
  el.branchFilter.value = state.selectedBranch;
  el.branchFilter.disabled = branchDisabled;
}

function renderRegionalOptions() {
  const regionals = allowedRegionals;
  if (state.lockedBranch) state.selectedRegional = branchRegionalMap[state.lockedBranch] || "all";

  if (state.selectedRegional !== "all" && !regionals.includes(state.selectedRegional)) {
    state.selectedRegional = "all";
    state.selectedBranch = "all";
  }

  el.regionalFilter.innerHTML = `<option value="all">Semua Regional</option>${regionals
    .map((regional) => `<option value="${regional}">${regional.replace("Regional - ", "")}</option>`)
    .join("")}`;
  el.regionalFilter.value = state.selectedRegional;
  el.regionalFilter.disabled = Boolean(state.lockedBranch);
}

function unlockBranch(branch) {
  state.lockedBranch = branch;
  state.selectedBranch = branch;
  state.selectedRegional = branchRegionalMap[branch] || "all";
  sessionStorage.setItem("dashboardAccessMode", "branch");
  sessionStorage.setItem("dashboardBranchAccess", branch);
  document.body.classList.remove("auth-locked");
  el.loginError.textContent = "";
  render();
  loadSheet();
  startAutoSync();
}

function unlockAdmin() {
  state.lockedBranch = "";
  state.selectedBranch = "all";
  state.selectedRegional = "all";
  sessionStorage.setItem("dashboardAccessMode", "admin");
  sessionStorage.removeItem("dashboardBranchAccess");
  document.body.classList.remove("auth-locked");
  el.loginError.textContent = "";
  render();
  loadSheet();
  startAutoSync();
}

const sha256RoundConstants = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,
  0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
  0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
  0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
  0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
  0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,
  0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
  0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
  0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
];

const sha256InitialHash = [
  0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
  0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
];

function rotateRight(value, amount) {
  return (value >>> amount) | (value << (32 - amount));
}

function sha256(bytes) {
  const paddedLength = Math.ceil((bytes.length + 9) / 64) * 64;
  const padded = new Uint8Array(paddedLength);
  padded.set(bytes);
  padded[bytes.length] = 0x80;
  const view = new DataView(padded.buffer);
  view.setUint32(paddedLength - 4, (bytes.length * 8) >>> 0);

  const words = new Uint32Array(64);
  const hash = sha256InitialHash.slice();
  for (let offset = 0; offset < paddedLength; offset += 64) {
    for (let index = 0; index < 16; index += 1) {
      words[index] = view.getUint32(offset + index * 4);
    }
    for (let index = 16; index < 64; index += 1) {
      const s0 = rotateRight(words[index - 15], 7)
        ^ rotateRight(words[index - 15], 18)
        ^ (words[index - 15] >>> 3);
      const s1 = rotateRight(words[index - 2], 17)
        ^ rotateRight(words[index - 2], 19)
        ^ (words[index - 2] >>> 10);
      words[index] = (words[index - 16] + s0 + words[index - 7] + s1) >>> 0;
    }

    let [a, b, c, d, e, f, g, h] = hash;
    for (let index = 0; index < 64; index += 1) {
      const sum1 = rotateRight(e, 6) ^ rotateRight(e, 11) ^ rotateRight(e, 25);
      const choice = (e & f) ^ (~e & g);
      const temp1 = (h + sum1 + choice + sha256RoundConstants[index] + words[index]) >>> 0;
      const sum0 = rotateRight(a, 2) ^ rotateRight(a, 13) ^ rotateRight(a, 22);
      const majority = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (sum0 + majority) >>> 0;
      h = g;
      g = f;
      f = e;
      e = (d + temp1) >>> 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) >>> 0;
    }
    hash[0] = (hash[0] + a) >>> 0;
    hash[1] = (hash[1] + b) >>> 0;
    hash[2] = (hash[2] + c) >>> 0;
    hash[3] = (hash[3] + d) >>> 0;
    hash[4] = (hash[4] + e) >>> 0;
    hash[5] = (hash[5] + f) >>> 0;
    hash[6] = (hash[6] + g) >>> 0;
    hash[7] = (hash[7] + h) >>> 0;
  }

  const result = new Uint8Array(32);
  const resultView = new DataView(result.buffer);
  hash.forEach((value, index) => resultView.setUint32(index * 4, value));
  return result;
}

function sha256PaddedTwoBlocks(buffer, view, words, output, outputView) {
  let h0 = sha256InitialHash[0];
  let h1 = sha256InitialHash[1];
  let h2 = sha256InitialHash[2];
  let h3 = sha256InitialHash[3];
  let h4 = sha256InitialHash[4];
  let h5 = sha256InitialHash[5];
  let h6 = sha256InitialHash[6];
  let h7 = sha256InitialHash[7];

  for (let offset = 0; offset < 128; offset += 64) {
    for (let index = 0; index < 16; index += 1) {
      words[index] = view.getUint32(offset + index * 4);
    }
    for (let index = 16; index < 64; index += 1) {
      const word15 = words[index - 15];
      const word2 = words[index - 2];
      const s0 = rotateRight(word15, 7) ^ rotateRight(word15, 18) ^ (word15 >>> 3);
      const s1 = rotateRight(word2, 17) ^ rotateRight(word2, 19) ^ (word2 >>> 10);
      words[index] = (words[index - 16] + s0 + words[index - 7] + s1) >>> 0;
    }

    let a = h0;
    let b = h1;
    let c = h2;
    let d = h3;
    let e = h4;
    let f = h5;
    let g = h6;
    let h = h7;
    for (let index = 0; index < 64; index += 1) {
      const sum1 = rotateRight(e, 6) ^ rotateRight(e, 11) ^ rotateRight(e, 25);
      const choice = (e & f) ^ (~e & g);
      const temp1 = (h + sum1 + choice + sha256RoundConstants[index] + words[index]) >>> 0;
      const sum0 = rotateRight(a, 2) ^ rotateRight(a, 13) ^ rotateRight(a, 22);
      const majority = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (sum0 + majority) >>> 0;
      h = g;
      g = f;
      f = e;
      e = (d + temp1) >>> 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) >>> 0;
    }
    h0 = (h0 + a) >>> 0;
    h1 = (h1 + b) >>> 0;
    h2 = (h2 + c) >>> 0;
    h3 = (h3 + d) >>> 0;
    h4 = (h4 + e) >>> 0;
    h5 = (h5 + f) >>> 0;
    h6 = (h6 + g) >>> 0;
    h7 = (h7 + h) >>> 0;
  }

  outputView.setUint32(0, h0);
  outputView.setUint32(4, h1);
  outputView.setUint32(8, h2);
  outputView.setUint32(12, h3);
  outputView.setUint32(16, h4);
  outputView.setUint32(20, h5);
  outputView.setUint32(24, h6);
  outputView.setUint32(28, h7);
  return output;
}

function createHmacSha256Context(key) {
  const normalizedKey = key.length > 64 ? sha256(key) : key;
  const innerPad = new Uint8Array(64);
  const outerPad = new Uint8Array(64);
  const innerBuffer = new Uint8Array(128);
  const outerBuffer = new Uint8Array(128);
  for (let index = 0; index < 64; index += 1) {
    const value = normalizedKey[index] || 0;
    innerPad[index] = value ^ 0x36;
    outerPad[index] = value ^ 0x5c;
  }
  return {
    innerPad,
    outerPad,
    innerBuffer,
    outerBuffer,
    innerView: new DataView(innerBuffer.buffer),
    outerView: new DataView(outerBuffer.buffer),
    words: new Uint32Array(64),
    innerHash: new Uint8Array(32),
    innerHashView: null
  };
}

function hmacSha256Into(context, message, output, outputView) {
  const innerLength = 64 + message.length;
  const outerLength = 96;
  if (innerLength > 119) throw new Error("Credential salt terlalu panjang.");

  context.innerBuffer.set(context.innerPad);
  context.innerBuffer.fill(0, innerLength, 120);
  context.innerBuffer.set(message, 64);
  context.innerBuffer[innerLength] = 0x80;
  context.innerView.setUint32(120, 0);
  context.innerView.setUint32(124, innerLength * 8);
  sha256PaddedTwoBlocks(
    context.innerBuffer,
    context.innerView,
    context.words,
    context.innerHash,
    context.innerHashView
  );

  context.outerBuffer.set(context.outerPad);
  context.outerBuffer.fill(0, outerLength, 120);
  context.outerBuffer.set(context.innerHash, 64);
  context.outerBuffer[outerLength] = 0x80;
  context.outerView.setUint32(120, 0);
  context.outerView.setUint32(124, outerLength * 8);
  sha256PaddedTwoBlocks(
    context.outerBuffer,
    context.outerView,
    context.words,
    output,
    outputView || new DataView(output.buffer)
  );
  return output;
}

async function pbkdf2Sha256(password, salt, iterations, keyLength) {
  const blockCount = Math.ceil(keyLength / 32);
  const derived = new Uint8Array(keyLength);
  const context = createHmacSha256Context(password);
  context.innerHashView = new DataView(context.innerHash.buffer);
  const message = new Uint8Array(salt.length + 4);
  message.set(salt);
  const messageView = new DataView(message.buffer);
  let u = new Uint8Array(32);
  let nextU = new Uint8Array(32);
  let uView = new DataView(u.buffer);
  let nextUView = new DataView(nextU.buffer);
  const result = new Uint8Array(32);
  for (let block = 1; block <= blockCount; block += 1) {
    messageView.setUint32(salt.length, block);
    hmacSha256Into(context, message, u, uView);
    result.set(u);
    for (let iteration = 1; iteration < iterations; iteration += 1) {
      hmacSha256Into(context, u, nextU, nextUView);
      for (let index = 0; index < result.length; index += 1) result[index] ^= nextU[index];
      const previousU = u;
      u = nextU;
      nextU = previousU;
      const previousView = uView;
      uView = nextUView;
      nextUView = previousView;
      if ((iteration & 4095) === 0) await new Promise((resolve) => setTimeout(resolve, 0));
    }
    derived.set(result.subarray(0, Math.min(32, keyLength - (block - 1) * 32)), (block - 1) * 32);
  }
  return derived;
}

async function hashPassword(password) {
  if (!credentialSalt || typeof TextEncoder === "undefined") return "";
  const encoder = new TextEncoder();
  if (window.crypto?.subtle) {
    try {
      const keyMaterial = await window.crypto.subtle.importKey(
        "raw",
        encoder.encode(password),
        "PBKDF2",
        false,
        ["deriveBits"]
      );
      const derivedBits = await window.crypto.subtle.deriveBits(
        {
          name: "PBKDF2",
          salt: encoder.encode(credentialSalt),
          iterations: credentialIterations,
          hash: "SHA-256"
        },
        keyMaterial,
        256
      );
      return Array.from(new Uint8Array(derivedBits), (byte) => byte.toString(16).padStart(2, "0")).join("");
    } catch {
      // Continue with the compatibility implementation for file:// pages.
    }
  }
  const derivedBits = await pbkdf2Sha256(
    encoder.encode(password),
    encoder.encode(credentialSalt),
    credentialIterations,
    32
  );
  return Array.from(derivedBits, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function handleLogin(event) {
  event.preventDefault();
  const password = String(el.branchPassword.value || "").trim().toLowerCase();
  const submitButton = event.submitter || el.loginForm.querySelector("button[type=submit]");
  if (submitButton) submitButton.disabled = true;
  el.loginError.textContent = "Memeriksa password...";

  try {
    const apiLogin = await loginWithDashboardApi(password);
    if (apiLogin.available) {
      if (!apiLogin.ok) {
        el.loginError.textContent = apiLogin.message;
        el.branchPassword.select();
        return;
      }
      sessionStorage.setItem(dashboardSessionKey, apiLogin.token);
      if (apiLogin.accessMode === "admin") {
        unlockAdmin();
        return;
      }
      if (apiLogin.accessMode === "branch" && apiLogin.branch) {
        unlockBranch(apiLogin.branch);
        return;
      }
      clearSavedLogin();
      throw new Error("Respons login server tidak valid.");
    }

    const passwordHash = await hashPassword(password);
    if (adminPasswordHash && passwordHash === adminPasswordHash) {
      clearSavedLogin();
      unlockAdmin();
      return;
    }
    const branch = branchPasswordHashes[passwordHash];
    if (branch) {
      clearSavedLogin();
      unlockBranch(branch);
      return;
    }
    el.loginError.textContent = passwordHash
      ? "Password cabang tidak sesuai."
      : "Login server tidak tersedia dan kredensial halaman tidak dapat dibaca.";
    el.branchPassword.select();
  } catch (error) {
    el.loginError.textContent = error.message || "Login gagal. Silakan coba lagi.";
    el.branchPassword.select();
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
}

function applySavedBrowserLogin() {
  if (adminPasswordHash && sessionStorage.getItem("dashboardAccessMode") === "admin") {
    unlockAdmin();
    return true;
  }
  const branch = sessionStorage.getItem("dashboardBranchAccess");
  if (branch && Object.values(branchPasswordHashes).includes(branch)) {
    unlockBranch(branch);
    return true;
  }
  return false;
}

async function applySavedLogin() {
  if (shouldUseDashboardApi()) {
    const apiSession = await readDashboardSession();
    if (apiSession.available) {
      if (apiSession.session?.accessMode === "admin") {
        unlockAdmin();
        return true;
      }
      if (apiSession.session?.accessMode === "branch" && apiSession.session.branch) {
        unlockBranch(apiSession.session.branch);
        return true;
      }
      clearSavedLogin();
      return false;
    }

    // Do not trust an unvalidated server token while the server is unreachable.
    if (sessionStorage.getItem(dashboardSessionKey)) clearSavedLogin();
  }
  return applySavedBrowserLogin();
}

function renderPickers() {
  const dates = uniqueSorted(state.rows.map((row) => row.date).filter(isIsoDate));
  const weeks = uniqueSorted(state.rows.map((row) => getWeekKey(row.date)));
  const months = uniqueSorted(state.rows.map((row) => getMonthKey(row.date)));
  const today = isoDate(new Date());

  if (!dates.includes(state.selectedDate) || state.selectedDate > today) {
    state.selectedDate = dates.at(-1) || today;
  }
  if (!weeks.includes(state.selectedWeek)) state.selectedWeek = weeks.at(-1) || getWeekKey(state.selectedDate);
  if (!months.includes(state.selectedMonth)) state.selectedMonth = months.at(-1) || getMonthKey(state.selectedDate);

  el.dailyPicker.innerHTML = dates.map((date) => `<option value="${date}">${formatDay(date)}</option>`).join("");
  el.dailyPicker.min = dates[0] || "";
  el.dailyPicker.max = today;
  el.weeklyPicker.innerHTML = weeks.map((week) => `<option value="${week}">${getWeekLabel(week)}</option>`).join("");
  el.monthlyPicker.innerHTML = months.map((month) => `<option value="${month}">${monthName(month)}</option>`).join("");

  el.dailyPicker.value = state.selectedDate;
  el.weeklyPicker.value = state.selectedWeek;
  el.monthlyPicker.value = state.selectedMonth;
}

function renderAgentDetailFilters(rows) {
  const agents = getAgentMaster(rows).map((agent) => agent.name);
  if (state.selectedAgentDetail !== "all" && !agents.includes(state.selectedAgentDetail)) {
    state.selectedAgentDetail = "all";
  }
  el.agentDetailFilter.innerHTML = `<option value="all">Semua Agen</option>${agents
    .map((agent) => `<option value="${escapeHtml(agent)}">${escapeHtml(agent)}</option>`)
    .join("")}`;
  el.agentDetailFilter.value = state.selectedAgentDetail;

  const statuses = uniqueSorted([
    ...fuStatusColumns,
    ...state.leadDetails.map((detail) => detail.lastStatus).filter(Boolean)
  ]);
  if (state.selectedLastStatus !== "all" && !statuses.includes(state.selectedLastStatus)) {
    state.selectedLastStatus = "all";
  }
  el.agentStatusFilter.innerHTML = `<option value="all">Semua Status</option>${statuses
    .map((status) => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`)
    .join("")}`;
  el.agentStatusFilter.value = state.selectedLastStatus;
}

function renderSummary() {
  const activeRows = currentRows();

  el.totalFu.textContent = fuStatusColumns.reduce((total, status) => total + sumRows(activeRows, status), 0);
  el.totalPaid.textContent = sumRows(activeRows, "Paid");
  el.totalHold.textContent = sumRows(activeRows, "Hold");
  el.totalProspect.textContent = sumRows(activeRows, "Prospek");
  el.totalConnected.textContent = sumRows(activeRows, "Connected");
  el.totalNoResponse.textContent = sumRows(activeRows, "No Respon");
  el.totalLostDeal.textContent = sumRows(activeRows, "Lost Deal");
  el.totalTalkTime.textContent = sumRows(activeRows, "Talk Time");
}

function currentRows() {
  if (state.activePeriod === "agents") return applyDashboardFilters(state.rows);
  return applyDashboardFilters(state.activePeriod === "daily"
    ? rowsForDaily()
    : state.activePeriod === "weekly"
      ? rowsForWeekly()
      : rowsForMonthly());
}

function currentTransitions() {
  const filtered = applyTransitionFilters(state.transitions).filter((transition) => (
    transition.from !== "Invalid" && transition.to !== "Invalid"
  ));
  if (state.activePeriod === "daily") {
    return filtered.filter((transition) => transition.date === state.selectedDate);
  }
  if (state.activePeriod === "weekly") {
    return filtered.filter((transition) => getWeekKey(transition.date) === state.selectedWeek);
  }
  if (state.activePeriod === "monthly") {
    return filtered.filter((transition) => getMonthKey(transition.date) === state.selectedMonth);
  }
  return filtered;
}

function groupTotal(rows, key) {
  return rows.reduce((totals, row) => {
    const name = row[key] || "Tanpa Data";
    totals[name] = (totals[name] || 0) + Number(row.count || 0);
    return totals;
  }, {});
}

function renderAlerts(rows) {
  const total = fuStatusColumns.reduce((sum, status) => sum + sumRows(rows, status), 0) || 1;
  const noResponse = sumRows(rows, "No Respon");
  const hold = sumRows(rows, "Hold");
  const prospect = sumRows(rows, "Prospek");
  const alerts = [
    ["Hold", hold, Math.round((hold / total) * 100), "warn"],
    ["Prospek", prospect, Math.round((prospect / total) * 100), "info"],
    ["No Respon", noResponse, Math.round((noResponse / total) * 100), "high"]
  ];
  el.alertList.innerHTML = alerts.map(([label, value, percent, tone]) => {
    return `
      <div class="alert-row ${tone}">
        <div><strong>${label}</strong><span>- ${percent}%</span></div>
        <div class="mini-bar"><i style="width:${percent}%"></i></div>
        <b>${value}</b>
      </div>
    `;
  }).join("");
}

function renderTransitions() {
  const transitions = currentTransitions();
  const totals = transitions.reduce((summary, transition) => {
    const key = `${transition.from} -> ${transition.to}`;
    summary[key] = (summary[key] || 0) + 1;
    return summary;
  }, {});
  const items = Object.entries(totals)
    .map(([label, value]) => {
      const [from, to] = label.split(" -> ");
      return { label, value, tone: transitionTone(from, to) };
    })
    .sort((a, b) => {
      const [aFrom, aTo] = a.label.split(" -> ");
      const [bFrom, bTo] = b.label.split(" -> ");
      return (transitionRank[bTo] ?? -1) - (transitionRank[aTo] ?? -1)
        || (transitionRank[bFrom] ?? -1) - (transitionRank[aFrom] ?? -1)
        || b.value - a.value
        || a.label.localeCompare(b.label);
    });
  const total = transitions.length;
  const summary = transitions.reduce((counts, transition) => {
    counts[transitionTone(transition.from, transition.to)] += 1;
    return counts;
  }, { naik: 0, turun: 0, tetap: 0, baru: 0 });
  el.transitionTitle.parentElement.querySelector(".transition-summary")?.remove();
  el.transitionTitle.textContent = `${total} perubahan`;
  el.transitionList.innerHTML = items.map((item) => {
    const width = total ? Math.round((item.value / total) * 100) : 0;
    return `
      <div class="transition-row ${item.tone}">
        <strong>
          <span class="transition-badge ${item.tone}">${toneLabel(item.tone)}</span>
          ${item.label}
        </strong>
        <div class="mini-bar"><i style="width:${width}%"></i></div>
        <b>${item.value}</b>
      </div>
    `;
  }).join("") || `<div class="empty-insight">Belum ada perubahan status pada periode ini.</div>`;
  el.transitionTitle.insertAdjacentHTML("beforebegin", `
    <div class="transition-summary">
      <span class="transition-pill naik">Naik ${summary.naik}</span>
      <span class="transition-pill turun">Turun ${summary.turun}</span>
      <span class="transition-pill tetap">Tetap ${summary.tetap}</span>
      <span class="transition-pill baru">Baru ${summary.baru}</span>
    </div>
  `);
}

function transitionTone(from, to) {
  if (from === "Belum di FU") return "baru";
  if (from === to) return "tetap";
  const fromRank = transitionRank[from] ?? 0;
  const toRank = transitionRank[to] ?? 0;
  return toRank > fromRank ? "naik" : "turun";
}

function toneLabel(tone) {
  if (tone === "naik") return "Naik";
  if (tone === "turun") return "Turun";
  if (tone === "baru") return "Baru";
  return "Tetap";
}

function renderTopAgents(rows) {
  if (!el.topAgents) return;
  const totals = Object.entries(groupTotal(rows, "agent"))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  el.topAgents.innerHTML = totals.map(([name, value], index) => `
    <div class="rank-row">
      <span>${index + 1}</span>
      <strong>${name}</strong>
      <b>${value}</b>
    </div>
  `).join("") || `<div class="empty-insight">Tidak ada data.</div>`;
}

function renderBranchSummary(rows) {
  if (!el.branchSummary || !el.branchSummaryTitle) return;
  const positiveStatuses = ["Paid", "Hold", "Prospek", "Connected"];
  el.branchSummaryTitle.textContent = "Cabang Tidak Produktif";
  const candidateBranches = uniqueSorted(state.agents
    .filter((agent) => !isVacantName(agent.name))
    .filter((agent) => state.selectedRegional === "all" || regionalForAgent(agent) === state.selectedRegional)
    .filter((agent) => state.selectedBranch === "all" || agent.branch === state.selectedBranch)
    .map((agent) => agent.branch || "Tanpa Cabang"));
  const initialSummary = Object.fromEntries(candidateBranches.map((branch) => [branch, { positive: 0, leads: 0 }]));
  const totals = Object.entries(rows.reduce((summary, row) => {
    const branch = row.branch || "Tanpa Cabang";
    if (!summary[branch]) summary[branch] = { positive: 0, leads: 0 };
    if (row.status !== "Talk Time") summary[branch].leads += Number(row.count || 0);
    if (row.status === "No Respon") summary[branch].noResponse = (summary[branch].noResponse || 0) + Number(row.count || 0);
    if (positiveStatuses.includes(row.status)) summary[branch].positive += Number(row.count || 0);
    return summary;
  }, initialSummary))
    .map(([branch, value]) => ({
      branch,
      positive: value.positive,
      leads: value.leads,
      noResponse: value.noResponse || 0,
      rate: value.leads ? Math.round((value.positive / value.leads) * 100) : 0,
      noResponseRate: value.leads ? Math.round(((value.noResponse || 0) / value.leads) * 100) : 0
    }))
    .sort((a, b) => {
      const aSmall = a.leads > 0 && a.leads < 10 ? 1 : 0;
      const bSmall = b.leads > 0 && b.leads < 10 ? 1 : 0;
      return aSmall - bSmall || a.positive - b.positive || b.noResponseRate - a.noResponseRate || a.branch.localeCompare(b.branch);
    })
    .slice(0, 5);
  function branchBadge(item) {
    if (!item.leads) return "Belum ada FU";
    if (item.leads < 10) return "Volume kecil";
    if (item.positive === 0) return "Tidak produktif";
    if (item.noResponseRate >= 60) return "No Respon tinggi";
    return "Positif rendah";
  }
  el.branchSummary.innerHTML = totals.map((item) => `
    <div class="rank-row branch-row productivity-row">
      <strong>${item.branch}<small>${item.positive} positif dari ${item.leads} FU</small></strong>
      <b><span>${branchBadge(item)}</span>${item.rate}%</b>
    </div>
  `).join("") || `<div class="empty-insight">Tidak ada data.</div>`;
}

function renderAgentBranchRecap() {
  if (!el.agentBranchRecapHead || !el.agentBranchRecapBody) return;
  const shouldShow = ["daily", "weekly", "monthly"].includes(state.activePeriod);
  const recapPanel = el.agentBranchRecapHead.closest(".agent-branch-recap");
  if (recapPanel) recapPanel.hidden = !shouldShow;
  if (!shouldShow) return;

  const branchFilterValue = el.branchRecapFilter?.value || recapFilterState.branch;
  recapFilterState.branch = branchFilterValue;
  const roster = mergeAgentMaster(state.agents)
    .filter((agent) => !isVacantName(agent.name))
    .filter((agent) => state.selectedRegional === "all"
      || regionalForAgent(agent) === state.selectedRegional)
    .filter((agent) => state.selectedBranch === "all"
      || agent.branch === state.selectedBranch);
  const activeRows = currentRows().filter((row) => row.status !== "Talk Time");
  const branchNames = uniqueSorted(roster
    .map((agent) => agent.branch)
    .filter((branch) => branch && branch !== "#N/A" && branch !== "Tanpa Cabang"));
  const rows = branchNames.map((branch) => {
    const branchAgents = roster.filter((agent) => agent.branch === branch);
    const branchAgentNames = new Set(branchAgents.map((agent) => agent.name));
    const fuAgentNames = new Set(activeRows
      .filter((row) => row.branch === branch && branchAgentNames.has(row.agent))
      .filter((row) => fuStatusColumns.includes(row.status) && Number(row.count || 0) > 0)
      .map((row) => row.agent));
    return {
      branch,
      totalAgents: branchAgents.length,
      fuAgents: fuAgentNames.size,
      pendingAgents: Math.max(0, branchAgents.length - fuAgentNames.size)
    };
  }).filter((row) => state.selectedRegional === "all"
    ? state.selectedBranch === "all" || row.branch === state.selectedBranch
    : branchRegionalMap[row.branch] === state.selectedRegional
      && (state.selectedBranch === "all" || row.branch === state.selectedBranch))
    .filter((row) => branchFilterValue === "all"
      || (branchFilterValue === "fu" && row.fuAgents > 0)
      || (branchFilterValue === "pending" && row.fuAgents === 0));

  el.agentBranchRecapHead.innerHTML = `
    <tr>
      <th>Branch</th>
      <th>#Agen</th>
      <th>#Agen FU</th>
      <th>#Agen Belum FU</th>
    </tr>
  `;
  el.agentBranchRecapBody.innerHTML = rows.map((row) => `
    <tr>
      <td>${escapeHtml(row.branch)}</td>
      <td>${row.totalAgents || "-"}</td>
      <td class="${row.fuAgents ? "recap-positive" : "empty-cell"}">${row.fuAgents || "-"}</td>
      <td class="${row.pendingAgents ? "recap-pending" : "empty-cell"}">${row.pendingAgents || "-"}</td>
    </tr>
  `).join("") || `<tr><td colspan="4" class="empty-table">Tidak ada data agen pada filter ini.</td></tr>`;

  const periodLabel = state.activePeriod === "daily"
    ? `Daily - ${formatShortDate(state.selectedDate)}`
    : state.activePeriod === "weekly"
      ? `Weekly - ${getWeekLabel(state.selectedWeek)}`
      : state.activePeriod === "monthly"
        ? `Monthly - ${monthName(state.selectedMonth)}`
        : state.activePeriod === "agents"
          ? "All Agen"
          : state.activePeriod === "cbc"
            ? "Leads CBC"
            : "Analisis NR";
  if (el.agentBranchRecapPeriod) {
    el.agentBranchRecapPeriod.textContent = state.selectedRegional === "all"
      ? periodLabel
      : `${periodLabel} - ${state.selectedRegional.replace("Regional - ", "")}`;
  }
  if (el.branchRecapFilter) {
    el.branchRecapFilter.value = recapFilterState.branch;
    el.branchRecapFilter.disabled = false;
  }
}

function renderRegionalInsight() {
  if (!el.regionalInsight || !el.regionalInsightBody) return;
  const shouldShow = state.selectedRegional === "all"
    && ["daily", "weekly", "monthly"].includes(state.activePeriod)
    && !document.body.classList.contains("agents-mode")
    && state.activePeriod !== "cbc";
  el.regionalInsight.hidden = !shouldShow;
  if (!shouldShow) return;

  const roster = mergeAgentMaster(state.agents)
    .filter((agent) => !isVacantName(agent.name))
    .filter((agent) => state.selectedRegional === "all"
      || regionalForAgent(agent) === state.selectedRegional)
    .filter((agent) => state.selectedBranch === "all"
      || agent.branch === state.selectedBranch);
  const activeRows = currentRows().filter((row) => row.status !== "Talk Time");
  const positiveStatuses = ["Paid", "Hold", "Prospek", "Connected"];
  const regionalNames = state.selectedRegional === "all"
    ? allowedRegionals
    : [state.selectedRegional];
  const regionalRows = regionalNames.map((regional) => {
    const regionalAgents = roster.filter((agent) => regionalForAgent(agent) === regional);
    const branchNames = new Set(regionalAgents.map((agent) => agent.branch));
    const rows = activeRows.filter((row) => branchNames.has(row.branch));
    const fuAgents = new Set(rows
      .filter((row) => fuStatusColumns.includes(row.status) && Number(row.count || 0) > 0)
      .map((row) => row.agent));
    const leads = rows.reduce((sum, row) => sum + Number(row.count || 0), 0);
    const noResponse = rows
      .filter((row) => row.status === "No Respon")
      .reduce((sum, row) => sum + Number(row.count || 0), 0);
    const positive = rows
      .filter((row) => positiveStatuses.includes(row.status))
      .reduce((sum, row) => sum + Number(row.count || 0), 0);
    return {
      regional,
      agents: regionalAgents.length,
      fuAgents: fuAgents.size,
      leads,
      noResponse,
      noResponseRate: leads ? Math.round((noResponse / leads) * 100) : 0,
      positive
    };
  });

  const branchRows = Object.entries(activeRows.reduce((summary, row) => {
    const branch = row.branch || "Tanpa Cabang";
    if (!summary[branch]) summary[branch] = { fu: 0, noResponse: 0, positive: 0 };
    const count = Number(row.count || 0);
    summary[branch].fu += count;
    if (row.status === "No Respon") summary[branch].noResponse += count;
    if (positiveStatuses.includes(row.status)) summary[branch].positive += count;
    return summary;
  }, {}))
    .map(([branch, value]) => ({
      branch,
      ...value,
      noResponseRate: value.fu ? Math.round((value.noResponse / value.fu) * 100) : 0
    }))
    .filter((row) => row.fu > 0)
    .sort((a, b) => b.fu - a.fu || a.branch.localeCompare(b.branch));
  const topBranch = branchRows[0];
  const riskBranch = [...branchRows]
    .filter((row) => row.fu >= 10)
    .sort((a, b) => b.noResponseRate - a.noResponseRate || b.noResponse - a.noResponse)[0];
  const topRegional = [...regionalRows].sort((a, b) => b.leads - a.leads)[0];
  const totalAgents = roster.length;
  const totalFuAgents = new Set(activeRows
    .filter((row) => fuStatusColumns.includes(row.status) && Number(row.count || 0) > 0)
    .map((row) => row.agent)).size;
  const agentRate = totalAgents ? Math.round((totalFuAgents / totalAgents) * 100) : 0;

  const periodLabel = state.activePeriod === "daily"
    ? `Daily - ${formatShortDate(state.selectedDate)}`
    : state.activePeriod === "weekly"
      ? `Weekly - ${getWeekLabel(state.selectedWeek)}`
      : state.activePeriod === "monthly"
        ? `Monthly - ${monthName(state.selectedMonth)}`
        : state.activePeriod === "agents"
          ? "All Agen"
          : state.activePeriod === "cbc"
            ? "Leads CBC"
            : "Analisis NR";
  el.regionalInsightTitle.textContent = state.selectedRegional === "all"
    ? "Perbandingan Semua Regional"
    : `Insight ${state.selectedRegional.replace("Regional - ", "")}`;
  el.regionalInsightPeriod.textContent = periodLabel;
  el.regionalInsightBody.innerHTML = `
    <div class="regional-kpi-grid">
      <div class="regional-kpi">
        <span>Regional dengan FU tertinggi</span>
        <strong>${escapeHtml(topRegional?.regional.replace("Regional - ", "") || "-")}</strong>
        <small>${topRegional?.leads || 0} FU pada periode ini</small>
      </div>
      <div class="regional-kpi">
        <span>Branch paling aktif</span>
        <strong>${escapeHtml(topBranch?.branch || "-")}</strong>
        <small>${topBranch?.fu || 0} FU${topBranch ? `, ${topBranch.positive} positif` : ""}</small>
      </div>
      <div class="regional-kpi">
        <span>Branch No Respon tertinggi</span>
        <strong>${escapeHtml(riskBranch?.branch || "-")}</strong>
        <small>${riskBranch ? `${riskBranch.noResponseRate}% dari ${riskBranch.fu} FU` : "Belum ada data"}</small>
      </div>
      <div class="regional-kpi">
        <span>Agen sudah melakukan FU</span>
        <strong>${totalFuAgents} / ${totalAgents}</strong>
        <small>${agentRate}% dari roster agen aktif</small>
      </div>
    </div>
    <div class="regional-comparison">
      ${regionalRows.map((row) => `
        <div class="regional-comparison-row">
          <strong>${escapeHtml(row.regional.replace("Regional - ", ""))}</strong>
          <span>${row.leads} FU</span>
          <span>${row.fuAgents}/${row.agents} agen FU</span>
          <span class="${row.noResponseRate >= 60 ? "regional-risk" : "regional-good"}">${row.noResponseRate}% No Respon</span>
        </div>
      `).join("")}
    </div>
  `;
}

function buildAgentLeadMetrics(agent, leadRecords, talkTimeByAgent = {}) {
  const agentLeads = leadRecords.filter((lead) => lead.agent === agent.name);
  const totals = Object.fromEntries(statusColumns.map((status) => [
    status,
    status === "Talk Time"
      ? Math.max(
        agentLeads.reduce((sum, lead) => sum + Number(lead.talk || 0), 0),
        talkTimeByAgent[agent.name] || 0
      )
      : agentLeads.filter((lead) => lead.lastStatus === status).length
  ]));

  return {
    ...agent,
    agentLeads,
    totals,
    totalLeads: agentLeads.length
  };
}

function renderAgentRankings() {
  const targets = [
    ["Paid", el.paidAgentRanking],
    ["Connected", el.connectedAgentRanking],
    ["No Respon", el.noResponseAgentRanking],
    ["Talk Time", el.talkAgentRanking]
  ];
  if (targets.some(([, target]) => !target)) return;

  const rows = applyDashboardFilters(state.rows);
  const talkTimeByAgent = rows.reduce((summary, row) => {
    if (row.status === "Talk Time") {
      summary[row.agent] = (summary[row.agent] || 0) + Number(row.count || 0);
    }
    return summary;
  }, {});
  const leadRecords = filteredMainLeadRecords();
  const agents = getAgentMaster(state.rows).map((agent) => buildAgentLeadMetrics(agent, leadRecords, talkTimeByAgent));

  targets.forEach(([status, target]) => {
    const ranked = agents
      .map((agent) => ({
        ...agent,
        value: agent.totals[status],
        percent: agent.totalLeads ? (agent.totals[status] / agent.totalLeads) * 100 : 0
      }))
      .filter((agent) => agent.value > 0)
      .sort((a, b) => b.percent - a.percent || b.value - a.value || a.name.localeCompare(b.name))
      .slice(0, 5);

    target.innerHTML = ranked.map((agent, index) => `
      <div class="agent-ranking-row">
        <span class="ranking-number">${agent.percent.toFixed(1)}%</span>
        <div
          class="ranking-agent"
          data-tooltip="${escapeHtml(`${agent.name} - ${agent.branch || "Tanpa Cabang"}: ${agent.value.toLocaleString("id-ID")} ${status} dari ${agent.totalLeads.toLocaleString("id-ID")} leads`)}"
        >
          <strong>${escapeHtml(agent.name)}</strong>
          <small>${escapeHtml(agent.branch || "Tanpa Cabang")} · ${agent.value.toLocaleString("id-ID")} ${status} dari ${agent.totalLeads.toLocaleString("id-ID")} leads</small>
        </div>
      </div>
    `).join("") || `<div class="empty-insight">Belum ada data.</div>`;
  });
}

function renderAgentRecap(rows) {
  renderAgentDetailFilters(rows);
  renderAgentDetailTable();
  el.agentRecapHead.innerHTML = `
    <tr>
      <th>Nama Ejen</th>
      <th>Leads</th>
      <th>Utilize</th>
      <th>% Utilize</th>
      ${statusColumns.map((status) => `<th>${status}</th>`).join("")}
    </tr>
  `;
  const talkTimeByAgent = rows.reduce((summary, row) => {
    if (row.status === "Talk Time") {
      summary[row.agent] = (summary[row.agent] || 0) + Number(row.count || 0);
    }
    return summary;
  }, {});
  const leadRecords = filteredMainLeadRecords();
  const agents = getAgentMaster(rows)
    .map((agent) => {
      const metrics = buildAgentLeadMetrics(agent, leadRecords, talkTimeByAgent);
      const utilize = ["Paid", "Hold", "Prospek", "Connected"]
        .reduce((sum, status) => sum + metrics.totals[status], 0);
      const utilizeRate = metrics.totalLeads ? Math.round((utilize / metrics.totalLeads) * 100) : 0;
      return {
        ...metrics,
        leads: metrics.totalLeads,
        utilize,
        utilizeRate
      };
    })
    .sort((a, b) => b.leads - a.leads || b.utilize - a.utilize || a.name.localeCompare(b.name));

  el.agentRecapBody.innerHTML = agents.map((agent) => `
    <tr class="${agent.leads ? "" : "no-data-row"}">
      <td>${agent.name}</td>
      <td class="total-cell">${agent.leads || "-"}</td>
      <td class="total-cell">${agent.utilize || "-"}</td>
      <td><span class="utilize-badge ${utilizeTone(agent.utilizeRate)}" style="--utilize-red:${Math.max(0, (50 - agent.utilizeRate) / 50).toFixed(2)}; --utilize-green:${Math.max(0, (agent.utilizeRate - 50) / 50).toFixed(2)}">${agent.leads ? `${agent.utilizeRate}%` : "-"}</span></td>
      ${statusColumns.map((status) => {
        const value = agent.totals[status];
        return `<td class="${value ? "" : "empty-cell"}">${value || "-"}</td>`;
      }).join("")}
    </tr>
  `).join("") || `<tr><td colspan="${statusColumns.length + 4}" class="empty-table">Tidak ada data ejen pada filter ini.</td></tr>`;
}

function renderAgentDetailTable() {
  const shouldShow = state.selectedAgentDetail !== "all" || state.selectedLastStatus !== "all";
  el.agentRecapPanel.hidden = shouldShow;
  el.agentDetailPanel.hidden = !shouldShow;
  if (!shouldShow) return;

  const details = applyLeadDetailFilters(state.leadDetails)
    .sort((a, b) => parseDate(b.lastDate) - parseDate(a.lastDate) || (a.student || "").localeCompare(b.student || ""));
  const agentLabel = state.selectedAgentDetail === "all" ? "Semua Agen" : state.selectedAgentDetail;
  const statusLabel = state.selectedLastStatus === "all" ? "Semua Status" : state.selectedLastStatus;
  el.agentDetailTitle.textContent = `${agentLabel} - ${statusLabel}`;
  el.agentDetailCount.textContent = `${details.length} leads`;
  el.agentDetailHead.innerHTML = `
    <tr>
      <th>Nama Siswa</th>
      <th>Asal Sekolah</th>
      <th>Kelas</th>
      <th>FU Pertama</th>
      <th>FU Terakhir</th>
      <th>Hari Sejak FU Terakhir</th>
      <th>Frekuensi Follow Up</th>
      <th>Lead Stage</th>
    </tr>
  `;
  el.agentDetailBody.innerHTML = details.map((detail) => `
    <tr>
      <td>${escapeHtml(detail.student || "-")}</td>
      <td>${escapeHtml(detail.school || "-")}</td>
      <td>${escapeHtml(detail.className || "-")}</td>
      <td>${formatShortDate(detail.firstDate)}</td>
      <td>${formatShortDate(detail.lastDate)}</td>
      <td>${daysSince(detail.lastDate)}</td>
      <td>${Number(detail.frequency || 0) || "-"}</td>
      <td><span class="agent-status-pill ${statusTone(detail.lastStatus)}">${escapeHtml(detail.lastStatus || "-")}</span></td>
    </tr>
  `).join("") || `<tr><td colspan="8" class="empty-table">Tidak ada detail lead pada filter ini.</td></tr>`;
}

function renderCbcLeads() {
  el.cbcLeadHead.innerHTML = `
    <tr>
      <th>School Name</th>
      <th>School Category</th>
      <th>#Rombel</th>
      <th>Rombel Deal</th>
      <th>% Deal</th>
      <th>#Leads</th>
      <th>#Utilize</th>
      <th>Progres</th>
      <th>#Paid</th>
    </tr>
  `;
  const schoolRows = buildCbcRows();
  el.cbcLeadBody.innerHTML = schoolRows.map((row) => `
    <tr class="${schoolKey(row.schoolName) === state.selectedCbcSchool ? "selected-row" : ""}">
      <td><button class="school-toggle" type="button" data-school="${escapeHtml(schoolKey(row.schoolName))}">${escapeHtml(row.schoolName || "-")}</button></td>
      <td>${escapeHtml(row.schoolCategory || "-")}</td>
      <td>-</td>
      <td>${row.rombelDeal || "-"}</td>
      <td>${row.dealPercent || "-"}</td>
      <td>${row.leads || "-"}</td>
      <td>${row.utilize || "-"}</td>
      <td>${renderProgressBar(row.progressValue)}</td>
      <td>${row.paid || "-"}</td>
    </tr>
    ${schoolKey(row.schoolName) === state.selectedCbcSchool ? renderCbcSchoolDetail(row) : ""}
  `).join("") || `<tr><td colspan="9" class="empty-table">Data Leads CBC belum diisi.</td></tr>`;
}

function renderNrAnalysis() {
  const rows = buildNrAnalysisRows();
  const totals = rows.reduce((summary, row) => {
    summary.leads += row.leads;
    summary.noResponse += row.noResponse;
    summary.connected += row.connected;
    summary.highRisk += row.noResponseRate >= 60 ? 1 : 0;
    return summary;
  }, { leads: 0, noResponse: 0, connected: 0, highRisk: 0 });
  const nrRate = totals.leads ? Math.round((totals.noResponse / totals.leads) * 100) : 0;
  const connectedRate = totals.leads ? Math.round((totals.connected / totals.leads) * 100) : 0;
  const topSchools = rows.slice(0, 12);
  const topAgents = buildNrAgentRows(rows).slice(0, 12);
  const priorityLeads = buildNrPriorityLeads().slice(0, 18);
  el.nrAnalysisPanel.innerHTML = `
    <div class="nr-overview">
      <article>
        <span>Total Leads</span>
        <strong>${totals.leads}</strong>
      </article>
      <article>
        <span>No Respon</span>
        <strong>${totals.noResponse}</strong>
      </article>
      <article>
        <span>%NR</span>
        <strong><span class="nr-rate-badge" style="--nr-rate:${nrRate}">${nrRate}%</span></strong>
      </article>
      <article>
        <span>Connected Rate</span>
        <strong>${connectedRate}%</strong>
      </article>
      <article>
        <span>Area Risiko</span>
        <strong>${totals.highRisk}</strong>
      </article>
    </div>
    <div class="nr-analysis-grid">
      ${renderNrTable("Sekolah NR Tertinggi", ["Sekolah", "Week", "#Leads", "NR", "%NR", "Action"], topSchools.map((row) => [
        formatSchoolTitle(row.school),
        row.weekActivity,
        row.leads,
        row.noResponse,
        `<span class="nr-rate-badge" style="--nr-rate:${row.noResponseRate}">${row.noResponseRate}%</span>`,
        `<span class="nr-action-pill ${row.actionTone}">${escapeHtml(row.action)}</span>`
      ]))}
      ${renderNrTable("Agen NR Tertinggi", ["Agen", "Sekolah", "#Leads", "NR", "%NR", "Action"], topAgents.map((row) => [
        row.agent,
        formatSchoolTitle(row.school),
        row.leads,
        row.noResponse,
        `<span class="nr-rate-badge" style="--nr-rate:${row.noResponseRate}">${row.noResponseRate}%</span>`,
        `<span class="nr-action-pill ${row.actionTone}">${escapeHtml(row.action)}</span>`
      ]))}
    </div>
    ${renderNrTable("Prioritas Lead No Respon", ["Siswa", "Sekolah", "Week", "Agen", "Attempt", "Last FU"], priorityLeads.map((lead) => [
      lead.student,
      formatSchoolTitle(lead.school),
      lead.weekActivity,
      lead.agent || "Tanpa Agen",
      lead.frequency || 1,
      formatShortDate(lead.lastDate)
    ]), "nr-priority-table")}
  `;
}

function renderNrTable(title, headers, rows, className = "") {
  return `
    <section class="nr-card ${className}">
      <div class="nr-card-title">${escapeHtml(title)}</div>
      <div class="table-shell nr-table-shell">
        <table>
          <thead><tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead>
          <tbody>
            ${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("") || `<tr><td colspan="${headers.length}" class="empty-table">Belum ada data.</td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function filteredMainLeadRecords() {
  return state.mainLeadRecords
    .filter((lead) => {
      const regional = branchRegionalMap[lead.branch] || "Tanpa Regional";
      return state.selectedRegional === "all" || regional === state.selectedRegional;
    })
    .filter((lead) => state.selectedBranch === "all" || lead.branch === state.selectedBranch);
}

function buildNrAnalysisRows() {
  const grouped = filteredMainLeadRecords().reduce((summary, lead) => {
    const key = `${schoolKey(lead.school)}|${schoolKey(lead.weekActivity || "Tanpa Week")}`;
    if (!summary[key]) {
      summary[key] = { school: lead.school, weekActivity: lead.weekActivity || "Tanpa Week", students: new Set(), noResponseStudents: new Set(), connectedStudents: new Set() };
    }
    const student = schoolKey(lead.student);
    summary[key].students.add(student);
    if (lead.lastStatus === "No Respon") summary[key].noResponseStudents.add(student);
    if (lead.lastStatus === "Connected") summary[key].connectedStudents.add(student);
    return summary;
  }, {});
  return Object.values(grouped).map((row) => {
    const leads = row.students.size;
    const noResponse = row.noResponseStudents.size;
    const connected = row.connectedStudents.size;
    const enriched = {
      school: row.school,
      weekActivity: row.weekActivity,
      leads,
      noResponse,
      connected,
      noResponseRate: leads ? Math.round((noResponse / leads) * 100) : 0
    };
    return { ...enriched, ...noResponseAction(enriched) };
  }).sort((a, b) => b.noResponseRate - a.noResponseRate || b.noResponse - a.noResponse || b.leads - a.leads);
}

function buildNrAgentRows() {
  const grouped = filteredMainLeadRecords()
    .reduce((summary, lead) => {
      const key = `${lead.agent || "Tanpa Agen"}|${schoolKey(lead.school)}|${schoolKey(lead.weekActivity || "Tanpa Week")}`;
      if (!summary[key]) {
        summary[key] = { agent: lead.agent || "Tanpa Agen", school: lead.school, weekActivity: lead.weekActivity || "Tanpa Week", students: new Set(), noResponseStudents: new Set(), connectedStudents: new Set() };
      }
      const student = schoolKey(lead.student);
      summary[key].students.add(student);
      if (lead.lastStatus === "No Respon") summary[key].noResponseStudents.add(student);
      if (lead.lastStatus === "Connected") summary[key].connectedStudents.add(student);
      return summary;
    }, {});
  return Object.values(grouped).map((row) => {
    const leads = row.students.size;
    const noResponse = row.noResponseStudents.size;
    const connected = row.connectedStudents.size;
    const enriched = {
      agent: row.agent,
      school: row.school,
      weekActivity: row.weekActivity,
      leads,
      noResponse,
      connected,
      noResponseRate: leads ? Math.round((noResponse / leads) * 100) : 0
    };
    return { ...enriched, ...noResponseAction(enriched) };
  }).sort((a, b) => b.noResponseRate - a.noResponseRate || b.noResponse - a.noResponse || b.leads - a.leads);
}

function buildNrPriorityLeads() {
  return filteredMainLeadRecords()
    .filter((lead) => lead.lastStatus === "No Respon")
    .map((lead) => ({
      ...lead,
      frequency: Number(lead.frequency || 0)
    }))
    .sort((a, b) => {
      const frequencyDiff = Number(b.frequency || 0) - Number(a.frequency || 0);
      if (frequencyDiff) return frequencyDiff;
      return (b.lastDate || "").localeCompare(a.lastDate || "");
    });
}

function renderCbcSchoolDetail(row) {
  const details = buildCbcSchoolWeeklyDetails(row.schoolName);
  return `
    <tr class="school-detail-row">
      <td colspan="9">
        <div class="school-detail-panel">
          <div class="school-detail-layout">
            <table class="school-detail-table">
              <thead>
                <tr>
                  <th>Week Activity</th>
                  <th>#Leads</th>
                  <th>#Agen</th>
                  <th>Leads/Agen</th>
                </tr>
              </thead>
              <tbody>
                ${details.map((detail) => `
                  <tr class="${detail.key === state.selectedCbcWeek ? "selected-week-row" : ""}">
                    <td><button class="week-toggle" type="button" data-week="${escapeHtml(detail.key)}">${escapeHtml(detail.weekActivity)}</button></td>
                    <td>${detail.leads}</td>
                    <td>${detail.agents}</td>
                    <td>${detail.leadsPerAgent}</td>
                  </tr>
                `).join("") || `<tr><td colspan="4" class="empty-table">Belum ada aktivitas FU untuk sekolah ini.</td></tr>`}
              </tbody>
            </table>
            ${state.selectedCbcWeek ? renderCbcWeekAgentDetail(row.schoolName, state.selectedCbcWeek) : ""}
          </div>
        </div>
      </td>
    </tr>
  `;
}

function renderProgressBar(value) {
  if (!Number.isFinite(value)) return "-";
  return `
    <div class="progress-meter" aria-label="Progres ${value}%">
      <i style="width:${Math.min(100, Math.max(0, value))}%; --progress-hue:${Math.round(value * 1.2)}"></i>
      <span>${value}%</span>
    </div>
  `;
}

function cbcLeadRecords() {
  return state.mainLeadRecords.filter((lead) => String(lead.updatedAt || "").trim());
}

function buildCbcRows() {
  const rowsBySchool = cbcLeadRecords().reduce((summary, lead) => {
    const key = schoolKey(lead.school);
    if (!key) return summary;
    const student = schoolKey(lead.student);
    if (!student) return summary;
    if (!summary[key]) summary[key] = { leads: new Set(), utilize: new Set(), paid: new Set() };
    summary[key].leads.add(student);
    if (lead.hasFu) summary[key].utilize.add(student);
    if (lead.lastStatus === "Paid") summary[key].paid.add(student);
    return summary;
  }, {});

  return state.cbcSchools.map((school) => {
    const totals = rowsBySchool[schoolKey(school.schoolName)] || { leads: new Set(), utilize: new Set(), paid: new Set() };
    const leads = totals.leads.size;
    const utilize = totals.utilize.size;
    const paid = totals.paid.size;
    if (!leads) return null;
    const dealPercent = school.dealPercent || (paid ? `${Math.round((paid / leads) * 100)}%` : "-");
    return {
      ...school,
      rombelDeal: "",
      dealPercent,
      leads,
      utilize,
      progress: leads ? `${Math.round((utilize / leads) * 100)}%` : "-",
      progressValue: leads ? Math.round((utilize / leads) * 100) : null,
      paid
    };
  })
    .filter(Boolean)
    .filter((school) => state.selectedBranch === "all" || school.branch === state.selectedBranch)
    .filter((school) => {
      const regional = branchRegionalMap[school.branch] || "Tanpa Regional";
      return state.selectedRegional === "all" || regional === state.selectedRegional;
    })
    .sort((a, b) => Number(b.leads || 0) - Number(a.leads || 0) || a.schoolName.localeCompare(b.schoolName));
}

function buildCbcSchoolWeeklyDetails(schoolName) {
  const records = cbcLeadRecords()
    .filter((lead) => schoolKey(lead.school) === schoolKey(schoolName));
  const weekly = records.reduce((summary, lead) => {
    const key = lead.weekActivity || "Tanpa Week";
    if (!summary[key]) summary[key] = { students: new Set(), agents: new Set() };
    summary[key].students.add(schoolKey(lead.student));
    if (lead.agent) summary[key].agents.add(lead.agent);
    return summary;
  }, {});
  return Object.entries(weekly)
    .map(([weekActivity, value]) => {
      const leads = value.students.size;
      const agents = value.agents.size;
      return {
        key: schoolKey(weekActivity),
        weekActivity,
        leads,
        agents,
        leadsPerAgent: agents ? (leads / agents).toFixed(1) : "-"
      };
    })
    .sort((a, b) => weekActivityOrder(a.weekActivity) - weekActivityOrder(b.weekActivity) || a.weekActivity.localeCompare(b.weekActivity));
}

function renderCbcWeekAgentDetail(schoolName, weekKey) {
  const rows = buildCbcWeekAgentRows(schoolName, weekKey);
  const weekLabel = buildCbcSchoolWeeklyDetails(schoolName).find((detail) => detail.key === weekKey)?.weekActivity || "Week terpilih";
  return `
    <div class="week-agent-panel">
      <div class="week-agent-title">
        <span>${escapeHtml(formatSchoolTitle(schoolName))} - ${escapeHtml(weekLabel)}</span>
        <strong>${rows.length} agen</strong>
      </div>
      ${renderNoResponseInsight(rows)}
      <table class="week-agent-table">
        <thead>
          <tr>
            <th>Nama Agen</th>
            <th>#Leads</th>
            <th>%FU</th>
            <th>P</th>
            <th>H</th>
            <th>Pr</th>
            <th>C</th>
            <th>Nr</th>
            <th>%Nr</th>
            <th>L</th>
            <th>Talk</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr>
              <td>${escapeHtml(row.agent || "-")}</td>
              <td>${row.leads}</td>
              <td><span class="fu-progress-badge" style="--fu-progress:${row.fuProgress}">${row.fuProgress}%</span></td>
              <td>${row.paid || "-"}</td>
              <td>${row.hold || "-"}</td>
              <td>${row.prospect || "-"}</td>
              <td>${row.connected || "-"}</td>
              <td>${row.noResponse || "-"}</td>
              <td><span class="nr-rate-badge" style="--nr-rate:${row.noResponseRate}">${row.noResponseRate}%</span></td>
              <td>${row.lostDeal || "-"}</td>
              <td>${row.talk || "-"}</td>
              <td><span class="nr-action-pill ${row.actionTone}">${escapeHtml(row.action)}</span></td>
            </tr>
          `).join("") || `<tr><td colspan="12" class="empty-table">Belum ada data agen pada week ini.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

function renderNoResponseInsight(rows) {
  const totals = rows.reduce((summary, row) => {
    summary.leads += row.leads || 0;
    summary.noResponse += row.noResponse || 0;
    summary.connected += row.connected || 0;
    summary.highRisk += row.noResponseRate >= 60 ? 1 : 0;
    return summary;
  }, { leads: 0, noResponse: 0, connected: 0, highRisk: 0 });
  const nrRate = totals.leads ? Math.round((totals.noResponse / totals.leads) * 100) : 0;
  const connectedRate = totals.leads ? Math.round((totals.connected / totals.leads) * 100) : 0;
  const action = nrRate >= 70
    ? "Prioritas: validasi nomor dan ubah jam kontak"
    : nrRate >= 45
      ? "Prioritas: FU ulang dengan jam berbeda"
      : "NR terkendali, jaga ritme follow-up";
  const tone = nrRate >= 70 ? "high" : nrRate >= 45 ? "mid" : "low";
  return `
    <div class="nr-insight ${tone}">
      <div>
        <span>No Respon</span>
        <strong>${totals.noResponse}/${totals.leads} (${nrRate}%)</strong>
      </div>
      <div>
        <span>Connected</span>
        <strong>${connectedRate}%</strong>
      </div>
      <div>
        <span>Agen Risiko</span>
        <strong>${totals.highRisk}</strong>
      </div>
      <p>${escapeHtml(action)}</p>
    </div>
  `;
}

function buildCbcWeekAgentRows(schoolName, weekKey) {
  const records = cbcLeadRecords()
    .filter((lead) => schoolKey(lead.school) === schoolKey(schoolName))
    .filter((lead) => schoolKey(lead.weekActivity || "Tanpa Week") === weekKey);
  const byAgent = records.reduce((summary, lead) => {
    const agent = lead.agent || "Tanpa Agen";
    if (!summary[agent]) {
      summary[agent] = {
        agent,
        students: new Set(),
        fuStudents: new Set(),
        paidStudents: new Set(),
        holdStudents: new Set(),
        prospectStudents: new Set(),
        connectedStudents: new Set(),
        noResponseStudents: new Set(),
        lostDealStudents: new Set(),
        talk: 0
      };
    }
    const student = schoolKey(lead.student);
    summary[agent].students.add(student);
    if (lead.hasFu) summary[agent].fuStudents.add(student);
    if (lead.lastStatus === "Paid") summary[agent].paidStudents.add(student);
    if (lead.lastStatus === "Hold") summary[agent].holdStudents.add(student);
    if (lead.lastStatus === "Prospek") summary[agent].prospectStudents.add(student);
    if (lead.lastStatus === "Connected") summary[agent].connectedStudents.add(student);
    if (lead.lastStatus === "No Respon") summary[agent].noResponseStudents.add(student);
    if (lead.lastStatus === "Lost Deal") summary[agent].lostDealStudents.add(student);
    summary[agent].talk += Number(lead.talk || 0);
    return summary;
  }, {});
  return Object.values(byAgent)
    .map((row) => {
      const leads = row.students.size;
      return {
        ...row,
        leads,
        paid: row.paidStudents.size,
        hold: row.holdStudents.size,
        prospect: row.prospectStudents.size,
        connected: row.connectedStudents.size,
        noResponse: row.noResponseStudents.size,
        lostDeal: row.lostDealStudents.size,
        noResponseRate: leads ? Math.round((row.noResponseStudents.size / leads) * 100) : 0,
        fuProgress: leads ? Math.round((row.fuStudents.size / leads) * 100) : 0
      };
    })
    .map((row) => ({ ...row, ...noResponseAction(row) }))
    .sort((a, b) => b.leads - a.leads || a.agent.localeCompare(b.agent));
}

function noResponseAction(row) {
  if (!row.leads) return { action: "-", actionTone: "neutral" };
  if (row.noResponseRate >= 75 && row.connected <= Math.max(2, row.leads * 0.12)) {
    return { action: "Validasi nomor", actionTone: "high" };
  }
  if (row.noResponseRate >= 60) {
    return { action: "Cek jam kontak", actionTone: "high" };
  }
  if (row.noResponseRate >= 35) {
    return { action: "FU ulang", actionTone: "mid" };
  }
  return { action: "Jaga ritme", actionTone: "low" };
}

function weekActivityOrder(value) {
  const text = String(value || "").toLowerCase();
  const months = {
    januari: 1, jan: 1,
    februari: 2, feb: 2,
    maret: 3, mar: 3,
    april: 4, apr: 4,
    mei: 5,
    juni: 6, jun: 6,
    juli: 7, jul: 7,
    agustus: 8, agu: 8, aug: 8,
    september: 9, sep: 9,
    oktober: 10, okt: 10,
    november: 11, nov: 11,
    desember: 12, des: 12
  };
  const week = Number(text.match(/w\s*(\d+)/)?.[1] || 99);
  const monthKey = Object.keys(months).find((month) => text.includes(month));
  return (months[monthKey] || 99) * 10 + week;
}

function renderInsights() {
  const rows = currentRows();
  renderAlerts(rows);
  renderTransitions();
  renderTopAgents(rows);
  renderBranchSummary(rows);
}

function renderActivePeriod() {
  document.body.classList.toggle("agents-mode", state.activePeriod === "agents");
  document.body.classList.toggle("table-focus-mode", ["cbc", "nr"].includes(state.activePeriod));
  el.periodTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.target === state.activePeriod);
  });
  el.periodBoards.forEach((board) => {
    board.classList.toggle("active", board.dataset.period === state.activePeriod);
  });
  el.periodFilters.forEach((filter) => {
    filter.classList.toggle("active", filter.dataset.periodFilter === state.activePeriod);
  });
}

function render() {
  renderActivePeriod();
  renderRegionalOptions();
  renderBranchOptions();
  renderPickers();
  if (["daily", "weekly", "monthly"].includes(state.activePeriod)) {
    const periodRows = state.activePeriod === "daily"
      ? rowsForDaily()
      : state.activePeriod === "weekly"
        ? rowsForWeekly()
        : rowsForMonthly();
    const periodHead = state.activePeriod === "daily"
      ? el.dailyHead
      : state.activePeriod === "weekly"
        ? el.weeklyHead
        : el.monthlyHead;
    const periodBody = state.activePeriod === "daily"
      ? el.dailyBody
      : state.activePeriod === "weekly"
        ? el.weeklyBody
        : el.monthlyBody;
    renderHead(periodHead);
    renderBody(periodBody, periodRows);
    renderSummary();
    renderInsights();
    renderAgentBranchRecap();
    renderRegionalInsight();
  } else if (state.activePeriod === "agents") {
    renderAgentRankings();
    renderAgentRecap(currentRows());
    renderAgentBranchRecap();
    renderRegionalInsight();
  } else if (state.activePeriod === "cbc") {
    renderCbcLeads();
  } else if (state.activePeriod === "nr") {
    renderNrAnalysis();
  }
}

function csvToRows(text) {
  const rows = [];
  let cell = "";
  let row = [];
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (cell || row.length) {
        row.push(cell);
        rows.push(row);
        row = [];
        cell = "";
      }
      if (char === "\r" && next === "\n") i += 1;
    } else {
      cell += char;
    }
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

function normalizeHeader(value) {
  return value.trim().toLowerCase().replace(/[^a-z0-9%#]+/g, "_").replace(/^_+|_+$/g, "");
}

function firstCell(record, names) {
  const keys = names.map(normalizeHeader);
  const found = keys.find((key) => record[key]);
  return found ? record[found] : "";
}

function schoolKey(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function leadMatchKey(lead) {
  return [lead.student, lead.school, lead.agent].map(schoolKey).join("|");
}

function enrichMainLeadRecords(records, details) {
  const detailByLead = new Map(details.map((detail) => [leadMatchKey(detail), detail]));
  return records.map((record) => {
    const detail = detailByLead.get(leadMatchKey(record));
    return {
      ...record,
      lastDate: record.lastDate || detail?.lastDate || "",
      firstDate: record.firstDate || detail?.firstDate || "",
      frequency: Number(record.frequency || detail?.frequency || 0)
    };
  });
}

function parseCbcRows(csvText) {
  const parsed = csvToRows(csvText).filter((row) => row.some((cell) => cell.trim()));
  const headers = parsed.shift()?.map(normalizeHeader) || [];
  if (!headers.length) return [];
  return parsed.map((row) => {
    const record = Object.fromEntries(headers.map((header, index) => [header, row[index] || ""]));
    return {
      branch: firstCell(record, ["Branch", "Cabang"]) || row[0] || "",
      schoolName: firstCell(record, ["School Name", "Nama Sekolah", "Sekolah"]) || row[1] || "",
      schoolCategory: firstCell(record, ["School Category", "Kategori Sekolah", "Category"]) || row[3] || "",
      rombel: firstCell(record, ["#Rombel", "Rombel"]) || row[4] || "",
      rombelDeal: firstCell(record, ["Rombel Deal"]),
      dealPercent: firstCell(record, ["% Deal", "Deal %"]),
      leads: firstCell(record, ["#Leads", "Leads"]),
      utilize: firstCell(record, ["#Utilize", "Utilize"]),
      progress: firstCell(record, ["Progres", "Progress"]),
      paid: firstCell(record, ["#Paid", "Paid"])
    };
  }).filter((row) => Object.values(row).some(Boolean));
}

function parseMainLeadRecords(csvText) {
  const parsed = csvToRows(csvText).filter((row) => row.some((cell) => cell.trim()));
  const headers = parsed.shift()?.map(normalizeHeader) || [];
  if (!headers.length) return [];
  if (headers.includes("hasil_fu_1") || headers.includes("tanggal_fu_1")) {
    return parsed.map((row) => {
      const record = Object.fromEntries(headers.map((header, index) => [header, row[index] || ""]));
      const attempts = [0, 1, 2, 3, 4, 5]
        .map((index) => {
          const base = 18 + index * 5;
          return {
            date: normalizeSheetDate(row[base] || ""),
            status: normalizeStatus(row[base + 3] || "")
          };
        })
        .filter((attempt) => isIsoDate(attempt.date) && attempt.status)
        .sort((a, b) => parseDate(a.date) - parseDate(b.date));
      return {
        updatedAt: firstCell(record, ["Updated At", "Update At"]),
        student: row[9] || firstCell(record, ["Nama Siswa", "Student", "Nama"]) || "",
        school: row[5] || firstCell(record, ["Asal Sekolah", "School Name", "Nama Sekolah", "Sekolah", "School"]) || "",
        className: row[10] || firstCell(record, ["User Class", "Kelas", "Class"]) || "",
        weekActivity: row[2] || firstCell(record, ["Week Activity", "Week"]) || "Tanpa Week",
        branch: row[3] || firstCell(record, ["Branch", "Cabang"]) || "Tanpa Cabang",
        agent: row[12] || firstCell(record, ["Agent", "Ejen", "Nama Agen"]) || "",
        lastStatus: attempts.at(-1)?.status || "",
        firstDate: attempts[0]?.date || "",
        lastDate: attempts.at(-1)?.date || "",
        statuses: attempts,
        talk: [22, 27, 32, 37, 42, 47].reduce((sum, column) => sum + (Number(row[column]) || 0), 0),
        frequency: attempts.length,
        hasFu: attempts.length > 0
      };
    }).filter((record) => record && record.student && record.agent);
  }
  return [];
}

function normalizeStatus(value) {
  const cleaned = value.trim().toLowerCase().replace(/[_-]/g, " ");
  const found = statusColumns.find((status) => status.toLowerCase() === cleaned);
  return found || value.trim();
}

function normalizeSheetDate(value) {
  const text = value.trim();
  if (/^-?\d+(?:\.\d+)?$/.test(text)) {
    const serial = Number(text);
    const parsed = new Date(Date.UTC(1899, 11, 30) + serial * 86400000);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString().slice(0, 10);
    }
  }
  const months = {
    jan: "01", januari: "01",
    feb: "02", februari: "02",
    mar: "03", maret: "03",
    apr: "04", april: "04",
    mei: "05", may: "05",
    jun: "06", juni: "06",
    jul: "07", juli: "07",
    agu: "08", agustus: "08", aug: "08",
    sep: "09", sept: "09", september: "09",
    okt: "10", oktober: "10", oct: "10",
    nov: "11", november: "11",
    des: "12", desember: "12", dec: "12"
  };
  const wordDate = text.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
  if (wordDate) {
    const [, day, month, year] = wordDate;
    const monthNumber = months[month.toLowerCase()];
    if (monthNumber) return `${year}-${monthNumber}-${String(Number(day)).padStart(2, "0")}`;
  }
  const slashDate = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (slashDate) {
    const [, day, month, year] = slashDate;
    return `${year}-${String(Number(month)).padStart(2, "0")}-${String(Number(day)).padStart(2, "0")}`;
  }
  return text;
}

function parseSheetRows(csvText) {
  const parsed = csvToRows(csvText).filter((row) => row.some((cell) => cell.trim()));
  const headers = parsed.shift()?.map(normalizeHeader) || [];
  if (headers.includes("hasil_fu_1") || headers.includes("tanggal_fu_1")) {
    return parsed.flatMap((row) => {
      const branch = row[3] || "Tanpa Cabang";
      const agent = row[12] || "";
      if (!agent || isVacantName(agent)) return [];

      return [0, 1, 2, 3, 4, 5].flatMap((index) => {
        const base = 18 + index * 5;
        const date = normalizeSheetDate(row[base] || "");
        const status = normalizeStatus(row[base + 3] || "");
        const talk = row[base + 4] || "";
        const items = [];

        if (isIsoDate(date) && status) {
          items.push({ date, agent, branch, position: "", status, count: 1 });
        }

        if (isIsoDate(date) && talk) {
          items.push({ date, agent, branch, position: "", status: "Talk Time", count: Number(talk) || 1 });
        }

        return items;
      });
    });
  }

  return parsed.flatMap((row) => {
    const record = Object.fromEntries(headers.map((header, index) => [header, row[index] || ""]));
    const base = {
      date: record.tanggal || record.date || record.waktu || isoDate(new Date()),
      agent: record.ejen || record.agent || record.nama_ejen || record.nama || "Tanpa Nama",
      position: record.posisi || record.position || "Student Advisor"
    };

    if (record.status_fu || record.status) {
      return [{
        ...base,
        status: normalizeStatus(record.status_fu || record.status),
        count: Number(record.jumlah || record.qty || record.count || 1)
      }];
    }

    return statusColumns
      .filter((status) => record[normalizeHeader(status)])
      .map((status) => ({
        ...base,
        status,
        count: Number(record[normalizeHeader(status)] || 0)
      }));
  }).filter((row) => row.agent && row.status && Number.isFinite(row.count));
}

function parseSheetTransitions(csvText) {
  const parsed = csvToRows(csvText).filter((row) => row.some((cell) => cell.trim()));
  const headers = parsed.shift()?.map(normalizeHeader) || [];
  if (!headers.includes("hasil_fu_1") && !headers.includes("tanggal_fu_1")) return [];

  return parsed.flatMap((row) => {
    const branch = row[3] || "Tanpa Cabang";
    const agent = row[12] || "";
    if (!agent || isVacantName(agent)) return [];

    const attempts = [0, 1, 2, 3, 4, 5]
      .map((index) => {
        const base = 18 + index * 5;
        return {
          date: normalizeSheetDate(row[base] || ""),
          status: normalizeStatus(row[base + 3] || "")
        };
      })
      .filter((attempt) => isIsoDate(attempt.date) && attempt.status)
      .sort((a, b) => parseDate(a.date) - parseDate(b.date));

    return attempts.map((attempt, index) => ({
      date: attempt.date,
      agent,
      branch,
      from: index === 0 ? "Belum di FU" : attempts[index - 1].status,
      to: attempt.status
    }));
  });
}

function exportUrlFromSheetUrl(url) {
  const id = url.match(/\/d\/([^/]+)/)?.[1];
  const gid = url.match(/[?&#]gid=(\d+)/)?.[1] || "0";
  if (!id) throw new Error("URL Google Sheet tidak valid.");
  return `https://docs.google.com/spreadsheets/d/${id}/export?format=csv&gid=${gid}`;
}

function exportUrlFromSheetGid(url, gid) {
  const id = url.match(/\/d\/([^/]+)/)?.[1];
  if (!id) throw new Error("URL Google Sheet tidak valid.");
  return `https://docs.google.com/spreadsheets/d/${id}/export?format=csv&gid=${gid}`;
}

function sheetCsvUrl(url, sheet, range) {
  const id = url.match(/\/d\/([^/]+)/)?.[1];
  if (!id) throw new Error("URL Google Sheet tidak valid.");
  return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheet)}&range=${encodeURIComponent(range)}`;
}

async function fetchText(url) {
  const apiTarget = dashboardApiUrl(`/api/fetch?url=${encodeURIComponent(url)}`);
  const targets = shouldUseDashboardApi()
    ? [{ url: apiTarget, api: true }, { url, api: false }]
    : [{ url, api: false }];
  for (const target of targets) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12_000);
    try {
      const response = await fetch(target.url, {
        headers: target.api ? dashboardApiHeaders() : {},
        signal: controller.signal
      });
      if (response.ok) {
        return { ok: true, text: await response.text() };
      }
      if (target.api && [401, 403].includes(response.status)) return { ok: false, text: "" };
    } catch {
      // Try the next source, then let the caller keep using local data.
    } finally {
      clearTimeout(timeout);
    }
  }
  return { ok: false, text: "" };
}

const canSyncOnline = ["http:", "https:"].includes(window.location.protocol) || shouldUseDashboardApi();

function parseAgentValidation(csvText) {
  const parsed = csvToRows(csvText).filter((row) => row.some((cell) => cell.trim()));
  const headers = parsed.shift()?.map(normalizeHeader) || [];
  const nameIndex = headers.indexOf("nama_agent") >= 0 ? headers.indexOf("nama_agent") : 12;
  const regionalIndex = headers.indexOf("region") >= 0 ? headers.indexOf("region") : 2;
  const branchIndex = headers.indexOf("branch/cluster_name") >= 0 ? headers.indexOf("branch/cluster_name") : 5;
  const positionIndex = headers.indexOf("agent_position") >= 0 ? headers.indexOf("agent_position") : 8;
  const seen = new Set();

  return parsed.map((row) => ({
    name: (row[nameIndex] || "").trim(),
    position: (row[positionIndex] || "Student Advisor").trim(),
    regional: (row[regionalIndex] || "Tanpa Regional").trim(),
    branch: (row[branchIndex] || "Tanpa Cabang").trim()
  }))
    .filter((agent) => agent.name && !isVacantName(agent.name))
    .filter((agent) => {
      if (seen.has(agent.name)) return false;
      seen.add(agent.name);
      return true;
    });
}

async function loadValidationAgentsOnly() {
  if (!canSyncOnline) {
    el.syncStatus.textContent = "Data lokal siap digunakan. Sinkronisasi online tersedia saat dashboard memakai server.";
    return;
  }
  try {
    const result = await fetchText(sheetCsvUrl(el.sheetUrl.value || defaultSheetUrl, "Validasi", "A:M"));
    if (!result.ok) throw new Error("Akses Validasi ditolak.");
    const validationAgents = parseAgentValidation(result.text);
    if (!validationAgents.length) throw new Error("Validasi kosong atau belum terbaca.");
    state.agents = mergeAgentMaster(validationAgents);
    render();
    el.syncStatus.textContent = `${validationAgents.length} nama ejen dimuat dari Validasi. Vacant disembunyikan.`;
  } catch (error) {
    el.syncStatus.textContent = `${error.message} Masih menampilkan data contoh.`;
  }
}

async function loadSheet(options = {}) {
  const { preserveSelection = false, silent = false } = options;
  if (!canSyncOnline) {
    if (!silent) {
      el.syncStatus.textContent = "Data lokal siap digunakan. Buka melalui server untuk sinkronisasi online.";
    }
    return;
  }
  if (isSyncing) return;
  isSyncing = true;
  const previousDate = state.selectedDate;
  const previousWeek = state.selectedWeek;
  const previousMonth = state.selectedMonth;
  if (!silent) el.syncStatus.textContent = "Memuat data dari Google Sheet...";
  try {
    const sheetUrl = el.sheetUrl.value || defaultSheetUrl;
    const sourceRequests = [
      fetchText(exportUrlFromSheetUrl(sheetUrl)).then((result) => ({ name: "FU", ...result })),
      ...sulselBranchSources.map((source) => fetchText(exportUrlFromSheetGid(sheetUrl, source.gid))
        .then((result) => ({ name: source.name, ...result }))
        .catch(() => ({ name: source.name, ok: false, text: "" })))
    ];
    const [sourceResults, agentResponse, cbcResponse] = await Promise.all([
      Promise.all(sourceRequests),
      fetchText(sheetCsvUrl(sheetUrl, "Validasi", "A:M")),
      fetchText(sheetCsvUrl(sheetUrl, "CBC", "A:E"))
    ]);

    const mainSource = sourceResults[0];
    if (!mainSource.ok) throw new Error("Sheet data belum publik atau akses CSV ditolak.");
    const validSources = sourceResults.filter((source) => source.ok && source.text);
    const rows = validSources.flatMap((source) => parseSheetRows(source.text));
    const transitions = validSources.flatMap((source) => parseSheetTransitions(source.text));
    const mainLeadRecords = validSources.flatMap((source) => parseMainLeadRecords(source.text));

    if (agentResponse.ok) {
      const validationAgents = parseAgentValidation(agentResponse.text);
      if (validationAgents.length) state.agents = mergeAgentMaster(validationAgents);
    }

    if (cbcResponse.ok) {
      const liveCbcSchools = parseCbcRows(cbcResponse.text);
      if (liveCbcSchools.length) {
        state.cbcSchools = liveCbcSchools;
      }
    }

    if (rows.length) {
      state.rows = rows;
      state.transitions = transitions;
      if (mainLeadRecords.length) {
        state.mainLeadRecords = mainLeadRecords;
        state.leadDetails = mainLeadRecords
          .filter((lead) => lead.hasFu)
          .map((lead) => ({
            student: lead.student,
            school: lead.school,
            className: lead.className || "",
            agent: lead.agent,
            branch: lead.branch,
            firstDate: lead.firstDate || "",
            lastDate: lead.lastDate || "",
            lastStatus: lead.lastStatus || "",
            frequency: Number(lead.frequency || 0)
          }));
      }
      if (preserveSelection) {
        state.selectedDate = previousDate;
        state.selectedWeek = previousWeek;
        state.selectedMonth = previousMonth;
      } else {
        state.selectedDate = latestDateFromRows(rows);
        state.selectedWeek = getWeekKey(state.selectedDate);
        state.selectedMonth = getMonthKey(state.selectedDate);
      }
    } else if (window.centralFuRows?.length) {
      state.rows = [...window.centralFuRows, ...(window.sulselFuRows || [])].filter((row) => isIsoDate(row.date));
      state.transitions = [
        ...(window.centralTransitions || []),
        ...(window.embeddedTransitions || [])
      ];
      state.mainLeadRecords = enrichMainLeadRecords(
        [
          ...(window.centralMainLeadRecords || []),
          ...(window.sulselMainLeadRecords || [])
        ],
        [
          ...(window.centralLeadDetails || []),
          ...(window.sulselLeadDetails || [])
        ]
      );
      state.leadDetails = [
        ...(window.centralLeadDetails || []),
        ...(window.sulselLeadDetails || [])
      ];
    }

    render();
    const syncedAt = new Intl.DateTimeFormat("id-ID", { hour: "2-digit", minute: "2-digit" }).format(new Date());
    const branchCount = Math.max(0, validSources.length - 1);
    const branchLabel = branchCount ? ` + ${branchCount} branch Sulsel` : "";
    const localCount = state.rows.filter((row) => sulselBranchSources.some((source) => source.name === row.branch)).length;
    el.syncStatus.textContent = `${rows.length || localCount} data FU dimuat${branchLabel}. Auto sync 1 menit. Terakhir update ${syncedAt}.`;
  } catch (error) {
    if (!silent) {
      const localCount = state.rows.filter((row) => sulselBranchSources.some((source) => source.name === row.branch)).length;
      el.syncStatus.textContent = `${error.message} Data lokal Sulsel tetap ditampilkan (${localCount} data FU).`;
    }
  } finally {
    isSyncing = false;
  }
}

function startAutoSync() {
  if (autoSyncTimer) return;
  autoSyncTimer = setInterval(() => {
    loadSheet({ preserveSelection: true, silent: true });
  }, autoSyncIntervalMs);
}

el.dailyPicker.addEventListener("change", (event) => {
  state.selectedDate = event.target.value;
  render();
});

el.weeklyPicker.addEventListener("change", (event) => {
  state.selectedWeek = event.target.value;
  render();
});

el.monthlyPicker.addEventListener("change", (event) => {
  state.selectedMonth = event.target.value;
  render();
});

el.syncButton.addEventListener("click", () => loadSheet());
el.loginForm.addEventListener("submit", handleLogin);

el.regionalFilter.addEventListener("change", (event) => {
  if (state.lockedBranch) return;
  state.selectedRegional = event.target.value;
  state.selectedBranch = "all";
  render();
});

el.branchFilter.addEventListener("change", (event) => {
  if (state.lockedBranch) return;
  state.selectedBranch = event.target.value;
  render();
});

el.branchRecapFilter?.addEventListener("change", (event) => {
  recapFilterState.branch = event.target.value;
  renderAgentBranchRecap();
});

el.agentDetailFilter?.addEventListener("change", (event) => {
  state.selectedAgentDetail = event.target.value;
  render();
});

el.agentStatusFilter?.addEventListener("change", (event) => {
  state.selectedLastStatus = event.target.value;
  render();
});


el.cbcLeadBody.addEventListener("click", (event) => {
  const button = event.target.closest(".school-toggle");
  if (!button) return;
  state.selectedCbcSchool = state.selectedCbcSchool === button.dataset.school ? "" : button.dataset.school;
  state.selectedCbcWeek = "";
  renderCbcLeads();
});

el.cbcLeadBody.addEventListener("click", (event) => {
  const button = event.target.closest(".week-toggle");
  if (!button) return;
  state.selectedCbcWeek = state.selectedCbcWeek === button.dataset.week ? "" : button.dataset.week;
  renderCbcLeads();
});

el.periodTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.activePeriod = tab.dataset.target;
    render();
  });
});

(async function initializeDashboard() {
  const isLoggedIn = await applySavedLogin();
  if (!isLoggedIn) render();

  if (!isLoggedIn && shouldUseDashboardApi()) {
    el.syncStatus.textContent = "Masukkan password cabang untuk memuat data.";
    return;
  }

  await loadValidationAgentsOnly();
  if (canSyncOnline && navigator.onLine) {
    loadSheet();
    startAutoSync();
  } else {
    el.syncStatus.textContent = canSyncOnline
      ? "Data lokal siap digunakan. Koneksi online tidak tersedia."
      : "Data lokal siap digunakan. Sinkronisasi online tersedia saat dashboard memakai server.";
  }
})();
