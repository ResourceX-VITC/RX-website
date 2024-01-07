
const faqbox = document.querySelectorAll('.faqbox');
$(document).ready(function () {
      $(window).scroll(function () {
            // sticky navbar on scroll script
            if (this.scrollY > 20) {
                  $('.navbar').addClass("sticky");
            } else {
                  $('.navbar').removeClass("sticky");
            }
      });
      faqbox.forEach(faqbx => {
            const icon = faqbx.querySelector('.icon');
            const answer = faqbx.querySelector('.answer');

            faqbx.addEventListener('click', () => {
                  if (icon.classList.contains('active')) {
                        icon.classList.remove('active');
                        answer.style.maxHeight = null;
                  }
                  else {
                        icon.classList.add('active');
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                  }
            });
      });

});
//show/hide faq answer


const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
      faq.addEventListener('click', () => {
            faq.classList.toggle('open');

            //change icon
            const icon = faq.querySelector('.faq_icon i');
            if (icon.className == 'uil uil-plus') {
                  icon.className = 'uil uil-minus';
            }
            else {
                  icon.className = 'uil uil-plus';
            }
      });
});

//show hide menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open_menu");
const closeBtn = document.querySelector("#close_menu");

menuBtn.addEventListener('click', () => {
      menu.style.display = "flex";
      closeBtn.style.display = "inline-block";
      menuBtn.style.display = "none";
});

//close nav menu
const closeNav = () => {
      menu.style.display = "none";
      closeBtn.style.display = "none";
      menuBtn.style.display = "inline-block";
};
closeBtn.addEventListener('click', closeNav);



