import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const trackingData = [
  {
    id: 1,
    message: "Q4 All-Hands Meeting",
    userId: "user-201",
    status: "acknowledged"
  },
  {
    id: 2,
    message: "New HR Policy Update",
    userId: "user-202",
    status: "pending"
  },
  {
    id: 3,
    message: "System Maintenance Window",
    userId: "user-203",
    status: "acknowledged"
  },
  {
    id: 4,
    message: "Q4 All-Hands Meeting",
    userId: "user-204",
    status: "pending"
  },
  {
    id: 5,
    message: "New HR Policy Update",
    userId: "user-205",
    status: "acknowledged"
  },
  {
    id: 6,
    message: "Project Alpha Kick-off",
    userId: "user-206",
    status: "pending"
  }
];

export default function Tracker() {
  return (
    <div className="max-w-5xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl">Acknowledgment Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead>MESSAGE</TableHead>
                <TableHead>USER/GROUP ID</TableHead>
                <TableHead>STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trackingData.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{item.message}</TableCell>
                  <TableCell className="text-muted-foreground">{item.userId}</TableCell>
                  <TableCell>
                    <Badge 
                      className={
                        item.status === "acknowledged" 
                          ? "bg-success text-success-foreground" 
                          : "bg-pending text-pending-foreground"
                      }
                    >
                      {item.status === "acknowledged" ? "Acknowledged" : "Pending"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}