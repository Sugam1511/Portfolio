import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  constructor(private coursesService: CoursesService) { }
  
  courses:any = [];
  
  ngOnInit(): void {
    this.courses = this.coursesService.courses;
    console.log(this.courses)
  }
  
  }