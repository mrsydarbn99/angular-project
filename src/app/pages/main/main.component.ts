import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ProductComponent } from "../product/product.component";
import { ContactComponent } from "../contact/contact.component";
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-main',
  imports: [HomeComponent, AboutComponent, ProductComponent, ContactComponent, RegisterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    this.addNavmenuScrollspy();
  }

  ngAfterViewInit(): void {
    this.handleInitialScroll();
  }

  handleInitialScroll(): void {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          const sectionElement = section as HTMLElement;
          const scrollMarginTop = getComputedStyle(sectionElement).scrollMarginTop;
          window.scrollTo({
            top: sectionElement.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }

  addNavmenuScrollspy(): void {
    const navmenulinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.navmenu a');

    const navmenuScrollspy = (): void => {
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        const section = document.querySelector(navmenulink.hash);
        if (!section) return;

        // Cast section to HTMLElement to use offsetTop
        const sectionElement = section as HTMLElement;
        const position = window.scrollY + 200;

        if (position >= sectionElement.offsetTop && position <= (sectionElement.offsetTop + sectionElement.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      });
    };

    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);
  }

}
