import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import DashboardLayout from "@/components/DashboardLayout";
import { ConsultationSubmissionsAdmin } from "@/components/ConsultationSubmissionsAdmin";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminSubmissions() {
  const { user, loading } = useAuth();
  const [, setLocation] = useLocation();

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center min-h-[60vh]">Loading...</div>
      </DashboardLayout>
    );
  }

  if (!user || user.role !== "admin") {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center min-h-[60vh]">
          <Card className="p-8 text-center">
            <h1 className="text-2xl font-bold text-[#0F3D4C] mb-4">Access Denied</h1>
            <p className="text-gray-600 mb-6">You do not have permission to access this page.</p>
            <Button onClick={() => setLocation("/")} className="bg-[#5DBB63] hover:bg-[#4a9a52]">
              Return to Home
            </Button>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <ConsultationSubmissionsAdmin />
      </div>
    </DashboardLayout>
  );
}
