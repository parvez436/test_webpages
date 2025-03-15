// Get faculty ID from URL
const urlParams = new URLSearchParams(window.location.search);
const facultyId = urlParams.get("id");

// Faculty data
const facultyData = [
    {
        id: 1,
        name: "Dr. John Doe",
        photo: "img1.jpg",
        designation: "Professor",
        qualification: "PhD in AI",
        dob: "20/06/1976",
        fatherName: "Rajegowda",
        homeTown: "Hassan",
        teachingExperience: [
            "Lecturer at Govt Polytechnic, KR Pet (2001-2002)",
            "Professor at ABC University (2002-Present)"
        ],
        memberships: ["AICTE Member", "Cybersecurity Council"],
        grants: ["AI Research Grant - Rs. 10,00,000"]
    },
    {
        id: 2,
        name: "Dr. Jane Smith",
        photo: "img1.jpg",
        designation: "Assistant Professor",
        qualification: "PhD in Cybersecurity",
        dob: "10/12/1980",
        fatherName: "Robert Smith",
        homeTown: "Bangalore",
        teachingExperience: [
            "Network Security Professor at XYZ University (2005-Present)"
        ],
        memberships: ["IEEE Member", "Blockchain Association"],
        grants: ["Cybersecurity Grant - Rs. 8,00,000"]
    },
    {
        id: 3,
        name: "Dr. Jane Smith",
        photo: "img1.jpg",
        designation: "Assistant Professor",
        qualification: "PhD in Cybersecurity",
        dob: "10/12/1980",
        fatherName: "Robert Smith",
        homeTown: "Bangalore",
        teachingExperience: [
            "Network Security Professor at XYZ University (2005-Present)"
        ],
        memberships: ["IEEE Member", "Blockchain Association"],
        grants: ["Cybersecurity Grant - Rs. 8,00,000"]
    },
    {
        id: 4,
        name: "Dr. Jane Smith",
        photo: "img1.jpg",
        designation: "Assistant Professor",
        qualification: "PhD in Cybersecurity",
        dob: "10/12/1980",
        fatherName: "Robert Smith",
        homeTown: "Bangalore",
        teachingExperience: [
            "Network Security Professor at XYZ University (2005-Present)"
        ],
        memberships: ["IEEE Member", "Blockchain Association"],
        grants: ["Cybersecurity Grant - Rs. 8,00,000"]
    },
    {
        id: 5,
        name: "Dr. Jane Smith",
        photo: "img1.jpg",
        designation: "Assistant Professor",
        qualification: "PhD in Cybersecurity",
        dob: "10/12/1980",
        fatherName: "Robert Smith",
        homeTown: "Bangalore",
        teachingExperience: [
            "Network Security Professor at XYZ University (2005-Present)"
        ],
        memberships: ["IEEE Member", "Blockchain Association"],
        grants: ["Cybersecurity Grant - Rs. 8,00,000"]
    },
    {
        id: 6,
        name: "Dr. Jane Smith",
        photo: "img1.jpg",
        designation: "Assistant Professor",
        qualification: "PhD in Cybersecurity",
        dob: "10/12/1980",
        fatherName: "Robert Smith",
        homeTown: "Bangalore",
        teachingExperience: [
            "Network Security Professor at XYZ University (2005-Present)"
        ],
        memberships: ["IEEE Member", "Blockchain Association"],
        grants: ["Cybersecurity Grant - Rs. 8,00,000"]
    },
    {
        id: 7,
        name: "Dr. Jane Smith",
        photo: "img2.jpg",
        designation: "Assistant Professor",
        qualification: "PhD in Cybersecurity",
        dob: "10/12/1980",
        fatherName: "Robert Smith",
        homeTown: "Bangalore",
        teachingExperience: [
            "Network Security Professor at XYZ University (2005-Present)"
        ],
        memberships: ["IEEE Member", "Blockchain Association"],
        grants: ["Cybersecurity Grant - Rs. 8,00,000"]
    },
    {
        id: 8,
        name: "Dr. Jane Smith",
        photo: "img1.jpg",
        designation: "Assistant Professor",
        qualification: "PhD in Cybersecurity",
        dob: "10/12/1980",
        fatherName: "Robert Smith",
        homeTown: "Bangalore",
        teachingExperience: [
            "Network Security Professor at XYZ University (2005-Present)"
        ],
        memberships: ["IEEE Member", "Blockchain Association"],
        grants: ["Cybersecurity Grant - Rs. 8,00,000"]
    },
];

// Find faculty by ID
const faculty = facultyData.find(f => f.id == facultyId);

// Populate Profile Page
if (faculty) {
    document.getElementById("faculty-photo").src = faculty.photo;
    document.getElementById("faculty-name").innerText = faculty.name;
    document.getElementById("faculty-designation").innerText = faculty.designation;
    document.getElementById("faculty-qualification").innerText = faculty.qualification;
    document.getElementById("dob").innerText = faculty.dob;
    document.getElementById("father-name").innerText = faculty.fatherName;
    document.getElementById("home-town").innerText = faculty.homeTown;

    function populateList(elementId, items) {
        const listElement = document.getElementById(elementId);
        listElement.innerHTML = ""; // Clear old content
        items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            listElement.appendChild(li);
        });
    }

    populateList("teaching-experience", faculty.teachingExperience);
    populateList("memberships", faculty.memberships);
    populateList("grants", faculty.grants);
}

// Back Button Function
function goBack() {
    window.location.href = "index.html";
}
