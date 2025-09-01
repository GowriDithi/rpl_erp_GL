import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Settings() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [internalApp, setInternalApp] = useState(true);
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(true);
  const [quietStart, setQuietStart] = useState("22:00");
  const [quietEnd, setQuietEnd] = useState("08:00");
  const [language, setLanguage] = useState("english");

  const handleSave = () => {
    console.log("Settings saved");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl">User Settings</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-8">
            {/* Push Notifications */}
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <Label htmlFor="push-notifications" className="text-base font-medium">
                Enable Push Notifications
              </Label>
              <Switch
                id="push-notifications"
                checked={pushEnabled}
                onCheckedChange={setPushEnabled}
              />
            </div>

            {/* Delivery Channels */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Delivery Channel</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="internal-app">Internal App</Label>
                      <Switch
                        id="internal-app"
                        checked={internalApp}
                        onCheckedChange={setInternalApp}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email">Email</Label>
                      <Switch
                        id="email"
                        checked={email}
                        onCheckedChange={setEmail}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sms">SMS</Label>
                      <Switch
                        id="sms"
                        checked={sms}
                        onCheckedChange={setSms}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="quiet-start">Quiet hours start</Label>
                    <Input
                      id="quiet-start"
                      type="time"
                      value={quietStart}
                      onChange={(e) => setQuietStart(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="quiet-end">Quiet hours end</Label>
                    <Input
                      id="quiet-end"
                      type="time"
                      value={quietEnd}
                      onChange={(e) => setQuietEnd(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Language */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Language</h3>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                Save Settings
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}