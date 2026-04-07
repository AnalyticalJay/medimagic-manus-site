import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { PageTransition } from "./components/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import DivorceSettlement from "./pages/services/DivorceSettlement";
import MaintenanceAgreements from "./pages/services/MaintenanceAgreements";
import ParentingPlans from "./pages/services/ParentingPlans";
import VoiceOfChild from "./pages/services/VoiceOfChild";
import AdultDivorcPrep from "./pages/services/AdultDivorcePrep";
import IllnessDisability from "./pages/services/IllnessDisability";
import PalliativeCare from "./pages/services/PalliativeCare";
import HealthEducation from "./pages/services/HealthEducation";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSubmissions from "./pages/AdminSubmissions";
import ClientPortal from "./pages/ClientPortal";
import UserDashboard from "./pages/UserDashboard";
import OnlineConsultation from "./pages/OnlineConsultation";
import WhatsAppWidget from "./components/WhatsAppWidget";

// Wrapper component to add fade-in animation to each page
function RouteWrapper({ component: Component }: { component: React.ComponentType<any> }) {
  return (
    <PageTransition>
      <Component />
    </PageTransition>
  );
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={() => <RouteWrapper component={Home} />} />
      <Route path={"/about"} component={() => <RouteWrapper component={About} />} />
      <Route path={"/contact"} component={() => <RouteWrapper component={Contact} />} />
      <Route path={"/booking"} component={() => <RouteWrapper component={Booking} />} />
      <Route path={"/online-consultation"} component={() => <RouteWrapper component={OnlineConsultation} />} />
      <Route path={"/services/divorce-settlement"} component={() => <RouteWrapper component={DivorceSettlement} />} />
      <Route path={"/services/maintenance-agreements"} component={() => <RouteWrapper component={MaintenanceAgreements} />} />
      <Route path={"/services/parenting-plans"} component={() => <RouteWrapper component={ParentingPlans} />} />
      <Route path={"/services/voice-of-child"} component={() => <RouteWrapper component={VoiceOfChild} />} />
      <Route path={"/services/adult-divorce-prep"} component={() => <RouteWrapper component={AdultDivorcPrep} />} />
      <Route path={"/services/illness-disability"} component={() => <RouteWrapper component={IllnessDisability} />} />
      <Route path={"/services/palliative-care"} component={() => <RouteWrapper component={PalliativeCare} />} />
      <Route path={"/services/health-education"} component={() => <RouteWrapper component={HealthEducation} />} />
      <Route path={"/admin"} component={() => <RouteWrapper component={AdminDashboard} />} />
      <Route path={"/admin/submissions"} component={() => <RouteWrapper component={AdminSubmissions} />} />
      <Route path={"/portal"} component={() => <RouteWrapper component={ClientPortal} />} />
      <Route path={"/dashboard"} component={() => <RouteWrapper component={UserDashboard} />} />
      <Route path={"/404"} component={() => <RouteWrapper component={NotFound} />} />
      <Route component={() => <RouteWrapper component={NotFound} />} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="fixed top-0 left-0 z-[9999] px-4 py-2 bg-[#5DBB63] text-white font-semibold rounded-br-lg transform -translate-y-full focus:translate-y-0 transition-transform"
            aria-label="Skip to main content"
          >
            Skip to main content
          </a>
          <Toaster />
          <WhatsAppWidget />
          <main id="main-content" role="main">
            <Router />
          </main>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
