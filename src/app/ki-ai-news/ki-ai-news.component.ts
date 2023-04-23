import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

import { News } from '../interfaces/news-interface';
import { DynamicNewsService } from '../services/dynamic-news.service';

@Component({
  selector: 'exec-ki-ai-news',
  templateUrl: './ki-ai-news.component.html',
  styleUrls: ['./ki-ai-news.component.scss']
})
export class KiAiNewsComponent {
  kiaiNews: News[] = [];

  constructor(private newsService: DynamicNewsService) {}

  ngOnInit() {
    this.newsService.getDynamicNews('crypto OR cryptocurrency OR blockchain').then(articles => {
      this.kiaiNews = articles;
    });
  }
}
