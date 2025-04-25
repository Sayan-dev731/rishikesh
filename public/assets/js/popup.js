const skillData = {
    javascript: {
        title: "JavaScript",
        description: "Have little bit knowledge of Javascript. JavaScript is a versatile programming language that enables interactive web pages and is an essential part of web applications."
    },
    python: {
        title: "Python",
        description: "Learning Python for Backend-development. Python is a powerful programming language that's great for backend development, data analysis, and automation."
    },
    html: {
        title: "HTML",
        description: "Using HTML to build structure of the website. HTML is the standard markup language for creating web pages and web applications."
    },
    css: {
        title: "CSS",
        description: "Using CSS to design & add elements to the website. CSS is used to control the style and layout of web documents."
    },
    leadership: {
        title: "Leadership",
        description: "Have the confidence to lead Events & Programs. Strong leadership skills help guide teams and projects to successful outcomes."
    },
    communication: {
        title: "Communication",
        description: "Using Communication skills to interact effectively. Effective communication is key to collaboration and project success."
    },
    management: {
        title: "Management",
        description: "I have managed some good exciting events. Project and event management skills ensure smooth execution of initiatives."
    },
    networking: {
        title: "Networking",
        description: "Using networking skills to connect with peoples. Building and maintaining professional relationships is crucial in today's connected world."
    },
    criticalthinking: {
        title: "Critical Thinking",
        description: "Using critical thinking to solve Complex Problems. Analytical and problem-solving abilities help tackle challenging technical issues."
    },
    creativity: {
        title: "Creativity",
        description: "Using creativity skills to do extra-ordinary works. Creative thinking leads to innovative solutions and unique approaches."
    },
    dataanalysis: {
        title: "Data Analysis",
        description: "Using data analysis skills to keep a eye on everything. Data analysis helps make informed decisions and track important metrics."
    },
    activelistening: {
        title: "Active Listening",
        description: "Using listening skills to easily understand everything. Active listening ensures clear understanding and effective communication."
    }
};

function createPopup() {
    const popup = document.createElement('div');
    popup.className = 'skill-popup';
    popup.innerHTML = `
    <div class="popup-content">
      <span class="popup-close">&times;</span>
      <div class="popup-header">
        <img class="popup-icon" src="" alt="">
        <h2 class="popup-title"></h2>
      </div>
      <p class="popup-description"></p>
    </div>
  `;
    document.body.appendChild(popup);

    const closeBtn = popup.querySelector('.popup-close');
    closeBtn.addEventListener('click', () => popup.classList.remove('active'));

    return popup;
}

function showPopup(skillId, iconSrc) {
    const popup = document.querySelector('.skill-popup') || createPopup();
    const skill = skillData[skillId];

    popup.querySelector('.popup-icon').src = iconSrc;
    popup.querySelector('.popup-title').textContent = skill.title;
    popup.querySelector('.popup-description').textContent = skill.description;

    popup.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const logos = document.querySelectorAll('.logo-carousel-item a');
    logos.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const img = link.querySelector('img');
            const skillId = link.getAttribute('data-skill');
            showPopup(skillId, img.src);
        });
    });
});
