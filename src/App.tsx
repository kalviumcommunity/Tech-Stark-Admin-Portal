/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Users, 
  Plus, 
  Settings, 
  LogOut, 
  Search, 
  Bell, 
  HelpCircle, 
  TrendingUp, 
  GraduationCap, 
  UserPlus,
  Edit2,
  Trash2,
  BarChart2,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Save,
  Info,
  CheckCircle2,
  MoreVertical
} from 'lucide-react';
import { ViewType, Student } from './types';
import { IMAGES, MOCK_STUDENTS } from './constants';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [students] = useState<Student[]>(MOCK_STUDENTS);

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView students={students} onAddStudent={() => setCurrentView('add-student')} onViewStudents={() => setCurrentView('students')} />;
      case 'students':
        return <StudentsListView students={students} onAddStudent={() => setCurrentView('add-student')} />;
      case 'add-student':
        return <AddStudentView onCancel={() => setCurrentView('students')} onSave={() => setCurrentView('students')} />;
      default:
        return <DashboardView students={students} onAddStudent={() => setCurrentView('add-student')} onViewStudents={() => setCurrentView('students')} />;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-brand-blue-dark text-white flex flex-col z-50">
        <div className="px-6 py-8 flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-8">
             <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-lg">
                <img src={IMAGES.LOGO} alt="Tech Stark" className="w-8 h-8 object-contain" />
             </div>
             <div>
                <h1 className="text-xl font-bold leading-none">Tech Stark</h1>
                <p className="text-xs text-blue-200/80">Admin Portal</p>
             </div>
          </div>
          
          <nav className="flex flex-col gap-2">
            <SidebarLink 
              icon={<LayoutDashboard size={20} />} 
              label="Dashboard" 
              active={currentView === 'dashboard'} 
              onClick={() => setCurrentView('dashboard')}
            />
            <SidebarLink 
              icon={<Users size={20} />} 
              label="Students" 
              active={currentView === 'students'} 
              onClick={() => setCurrentView('students')}
            />
          </nav>
        </div>

        <div className="mt-auto px-6 py-8 border-t border-white/10 flex flex-col gap-4">
          <button 
            onClick={() => setCurrentView('add-student')}
            className="w-full py-3 bg-white text-brand-blue font-bold rounded-lg shadow-md hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
          >
            <Plus size={18} />
            Add Student
          </button>
          
          <div className="flex flex-col gap-1">
            <SidebarLink 
              icon={<Settings size={20} />} 
              label="Settings" 
              onClick={() => {}}
            />
            <SidebarLink 
              icon={<LogOut size={20} />} 
              label="Logout" 
              onClick={() => {}}
            />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Top Header */}
        <header className="sticky top-0 right-0 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-40">
          <div className="flex items-center gap-8 flex-1">
            <h2 className="text-lg font-bold text-slate-800 shrink-0">Student Management</h2>
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search records..." 
                className="w-full h-10 pl-10 pr-4 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-brand-blue"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <HelpCircle size={20} />
            </button>
            <div className="h-8 w-px bg-slate-200 mx-1"></div>
            <div className="flex items-center gap-3">
              <img src={IMAGES.ADMIN_AVATAR} alt="Admin" className="w-9 h-9 rounded-full object-cover border-2 border-brand-blue/20" />
              <span className="text-sm font-medium text-slate-700 hidden lg:block">Admin</span>
            </div>
          </div>
        </header>

        {/* View Port */}
        <main className="flex-1 p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

// --- Sub-components ---

