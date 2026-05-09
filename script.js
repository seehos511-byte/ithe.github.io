// Image Upload
const imgInput = document.getElementById('img-input');
imgInput.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => document.getElementById('char-img').src = e.target.result;
        reader.readAsDataURL(this.files[0]);
    }
});

// Button Handlers
document.getElementById('add-skill-btn').addEventListener('click', () => {
    const val = prompt("Enter Skill, Language, or Proficiency:");
    if (val) addTag('skills-list', val);
});

document.getElementById('add-ability-btn').addEventListener('click', () => {
    const val = prompt("Enter Ability Name:");
    if (val) addListItem('ability-list', val);
});

document.getElementById('add-gear-btn').addEventListener('click', () => {
    const name = prompt("Item Name:");
    const desc = prompt("Item Description:");
    if (name) addComplexItem('gear-list', name, desc);
});

document.getElementById('add-passive-btn').addEventListener('click', () => {
    const name = prompt("Passive Name:");
    const desc = prompt("Passive Description:");
    if (name) addComplexItem('passive-list', name, desc);
});

// Helper Functions
function addTag(containerId, text) {
    const container = document.getElementById(containerId);
    const span = document.createElement('span');
    span.className = 'tag';
    span.textContent = text;
    container.appendChild(span);
}

function addListItem(containerId, text) {
    const container = document.getElementById(containerId);
    const div = document.createElement('div');
    div.className = 'list-item';
    div.textContent = text;
    container.appendChild(div);
}

function addComplexItem(containerId, name, desc) {
    const container = document.getElementById(containerId);
    const div = document.createElement('div');
    div.className = 'list-item';
    div.textContent = name;
    div.dataset.info = desc || "No details provided.";
    div.addEventListener('click', () => {
        document.getElementById('modal-title').textContent = name;
        document.getElementById('modal-desc').textContent = div.dataset.info;
        document.getElementById('modal').style.display = 'flex';
    });
    container.appendChild(div);
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}
