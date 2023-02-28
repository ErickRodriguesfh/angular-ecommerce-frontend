import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  doSearch(value: string) {
    console.log(`value=${value}`);
    //método abaixo chama a rota search passando a :keyword(value)
    this.router.navigateByUrl(`/search/${value}`);
  }
}
