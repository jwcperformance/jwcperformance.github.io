// JWC Performance — site config
// Update these values when ready. Changes here update every page automatically.

var JWC = {
  whatsapp: '447399600473',  // Update when you get a dedicated number
  linkedin: '',              // e.g. 'https://linkedin.com/in/joe-coombs'
  facebook: '',              // e.g. 'https://facebook.com/jwcperformance'
  phone: ''                  // e.g. '07399 600473' — for display purposes
};

// Builds WhatsApp link if number is set
(function() {
  if (!JWC.whatsapp) return;

  var waUrl = 'https://wa.me/' + JWC.whatsapp;

  // Update all WhatsApp links on the page
  document.querySelectorAll('.jwc-whatsapp').forEach(function(el) {
    el.href = waUrl;
    el.style.display = '';
  });

  // Update all LinkedIn links on the page
  if (JWC.linkedin) {
    document.querySelectorAll('.jwc-linkedin').forEach(function(el) {
      el.href = JWC.linkedin;
      el.style.display = '';
    });
  }

  // Update phone display
  if (JWC.phone) {
    document.querySelectorAll('.jwc-phone').forEach(function(el) {
      el.textContent = JWC.phone;
      el.href = 'tel:' + JWC.phone.replace(/\s/g, '');
      el.style.display = '';
    });
  }
})();
