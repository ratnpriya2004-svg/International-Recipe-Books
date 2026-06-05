let allCountries = [];
let isAdminMode = false;
let countriesVisible = true;

function toggleMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuContent = document.getElementById('menuContent');
    if (menuToggle && menuContent) {
        menuToggle.classList.toggle('active');
        menuContent.classList.toggle('hidden');
    }
}

function generateCountryCards(filteredCountries = null) {
    const grid = document.getElementById('country-grid');
    const noResults = document.getElementById('noResults');
    if (!grid) return;
    
    grid.innerHTML = '';
    const countries = filteredCountries || allCountries;
    
    if (countries.length === 0 && noResults) {
        noResults.classList.remove('hidden');
        return;
    }
    if (noResults) noResults.classList.add('hidden');
    
    countries.forEach(countryCode => {
        const country = recipeBooks[countryCode];
        if (!country) return;
        
        const card = document.createElement('div');
        card.className = 'country-card';
        card.style.cursor = 'pointer';
        card.style.transition = 'all 0.3s ease';
        card.innerHTML = `
            <div style="font-size: 4rem; margin-bottom: 1rem;">${country.flag}</div>
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">${country.icon}</div>
            <h2 class="country-name">${country.name}</h2>
            <div class="country-count">${country.recipes.length} Authentic Recipes</div>
            <div style="font-size: 0.8rem; opacity: 0.8; margin-top: 0.5rem;">
                ${country.recipes.slice(0,3).map(r => (r.name || r)).join(', ')}...
            </div>
        `;
        card.onclick = () => openCountryPage(countryCode);
        grid.appendChild(card);
    });
}

function testIndia() {
    openCountryPage('india');
}

function toggleAllCountries() {
    countriesVisible = true;
    const showBtn = document.getElementById('showAllBtn');
    const hideBtn = document.getElementById('hideAllBtn');
    if (showBtn) showBtn.classList.add('active');
    if (hideBtn) hideBtn.classList.remove('active');
    generateCountryCards();
}

function hideAllCountries() {
    const grid = document.getElementById('country-grid');
    const showBtn = document.getElementById('showAllBtn');
    const hideBtn = document.getElementById('hideAllBtn');
    if (grid) grid.innerHTML = '';
    if (showBtn) showBtn.classList.remove('active');
    if (hideBtn) hideBtn.classList.add('active');
}

