// JWC Performance — site config
// Update these values when ready. Changes here update every page automatically.

var JWC = {
  whatsapp: '447848522456',
  linkedin: 'https://www.linkedin.com/company/jwc-performance/',
  facebook: 'https://www.facebook.com/profile.php?id=61591596471748',
  phone: '07848 522456'
};

(function() {
  if (JWC.whatsapp) {
    document.querySelectorAll('.jwc-whatsapp').forEach(function(el) {
      el.href = 'https://wa.me/' + JWC.whatsapp;
      el.style.display = '';
    });
  }
  if (JWC.linkedin) {
    document.querySelectorAll('.jwc-linkedin').forEach(function(el) {
      el.href = JWC.linkedin;
      el.style.display = '';
    });
  }
  if (JWC.facebook) {
    document.querySelectorAll('.jwc-facebook').forEach(function(el) {
      el.href = JWC.facebook;
      el.style.display = '';
    });
  }
  if (JWC.phone) {
    document.querySelectorAll('.jwc-phone').forEach(function(el) {
      el.textContent = JWC.phone;
      el.href = 'tel:' + JWC.phone.replace(/\s/g, '');
      el.style.display = '';
    });
  }
})();

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
