export type StudentStatus = 'Enrolled' | 'Pending';

export interface Student {
  id: string;
  name: string;
  email: string;
  courseId: string;
  courseName: string;
  phone: string;
  status: StudentStatus;
  avatarInitials: string;
}

export type ViewType = 'dashboard' | 'students' | 'add-student';