function openCountryPage(countryCode) {
    const country = recipeBooks[countryCode];
    if (!country) {
        alert('❌ Country not found: ' + countryCode);
        return;
    }
    
    const newWindow = window.open('', '_blank');
    const recipeBooksCopy = JSON.parse(JSON.stringify(recipeBooks));
    
    const recipeButtons = country.recipes.slice(0,15).map((recipe, index) => {
        const name = recipe.name || recipe;
        return `
            <div class="recipe-btn" style="padding:1.5rem;border-radius:20px;cursor:pointer;border:1px solid rgba(255,255,255,0.2);transition:all 0.3s;font-size:1.1rem;background:rgba(255,255,255,0.12);margin:0.5rem 0;" 
                 onclick="openRecipePage('${countryCode}', ${index})">
                <div style="font-size:1.6rem;margin-bottom:0.5rem;">${name}</div>
                <div style="font-size:0.95rem;opacity:0.9;display:flex;gap:1rem;flex-wrap:wrap;">
                    ${recipe.time ? `⏱️ ${recipe.time}` : ''} 
                    ${recipe.difficulty ? `🌶️ ${recipe.difficulty}` : ''} 
                    ${recipe.servings ? `👥 ${recipe.servings}` : ''}
                </div>
            </div>
        `;
    }).join('');
    
    newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${country.name} - Recipes</title>
            <style>
                *{margin:0;padding:0;box-sizing:border-box;}
                body{background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(/assests/bb.jpg);background-size:cover;background-position:center;background-attachment:fixed;color:white;font-family:'Segoe UI',sans-serif;min-height:100vh;padding:2rem;}
                .container{max-width:1200px;margin:0 auto;}
                .back-btn{background:rgba(255,255,255,0.1);color:white;border:2px solid rgba(255,255,255,0.3);padding:1.2rem 2.5rem;border-radius:25px;cursor:pointer;font-size:1.1rem;margin-bottom:2rem;display:block;}
                .back-btn:hover{background:rgba(255,255,255,0.2);transform:translateY(-3px);}
                .country-header{display:flex;align-items:center;gap:1rem;margin-bottom:2rem;padding:2rem;background:rgba(255,255,255,0.08);border-radius:25px;border:1px solid rgba(255,255,255,0.2);}
                .recipe-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.5rem;}
                .recipe-btn:hover{background:rgba(255,255,255,0.22);transform:translateX(15px) scale(1.02);box-shadow:0 15px 35px rgba(0,0,0,0.3);}
                h1{font-size:2.5rem;margin:0;}
                .recipe-count{font-size:1.2rem;opacity:0.9;margin-top:1rem;}
            </style>
            <script>
                const recipeBooks = ${JSON.stringify(recipeBooksCopy)};
                function openRecipePage(countryCode, recipeIndex) {
                    const country = recipeBooks[countryCode];
                    const recipeData = country.recipes[recipeIndex];
                    const newWin = window.open('', '_blank');
                    newWin.document.write(\`
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <title>\${recipeData.name} - Recipe</title>
                            <style>
                                *{margin:0;padding:0;box-sizing:border-box;}
                                body{background: black;background-size:cover;color:white;font-family:'Segoe UI',sans-serif;min-height:100vh;padding:2rem;}
                                .container{max-width:900px;margin:0 auto;}
                                .back-btn{background:rgba(255,255,255,0.2);color:white;border:2px solid rgba(255,255,255,0.4);padding:1rem 2rem;border-radius:25px;cursor:pointer;margin:1rem 0;}
                                .back-btn:hover{background:rgba(255,255,255,0.3);}
                                .recipe-header{background:rgba(255,255,255,0.15);padding:3rem;border-radius:30px;text-align:center;margin-bottom:3rem;}
                                .recipe-title{font-size:3rem;margin-bottom:1rem;text-shadow:0 0 20px rgba(255,255,255,0.8);}
                                .recipe-meta{display:flex;justify-content:center;gap:2rem;font-size:1.2rem;}
                                .recipe-details{background:rgba(255,255,255,0.1);padding:2rem;border-radius:25px;margin:2rem 0;}
                                h2{font-size:2rem;margin-bottom:1.5rem;color:#4ecdc4;}
                                .ingredients-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem;}
                                .ingredient-item{padding:1rem;background:rgba(255,255,255,0.2);border-radius:15px;}
                                .instructions{line-height:1.8;}
                                li{padding:1rem 0;border-bottom:1px solid rgba(255,255,255,0.2);}
                                .stats{display:flex;gap:1rem;justify-content:center;margin:1rem 0;}
                                .stat-badge{padding:0.8rem 1.5rem;background:rgba(255,255,255,0.2);border-radius:25px;}
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <button class="back-btn" onclick="window.close()">✖ Close</button>
                                <button class="back-btn" onclick="history.back()">← Back to Recipes</button>
                                <div class="recipe-header">
                                    <h1>\${recipeData.name}</h1>
                                    <div class="recipe-meta">
                                        <span class="stat-badge">⏱️ \${recipeData.time}</span>
                                        <span class="stat-badge">⭐ \${recipeData.difficulty}</span>
                                        <span class="stat-badge">🍽️ \${recipeData.servings} servings</span>
                                    </div>
                                </div>
                                <div class="recipe-details">
                                    <h2>🥘 Ingredients</h2>
                                    <div class="ingredients-grid">
                                        \${recipeData.ingredients.map(ing => '<div class="ingredient-item">' + ing + '</div>').join('')}
                                    </div>
                                    <h2>🔥 Instructions</h2>
                                    <ul class="instructions">
                                        \${recipeData.instructions.map(step => '<li>' + step + '</li>').join('')}
                                    </ul>
                                </div>
                            </div>
                        </body>
                        </html>
                    \`);
                    newWin.document.close();
                }
            </script>
        </head>
        <body>
            <div class="container">
                <button class="back-btn" onclick="window.close()">✖ Close</button>
                <div class="country-header">
                    <div style="font-size:5rem;">${country.flag}</div>
                    <div style="font-size:4rem;">${country.icon}</div>
                    <h1>${country.name}</h1>
                </div>
                <div class="recipe-count">${country.recipes.length} Delicious Recipes</div>
                <div class="recipe-grid">${recipeButtons}</div>
            </div>
        </body>
        </html>
    `);
    newWindow.document.close();
}

function searchCountries() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
        generateCountryCards();
        return;
    }
    
    const filtered = Object.keys(recipeBooks).filter(code => {
        const country = recipeBooks[code];
        return country.name.toLowerCase().includes(query) ||
               country.recipes.some(recipe => (recipe.name || recipe).toLowerCase().includes(query));
    });
    
    generateCountryCards(filtered);
}

