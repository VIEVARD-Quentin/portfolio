// main.js — léger, accessible, mobile-first
console.log('main.js chargé');

/* ---------- THÈME (clair / sombre) ---------- */
(function () {
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const storageKey = 'theme'; // 'dark' ou 'light'

    function setTheme(theme) {
        if (theme === 'dark') {
            root.classList.add('dark');
            toggle.textContent = '☀️';
        } else {
            root.classList.remove('dark');
            toggle.textContent = '🌙';
        }
        try { localStorage.setItem(storageKey, theme); } catch (e) { /* ignorer */ }
    }

    // initialisation
    const saved = (function () {
        try { return localStorage.getItem(storageKey); } catch (e) { return null; }
    })();
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(saved || (prefersDark ? 'dark' : 'light'));

    // gestion du toggle
    toggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        setTheme(isDark ? 'dark' : 'light');
        // garder le focus pour les utilisateurs clavier
        toggle.focus();
    });
})();

/* ---------- MENU BURGER ---------- */
(function () {
    const burger = document.querySelector('.burger');
    const navList = document.getElementById('nav-list');

    if (!burger || !navList) return;

    burger.addEventListener('click', () => {
        const expanded = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!expanded));
        navList.classList.toggle('show');
    });

    // fermer la navigation lorsqu'un lien est cliqué (mobile)
    navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        navList.classList.remove('show');
        burger.setAttribute('aria-expanded', 'false');
    }));
})();

/* ---------- DÉFILEMENT FLUIDE pour les liens internes ---------- */
(function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hash = this.getAttribute('href');
            if (hash === '#' || hash === '') return;
            const target = document.querySelector(hash);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // mettre à jour le focus pour l'accessibilité
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
            window.setTimeout(() => target.removeAttribute('tabindex'), 1200);
        });
    });
})();

/* ---------- BOUTON RETOUR EN HAUT ---------- */
(function () {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;

    const showAt = 300;
    window.addEventListener('scroll', () => {
        if (window.scrollY > showAt) btn.style.display = 'flex';
        else btn.style.display = 'none';
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.querySelector('#hero')?.focus();
    });
})();
