import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { AccessibilityToolbar } from "@/components/ui/AccessibilityToolbar";
import { GlobalSchemaMarkup } from "@/components/seo/GlobalSchemaMarkup";
import { ContentProvenance, ProvenanceBadge } from "@/components/metadata";
import { SuperAdminBanner, SuperAdminWatermark } from "@/components/admin/SuperAdminBanner";
import { AuthProvider } from "@/contexts/AuthContext";
import { SuperAdminProvider } from "@/contexts/SuperAdminContext";
import { ImpersonationProvider } from "@/contexts/ImpersonationContext";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { FocusModeProvider } from "@/contexts/FocusModeContext";
import { useFocusModeShortcut } from "@/hooks/useFocusModeShortcut";
import { queryClient } from "@/config/queryClient";
import AppShell from "@/components/layout/AppShell";
import { appRoutes, type AppRouteConfig } from "@/routes/routeRegistry";

// Component that enables keyboard shortcut
function AppContent() {
  // Enable keyboard shortcut for Focus Mode (Ctrl + Alt + F)
  useFocusModeShortcut();

  const renderRouteElement = (route: AppRouteConfig) => {
    const wrapped = route.layout === "app"
      ? <AppShell showFooter={route.showFooter}>{route.element}</AppShell>
      : route.element;

    return <ErrorBoundary>{wrapped}</ErrorBoundary>;
  };

  return (
    <>
      <GlobalSchemaMarkup />
      <ContentProvenance />
      <ProvenanceBadge />
      <SuperAdminBanner />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {appRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={renderRouteElement(route)} />
          ))}
        </Routes>
      </Suspense>
      <SuperAdminWatermark />
    </>
  );
}

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AccessibilityProvider>
          <FocusModeProvider>
            <SuperAdminProvider>
              <ImpersonationProvider>
                <TooltipProvider>
                  <Toaster />
                  <Sonner />
                  <BrowserRouter>
                    <AppContent />
                    <AccessibilityToolbar />
                  </BrowserRouter>
                </TooltipProvider>
              </ImpersonationProvider>
            </SuperAdminProvider>
          </FocusModeProvider>
        </AccessibilityProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
