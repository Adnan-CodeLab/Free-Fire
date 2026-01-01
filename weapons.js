let currentView = 'classes';
let selectedClassId = null;
let selectedWeaponId = null;

const sidebarNav = document.getElementById('sidebarNav');
const weaponContent = document.getElementById('weaponContent');
const searchToggle = document.getElementById('searchToggle');
const searchDropdown = document.getElementById('searchDropdown');

document.addEventListener('DOMContentLoaded' , () => {
    renderSidebar();
    renderContent();
    initSearch();
})

function initSearch() {
    if (searchToggle && searchDropdown) {
        searchToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            searchDropdown.classList.toggle('active');
            if (searchDropdown.classList.contains('active')) {
                searchDropdown.querySelector('input').focus();
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (!searchDropdown.contains(e.target) && e.target !== searchToggle) {
            searchDropdown.classList.remove('active');
        }
    });
}

function renderSidebar() {
    sidebarNav.innerHTML = weaponClasses.map(wc => `
        <div class="sidebar-class-container">
            <button 
                class="sidebar-class ${selectedClassId === wc.id ? 'active' : ''}"
                data-class-id="${wc.id}"
            >
                <span>${wc.name}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9,6 15,12 9,18"></polyline>
                </svg>
            </button>
            <div class="sidebar-weapons ${selectedClassId === wc.id ? 'open' : ''}" data-class-id="${wc.id}">
                ${wc.weapons.map(w => `
                    <button 
                        class="sidebar-weapon ${selectedWeaponId === w.id ? 'active' : ''}"
                        data-weapon-id="${w.id}"
                        data-class-id="${wc.id}"
                    >
                        ${w.name}
                    </button>
                `).join('')}
            </div>
        </div>
    `).join('');

    // Add event listeners
    document.querySelectorAll('.sidebar-class').forEach(btn => {
        btn.addEventListener('click', () => {
            const classId = btn.dataset.classId;
            handleClassSelect(classId);
        });
    });

    document.querySelectorAll('.sidebar-weapon').forEach(btn => {
        btn.addEventListener('click', () => {
            const weaponId = btn.dataset.weaponId;
            const classId = btn.dataset.classId;
            handleWeaponSelect(weaponId, classId);
        });
    });
}

// Render Content
function renderContent() {
    switch (currentView) {
        case 'classes':
            renderClassGrid();
            break;
        case 'weapons':
            renderWeaponGrid();
            break;
        case 'detail':
            renderWeaponDetail();
            break;
    }
}

// Render Class Grid
function renderClassGrid() {
    weaponContent.innerHTML = `
        <div class="content-header">
            <div class="content-title">
                <h2>Weapon Classes</h2>
                <p>Select a weapon class to explore all available weapons and their skins</p>
            </div>
        </div>
        <div class="class-grid">
            ${weaponClasses.map((wc, index) => `
                <div 
                    class="class-card animate-fade-in"
                    style="animation-delay: ${index * 50}ms"
                    data-class-id="${wc.id}"
                >
                    <div class="class-card-header">
                        <div class="class-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="22" y1="12" x2="18" y2="12"></line>
                                <line x1="6" y1="12" x2="2" y2="12"></line>
                                <line x1="12" y1="6" x2="12" y2="2"></line>
                                <line x1="12" y1="22" x2="12" y2="18"></line>
                            </svg>
                        </div>
                        <div class="class-card-info">
                            <h3>${wc.name}</h3>
                            <p>${wc.weapons.length} weapons</p>
                        </div>
                    </div>
                    <div class="class-card-weapons">
                        ${wc.weapons.slice(0, 3).map(w => `
                            <span class="weapon-tag">${w.name}</span>
                        `).join('')}
                        ${wc.weapons.length > 3 ? `
                            <span class="weapon-tag more">+${wc.weapons.length - 3} more</span>
                        ` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Add event listeners for class cards
    document.querySelectorAll('.class-card').forEach(card => {
        card.addEventListener('click', () => {
            const classId = card.dataset.classId;
            handleClassSelect(classId);
        });
    });
}

// Render Weapon Grid
function renderWeaponGrid() {
    const weaponClass = weaponClasses.find(wc => wc.id === selectedClassId);
    if (!weaponClass) return;

    weaponContent.innerHTML = `
        <div class="content-header">
            <button class="back-btn" id="backToClasses">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12,19 5,12 12,5"></polyline>
                </svg>
            </button>
            <div class="content-title">
                <h2>${weaponClass.name}</h2>
                <p>${weaponClass.weapons.length} weapons available</p>
            </div>
        </div>
    `;
}

// Render Weapon Detail
function renderWeaponDetail() {
    const weaponClass = weaponClasses.find(wc => wc.id === selectedClassId);
    const weapon = weaponClass?.weapons.find(w => w.id === selectedWeaponId);
    if (!weapon) return;

    weaponContent.innerHTML = `
        <div class="content-header">
            <button class="back-btn" id="backToWeapons">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12,19 5,12 12,5"></polyline>
                </svg>
            </button>
            <div class="content-title">
                <h2>Weapon Details</h2>
            </div>
        </div>

        <div class="weapon-detail animate-fade-in">
            <div class="weapon-detail-content">
                <div class="weapon-detail-image">
                    <img src="${getWeaponImage(weapon.id)}" alt="${weapon.name}">
                </div>
                <div class="weapon-detail-info">
                    <span class="weapon-badge">${weaponClass.name}</span>
                    <h3>${weapon.name}</h3>
                    <p>${weapon.description || 'Professional grade armament designed for high-performance combat scenarios.'}</p>
                    
                    <div class="weapon-stats">
                        <div class="stat-box">
                            <span>Damage</span>
                            <span>${weapon.stats?.damage || '--'}</span>
                        </div>
                        <div class="stat-box">
                            <span>Rate of Fire</span>
                            <span>${weapon.stats?.fireRate || '--'}</span>
                        </div>
                        <div class="stat-box">
                            <span>Range</span>
                            <span>${weapon.stats?.range || '--'}</span>
                        </div>
                        <div class="stat-box">
                            <span>Reload Speed</span>
                            <span>${weapon.stats?.reload || '--'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="skins-section animate-fade-in" style="animation-delay: 100ms">
            <h3>Available Skins</h3>
            <div class="skins-grid">
                ${(weapon.skins || []).map((skin, index) => `
                    <div class="skin-card" style="animation-delay: ${index * 50 + 150}ms">
                        <div class="skin-card-media">
                            <img src="${skin.image}" alt="${skin.name}">
                            <div class="skin-card-overlay"></div>
                            <div class="skin-card-scanline"></div>
                        </div>
                        <div class="skin-card-info">
                            <h4>${skin.name}</h4>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Event Listeners
    document.getElementById('backToWeapons').addEventListener('click', () => {
        currentView = 'weapons';
        selectedWeaponId = null;
        renderContent();
    });
}

// Render Content
function renderContent() {
    switch (currentView) {
        case 'classes':
            renderClassGrid();
            break;
        case 'weapons':
            renderWeaponGrid();
            break;
        case 'detail':
            renderWeaponDetail();
            break;
    }
}

// Event Handlers
function handleClassSelect(classId) {
    selectedClassId = classId;
    selectedWeaponId = null;
    currentView = 'weapons';
    renderSidebar();
    renderContent();
}

function handleWeaponSelect(weaponId, classId) {
    selectedClassId = classId;
    selectedWeaponId = weaponId;
    currentView = 'detail';
    renderSidebar();
    renderContent();
}
