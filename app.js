"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section)
        return;
    const button = section.querySelector('.toggle-btn');
    if (!button)
        return;
    const isActive = section.classList.toggle('active');
    const sectionName = sectionId.split('-')[0];
    button.textContent = isActive ? `Hide ${sectionName}` : `Show ${sectionName}`;
}
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
});
