const skillsSection = document.getElementById('skills') as HTMLElement;
const educationSection = document.getElementById('education') as HTMLElement;


const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const toggleEducationButton = document.getElementById('toggle-education') as HTMLButtonElement;

toggleSkillsButton.addEventListener('click', () => {
    console.log("Toggle Skills button clicked");
    skillsSection.classList.toggle('hidden');
});

toggleEducationButton.addEventListener('click', () => {
    console.log("Toggle Education button clicked");
    educationSection.classList.toggle('hidden');
});


