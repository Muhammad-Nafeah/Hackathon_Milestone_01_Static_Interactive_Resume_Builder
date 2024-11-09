function toggleSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const button = section.querySelector('.toggle-btn') as HTMLButtonElement | null;
    if (!button) return;

    const isActive = section.classList.toggle('active');

    const sectionName = sectionId.split('-')[0];
    button.textContent = isActive ? `Hide ${sectionName}` : `Show ${sectionName}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll<HTMLElement>('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
});


