import { Student } from './types';

export const MOCK_STUDENTS: Student[] = [
  {
    id: '1',
    name: 'James Deakin',
    email: 'james.d@stark.edu',
    courseId: 'CS-201',
    courseName: 'Computer Science',
    phone: '+1 (555) 012-3456',
    status: 'Enrolled',
    avatarInitials: 'JD',
  },
  {
    id: '2',
    name: 'Sarah Miller',
    email: 's.miller@stark.edu',
    courseId: 'BUS-105',
    courseName: 'Business Admin',
    phone: '+1 (555) 234-5678',
    status: 'Enrolled',
    avatarInitials: 'SM',
  },
  {
    id: '3',
    name: 'Robert Lewis',
    email: 'r.lewis@stark.edu',
    courseId: 'ENG-302',
    courseName: 'English Lit',
    phone: '+1 (555) 345-6789',
    status: 'Pending',
    avatarInitials: 'RL',
  },
  {
    id: '4',
    name: 'Elena Aris',
    email: 'e.aris@stark.edu',
    courseId: 'DES-110',
    courseName: 'Design Systems',
    phone: '+1 (555) 456-7890',
    status: 'Enrolled',
    avatarInitials: 'EA',
  },
  {
    id: '5',
    name: 'Kevin Knight',
    email: 'k.knight@stark.edu',
    courseId: 'PHY-220',
    courseName: 'Physics',
    phone: '+1 (555) 567-8901',
    status: 'Enrolled',
    avatarInitials: 'KK',
  },
];

export const IMAGES = {
  ADMIN_AVATAR: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrB-FRwLuTD15e72MlPZsftgvyDiSg_NeG702fUezQ6bTRSAoW02PPtUa6mSPx7yNG4lNhScnxUwCV9Ec4nxWuBnGrXgzCPory5XiVv5CCs3kkChOF5v0oN6CjjPELIORYkJ1Fkf3HqfaAmGke5F4bpHg8vLicl04LzvCyVvgg8Luu-41FNm7XBrEIL8ZZsTOIvXzPKgIQ_2kguQlFGriLaPkX8U2mx_uwNreDRrI6wKXhr37UpQxxdqRAYqzUd_of4R2re8n4MdI2',
  ANALYTICS_DASHBOARD: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu7ZkDoDPTBb3U98oNr6cRQh9AXA2xxQQegOR9NX1aEaMROA3Pte9Xwdt5fAGud8lu5k-JooeIam2ST6HF5-hEVDGIL1gpB4pwf-ZF8h2Fl-W_BNy0GYPA6upPwkwem9YNWmyYz0YyU_snqiGh6Y0-zATRAls78QLTERVJBqWW843Mr4Wc_VFGBtc0bp6-TqNVNL564ozKbo5TjzOISqOGK25oLjzYs6F4EgUcUrSbFC7of6LbpTF27RJvzivYNtCljC2fRg1soNAw',
  STUDENT_1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-QLtkFBac-HUvOBl2VtjuCt7Bbli6xF8SWu3bJMGFUs4lah01MBlkXmg1HAyM-Kz8wHkXa4h6mZTNbJIHYjmd2Jsy7Bed-w4zdp85qCc1yTkvbE__0iC2svYE_ixhZoxJ4u_KcsXyrT_o79QyxSye-l95ZnIN03y6OUb5nF1w3kIj3DtJ9Tr-Okf6H7UDYvK_cqA5weo-IGIs3xwxuBNRQvOQ3IHQlvsQxTQFreGulUvUiP0EK9YJGUfsxoR-SeP8QRkZa8frJNXW',
  STUDENT_2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4U-z_AwVMi6VMeJnlxzHs1-ALcF3wA2LQ-CYjwSAOTkd5lwIp-yjCgdACgAo4LoQjwipuaA74Qce-LEVW7OPoDldBIhklLoeH4x9PRvxvJB049dKtgoYCGN04-RMFVXkQvcaRtq-b4Kbqfu8BnKL2SkkVmCT1AL8_Itq9zOvf6Io_4P0AISySRS_FebS3zeiUGgWwYdC8G608ClF5OLzfizymNI_bcvZKba3ck5gk5xmEPrI8AMFQYYR5Q6KYJk4gnz0waROYXZEq',
  STUDENT_3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0C5cJaeP35hMQ-_AUIhUrhTPPoFUxRw6N5-g49lsx3zB09LL75T-JGojaAcP-k8NdifniUmAZvtM_OxA7_kBHNtJi-ZypEd0FQRAH9aWBZA-PVxljqrO1R5qeYwwdf03pw4sg2GtwOyr7l3hYXq3-VnlOMox4kxlnj2upczNMIDlpaI6uG3WrreNtUtDjoyLeJxaSXjCrtn2EYZ-JpyVC1psGGEbFRMCr6N-Kre3TLgmJtjgmBz8dVd7EktfWlA6QrI2A-JtLX-tG',
  LOGO: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARULAahfiQHUuDHwjZ307xsG3Zhk-_4P0pqkNkbtBMtWupDm9Hu1LlxaD1jASycdexsUBiraMK_6kaQeaJ7P_GyHrT2dHqrE0VgUFHVUdqxqp7vG292tph0tY03_H1BQmn3ZA6glhNExv9ZJGhgSB0JYfpghKxcbZhUUCXNNlOseSX2jC_ckNshvvNSojpZnCYtGthzuK4Zq1SottKqwguJ9jYma5yrezzbA3otK8G5A4rDsyA2sO5yGaYZswBpW6LHDisDJO2slrC',
};
