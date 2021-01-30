import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(`A test recipe`, `this is just a test`, `https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/01/lasagne-768x960.jpg`)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
