/**
 * Delilla Anandita - Online Learning Platform
 * script.js - Interaktivitas Navbar, Filter Kursus, Modal, Bookmark, & Ikon Lucide
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi ikon Lucide
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  // --- 1. Navigasi Mobile Menu ---
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconBurger = document.getElementById('icon-burger');
  const iconClose = document.getElementById('icon-close');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        if (iconBurger) iconBurger.classList.add('hidden');
        if (iconClose) iconClose.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        if (iconBurger) iconBurger.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (iconBurger) iconBurger.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
      });
    });
  }

  // --- 2. Live Search Kursus & Filter Kategori ---
  const searchInput = document.getElementById('course-search-input');
  const searchBtn = document.getElementById('course-search-btn');
  const filterChips = document.querySelectorAll('.filter-chip');
  const courseCards = document.querySelectorAll('.course-card');

  let currentCategory = 'all';

  function applyFilter() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    courseCards.forEach(card => {
      const cardTitle = card.getAttribute('data-title') || '';
      const cardCategory = card.getAttribute('data-category') || '';

      const matchCategory = (currentCategory === 'all' || cardCategory === currentCategory);
      const matchQuery = (query === '' || cardTitle.includes(query));

      if (matchCategory && matchQuery) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyFilter);
  }
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      applyFilter();
      const coursesSection = document.getElementById('courses');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => {
        c.classList.remove('active', 'bg-purple-600', 'text-white', 'shadow-sm');
        c.classList.add('bg-purple-50', 'text-purple-700');
      });

      chip.classList.add('active', 'bg-purple-600', 'text-white', 'shadow-sm');
      chip.classList.remove('bg-purple-50', 'text-purple-700');

      currentCategory = chip.getAttribute('data-category') || 'all';
      applyFilter();
    });
  });
});

// --- 3. Bookmark Toggle ---
function toggleBookmark(btn) {
  const icon = btn.querySelector('svg') || btn.querySelector('i');
  const isBookmarked = btn.classList.contains('text-purple-600');

  if (isBookmarked) {
    btn.classList.remove('text-purple-600');
    btn.classList.add('text-slate-400');
    if (icon) icon.setAttribute('fill', 'none');
  } else {
    btn.classList.add('text-purple-600');
    btn.classList.remove('text-slate-400');
    if (icon) icon.setAttribute('fill', '#9333ea');
  }
}

// --- 4. Modal Dialog Handler ---
function openModal(title) {
  const modal = document.getElementById('action-modal');
  const modalTitle = document.getElementById('modal-title');
  if (modal && modalTitle) {
    modalTitle.textContent = title;
    modal.classList.remove('hidden');
  }
}

function closeModal() {
  const modal = document.getElementById('action-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function handleModalSubmit(event) {
  event.preventDefault();
  alert('Permintaan berhasil dikirim ke tim Delilla Anandita! Kami akan segera menghubungi Anda.');
  closeModal();
}
