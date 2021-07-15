window.addEventListener('DOMContentLoaded', (event) => {
  const navbarClass = 'navbar-shrink';
  const navbarShrink = () => {
    const navbarCollapsible = document.getElementById('mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      console.log('remove');
      navbarCollapsible.classList.remove(navbarClass);
    } else {
      console.log('add');
      navbarCollapsible.classList.add(navbarClass);
    }
  };
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
});
