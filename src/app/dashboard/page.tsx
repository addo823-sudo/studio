
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/app/components/page-header';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

export default function DashboardPage() {
  const [userName, setUserName] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // This check only runs on the client
    const name = localStorage.getItem('userName');
    
    if (name) {
      setUserName(name);
    } else {
      // If there's no user data, redirect to login
      router.push('/login');
    }
    setAuthChecked(true);
  }, [router]);

  // While checking auth state, show nothing to prevent incorrect content flash
  if (!authChecked || !userName) {
    return null; // or a loading spinner
  }

  return (
    <div className="p-4 md:p-8 flex-1">
        <PageHeader
            title={`Benvingut, ${userName}`}
            description="Aquí pots trobar un resum de la teva activitat i accessos directes a les funcions principals."
        />
        {/* The logout button is now in the main AppShell header */}
    </div>
  );
}
