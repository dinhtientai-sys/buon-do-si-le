// script.js - small interactivity: print + toggle theme
document.addEventListener('DOMContentLoaded', () => {
    const printBtn = document.getElementById('printBtn');
    const toggleTheme = document.getElementById('toggleTheme');
  
    printBtn?.addEventListener('click', () => {
      window.print();
    });
  
    toggleTheme?.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      toggleTheme.textContent = document.body.classList.contains('dark') ? 'Giao diện sáng' : 'Chuyển giao diện';
    });
  
    // Accessibility: allow keyboard focus outline on buttons
    document.querySelectorAll('.btn').forEach(b => {
      b.addEventListener('focus', () => b.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)');
      b.addEventListener('blur', () => b.style.boxShadow = 'none');
    });
  });
  