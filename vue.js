var app = new Vue({
  el: "#app",
  data: {
    pageTitle: "New Student Information",
    sectionTitle: "Student Personal Record",
    profilePhoto: "<img src='pic3.jpg' alt='profile-photo'>",
    firstName: null,
    lastName: null,
    techID: null,
    major: null,
    graduationYear: null,
    gpa: null,
    gpaColor: null,
    student: [
      {
        firstName: "Abdullahi",
        lastName: "Mohamed",
        preferredName: null,
        major: {
          id: 1,
          name: "Computer Programming",
          totalCredits: 50,
        },
        graduationYear: "2022",
        gpa: 2.5,
      },
      {
        firstName: "John",
        lastName: "Smith",
        preferredName: null,
        major: {
          id: 2,
          name: "Cyber Security",
          totalCredits: 38,
        },
        graduationYear: "2023",
        gpa: 3.7,
      },
      {
        firstName: "Alex",
        lastName: "Luther",
        preferredName: null,
        major: {
          id: 3,
          name: "Computer Science",
          totalCredits: 55,
        },
        graduationYear: "2022",
        gpa: 4.0,
      },
    ],
    updated: "",
    visibleOrNot: true,
  },
  methods: {
    fullName: function (lastName, firstName) {
      return lastName + ", " + firstName;
    },
    hideInput: function () {
      if (this.visibleOrNot) this.visibleOrNot = false;
      else this.visibleOrNot = true;
    },
  },
  computed: {
    // this will not return class/color. the gpa and gpaColor variables are not getting assigned. Tips on how to solve?
    setGPAColor: function () {
      this.gpa = this.student.gpa;
      if (this.gpa >= 3) {
        this.gpaColor = "green";
      }
      if (this.gpa >= 2) {
        this.gpaColor = "yellow";
      }
      if (this.gpa >= 1) {
        this.gpaColor = "orange";
      } else {
        this.gpaColor = "red";
      }
      console.log(this.student.gpa + " - " + this.gpaColor);

      return this.gpaColor;
    },
  },
  template: "#Divtemplate",
});

const techID = document.getElementById("setTechID");
techID.onclick = () => {
  if (!app.$data.techID) app.$data.techID = "1254560";
  else app.$data.techID = null;
};
