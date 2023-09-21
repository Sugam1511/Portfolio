import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';

@Component({
  selector: 'app-hollow',
  templateUrl: './hollow.component.html',
  styleUrls: ['./hollow.component.css']
})
export class HollowComponent implements OnInit {
  
  constructor(private coursesService: CoursesService) { }
  skillsData:any=[];
  ngOnInit(): void {
    this.skillsData = this.coursesService.skillsData;
  }

}
