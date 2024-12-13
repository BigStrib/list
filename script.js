// Enhance hover effect dynamically
const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.1)';
    item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
    item.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  });
});
