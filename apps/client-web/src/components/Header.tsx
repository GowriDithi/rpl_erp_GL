import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="bg-slate-800 border-b border-slate-700 px-6 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-lg font-medium">Notifications Module</h1>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 bg-primary">
              <AvatarFallback className="text-primary-foreground text-sm">AA</AvatarFallback>
            </Avatar>
            <span className="text-white text-sm">ATHUL ANOOP</span>
          </div>
          
          <Button 
            variant="destructive" 
            size="sm"
            className="bg-red-600 hover:bg-red-700"
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}