function updateFooterCounters() {
    const totalRecipesEl = document.getElementById('totalRecipes');
    const totalCountriesEl = document.getElementById('totalCountries');
    
    if (totalRecipesEl && totalCountriesEl) {
        let totalRecipes = 0;
        let totalCountries = Object.keys(recipeBooks).length;
        
        Object.values(recipeBooks).forEach(country => {
            totalRecipes += country.recipes.length;
        });
        
        totalRecipesEl.textContent = totalRecipes;
        totalCountriesEl.textContent = totalCountries;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    allCountries = Object.keys(recipeBooks);
    generateCountryCards();
    updateFooterCounters();
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', searchCountries);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') searchCountries();
        });
    }
    
    // ✅ SHOW/HIDE BUTTONS FIXED
    document.querySelectorAll('.footer-section li').forEach(li => {
        li.style.cursor = 'pointer';
        li.addEventListener('click', function() {
            const text = this.textContent.trim();
            if (text.includes('All Countries')) generateCountryCards();
            if (text.includes('India')) testIndia();
            if (text.includes('Clear')) {
                const searchInput = document.getElementById('searchInput');
                if (searchInput) searchInput.value = '';
                generateCountryCards();
            }
        });
    });
});
// 🔥 ADMIN PANEL - MENU ITEMS ke liye
function toggleAdmin() {
    isAdminMode = !isAdminMode;
    const adminStatus = document.getElementById('adminStatus');
    
    if (adminStatus) {
        adminStatus.classList.toggle('hidden', !isAdminMode);
        adminStatus.textContent = isAdminMode ? '🔧 Admin Mode ON' : '👤 Guest Mode';
    }
    
    // Mobile menu close kar do
    const menuContent = document.getElementById('menuContent');
    if (menuContent) menuContent.classList.add('hidden');
    
    alert(isAdminMode ? '✅ Admin Mode Activated!' : '❌ Admin Mode Disabled');
}

