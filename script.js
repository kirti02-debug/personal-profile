// Contact form submit handler
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Message Sent ✓';
  btn.style.background = '#7eb8c8';
  btn.style.color = '#0d0d0d';
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '';
    btn.style.color = '';
    e.target.reset();
  }, 3000);
}

// Animate skill bars when the skills section scrolls into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar').forEach(bar => {
        const targetWidth = bar.getAttribute('data-width') + '%';
        bar.style.width = targetWidth;
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const skillsSection = document.getElementById('skills');
if (skillsSection) observer.observe(skillsSection);