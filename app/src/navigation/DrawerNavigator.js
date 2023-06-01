import { createDrawerNavigator } from '@react-navigation/drawer';
import SuperAdminBranches from '../pages/SuperAdmin/Branches';
import SuperAdminCourses from '../pages/SuperAdmin/Courses';
import SuperAdminDashboard from '../pages/SuperAdmin/Dashboard';
import SuperAdminReports from '../pages/SuperAdmin/Reports';
import SuperAdminSettings from '../pages/SuperAdmin/Settings';
import SuperAdminUsers from '../pages/SuperAdmin/Users';
import AdminCourses from '../pages/Admin/Courses';
import AdminDashboard from '../pages/Admin/Dashboard';
import AdminReports from '../pages/Admin/Reports';
import AdminSettings from '../pages/Admin/Settings';
import AdminUsers from '../pages/Admin/Users';
import InstructorDashboard from "../pages/Instructor/Dashboard";
import InstructorCourses from "../pages/Instructor/Courses";
import InstructorLectures from "../pages/Instructor/Lectures";
import InstructorAssignments from "../pages/Instructor/Assignments";
import InstructorReports from "../pages/Instructor/Reports";
import InstructorSettings from "../pages/Instructor/Settings";
import StudentDashboard from "../pages/Student/Dashboard";
import StudentCourses from "../pages/Student/Courses";
import StudentLectures from "../pages/Student/Lectures";
import StudentAssignments from "../pages/Student/Assignments";
import StudentReports from "../pages/Student/Reports";
import StudentSettings from "../pages/Student/Settings";
import StudentSubmission from "../pages/Student/Submissions";
import CustomDrawer from './CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const {userDetails} = useSelector((store) => store.authuntication);
  const access = userDetails?.role;

  const superAdminMenu = [
    // {route: "Dashboard", component: SuperAdminDashboard, icon: "home-sharp"}, 
    {route: "Users", component: SuperAdminUsers, icon: "people-sharp"}, 
    {route: "Courses", component: SuperAdminCourses, icon: "book-sharp"}, 
    {route: "Branches", component: SuperAdminBranches, icon: "git-branch-sharp"}, 
    // {route: "Reports", component: SuperAdminReports, icon: "stats-chart-sharp"}, 
    {route: "Account Setting", component: SuperAdminSettings, icon: "settings-sharp"}
  ];
  const adminMenu = [
    // {route: "Dashboard", component: AdminDashboard, icon: "home-sharp"}, 
    {route: "Users", component: AdminUsers, icon: "people-sharp"}, 
    {route: "Courses", component: AdminCourses, icon: "book-sharp"}, 
    // {route: "Reports", component: AdminReports, icon: "stats-chart-sharp"}, 
    {route: "Account Setting", component: AdminSettings, icon: "settings-sharp"}
  ];
  
  const instructorMenu = [
    // {route: "Dashboard", component: InstructorDashboard, icon: "home-sharp"}, 
    // {route: "Courses", component: InstructorCourses, icon: "book-sharp"}, 
    {route: "Lectures", component: InstructorLectures, icon: "videocam-sharp"}, 
    {route: "Assignments", component: InstructorAssignments, icon: "code-working-sharp"}, 
    // {route: "Reports", component: InstructorReports, icon: "stats-chart-sharp"}, 
    {route: "Account Setting", component: InstructorSettings, icon: "settings-sharp"}
  ];

  const studentMenu = [
    // {route: "Dashboard", component: StudentDashboard, icon: "home-sharp"}, 
    // {route: "Courses", component: StudentCourses, icon: "book-sharp"}, 
    {route: "Lectures", component: StudentLectures, icon: "videocam-sharp"}, 
    {route: "Assignments", component: StudentAssignments, icon: "code-working-sharp"}, 
    // {route: "Submission", component: StudentSubmission, icon: "git-network-sharp"}, 
    // {route: "Reports", component: StudentReports, icon: "stats-chart-sharp"},
    {route: "Account Setting", component: StudentSettings, icon: "settings-sharp"}
  ];

  const other = [
    {route: "Dashboard", component: AdminDashboard, icon: "home-sharp"}
  ];

  const superAdminDrawerScreens = superAdminMenu.map((menu) => {
    return(
      <Drawer.Screen 
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name={menu.icon} size={22} color={color} />
          ),
          headerStyle: {
            elevation: 5,
            shadowOpacity: 0.5,
            borderBottomWidth: 1
          },
        }} 
        key={menu.route} name={menu.route} component={menu.component} 
      />
    );
  });
  const adminDrawerScreens = adminMenu.map((menu) => {
    return(
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name={menu.icon} size={22} color={color} />
          ),
          headerStyle: {
            elevation: 5,
            shadowOpacity: 0.5,
            borderBottomWidth: 1
          },
        }} 
       key={menu.route} name={menu.route} component={menu.component} 
      />
    );
  });
  const studentDrawerScreens = studentMenu.map((menu) => {
    return(
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name={menu.icon} size={22} color={color} />
          ),
          headerStyle: {
            elevation: 5,
            shadowOpacity: 0.5,
            borderBottomWidth: 1
          },
        }}  
      key={menu.route} name={menu.route} component={menu.component} 
    />
    );
  });
  const instructorDrawerScreens = instructorMenu.map((menu) => {
    return(
      <Drawer.Screen 
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name={menu.icon} size={22} color={color} />
          ),
          headerStyle: {
            elevation: 5,
            shadowOpacity: 0.5,
            borderBottomWidth: 1
          },
        }} 
        key={menu.route} name={menu.route} component={menu.component} 
      />
    );
  });

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        // headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          // marginLeft: -25,
          fontSize: 15,
        },
      }}
    >
      {
        access==="Super Admin" ? superAdminDrawerScreens : access==="Admin" ? adminDrawerScreens : access==="Instructor" ? instructorDrawerScreens : access==="Student" ? studentDrawerScreens : ""
      }
    </Drawer.Navigator>
  );
}
