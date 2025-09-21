type Group = "Science" | "Arts" | "Commerce";
type Gender = "Male" | "Female" | "Others";
type Role = "Student" | "Teacher";

type Parents = {
  fatherName: string;
  motherName: string;
  guardian: string;
};

type Subjects = "Physics" | "Chemistry" | "Biology" | "Mathemetics";

type Address = {
  village: string;
  postOffice: string;
  upazila: string;
  district: string;
};

type SchoolData = {
  id: string;
  name: string;
  phone: string;
  roll?: number;
  class?: number;
  group?: Group;
  subjects?: Subjects;
  gender: Gender;
  address: Address;
  parents?: Parents;
  role: Role;
  isActive: boolean;
};

const student: SchoolData = {
  id: "A123",
  name: "Babu",
  phone: "+8801735-699781",
  roll: 611760,
  class: 9,
  group: "Science",
  gender: "Male",
  address: {
    village: "Kashimpur",
    postOffice: "HajiGanj",
    upazila: "Mithapukur",
    district: "Rangpur",
  },
  parents: {
    fatherName: "NurAlom",
    motherName: "Rina Begum",
    guardian: "Grandfather",
  },
  role: "Student",
  isActive: true,
};

const teacher: SchoolData = {
  id: "T323",
  name: "Ridoy Babu",
  phone: "+8801735-699781",
  gender: "Male",
  address: {
    village: "Kashimpur",
    postOffice: "HajiGanj",
    upazila: "Mithapukur",
    district: "Rangpur",
  },
  role: "Teacher",
  isActive: true,
};

console.log(student);
console.log(teacher);
