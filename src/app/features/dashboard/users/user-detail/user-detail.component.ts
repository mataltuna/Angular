import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../../../core/services/students.service';
import { Student } from '../../../../shared/models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  idStudent?: string
  student?: Student
  isLoading = false
  showAllEnrolls = true;
  displayedEnrolls: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentsService: StudentsService
  ) {
    this.idStudent = activatedRoute.snapshot.params['id']
  }
  ngOnInit(): void {
    this.isLoading = true
    this.studentsService
    .getById(this.activatedRoute.snapshot.params['id'])
    .subscribe({
      next: (student) => {
        this.student = student
        this.isLoading = false
        this.toggleCourseVisibility()
      },
      error: () => {
        this.isLoading = false
      }
    })
  }

  toggleCourseVisibility() {
    this.showAllEnrolls = !this.showAllEnrolls;
    this.displayedEnrolls = this.showAllEnrolls ? this.student?.enrolls || [] : this.student?.enrolls.slice(0, 2) || [];
  }

  hasMultipleEnrolls(): boolean {
    return (this.student?.enrolls?.length || 0) > 2;
  }
}