function exportData() {
    const totalRecipes = Object.values(recipeBooks).reduce((total, country) => total + country.recipes.length, 0);
    const data = {
        totalCountries: Object.keys(recipeBooks).length,
        totalRecipes: totalRecipes,
        countries: Object.keys(recipeBooks),
        timestamp: new Date().toLocaleString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `recipes-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    
    // Mobile menu close
    document.getElementById('menuContent').classList.add('hidden');
    alert('📥 Data exported successfully!');
}

function resetApp() {
    if (confirm('⚠️ Are you sure? This will clear search and reset view!')) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = '';
        
        generateCountryCards();
        toggleAllCountries();
        
        // Mobile menu close
        document.getElementById('menuContent').classList.add('hidden');
        
        alert('🔄 App Reset Successfully!');
    }
}

function openAdminPanel() {
    if (!isAdminMode) {
        alert('⚠️ First on Admin Mode! ☰ → Toggle Admin Mode');
        return;
    }
    
    // 🔥 REAL DATA CALCULATE KARO
    const countryData = {};
    Object.entries(recipeBooks).forEach(([code, country]) => {
        countryData[country.name.substring(0, 12)] = country.recipes.length;
    });
    
    // Top 5 countries + others
    const sortedData = Object.entries(countryData)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)
        .map(([name, count]) => ({name, count}));
    
    const chartLabels = sortedData.map(d => d.name);
    const chartData = sortedData.map(d => d.count);
    
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Admin Dashboard - BCA Sem 5</title>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
        </head>
        <body style="margin:0;padding:2rem;background:#000;color:#fff;font-family:'Inter',sans-serif;line-height:1.6;">
            <div class="container" style="max-width:1000px;margin:0 auto;">
                <button onclick="window.close()" style="position:absolute;left:2rem;top:2rem;background:#111;color:#fff;border:1px solid #444;padding:0.6rem 1.2rem;border-radius:8px;cursor:pointer;font-size:0.85rem;">← Back</button>
                
                <div style="text-align:center;margin-bottom:3rem;border-bottom:1px solid #333;padding-bottom:2rem;">
                    <h1 style="font-size:2.2rem;font-weight:600;margin-bottom:0.5rem;">🔧 Admin Dashboard</h1>
                    <div style="font-family:'Roboto Mono',monospace;font-size:0.95rem;color:#aaa;">
                        BCA Semester 5 Web Development Project | by Ratnpriya Kumari | 2026
                    </div>
                </div>

                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.5rem;margin:2rem 0 3rem 0;">
                    <div style="background:#111;border:1px solid #333;padding:1.8rem 1.2rem;border-radius:12px;text-align:center;transition:all 0.2s;">
                        <div style="font-size:2.2rem;margin-bottom:0.8rem;">🍽️</div>
                        <div style="font-size:2rem;font-weight:700;">${Object.values(recipeBooks).reduce((total, c) => total + c.recipes.length, 0)}</div>
                        <div style="font-size:0.9rem;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Total Recipes</div>
                    </div>
                    <div style="background:#111;border:1px solid #333;padding:1.8rem 1.2rem;border-radius:12px;text-align:center;transition:all 0.2s;">
                        <div style="font-size:2.2rem;margin-bottom:0.8rem;">🌍</div>
                        <div style="font-size:2rem;font-weight:700;">${Object.keys(recipeBooks).length}</div>
                        <div style="font-size:0.9rem;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Countries</div>
                    </div>
                    <div style="background:#111;border:1px solid #333;padding:1.8rem 1.2rem;border-radius:12px;text-align:center;transition:all 0.2s;">
                        <div style="font-size:2.2rem;margin-bottom:0.8rem;">📱</div>
                        <div style="font-size:2rem;font-weight:700;">100%</div>
                        <div style="font-size:0.9rem;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Responsive</div>
                    </div>
                </div>

                <!-- 🔥 FIXED PIE CHART -->
                <div style="margin:3rem 0;text-align:center;background:#111;border:1px solid #333;border-radius:16px;padding:2rem;">
                    <h3 style="margin-bottom:1.5rem;font-size:1.4rem;color:#fff;">📊 Recipes Distribution (${chartData.reduce((a,b)=>a+b,0)} Total)</h3>
                    <div style="position:relative;height:350px;">
                        <canvas id="recipeChart" style="max-width:100%;height:100%;border-radius:12px;"></canvas>
                    </div>
                </div>

                <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-top:3rem;padding-top:2rem;border-top:1px solid #333;">
                    <button style="padding:0.7rem 1.4rem;border:1px solid #444;background:#111;color:#fff;border-radius:8px;font-size:0.85rem;font-weight:500;cursor:pointer;" onclick="alert('➕ Add Recipe - Coming Soon!')">➕ Add</button>
                    <button style="padding:0.7rem 1.4rem;border:1px solid #444;background:#111;color:#fff;border-radius:8px;font-size:0.85rem;font-weight:500;cursor:pointer;" onclick="alert('🗑️ Delete - Coming Soon!')">🗑️ Delete</button>
                    <button style="padding:0.7rem 1.4rem;border:1px solid #444;background:#111;color:#fff;border-radius:8px;font-size:0.85rem;font-weight:500;cursor:pointer;" onclick="alert('📊 Analytics Ready!')">📊 Analytics</button>
                </div>

                <div style="text-align:center;margin-top:3rem;padding-top:2rem;border-top:1px solid #333;font-size:0.85rem;color:#666;font-family:'Roboto Mono',monospace;">
                    <strong>BCA Sem 5 Project</strong> | Ratnpriya Kumari | Web Development | 2026
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
            <script>
                // 🔥 REAL DATA STRINGS
                const labels = ${JSON.stringify(chartLabels)};
                const data = ${JSON.stringify(chartData)};
                
                new Chart(document.getElementById('recipeChart'), {
                    type: 'doughnut',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: data,
                            backgroundColor: ['#10B981','#F59E0B','#EF4444','#3B82F6','#8B5CF6'],
                            borderWidth: 0,
                            cutout: '65%'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    padding: 25,
                                    usePointStyle: true,
                                    color: '#fff',
                                    font: {size: 12}
                                }
                            }
                        }
                    }
                });
            </script>
        </body>
        </html>
    `);
    newWindow.document.close();
}



function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function toggleFavorite(countryCode, recipeIndex) {
    const id = `${countryCode}-${recipeIndex}`;
    const index = favorites.indexOf(id);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(id);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount();
}
let recentViews = JSON.parse(localStorage.getItem('recentViews')) || [];

function addToRecent(countryCode, recipeName) {
    recentViews.unshift({countryCode, recipeName, time: new Date().toISOString()});
    recentViews = recentViews.slice(0, 10); // Last 10 only
    localStorage.setItem('recentViews', JSON.stringify(recentViews));
}
// service-worker.js banao
self.addEventListener('install', e => {
    e.waitUntil(caches.open('recipes-v1').then(cache => 
        cache.addAll(['/index.html', '/css/style.css', '/js/script.js'])
    ));
});
function startVoiceSearch() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = (e) => {
        const query = e.results[0][0].transcript;
        document.getElementById('searchInput').value = query;
        searchCountries();
    };
    recognition.start();
}
function shareRecipe(country, recipe) {
    if (navigator.share) {
        navigator.share({
            title: `${recipe.name} - ${country.name}`,
            text: `Check out this amazing ${recipe.name}!`,
            url: window.location.href
        });
    }
}
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        loadMoreCountries();
    }
});
