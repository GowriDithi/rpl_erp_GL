import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface NotificationCardProps {
  type: "critical" | "alert" | "warning" | "system" | "announcement";
  title: string;
  timestamp: string;
  message: string;
  isRead?: boolean;
}

const typeConfig = {
  critical: {
    color: "bg-critical text-critical-foreground",
    label: "Critical"
  },
  alert: {
    color: "bg-alert text-alert-foreground", 
    label: "Alert"
  },
  warning: {
    color: "bg-warning text-warning-foreground",
    label: "Warning"
  },
  system: {
    color: "bg-system text-system-foreground",
    label: "System"
  },
  announcement: {
    color: "bg-announcement text-announcement-foreground",
    label: "Announcement"
  }
};

export function NotificationCard({ type, title, timestamp, message, isRead = false }: NotificationCardProps) {
  const config = typeConfig[type];

  return (
    <Card className={`mb-4 ${isRead ? 'opacity-75' : ''}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge className={config.color}>
            {config.label}
          </Badge>
          <span className="text-sm text-muted-foreground">{timestamp}</span>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="font-medium mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{message}</p>
        <Button variant="link" className="p-0 h-auto text-primary">
          Mark as Read
        </Button>
      </CardContent>
    </Card>
  );
}