// Image Upload logic
document.getElementById('img-input').addEventListener('change', function(e) {
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => document.getElementById('char-img').src = e.target.result;
        reader.readAsDataURL(this.files[0]);
    }
});

// Simple Adder (Skills/Abilities)
function addItem(containerId, promptText) {
    const val = prompt(`Enter ${promptText}:`);
    if (!val) return;
    const container = document.getElementById(containerId);
    const div = document.createElement('div');
    div.className = 'list-item';
    div.textContent = val;
    container.appendChild(div);
}

// Complex Adder (Gear/Passives with Modals)
function addComplexItem(containerId, namePrompt, descPrompt) {
    const name = prompt(`Enter ${namePrompt}:`);
    const desc = prompt(`Enter ${descPrompt}:`);
    if (!name) return;

    const container = document.getElementById(containerId);
    const div = document.createElement('div');
    div.className = 'list-item';
    div.textContent = name;
    
    // Store description in a data attribute
    div.dataset.description = desc || "No description provided.";
    
    div.onclick = function() {
        showModal(name, div.dataset.description);
    };
    
    container.appendChild(div);
}

// Modal Logic
function showModal(title, desc) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-desc').textContent = desc;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
