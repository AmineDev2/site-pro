import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.scss'],
})
export class AproposComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Développeur web freelance | À propos');
    this.meta.updateTag({
      name: 'description',
      content:
        'Freelance spécialisé en applications web pour TPE/PME : dashboards, intégrations, automatisation et maintenance avec Angular/Node/TypeScript.',
    });
  }
}
