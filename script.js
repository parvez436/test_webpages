document.addEventListener("DOMContentLoaded", function () {
    const facultyList = document.getElementById("faculty-list");

    const facultyData = [
        {
            id: 1,
            name: "Dr. John Doe",
            photo: "img1.jpg",
            designation: "Professor",
            qualification: "PhD in AI",
            expertise: "Machine Learning",
            email: "john.doe@example.com",
            phone: "+91 9823423270"
        },
        {
            id: 2,
            name: "Dr. Jane Smith",
            photo: "img1.jpg",
            designation: "Assistant Professor",
            qualification: "PhD in Cybersecurity",
            expertise: "Network Security",
            email: "jane.smith@example.com",
            phone: "+91 9876543211"
        },
        {
            id: 3,
            name: "Dr. Alice Johnson",
            photo: "img1.jpg",
            designation: "Lecturer",
            qualification: "M.Tech in Robotics",
            expertise: "Automation & AI",
            email: "alice.johnson@example.com",
            phone: "+91 9876543212"
        },
        {
            id: 3,
            name: "Dr. Alice Johnson",
            photo: "img1.jpg",
            designation: "Lecturer",
            qualification: "M.Tech in Robotics",
            expertise: "Automation & AI",
            email: "alice.johnson@example.com",
            phone: "+91 9876543212"
        },
        {
            id: 3,
            name: "Dr. Alice Johnson",
            photo: "img1.jpg",
            designation: "Lecturer",
            qualification: "M.Tech in Robotics",
            expertise: "Automation & AI",
            email: "alice.johnson@example.com",
            phone: "+91 9876543212"
        },
        {
            id: 3,
            name: "Dr. Alice Johnson",
            photo: "img1.jpg",
            designation: "Lecturer",
            qualification: "M.Tech in Robotics",
            expertise: "Automation & AI",
            email: "alice.johnson@example.com",
            phone: "+91 9876543212"
        },
        {
            id: 3,
            name: "Dr. Alice Johnson",
            photo: "img1.jpg",
            designation: "Lecturer",
            qualification: "M.Tech in Robotics",
            expertise: "Automation & AI",
            email: "alice.johnson@example.com",
            phone: "+91 9876543212"
        },
        {
            id: 3,
            name: "Dr. Alice Johnson",
            photo: "img1.jpg",
            designation: "Lecturer",
            qualification: "M.Tech in Robotics",
            expertise: "Automation & AI",
            email: "alice.johnson@example.com",
            phone: "+91 9876543212"
        },
    ];

    facultyData.forEach(faculty => {
        const card = document.createElement("div");
        card.classList.add("faculty-card");

        card.innerHTML = `
            <img src="${faculty.photo}" alt="${faculty.name}">
            <h3>${faculty.name}</h3>
            <p><strong>${faculty.designation}</strong></p>
            <p>Qualification: ${faculty.qualification}</p>
            <p>Email: <span class="email">${faculty.email}</span></p>
            <p>Phone: ${faculty.phone}</p>
            <button class="view-profile-btn" onclick="viewProfile(${faculty.id})">View Profile</button>
        `;

        facultyList.appendChild(card);
    });
});

// Redirect to profile page with faculty ID
function viewProfile(facultyId) {
    window.location.href = `profile.html?id=${facultyId}`;
}
