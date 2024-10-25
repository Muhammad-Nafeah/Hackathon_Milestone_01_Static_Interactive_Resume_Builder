var skillsSection = document.getElementById('skills');
var educationSection = document.getElementById('education');
var toggleSkillsButton = document.getElementById('toggle-skills');
var toggleEducationButton = document.getElementById('toggle-education');
toggleSkillsButton.addEventListener('click', function () {
    console.log("Toggle Skills button clicked");
    skillsSection.classList.toggle('hidden');
});
toggleEducationButton.addEventListener('click', function () {
    console.log("Toggle Education button clicked");
    educationSection.classList.toggle('hidden');
});
