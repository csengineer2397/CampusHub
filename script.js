const studyGroups = [
    {
        subject: "Programming in C",
        day: "Tuesday",
        members: 5
    },

    {
        subject: "Analysis 3",
        day: "Thursday",
        members: 8
    },

    {
        subject: "JavaScript",
        day: "Saturday",
        members: 4
    }
];

const savedGroups = localStorage.getItem("studyGroups");

if (savedGroups) {
    studyGroups.length = 0;

    const savedStudyGroups = JSON.parse(savedGroups);

    savedStudyGroups.forEach(function(group) {
        studyGroups.push(group);
    });
}

const events = [
    {
        name: "💻 Coding Workshop",
        day: "Monday",
        location: "Computer Lab",
        participants: []
    },

    {
        name: "🤖 AI Club Meeting",
        day: "Wednesday",
        location: "Room 12",
        participants: []
    },

    {
        name: "🎤 Tech Conference",
        day: "Friday",
        location: "Main Hall",
        participants: []
    }
];
const eventButton = document.getElementById("eventButton");
const eventResult = document.getElementById("eventResult");
const eventSearchInput = document.getElementById("eventSearchInput");
const findEventButton = document.getElementById("findEventButton");
const createEventButton = document.getElementById("createEventButton");


findEventButton.addEventListener("click", function() {

    eventSearchWindow.style.display = "block";
    eventCreateWindow.style.display = "none";

});

createEventButton.addEventListener("click", function() {

    eventCreateWindow.style.display = "block";
    eventSearchWindow.style.display = "none";

});

const eventSearchWindow = document.getElementById("eventSearchWindow");
const eventCreateWindow = document.getElementById("eventCreateWindow");

const studyButton = document.getElementById("studyButton");
const studyResult = document.getElementById("studyResult");
const searchInput = document.getElementById("searchInput");
const findStudyButton = document.getElementById("findStudyButton");
const createStudyButton = document.getElementById("createStudyButton");

const studySearchWindow = document.getElementById("studySearchWindow");
const studyCreateWindow = document.getElementById("studyCreateWindow");
findStudyButton.addEventListener("click", function() {

    studySearchWindow.style.display = "block";
    studyCreateWindow.style.display = "none";

});

createStudyButton.addEventListener("click", function() {

    studySearchWindow.style.display = "none";
    studyCreateWindow.style.display = "block";

});

studyButton.addEventListener("click", function () {

    const searchText = searchInput.value.toLowerCase();

    studyResult.innerHTML = "";

    studyGroups.forEach(function(group) {

        if (group.subject.toLowerCase().includes(searchText)) {

            studyResult.innerHTML += `
                <div class="study-group">
                    <h4>${group.subject}</h4>
                    <p>📅 ${group.day}</p>
                    <p>👥 ${group.members} students</p>
                </div>
            `;

        }

    });

});


eventButton.addEventListener("click", function () {

    eventResult.innerHTML = "";

    const searchText = eventSearchInput.value.toLowerCase();

    events.forEach(function(event, index) {

        if (event.name.toLowerCase().includes(searchText)) {

            eventResult.innerHTML += `
                <div class="study-group">
                    <h4>${event.name}</h4>
                    <p>📅 ${event.day}</p>
                    <p>📍 ${event.location}</p>
                    <button class="join-event" data-index="${index}">Join Event</button>
                    <div class="participants"></div>
                </div>
            `;

        }

    });  
    
    const joinButtons = document.querySelectorAll(".join-event");

    joinButtons.forEach(function(button) {

        button.addEventListener("click", function() {
            const name = prompt("Please enter your name to join the event:");
            if (name) {

        button.textContent = " Joined successfully!";

const eventIndex = button.dataset.index;

if (events[eventIndex].participants.includes(name)) {

    alert("You already joined this event! 😊");

} else {

    events[eventIndex].participants.push(name);

    localStorage.setItem("events", JSON.stringify(events));

    const participants = button.nextElementSibling;

    participants.innerHTML = ` ${events[eventIndex].participants.join(", ")}`;

}

            }

    });

});

});


