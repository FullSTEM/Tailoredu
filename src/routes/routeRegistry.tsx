import React from "react";
import { Navigate } from "react-router-dom";
import RequireRole from "@/components/auth/RequireRole";
import ProtectedTeacherRoute from "@/components/teacher/ProtectedTeacherRoute";
import ProtectedAdminRoute from "@/components/admin/ProtectedAdminRoute";
import ProtectedParentRoute from "@/components/parent/ProtectedParentRoute";
import DeveloperRoute from "@/components/developer/DeveloperRoute";
import { StudentSignupForm } from "@/components/auth/student/StudentSignupForm";
import { AdminOnboarding } from "@/components/admin/AdminOnboarding";

export type RouteLayout = "app" | "none";

export interface AppRouteConfig {
  path: string;
  element: React.ReactNode;
  layout?: RouteLayout;
  showFooter?: boolean;
}

// Lazy load all page components for code splitting
const Index = React.lazy(() => import("../pages/Index"));
const LandingPage = React.lazy(() => import("../pages/LandingPage"));
const Auth = React.lazy(() => import("../pages/Auth"));
const AuthCallback = React.lazy(() => import("../pages/AuthCallback"));
const OneDriveCallback = React.lazy(() => import("../pages/OneDriveCallback"));
const TrialPage = React.lazy(() => import("../components/TrialPage"));
const ExcelCourse = React.lazy(() => import("../pages/ExcelCourse"));
const WordCourse = React.lazy(() => import("../pages/WordCourse"));
const PowerPointCourse = React.lazy(() => import("../pages/PowerPointCourse"));
const OutlookCourse = React.lazy(() => import("../pages/OutlookCourse"));
const LessonPage = React.lazy(() => import("../pages/LessonPage"));
const UserPreferences = React.lazy(() => import("../pages/UserPreferences"));
const StudentAssignmentDetail = React.lazy(() => import("../pages/student/assignments/[id]/index"));
const StudentAssignmentSubmit = React.lazy(() => import("../pages/student/assignments/[id]/submit"));
const TeacherAssignmentDetail = React.lazy(() => import("../pages/teacher/assignments/[assignmentId]/index"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const TeacherAuth = React.lazy(() => import("../pages/TeacherAuth"));
const TeacherOnboarding = React.lazy(() => import("../pages/TeacherOnboarding"));
const TeacherDashboard = React.lazy(() => import("../components/teacher/TeacherDashboard"));
const ClassDetailPage = React.lazy(() => import("../pages/ClassDetailPage"));
const UnifiedGradebookPage = React.lazy(() => import("../pages/UnifiedGradebookPage"));
const AssignmentSubmissionsPage = React.lazy(() => import("../pages/AssignmentSubmissionsPage"));
const AdminDashboard = React.lazy(() => import("../pages/AdminDashboard"));
const AdminQuizzes = React.lazy(() => import("../pages/admin/AdminQuizzes"));
const AdminPolls = React.lazy(() => import("../pages/admin/AdminPolls"));
const BuildClassPage = React.lazy(() => import("../pages/BuildClassPage"));
const LessonBuilderPage = React.lazy(() => import("../pages/teacher/LessonBuilderPage"));
const AnalyticsDashboard = React.lazy(() => import("../pages/AnalyticsDashboard"));
const ContentManagementPage = React.lazy(() => import("../pages/ContentManagementPage"));
const ParentPortalPage = React.lazy(() => import("../pages/ParentPortalPage"));
const AdvancedAdminPage = React.lazy(() => import("../pages/AdvancedAdminPage"));
const CourseEditorPage = React.lazy(() => import("../pages/CourseEditorPage"));
const ComponentsPage = React.lazy(() => import("../pages/ComponentsPage"));
const TeacherDemoPage = React.lazy(() => import("../pages/TeacherDemoPage"));
const DeveloperDashboard = React.lazy(() => import("../pages/DeveloperDashboard"));
const SuperAdminDashboard = React.lazy(() => import("../pages/SuperAdminDashboard"));
const ClassLessonPage = React.lazy(() => import("../pages/ClassLessonPage"));
const StudentLessonPage = React.lazy(() => import("../pages/StudentLessonPage"));
const AICourseBuilderPage = React.lazy(() => import("../pages/AICourseBuilderPage"));
const DemoGate = React.lazy(() => import("../pages/DemoGate"));
const DemoStart = React.lazy(() => import("../pages/DemoStart"));
const DemoShowcase = React.lazy(() => import("../pages/DemoShowcase"));
const MediaNotesDemo = React.lazy(() => import("../pages/MediaNotesDemo"));
const StudentDashboard = React.lazy(() => import("../pages/student/StudentDashboard"));
const TeacherFeedbackDashboard = React.lazy(() => import("../pages/teacher/TeacherFeedbackDashboard"));
const StudentDetailPage = React.lazy(() => import("../pages/teacher/StudentDetailPage"));
const AITutorMonitoring = React.lazy(() => import("../pages/teacher/AITutorMonitoring"));
const AITutorAnalytics = React.lazy(() => import("../pages/admin/AITutorAnalytics"));
const LearningGeniusSurveyPage = React.lazy(() => import("../pages/LearningGeniusSurveyPage"));
const JoinClassPage = React.lazy(() => import("../pages/JoinClassPage"));
const MyClassesPage = React.lazy(() => import("../pages/classes/MyClassesPage"));
const RoleAwareClassDetailPage = React.lazy(() => import("../pages/classes/RoleAwareClassDetailPage"));
const AssignmentsListPage = React.lazy(() => import("../pages/assignments/AssignmentsListPage"));
const AssignmentDetailPage = React.lazy(() => import("../pages/assignments/AssignmentDetailPage"));
const MyGradesPage = React.lazy(() => import("../pages/grades/MyGradesPage"));
const TeacherAnalyticsDashboard = React.lazy(() => import("../pages/teacher/TeacherAnalyticsDashboard"));
const AdminAnalyticsDashboard = React.lazy(() => import("../pages/admin/AdminAnalyticsDashboard"));
const ParentDashboard = React.lazy(() => import("../pages/parent/ParentDashboard"));
const BootstrapDemo = React.lazy(() => import("../pages/BootstrapDemo"));
const AccessDenied = React.lazy(() => import("../pages/AccessDenied"));
const SystemDashboard = React.lazy(() => import("../pages/SystemDashboard"));
const AdaptiveTestPage = React.lazy(() => import("../components/AdaptiveTestPage"));
const MFASetup = React.lazy(() => import("../pages/MFASetup"));
const MFAVerify = React.lazy(() => import("../pages/MFAVerify"));
const DocsViewer = React.lazy(() => import("../pages/DocsViewer"));
const PilotInterest = React.lazy(() => import("../pages/PilotInterest"));
const ConferenceDemo = React.lazy(() => import("../pages/conference/ConferenceDemo"));
const ConferenceSession = React.lazy(() => import("../pages/conference/ConferenceSession"));
const EmbedContentPage = React.lazy(() => import("../pages/admin/embed-content"));
const AdaptiveClassroomDemo = React.lazy(() => import("../pages/demo/adaptive-classroom"));

export const appRoutes: AppRouteConfig[] = [
  { path: "/", element: <LandingPage />, layout: "none" },
  { path: "/bootstrap", element: <BootstrapDemo />, layout: "none" },
  { path: "/auth", element: <Auth />, layout: "none" },
  { path: "/auth/callback", element: <AuthCallback />, layout: "none" },
  { path: "/onedrive/callback", element: <OneDriveCallback />, layout: "none" },
  { path: "/auth/setup-mfa", element: <MFASetup />, layout: "none" },
  { path: "/auth/verify-mfa", element: <MFAVerify />, layout: "none" },
  { path: "/signup/student", element: <StudentSignupForm />, layout: "none" },
  { path: "/access-denied", element: <AccessDenied />, layout: "none" },
  {
    path: "/dashboard/student",
    element: (
      <RequireRole allowedRoles={["student", "super_admin", "developer"]}>
        <StudentDashboard />
      </RequireRole>
    ),
    layout: "app",
  },
  {
    path: "/quiz/learning-genius",
    element: (
      <RequireRole allowedRoles={["student", "super_admin", "developer"]}>
        <LearningGeniusSurveyPage />
      </RequireRole>
    ),
    layout: "none",
  },
  {
    path: "/classes/join",
    element: (
      <RequireRole allowedRoles={["student", "super_admin", "developer"]}>
        <JoinClassPage />
      </RequireRole>
    ),
    layout: "none",
  },
  {
    path: "/classes/my-classes",
    element: (
      <RequireRole allowedRoles={["student", "super_admin", "developer"]}>
        <MyClassesPage />
      </RequireRole>
    ),
    layout: "none",
  },
  {
    path: "/classes/:id",
    element: (
      <RequireRole allowedRoles={["student", "teacher", "super_admin", "developer"]}>
        <RoleAwareClassDetailPage />
      </RequireRole>
    ),
    layout: "none",
  },
  {
    path: "/assignments",
    element: (
      <RequireRole allowedRoles={["student", "super_admin", "developer"]}>
        <AssignmentsListPage />
      </RequireRole>
    ),
    layout: "none",
  },
  {
    path: "/assignments/:id",
    element: (
      <RequireRole allowedRoles={["student", "super_admin", "developer"]}>
        <AssignmentDetailPage />
      </RequireRole>
    ),
    layout: "none",
  },
  {
    path: "/grades",
    element: (
      <RequireRole allowedRoles={["student", "super_admin", "developer"]}>
        <MyGradesPage />
      </RequireRole>
    ),
    layout: "none",
  },
  { path: "/trial", element: <TrialPage />, layout: "none" },
  { path: "/pilot-interest", element: <PilotInterest />, layout: "none" },
  {
    path: "/test/adaptive-assessment",
    element: (
      <RequireRole allowedRoles={["teacher", "super_admin", "developer"]}>
        <AdaptiveTestPage />
      </RequireRole>
    ),
    layout: "none",
  },
  { path: "/conference/demo", element: <ConferenceDemo />, layout: "none" },
  { path: "/conference/session/:sessionId", element: <ConferenceSession />, layout: "none" },
  { path: "/demo", element: <DemoGate />, layout: "none" },
  { path: "/demo/start", element: <DemoStart />, layout: "none" },
  { path: "/demo/home", element: <Index />, layout: "app", showFooter: true },
  {
    path: "/demo/adaptive-classroom",
    element: (
      <RequireRole allowedRoles={["teacher", "admin", "super_admin", "developer"]}>
        <AdaptiveClassroomDemo />
      </RequireRole>
    ),
    layout: "none",
  },
  { path: "/course/excel", element: <ExcelCourse />, layout: "app" },
  { path: "/course/word", element: <WordCourse />, layout: "app", showFooter: true },
  { path: "/course/powerpoint", element: <PowerPointCourse />, layout: "app", showFooter: true },
  { path: "/course/outlook", element: <OutlookCourse />, layout: "app", showFooter: true },
  { path: "/lesson/:lessonId", element: <LessonPage />, layout: "app" },
  { path: "/preferences", element: <UserPreferences />, layout: "none" },
  {
    path: "/content",
    element: (
      <RequireRole allowedRoles={["teacher", "admin", "super_admin", "developer"]}>
        <ContentManagementPage />
      </RequireRole>
    ),
    layout: "app",
  },
  { path: "/components", element: <ComponentsPage />, layout: "app" },
  { path: "/teacher-demo", element: <TeacherDemoPage />, layout: "none" },
  { path: "/demo-showcase", element: <DemoShowcase />, layout: "app" },
  { path: "/demo/media-notes", element: <MediaNotesDemo />, layout: "none" },
  { path: "/docs/ux-testing", element: <DocsViewer />, layout: "none" },
  {
    path: "/parent",
    element: (
      <RequireRole allowedRoles={["parent", "super_admin", "developer"]}>
        <ParentPortalPage />
      </RequireRole>
    ),
    layout: "app",
  },
  {
    path: "/dashboard/parent",
    element: (
      <ProtectedParentRoute>
        <ParentDashboard />
      </ProtectedParentRoute>
    ),
    layout: "app",
  },
  {
    path: "/admin/onboarding",
    element: (
      <RequireRole allowedRoles={["admin", "super_admin", "developer"]}>
        <AdminOnboarding />
      </RequireRole>
    ),
    layout: "none",
  },
  { path: "/admin", element: <Navigate to="/admin/dashboard" replace />, layout: "none" },
  {
    path: "/admin/dashboard",
    element: (
      <RequireRole allowedRoles={["admin", "super_admin", "developer"]}>
        <AdminDashboard />
      </RequireRole>
    ),
    layout: "app",
  },
  {
    path: "/admin/quizzes",
    element: (
      <RequireRole allowedRoles={["admin", "super_admin", "developer"]}>
        <AdminQuizzes />
      </RequireRole>
    ),
    layout: "app",
  },
  {
    path: "/admin/polls",
    element: (
      <RequireRole allowedRoles={["admin", "super_admin", "developer"]}>
        <AdminPolls />
      </RequireRole>
    ),
    layout: "app",
  },
  {
    path: "/admin/build-class",
    element: (
      <RequireRole allowedRoles={["admin", "super_admin", "developer"]}>
        <BuildClassPage />
      </RequireRole>
    ),
    layout: "app",
  },
  {
    path: "/admin/ai-course-builder",
    element: (
      <RequireRole allowedRoles={["admin", "super_admin", "developer"]}>
        <AICourseBuilderPage />
      </RequireRole>
    ),
    layout: "app",
  },
  {
    path: "/admin/course-editor",
    element: (
      <RequireRole allowedRoles={["admin", "super_admin", "developer"]}>
        <CourseEditorPage />
      </RequireRole>
    ),
    layout: "app",
  },
  {
    path: "/admin/advanced",
    element: (
      <RequireRole allowedRoles={["admin", "super_admin", "developer"]}>
        <AdvancedAdminPage />
      </RequireRole>
    ),
    layout: "app",
  },
  {
    path: "/admin/embed-content",
    element: (
      <RequireRole allowedRoles={["admin", "super_admin", "developer"]}>
        <EmbedContentPage />
      </RequireRole>
    ),
    layout: "none",
  },
  {
    path: "/dashboard/admin/analytics",
    element: (
      <ProtectedAdminRoute>
        <AdminAnalyticsDashboard />
      </ProtectedAdminRoute>
    ),
    layout: "none",
  },
  {
    path: "/admin/ai-tutor-analytics",
    element: (
      <RequireRole allowedRoles={["admin", "system_admin", "super_admin", "developer"]}>
        <AITutorAnalytics />
      </RequireRole>
    ),
    layout: "none",
  },
  {
    path: "/super-admin",
    element: (
      <RequireRole allowedRoles={["super_admin", "developer"]}>
        <SuperAdminDashboard />
      </RequireRole>
    ),
    layout: "app",
  },
  {
    path: "/system-dashboard",
    element: (
      <RequireRole allowedRoles={["system_admin", "developer"]}>
        <SystemDashboard />
      </RequireRole>
    ),
    layout: "app",
  },
  {
    path: "/dev",
    element: (
      <DeveloperRoute>
        <DeveloperDashboard />
      </DeveloperRoute>
    ),
    layout: "app",
  },
  {
    path: "/student/assignments/:id",
    element: (
      <RequireRole allowedRoles={["student", "super_admin", "developer"]}>
        <StudentAssignmentDetail />
      </RequireRole>
    ),
    layout: "none",
  },
  {
    path: "/student/assignments/:id/submit",
    element: (
      <RequireRole allowedRoles={["student", "super_admin", "developer"]}>
        <StudentAssignmentSubmit />
      </RequireRole>
    ),
    layout: "none",
  },
  { path: "/teacher/auth", element: <TeacherAuth />, layout: "none" },
  {
    path: "/teacher/onboarding",
    element: (
      <ProtectedTeacherRoute requireOnboarding={false}>
        <TeacherOnboarding />
      </ProtectedTeacherRoute>
    ),
    layout: "app",
  },
  {
    path: "/teacher/dashboard",
    element: (
      <ProtectedTeacherRoute requireOnboarding={true}>
        <TeacherDashboard />
      </ProtectedTeacherRoute>
    ),
    layout: "app",
  },
  {
    path: "/teacher/gradebook",
    element: (
      <ProtectedTeacherRoute requireOnboarding={true}>
        <UnifiedGradebookPage />
      </ProtectedTeacherRoute>
    ),
    layout: "app",
  },
  {
    path: "/teacher/submissions",
    element: (
      <ProtectedTeacherRoute requireOnboarding={true}>
        <AssignmentSubmissionsPage />
      </ProtectedTeacherRoute>
    ),
    layout: "app",
  },
  {
    path: "/teacher/analytics",
    element: (
      <ProtectedTeacherRoute requireOnboarding={true}>
        <AnalyticsDashboard />
      </ProtectedTeacherRoute>
    ),
    layout: "app",
  },
  {
    path: "/teacher/classes",
    element: (
      <ProtectedTeacherRoute requireOnboarding={true}>
        <TeacherDashboard />
      </ProtectedTeacherRoute>
    ),
    layout: "app",
  },
  {
    path: "/teacher/classes/:classId",
    element: (
      <ProtectedTeacherRoute requireOnboarding={true}>
        <ClassDetailPage />
      </ProtectedTeacherRoute>
    ),
    layout: "app",
  },
  {
    path: "/teacher/classes/:classId/edit",
    element: (
      <ProtectedTeacherRoute requireOnboarding={true}>
        <BuildClassPage />
      </ProtectedTeacherRoute>
    ),
    layout: "app",
  },
  {
    path: "/teacher/students/:studentId",
    element: (
      <ProtectedTeacherRoute requireOnboarding={true}>
        <StudentDetailPage />
      </ProtectedTeacherRoute>
    ),
    layout: "app",
  },
  {
    path: "/teacher/ai-tutor-monitoring",
    element: (
      <ProtectedTeacherRoute requireOnboarding={true}>
        <AITutorMonitoring />
      </ProtectedTeacherRoute>
    ),
    layout: "none",
  },
  {
    path: "/class-lesson/:lessonId",
    element: (
      <ProtectedTeacherRoute requireOnboarding={true}>
        <ClassLessonPage />
      </ProtectedTeacherRoute>
    ),
    layout: "app",
  },
  {
    path: "/student/lesson/:lessonId",
    element: (
      <RequireRole allowedRoles={["student", "super_admin", "developer"]}>
        <StudentLessonPage />
      </RequireRole>
    ),
    layout: "app",
  },
  {
    path: "/teacher/assignments/:assignmentId",
    element: (
      <ProtectedTeacherRoute>
        <TeacherAssignmentDetail />
      </ProtectedTeacherRoute>
    ),
    layout: "none",
  },
  {
    path: "/teacher/feedback",
    element: (
      <ProtectedTeacherRoute requireOnboarding={true}>
        <TeacherFeedbackDashboard />
      </ProtectedTeacherRoute>
    ),
    layout: "app",
  },
  {
    path: "/dashboard/teacher/analytics",
    element: (
      <ProtectedTeacherRoute requireOnboarding={true}>
        <TeacherAnalyticsDashboard />
      </ProtectedTeacherRoute>
    ),
    layout: "app",
  },
  {
    path: "/teacher/build-class/:classId?",
    element: (
      <ProtectedTeacherRoute requireOnboarding={true}>
        <BuildClassPage />
      </ProtectedTeacherRoute>
    ),
    layout: "app",
  },
  {
    path: "/teacher/lesson-builder/:lessonId?",
    element: (
      <ProtectedTeacherRoute requireOnboarding={true}>
        <LessonBuilderPage />
      </ProtectedTeacherRoute>
    ),
    layout: "none",
  },
  { path: "*", element: <NotFound />, layout: "none" },
];
