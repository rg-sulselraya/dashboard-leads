const statusColumns = ["Paid", "Hold", "Prospek", "Connected", "No Respon", "Lost Deal", "Invalid", "Talk Time"];
const fuStatusColumns = statusColumns.filter((status) => status !== "Talk Time");

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
  rows: (window.embeddedFuRows || sampleRows).filter((row) => isIsoDate(row.date)),
  leadDetails: window.embeddedLeadDetails || [],
  transitions: [],
  agents: fallbackAgents,
  activePeriod: "daily",
  selectedRegional: "all",
  selectedBranch: "all",
  selectedDate: "2026-08-04",
  selectedWeek: "2026-W32",
  selectedMonth: "2026-08",
  selectedAgentDetail: "all",
  selectedLastStatus: "all"
};

const defaultSheetUrl = "https://docs.google.com/spreadsheets/d/1m-UZxq6jTF5bOCEVlcoqy1pRYL02or5MqEPp-xzzi7k/edit?gid=0#gid=0";
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
  dailyPicker: document.querySelector("#dailyPicker"),
  weeklyPicker: document.querySelector("#weeklyPicker"),
  monthlyPicker: document.querySelector("#monthlyPicker"),
  dailyHead: document.querySelector("#dailyHead"),
  weeklyHead: document.querySelector("#weeklyHead"),
  monthlyHead: document.querySelector("#monthlyHead"),
  dailyBody: document.querySelector("#dailyBody"),
  weeklyBody: document.querySelector("#weeklyBody"),
  monthlyBody: document.querySelector("#monthlyBody"),
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

function getWeekKey(value) {
  const date = parseDate(value);
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNumber = target.getUTCDay() || 7;
  target.setUTCDate(target.getUTCDate() + 4 - dayNumber);
  const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
  const weekNumber = Math.ceil((((target - yearStart) / 86400000) + 1) / 7);
  return `${target.getUTCFullYear()}-W${String(weekNumber).padStart(2, "0")}`;
}

function getWeekLabel(weekKey) {
  const weekRows = state.rows.filter((row) => getWeekKey(row.date) === weekKey);
  const firstDate = weekRows.map((row) => parseDate(row.date)).sort((a, b) => a - b)[0];
  if (!firstDate) return weekKey;
  const weekInMonth = Math.ceil(firstDate.getDate() / 7);
  const month = new Intl.DateTimeFormat("id-ID", { month: "long" }).format(firstDate);
  return `W${weekInMonth} ${month}`;
}

function getMonthKey(value) {
  return value.slice(0, 7);
}

function uniqueSorted(values) {
  return [...new Set(values)].sort();
}

function isIsoDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value || "");
}

function isVacantName(name) {
  return !name || name.toLowerCase().includes("vacant");
}

function regionalForAgent(agent) {
  return agent.regional || branchRegionalMap[agent.branch] || "Tanpa Regional";
}

