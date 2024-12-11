// Add a fun hover effect
const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.1)';
    item.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
    item.style.boxShadow = 'none';
  });
});
