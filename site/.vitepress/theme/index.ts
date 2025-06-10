import DefaultTheme from 'vitepress/theme'
import "@catppuccin/vitepress/theme/mocha/peach.css";
import './custom.css'

export default {
  ...DefaultTheme,
  setup() {
    if (typeof window !== 'undefined') {
      const observer = new MutationObserver(() => {
        // Logo en la barra superior
        const navLogo = document.querySelector('img[alt="Sportter logo"]');
        if (navLogo && !navLogo.classList.contains('logo-img')) {
          navLogo.classList.add('logo-img');
        }

        // Logo en la portada (hero)
        const heroLogo = document.querySelector('.VPHomeHero img[alt="Sportter logo"]');
        if (heroLogo && !heroLogo.classList.contains('logo-img')) {
          heroLogo.classList.add('logo-img');
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }
  }
}
