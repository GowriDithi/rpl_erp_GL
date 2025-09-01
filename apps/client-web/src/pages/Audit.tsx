import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

const auditData = [
  {
    id: 1,
    message: "Q4 All-Hands Meeting",
    deliveryStatus: "sent",
    sentTo: "All Employees",
    acknowledged: "85%"
  },
  {
    id: 2,
    message: "New HR Policy Update",
    deliveryStatus: "sent",
    sentTo: "All Employees", 
    acknowledged: "92%"
  },
  {
    id: 3,
    message: "System Maintenance Window",
    deliveryStatus: "sent",
    sentTo: "IT Staff",
    acknowledged: "92%"
  }
];

export default function Audit() {
  const handleExport = () => {
    console.log("Export report");
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-center text-2xl flex-1">Notifications Audit Dashboard</CardTitle>
            <Button onClick={handleExport} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead>MESSAGE</TableHead>
                <TableHead>DELIVERY STATUS</TableHead>
                <TableHead>SENT TO</TableHead>
                <TableHead>ACKNOWLEDGED</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditData.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{item.message}</TableCell>
                  <TableCell>
                    <Badge className="bg-success text-success-foreground">
                      Sent
                    </Badge>
                  </TableCell>
                  <TableCell>{item.sentTo}</TableCell>
                  <TableCell className="font-medium">{item.acknowledged}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}