export interface Applicant {
  firstName: string;
  lastName: string;
  townCity: string;
  region: string;
  country: string;
  phone: string;
  email: string;
  selectedCourses: string[];
}

export interface Course {
  code: string;
  title: string;
  category: string;
  target: string;
  delivery: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
