// Select all items with the class '.item'
const items = document.querySelectorAll('.item');

// Apply a smooth hover transition globally
items.forEach(item => {
  // Set the transition properties globally in the CSS for smoother performance
  item.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';

  // Add hover effect
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
    item.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
    item.style.willChange = 'transform, box-shadow'; // Optimize rendering
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
    item.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    item.style.willChange = ''; // Reset will-change
  });
});