function SidebarLink({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
        active 
          ? 'bg-blue-800 text-white font-semibold' 
          : 'text-blue-200 hover:bg-blue-800/50 hover:text-white'
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
}

function DashboardView({ students, onAddStudent, onViewStudents }: { students: Student[], onAddStudent: () => void, onViewStudents: () => void }) {
  const recentStudents = students.slice(0, 5);

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome back, Admin</h1>
        <p className="text-slate-500">Here is an overview of Tech Stark's current enrollment status.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Total Students Card */}
        <div className="md:col-span-6 bg-brand-blue-dark text-white p-8 rounded-2xl shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[220px]">
          <div className="relative z-10">
            <p className="text-blue-200 text-sm font-medium uppercase tracking-wider mb-2">Total Students</p>
            <h2 className="text-6xl font-extrabold">{students.length}</h2>
          </div>
          <div className="relative z-10 flex items-center gap-2 mt-4 text-sm font-medium">
            <div className="bg-white/20 p-1 rounded-full">
              <TrendingUp size={16} />
            </div>
            <span>+4% from last semester</span>
          </div>
          {/* Decorative ICON */}
          <Users size={180} className="absolute -right-8 -bottom-8 opacity-10 rotate-12" />
        </div>

        {/* Recent Additions Card */}
        <div className="md:col-span-3 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-4">
            <UserPlus size={24} />
          </div>
          <div>
            <p className="text-slate-400 text-sm font-medium mb-1">Recent Additions</p>
            <h3 className="text-3xl font-bold text-slate-800">12</h3>
          </div>
        </div>

        {/* Courses Card */}
        <div className="md:col-span-3 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
            <GraduationCap size={24} />
          </div>
          <div>
            <p className="text-slate-400 text-sm font-medium mb-1">Courses</p>
            <h3 className="text-3xl font-bold text-slate-800">8</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-bold text-slate-800">Recent Activity</h3>
            <button onClick={onViewStudents} className="text-brand-blue text-sm font-semibold hover:underline">View All Students</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-4">Student Name</th>
                  <th className="px-6 py-4">Course ID</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center text-xs font-bold">
                        {student.avatarInitials}
                      </div>
                      <span className="font-semibold text-slate-800">{student.name}</span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-sm font-medium">{student.courseId}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        student.status === 'Enrolled' 
                          ? 'bg-blue-100 text-brand-blue' 
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-brand-blue p-1 rounded-full transition-colors">
                        <Edit2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Summary Card */}
        <div className="lg:col-span-1 bg-slate-900 text-white p-8 rounded-2xl shadow-xl flex flex-col">
          <h3 className="text-lg font-bold mb-3">Quick Summary</h3>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            Student enrollment has increased by 12% in the last 30 days. Most popular course is "Computer Science 201".
          </p>
          
          <div className="relative rounded-xl overflow-hidden aspect-video mb-auto border border-white/10 group cursor-pointer">
            <img 
              src={IMAGES.ANALYTICS_DASHBOARD} 
              alt="Analytics" 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" 
            />
            <div className="absolute inset-0 bg-brand-blue/30 flex items-center justify-center">
              <div className="w-12 h-12 bg-white text-brand-blue rounded-full shadow-lg flex items-center justify-center">
                <BarChart2 size={24} />
              </div>
            </div>
          </div>

          <button className="w-full py-3 mt-8 bg-brand-blue text-white font-bold rounded-lg hover:bg-brand-blue-dark transition-all shadow-lg active:scale-95">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}

