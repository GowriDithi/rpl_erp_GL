import { NotificationCard } from "@/components/NotificationCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const notifications = [
  {
    id: 1,
    type: "critical" as const,
    title: "Ammonium less than 10%",
    message: "Authorize for Purchase.",
    timestamp: "Just Now",
    isRead: false
  },
  {
    id: 2,
    type: "alert" as const,
    title: "General Meeting on Monday 03rd August",
    message: "General Meeting on Monday 03rd August",
    timestamp: "1 hour ago",
    isRead: false
  },
  {
    id: 3,
    type: "warning" as const,
    title: "License Expiry in 10 days",
    message: "vehicle no: KL 01 0000",
    timestamp: "1 day ago",
    isRead: false
  },
  {
    id: 4,
    type: "announcement" as const,
    title: "Ammonium less than 10%",
    message: "Authorize for Purchase.",
    timestamp: "Just Now",
    isRead: false
  },
  {
    id: 5,
    type: "system" as const,
    title: "Interel Audit Report ready",
    message: "for Download",
    timestamp: "30 mins ago",
    isRead: false
  }
];

export default function NotificationCenter() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl">Notification Center</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {notifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                type={notification.type}
                title={notification.title}
                message={notification.message}
                timestamp={notification.timestamp}
                isRead={notification.isRead}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}