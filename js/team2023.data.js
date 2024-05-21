/* ********************************************************** */
// Members Details Data Object
/* ********************************************************** */

// *************** Lead Members Details  ***************************
let leadMemberDetails2023 = [
  {
    id: 0,
    name: "Parth Bhatnagar",
    avatar: "../assets/img/team/Parth_Bhatnagar.jpeg",
    badges: `<span class="green">President</span>`,
    socialLinkedinLink: "",
  },
  {
    id: 1,
    name: "Vedang Patil",
    avatar: "../assets/img/team/Vedang_Patil.jpeg",
    badges: `<span class="green">Vice-President</span>`,
    socialLinkedinLink: "",
  },
  {
    id: 2,
    name: "Disha Himani",
    avatar: "../assets/img/team/Disha_Himani.jpeg",
    badges: `<span class="green">Co-Vice President</span>`,
    socialLinkedinLink: "",
  }
];

// *************** Core Members Details  ***************************
let coreMemberDetails2023 = [
  {
    id: 0,
    name: "Malhar Jachak",
    avatar: "../assets/img/team/Malhar_Jachak.jpeg",
    badges: `<span class="green">General Secretary</span>`,
    socialLinkedinLink: "",
  },
  {
    id: 1,
    name: "Bonam Sai Shreyea",
    avatar: "../assets/img/team/Sai_Shreya.jpeg",
    badges: `<span class="green">Treasurer</span>`,
    socialLinkedinLink: "",
  }
];

// *************** Technical Team Members Details 2023 ***************************
let techMemberDetails2023 = [
  {
    id: 0,
    name: "Raghav Gupta",
    avatar: "../assets/img/team/Raghav_Gupta.jpeg",
    badges: `<span class="green">Technical Team</span>`,
    socialLinkedinLink: "",
  },
  {
    id: 1,
    name: "Vishnu Bhattacharya",
    avatar: "../assets/img/team/Vishnu_Bhattacharya.jpeg",
    badges: `<span class="green">Technical Team</span>`,
    socialLinkedinLink: "",
  },
  {
    id: 2,
    name: "Vaibhav Sharma",
    avatar: "../assets/img/team/Vaibhav_Sharma.jpeg",
    badges: `<span class="green">Technical Team</span>`,
    socialLinkedinLink: "",
  }  
];

// *************** Logistic Team Members Details 2023 ***************************
let logiMemberDetails2023 = [
  {
    id: 0,
    name: "Saurabh Kumar",
    avatar: "../assets/img/team/Saurabh_Kumar.jpeg",
    badges: `<span class="green">Logistic Team</span>`,
    socialLinkedinLink: "",
  },
  {
    id: 1,
    name: "Ambikesh Jha",
    avatar: "../assets/img/team/Ambikesh_Jha.jpeg",
    badges: `<span class="green">Logistic Team</span>`,
    socialLinkedinLink: "",
  },
  {
    id: 2,
    name: "Divyansh Pandey",
    avatar: "../assets/img/team/Divyansh_Pandey.jpeg",
    badges: `<span class="green">Logistic Team</span>`,
    socialLinkedinLink: "",
  },
  {
    id: 3,
    name: "Viasmay Telluri",
    avatar: "../assets/img/team/Vismay_Telluri.jpeg",
    badges: `<span class="green">Logistic Team</span>`,
    socialLinkedinLink: "",
  },
  {
    id: 4,
    name: "Krishna Pandey",
    avatar: "../assets/img/team/Krishan_Pandey.jpeg",
    badges: `<span class="green">Logistic Team</span>`,
    socialLinkedinLink: "",
  },
  {
    id: 5,
    name: "Avi Nandwani",
    avatar: "../assets/img/team/Avi_Nandwani.jpeg",
    badges: `<span class="green">Logistic Team</span>`,
    socialLinkedinLink: "",
  }
];

// *************** Marketing Team Members Details 2023 ***************************
let marketMemberDetails2023 = [
  {
    id: 0,
    name: "Jhanavi Agarwal",
    avatar: "../assets/img/team/Jhanavi_Agarwal.jpeg",
    badges: `<span class="green">Marketing Team</span>`,
    socialLinkedinLink: "",
  },
  {
    id: 1,
    name: "Aishwarya Venkatesh",
    avatar: "../assets/img/team/Aishwarya_Venkatesh.jpeg",
    badges: `<span class="green">Marketing Team</span>`,
    socialLinkedinLink: "",
  },
  {
    id: 2,
    name: "Shreya Sharma",
    avatar: "../assets/img/team/Shreya_Sharma.jpeg",
    badges: `<span class="green">Marketing Team</span>`,
    socialLinkedinLink: "",
  },
];

// *************** Research & Development Team Members Details 2023 ***************************
let rdMemberDetails2023 = [
  {
    id: 0,
    name: "Anushree Jha",
    avatar: "../assets/img/team/Anushree_Jha.jpeg",
    badges: `<span class="green">R&D Team</span>`,
    socialLinkedinLink: "",
  },
  {
    id: 1,
    name: "Amrita Goswami",
    avatar: "../assets/img/team/Amrita_Goswami.jpeg",
    badges: `<span class="green">R&D Team</span>`,
    socialLinkedinLink: "",
  },
  {
    id: 2,
    name: "Sanjana",
    avatar: "../assets/img/team/Sanjana.jpeg",
    badges: `<span class="green">R&D Team</span>`,
    socialLinkedinLink: "",
  },
];

/* ********************************************************** */
// Members Preview Mapping
/* ********************************************************** */
let leadMember = document.querySelector("#lead");
let coreMember = document.querySelector("#core");
let techMember = document.querySelector("#tech");
let logiMember = document.querySelector("#logi");
let marketMember = document.querySelector("#market");
let rdMember = document.querySelector("#rd");

// **************** Lead Member 2023 ***********************

Object.values(leadMemberDetails2023).map((val) => {
  leadMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
                <a href="${val.socialLinkedinLink}"><i class="bx bxl-linkedin"></i></a>
            </div>
        </div>
    `;
});

// **************** Core Member 2023 ***********************

Object.values(coreMemberDetails2023).map((val) => {
  coreMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>
        </div>
    `;
});

// *************** Technical Team Members Details********

Object.values(techMemberDetails2023).map((val) => {
  techMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>
        </div>
    `;
});

// *************** Logistic Team Members Details********

Object.values(logiMemberDetails2023).map((val) => {
  logiMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>
        </div>
    `;
});

// *************** Marketing Team Members Details********

Object.values(marketMemberDetails2023).map((val) => {
  marketMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>
        </div>
    `;
});

// *************** Research and Development Team Members********

Object.values(rdMemberDetails2023).map((val) => {
  rdMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>
        </div>
    `;
});