function StudentsListView({ students, onAddStudent }: { students: Student[], onAddStudent: () => void }) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Active Students</h1>
          <p className="text-slate-500">Manage and monitor all currently enrolled students across various disciplines.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select className="bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-brand-blue text-slate-700 outline-none">
            <option>All Courses</option>
            <option>Computer Science</option>
            <option>Business Admin</option>
            <option>Design</option>
          </select>
          <button 
            onClick={onAddStudent}
            className="flex-1 md:flex-none py-2.5 px-5 bg-brand-blue text-white font-bold rounded-lg shadow-lg hover:bg-brand-blue-dark transition-all flex items-center justify-center gap-2"
          >
            <UserPlus size={18} fill="white" />
            Add New Student
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-xs font-bold uppercase tracking-wider">
                <th className="px-8 py-5">Name</th>
                <th className="px-8 py-5">Email</th>
                <th className="px-8 py-5">Course</th>
                <th className="px-8 py-5">Phone</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {students.map(student => (
                <tr key={student.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center font-bold">
                        {student.avatarInitials}
                      </div>
                      <span className="text-slate-900 font-semibold">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-slate-500 text-sm">{student.email}</td>
                  <td className="px-8 py-5">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-bold">{student.courseId}</span>
                  </td>
                  <td className="px-8 py-5 text-slate-500 text-sm font-normal">{student.phone}</td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end items-center gap-2">
                       <button className="p-2 text-slate-400 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition-all">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm text-slate-400">Showing 1 to 5 of {students.length} students</p>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-all"><ChevronLeft size={16} /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-brand-blue text-white font-bold text-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-white transition-all text-sm font-medium">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-white transition-all text-sm font-medium">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-all"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* Bottom Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InsightCard 
          icon={<GraduationCap size={32} />} 
          label="Total Enrolled" 
          value="1,248" 
          trend="+12% this month" 
          variant="blue"
        />
        <InsightCard 
          icon={<CheckCircle2 size={32} />} 
          label="Attendance Rate" 
          value="94.2%" 
          trend="98% Avg" 
          variant="teal"
        />
        <InsightCard 
          icon={<TrendingUp size={32} />} 
          label="Pending Approvals" 
          value="24" 
          trend="Urgent: 3" 
          variant="orange"
        />
      </div>
    </div>
  );
}

function InsightCard({ icon, label, value, trend, variant }: { icon: React.ReactNode, label: string, value: string, trend: string, variant: 'blue' | 'teal' | 'orange' }) {
  const styles = {
    blue: 'bg-brand-blue-dark text-white',
    teal: 'bg-teal-600 text-white',
    orange: 'bg-orange-700 text-white'
  };

  return (
    <div className={`${styles[variant]} p-6 rounded-2xl shadow-lg flex flex-col justify-between h-44`}>
       <div className="flex justify-between items-start">
         <div className="opacity-80">{icon}</div>
         <span className="text-[10px] uppercase font-bold bg-white/20 px-3 py-1 rounded-full tracking-wider">{trend}</span>
       </div>
       <div>
         <p className="text-sm font-medium opacity-80 mb-1">{label}</p>
         <h4 className="text-3xl font-extrabold">{value}</h4>
       </div>
    </div>
  );
}

function AddStudentView({ onCancel, onSave }: { onCancel: () => void, onSave: () => void }) {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-2">
          <span className="hover:text-brand-blue cursor-pointer">Students</span>
          <ChevronRight size={12} />
          <span className="text-brand-blue">Add New Student</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Register Student</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
        {/* Illustration Panel */}
        <div className="md:col-span-4 bg-brand-blue-dark p-8 flex flex-col relative overflow-hidden">
          <div className="z-10 flex flex-col h-full">
            <h3 className="text-xl font-bold text-white mb-4">Institutional Enrollment</h3>
            <p className="text-blue-100/70 text-sm leading-relaxed mb-12">
              Join the Stark legacy. Please ensure all student documentation is verified before submission to the central database.
            </p>
            
            <div className="mt-auto space-y-4">
              <div className="flex -space-x-3">
                {[IMAGES.STUDENT_1, IMAGES.STUDENT_2, IMAGES.STUDENT_3].map((src, i) => (
                  <img key={i} src={src} className="w-10 h-10 rounded-full border-2 border-brand-blue-dark object-cover" />
                ))}
              </div>
              <p className="text-xs font-bold text-blue-200">+450 students enrolled this term</p>
            </div>
          </div>
          
          {/* Decorative bits */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        </div>

        {/* Form Panel */}
        <div className="md:col-span-8 p-10">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onSave(); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <FormLabel>Full Name</FormLabel>
                <FormInput icon={<Users size={18} />} placeholder="e.g. Johnathan Smith" />
              </div>

              <div className="md:col-span-2">
                <FormLabel>Email Address</FormLabel>
                <FormInput icon={<Mail size={18} />} placeholder="john.smith@university.edu" type="email" />
              </div>

              <div>
                <FormLabel>Course</FormLabel>
                <div className="relative group">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue transition-colors" size={18} />
                  <select className="w-full h-12 pl-10 pr-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all appearance-none text-slate-700 font-medium text-sm">
                    <option>Select Course</option>
                    <option>Computer Science</option>
                    <option>Business Admin</option>
                    <option>Design</option>
                  </select>
                </div>
              </div>

              <div>
                <FormLabel>Phone</FormLabel>
                <FormInput icon={<Phone size={18} />} placeholder="+1 (555) 000-0000" type="tel" />
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 flex items-center justify-end gap-3">
              <button 
                type="button" 
                onClick={onCancel}
                className="px-6 py-3 text-sm font-bold text-slate-500 hover:bg-slate-100 rounded-xl transition-all"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="px-8 py-3 bg-brand-blue text-white font-bold text-sm rounded-xl shadow-lg hover:bg-brand-blue-dark transition-all flex items-center gap-2 active:scale-95"
              >
                <Save size={18} fill="white" />
                Save Student
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between px-2">
        <div className="flex items-center gap-2 text-slate-400">
           <Info size={14} />
           <span className="text-[10px] font-bold uppercase tracking-wider">Data handling compliant with FERPA and GDPR regulations.</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">System Status: Active</span>
        </div>
      </div>
    </div>
  );
}

function FormLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2 ml-1">
      {children}
    </label>
  );
}

function FormInput({ icon, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { icon: React.ReactNode }) {
  return (
    <div className="relative group">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue transition-colors">
        {icon}
      </div>
      <input 
        {...props} 
        className="w-full h-12 pl-10 pr-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-sm font-medium placeholder:text-slate-300"
      />
    </div>
  );
}
