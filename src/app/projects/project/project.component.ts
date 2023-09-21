import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../Services/courses.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

project: any;
projectId: any;
RouteParamObs:any;
  constructor(private activatedRoute: ActivatedRoute, private service:CoursesService) { }

  ngOnInit(): void {
    // this.courseId=this.activatedRoute.snapshot.paramMap.get('id');
    // this.course=this.service.courses.find(x=>x.id==this.courseId);
    this.RouteParamObs=this.activatedRoute.paramMap.subscribe((param)=>{
      this.projectId=param.get('id');
      this.project=this.service.courses.find((x)=> x.id==this.projectId);
    });
  }
  ngOnDestroy(){
    this.RouteParamObs.unsubscribe();
  }
}
