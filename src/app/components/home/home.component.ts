import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/000000" }
  ];
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4, "autoplay": true };

  articles: any = [];
  loading: boolean = false;

  constructor(private http: HttpClient) {
  }


  ngOnInit() {
    this.loading = true;
    this.getNews().subscribe(response => {
      console.log("response", response);
      this.articles = response.articles;
      this.loading = false;
    });
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  getNews(): any {
    let apikey = '77be705df9269a6be28dcf76155c5459';
    let url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=ind&max=20&apikey=' + apikey;
    return this.http.get<any>(url);
  }

}
