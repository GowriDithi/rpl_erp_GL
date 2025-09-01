import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Q4 All-Hands Meeting",
    category: "Meeting",
    sender: "Leadership",
    date: "2025-11-15",
    targetGroup: "All Employees"
  },
  {
    id: 2,
    title: "New HR Policy",
    category: "Update/Policy",
    sender: "HR Department",
    date: "2025-10-28",
    targetGroup: "All Employees"
  },
  {
    id: 3,
    title: "System Maintenance",
    category: "IT",
    sender: "IT Team",
    date: "2025-10-25",
    targetGroup: "IT Staff"
  },
  {
    id: 4,
    title: "Project Alpha Kick-Off",
    category: "Project",
    sender: "Project Manager",
    date: "2025-10-20",
    targetGroup: "Alpha Team"
  },
  {
    id: 5,
    title: "Employee of The Year",
    category: "Recognition",
    sender: "HR Department",
    date: "2025-10-10",
    targetGroup: "All Employees"
  }
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="max-w-7xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl">Announcement Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search Announcements"
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select defaultValue="all-categories">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-categories">All Categories</SelectItem>
                <SelectItem value="meeting">Meeting</SelectItem>
                <SelectItem value="policy">Update/Policy</SelectItem>
                <SelectItem value="it">IT</SelectItem>
                <SelectItem value="project">Project</SelectItem>
                <SelectItem value="recognition">Recognition</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-services">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-services">All Services</SelectItem>
                <SelectItem value="hr">HR Department</SelectItem>
                <SelectItem value="it">IT Team</SelectItem>
                <SelectItem value="leadership">Leadership</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-target-groups">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-target-groups">All Target Groups</SelectItem>
                <SelectItem value="all-employees">All Employees</SelectItem>
                <SelectItem value="it-staff">IT Staff</SelectItem>
                <SelectItem value="alpha-team">Alpha Team</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead>TITLE</TableHead>
                <TableHead>CATEGORY</TableHead>
                <TableHead>SENDER</TableHead>
                <TableHead>DATE</TableHead>
                <TableHead>TARGET GROUP</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {announcements.map((announcement) => (
                <TableRow key={announcement.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{announcement.title}</TableCell>
                  <TableCell>{announcement.category}</TableCell>
                  <TableCell>{announcement.sender}</TableCell>
                  <TableCell>{announcement.date}</TableCell>
                  <TableCell>{announcement.targetGroup}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}