const resources = [
    {
        name: "C Programming Notes",
        type: "PDF",
        subject: "Programming"
    },

    {
        name: "Analysis 3 Exercises",
        type: "Exercises",
        subject: "Mathematics"
    },

    {
        name: "JavaScript Beginner Guide",
        type: "Guide",
        subject: "Web Development"
    }
];

const savedResources = localStorage.getItem("resources");

if (savedResources) {

    resources.length = 0;

    const savedResourceList = JSON.parse(savedResources);

    savedResourceList.forEach(function(resource) {
        resources.push(resource);
    });

}
const resourceButton = document.getElementById("resourceButton");
const resourceResult = document.getElementById("resourceResult");
const resourceSearchInput = document.getElementById("resourceSearchInput");

const findResourceButton = document.getElementById("findResourceButton");
const createResourceButton = document.getElementById("createResourceButton");


const resourceSearchWindow = document.getElementById("resourceSearchWindow");
const resourceCreateWindow = document.getElementById("resourceCreateWindow");

findResourceButton.addEventListener("click", function() {

    resourceSearchWindow.style.display = "block";
    resourceCreateWindow.style.display = "none";

});

createResourceButton.addEventListener("click", function() {

    resourceCreateWindow.style.display = "block";
    resourceSearchWindow.style.display = "none";

});

const resourceForm = document.getElementById("resourceForm");
const resourceNameInput = document.getElementById("resourceNameInput");
const resourceTypeInput = document.getElementById("resourceTypeInput");
const resourceSubjectInput = document.getElementById("resourceSubjectInput");

resourceForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const newResource = {
        name: resourceNameInput.value,
        type: resourceTypeInput.value,
        subject: resourceSubjectInput.value
    };

    resources.push(newResource);
    localStorage.setItem("resources", JSON.stringify(resources));

    resourceForm.reset();

    alert("Resource added successfully! ");

});

resourceButton.addEventListener("click", function () {

    resourceResult.innerHTML = "";

    const searchText = resourceSearchInput.value.toLowerCase();

    resources.forEach(function(resource) {

        if (resource.name.toLowerCase().includes(searchText)) {

            resourceResult.innerHTML += `
                <div class="resource-item">
                    <h4>${resource.name}</h4>
                    <p>📄 Type: ${resource.type}</p>
                    <p>📚 Subject: ${resource.subject}</p>
                </div>
            `;

        }

    });

});

const studyForm = document.getElementById("studyForm");
const subjectInput = document.getElementById("subjectInput");
const dayInput = document.getElementById("dayInput");
const membersInput = document.getElementById("membersInput");

studyForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const newGroup = {
        subject: subjectInput.value,
        day: dayInput.value,
        members: Number(membersInput.value)
    };

    studyGroups.push(newGroup);
    localStorage.setItem("studyGroups", JSON.stringify(studyGroups));

    studyForm.reset();

    alert("Study group added successfully!");
});
const eventForm = document.getElementById("eventForm");
const eventNameInput = document.getElementById("eventNameInput");
const eventDayInput = document.getElementById("eventDayInput");
const eventLocationInput = document.getElementById("eventLocationInput");

eventForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const newEvent = {
    name: eventNameInput.value,
    day: eventDayInput.value,
    location: eventLocationInput.value,
    participants: []
};

    events.push(newEvent);
    localStorage.setItem("events", JSON.stringify(events));

    eventForm.reset();

    alert("Event added successfully! 🎉");
});

const savedEvents = localStorage.getItem("events");

if (savedEvents) {

    events.length = 0;

    const savedEventList = JSON.parse(savedEvents);

    savedEventList.forEach(function(event) {
        events.push(event);
    });

}