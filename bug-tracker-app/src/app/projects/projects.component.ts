import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Project{
  id : number
  name : string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(public httpClient : HttpClient){

  }
  onGetProjectsClick(){
    const projects$ = this.httpClient
      .get<Project[]>('http://localhost:3000/projects')
    projects$.subscribe(projects => console.table(projects))
  }
  onAddProjectsClick(){
    const newProjectData = { name : 'dummy project' }
    const newProject$ = this.httpClient
      .post<Project>('http://localhost:3000/projects', newProjectData)
    newProject$.subscribe(newProject => console.log('new project created - ', newProject))
  }
  onUpdateProjectsClick(){

  }
  onDeleteProjectsClick(){
    const deleteProject$ = this.httpClient
      .delete<any>('http://localhost:3000/projects/7')
    deleteProject$.subscribe(() => console.log('project deleted'))
  }
}
