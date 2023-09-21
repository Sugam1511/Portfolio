import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }
  works:any=[];
  ngOnInit(): void {
    this.works = this.coursesService.works;
  }
  

}