function getAgentMaster(rows = []) {
  const branchByAgent = new Map(state.agents.map((agent) => [agent.name, agent.branch || "Tanpa Cabang"]));
  const regionalByAgent = new Map(state.agents.map((agent) => [agent.name, regionalForAgent(agent)]));
  const fromRows = rows.map((row) => ({
    name: row.agent,
    position: row.position || "Student Advisor",
    branch: branchByAgent.get(row.agent) || row.branch || "Tanpa Cabang",
    regional: regionalByAgent.get(row.agent) || row.regional || branchRegionalMap[row.branch] || "Tanpa Regional"
  }));
  const byName = new Map([...state.agents, ...fromRows]
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
  const branchDisabled = state.selectedRegional === "all";
  if (branchDisabled) state.selectedBranch = "all";
  const branches = uniqueSorted(state.agents
    .filter((agent) => !isVacantName(agent.name))
    .filter((agent) => state.selectedRegional === "all" || regionalForAgent(agent) === state.selectedRegional)
    .map((agent) => agent.branch || "Tanpa Cabang"));

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

  if (state.selectedRegional !== "all" && !regionals.includes(state.selectedRegional)) {
    state.selectedRegional = "all";
    state.selectedBranch = "all";
  }

  el.regionalFilter.innerHTML = `<option value="all">Semua Regional</option>${regionals
    .map((regional) => `<option value="${regional}">${regional.replace("Regional - ", "")}</option>`)
    .join("")}`;
  el.regionalFilter.value = state.selectedRegional;
}

function renderPickers() {
  const dates = uniqueSorted(state.rows.map((row) => row.date).filter(isIsoDate));
  const weeks = uniqueSorted(state.rows.map((row) => getWeekKey(row.date)));
  const months = uniqueSorted(state.rows.map((row) => getMonthKey(row.date)));

  if (!dates.includes(state.selectedDate)) state.selectedDate = dates.at(-1) || isoDate(new Date());
  if (!weeks.includes(state.selectedWeek)) state.selectedWeek = weeks.at(-1) || getWeekKey(state.selectedDate);
  if (!months.includes(state.selectedMonth)) state.selectedMonth = months.at(-1) || getMonthKey(state.selectedDate);

  el.dailyPicker.innerHTML = dates.map((date) => `<option value="${date}">${formatDay(date)}</option>`).join("");
  el.dailyPicker.min = dates[0] || "";
  el.dailyPicker.max = dates.at(-1) || "";
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
  const filtered = applyTransitionFilters(state.transitions);
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
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value || a.label.localeCompare(b.label))
    .slice(0, 8);
  const total = transitions.length;
  el.transitionTitle.textContent = `${total} perubahan`;
  el.transitionList.innerHTML = items.map((item) => {
    const width = total ? Math.round((item.value / total) * 100) : 0;
    return `
      <div class="transition-row">
        <strong>${item.label}</strong>
        <div class="mini-bar"><i style="width:${width}%"></i></div>
        <b>${item.value}</b>
      </div>
    `;
  }).join("") || `<div class="empty-insight">Belum ada perubahan status pada periode ini.</div>`;
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

function renderAgentRecap(rows) {
  renderAgentDetailFilters(rows);
  renderAgentDetailTable();
  el.agentRecapHead.innerHTML = `
    <tr>
      <th>Nama Ejen</th>
      <th>Leads</th>
      <th>Utilize</th>
      ${statusColumns.map((status) => `<th>${status}</th>`).join("")}
    </tr>
  `;
  const agents = getAgentMaster(rows)
    .map((agent) => {
      const agentRows = rows.filter((row) => row.agent === agent.name);
      const leads = fuStatusColumns.reduce((sum, status) => sum + sumRows(agentRows, status), 0);
      const utilize = ["Paid", "Hold", "Prospek", "Connected"]
        .reduce((sum, status) => sum + sumRows(agentRows, status), 0);
      return { ...agent, leads, utilize, rows: agentRows };
    })
    .sort((a, b) => b.leads - a.leads || b.utilize - a.utilize || a.name.localeCompare(b.name));

  el.agentRecapBody.innerHTML = agents.map((agent) => `
    <tr class="${agent.leads ? "" : "no-data-row"}">
      <td>${agent.name}</td>
      <td class="total-cell">${agent.leads || "-"}</td>
      <td class="total-cell">${agent.utilize || "-"}</td>
      ${statusColumns.map((status) => {
        const value = sumRows(agent.rows, status);
        return `<td class="${value ? "" : "empty-cell"}">${value || "-"}</td>`;
      }).join("")}
    </tr>
  `).join("") || `<tr><td colspan="${statusColumns.length + 3}" class="empty-table">Tidak ada data ejen pada filter ini.</td></tr>`;
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

function renderInsights() {
  const rows = currentRows();
  renderAlerts(rows);
  renderTransitions();
  renderTopAgents(rows);
  renderBranchSummary(rows);
  renderAgentRecap(rows);
}

function renderActivePeriod() {
  document.body.classList.toggle("agents-mode", state.activePeriod === "agents");
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
  renderHead(el.dailyHead);
  renderHead(el.weeklyHead);
  renderHead(el.monthlyHead);
  renderBody(el.dailyBody, rowsForDaily());
  renderBody(el.weeklyBody, rowsForWeekly());
  renderBody(el.monthlyBody, rowsForMonthly());
  renderSummary();
  renderInsights();
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
  return value.trim().toLowerCase().replace(/\s+/g, "_");
}

function normalizeStatus(value) {
  const cleaned = value.trim().toLowerCase().replace(/[_-]/g, " ");
  const found = statusColumns.find((status) => status.toLowerCase() === cleaned);
  return found || value.trim();
}

function normalizeSheetDate(value) {
  const text = value.trim();
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

function sheetCsvUrl(url, sheet, range) {
  const id = url.match(/\/d\/([^/]+)/)?.[1];
  if (!id) throw new Error("URL Google Sheet tidak valid.");
  return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheet)}&range=${encodeURIComponent(range)}`;
}

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
  try {
    const response = await fetch(sheetCsvUrl(el.sheetUrl.value || defaultSheetUrl, "Validasi", "A:M"));
    if (!response.ok) throw new Error("Akses Validasi ditolak.");
    const validationAgents = parseAgentValidation(await response.text());
    if (!validationAgents.length) throw new Error("Validasi kosong atau belum terbaca.");
    state.agents = validationAgents;
    render();
    el.syncStatus.textContent = `${validationAgents.length} nama ejen dimuat dari Validasi. Vacant disembunyikan.`;
  } catch (error) {
    el.syncStatus.textContent = `${error.message} Masih menampilkan data contoh.`;
  }
}

async function loadSheet() {
  el.syncStatus.textContent = "Memuat data dari Google Sheet...";
  try {
    const dataResponse = await fetch(exportUrlFromSheetUrl(el.sheetUrl.value));
    const agentResponse = await fetch(sheetCsvUrl(el.sheetUrl.value, "Validasi", "A:M"));

    if (!dataResponse.ok) throw new Error("Sheet data belum publik atau akses CSV ditolak.");
    const csvText = await dataResponse.text();
    const rows = parseSheetRows(csvText);
    const transitions = parseSheetTransitions(csvText);

    if (agentResponse.ok) {
      const validationAgents = parseAgentValidation(await agentResponse.text());
      if (validationAgents.length) state.agents = validationAgents;
    }

    if (rows.length) {
      state.rows = rows;
      state.transitions = transitions;
      state.selectedDate = uniqueSorted(rows.map((row) => row.date)).at(-1);
      state.selectedWeek = getWeekKey(state.selectedDate);
      state.selectedMonth = getMonthKey(state.selectedDate);
    }

    render();
    el.syncStatus.textContent = `${rows.length} data FU dimuat. ${state.agents.length} nama ejen dari Validasi.`;
  } catch (error) {
    el.syncStatus.textContent = `${error.message} Data contoh tetap ditampilkan.`;
  }
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

el.syncButton.addEventListener("click", loadSheet);

el.regionalFilter.addEventListener("change", (event) => {
  state.selectedRegional = event.target.value;
  state.selectedBranch = "all";
  render();
});

el.branchFilter.addEventListener("change", (event) => {
  state.selectedBranch = event.target.value;
  render();
});

el.agentDetailFilter.addEventListener("change", (event) => {
  state.selectedAgentDetail = event.target.value;
  render();
});

el.agentStatusFilter.addEventListener("change", (event) => {
  state.selectedLastStatus = event.target.value;
  render();
});

el.periodTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.activePeriod = tab.dataset.target;
    render();
  });
});

render();
loadValidationAgentsOnly();
