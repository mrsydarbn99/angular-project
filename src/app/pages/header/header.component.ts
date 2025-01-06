import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports:[RouterLink]
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.initMobileNavToggle();
    this.initScrollSpy();
  }

  /**
   * Toggles mobile navigation menu
   */
  private initMobileNavToggle(): void {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle') as HTMLElement;
    const navMenu = document.querySelector('#navmenu') as HTMLElement;

    mobileNavToggle.addEventListener('click', () => {
      document.body.classList.toggle('mobile-nav-active');
      mobileNavToggle.classList.toggle('bi-list');
      mobileNavToggle.classList.toggle('bi-x');
    });

    const navLinks = document.querySelectorAll('#navmenu a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (document.body.classList.contains('mobile-nav-active')) {
          document.body.classList.remove('mobile-nav-active');
          mobileNavToggle.classList.add('bi-list');
          mobileNavToggle.classList.remove('bi-x');
        }
      });
    });
  }

  /**
   * Scroll-based navigation highlighting
   */
  private initScrollSpy(): void {
    const sections = document.querySelectorAll<HTMLElement>('section');
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('#navmenu a');

    const onScroll = () => {
      const scrollPos = window.scrollY + 200;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
          navLinks.forEach(link => link.classList.remove('active'));
          const activeLink = document.querySelector(`#navmenu a[href="#${section.id}"]`);
          activeLink?.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('load', onScroll);
  }
}
