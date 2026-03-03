'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/app/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, AlertCircle, Send } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// --- TYPE DEFINITIONS ---
interface BookingRequest {
  id: string;
  data: string;
  usuari: string;
  estat: 'Pendent' | 'Aprovat' | string; // Allow other strings for robustness
  detalls: string;
}

// --- MAIN COMPONENT ---
export default function BookingPage() {
  const router = useRouter();
  const { toast } = useToast();
  
  // User and auth state
  const [userName, setUserName] = useState<string | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  
  // Form state
  const [serviceType, setServiceType] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [cargo, setCargo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // List state
  const [requests, setRequests] = useState<BookingRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- AUTHENTICATION ---
  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    } else {
      router.push('/login');
    }
    setAuthChecked(true);
  }, [router]);


  // --- DATA FETCHING ---
  const fetchRequests = useCallback(async () => {
    if (!userName) return;

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://sheetdb.io/api/v1/cj07wia9xgfo2/search?usuari=${encodeURIComponent(userName)}&sheet=solicituds`);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: No s'ha pogut carregar l'historial de sol·licituds.`);
      }
      const data: BookingRequest[] = await response.json();
      setRequests(data.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()));
    } catch (e: any) {
      setError(e.message);
      toast({
        variant: "destructive",
        title: 'Error en carregar l\'historial',
        description: e.message || "No s'ha pogut connectar amb el servidor.",
      });
    } finally {
      setIsLoading(false);
    }
  }, [userName, toast]);

  useEffect(() => {
    if (userName) {
      fetchRequests();
    }
  }, [userName, fetchRequests]);

  // --- FORM SUBMISSION ---
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userName) {
        toast({ variant: "destructive", title: "Sessió no vàlida", description: "Si us plau, torni a iniciar sessió." });
        return;
    }
    setIsSubmitting(true);

    const newId = `BK-${Date.now()}${Math.floor(Math.random() * 1000)}`;
    const today = new Date().toISOString().split('T')[0];
    const details = `Servei: ${serviceType} | Origen: ${origin} | Destí: ${destination} | Càrrega: ${cargo}`;

    const newRequestData = {
        id: newId,
        data: today,
        usuari: userName,
        estat: 'Pendent',
        detalls: details,
    };

    try {
      const response = await fetch("https://sheetdb.io/api/v1/cj07wia9xgfo2?sheet=solicituds", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [newRequestData] // SheetDB expects an array of objects
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Hi ha hagut un problema en enviar la sol·licitud.');
      }
      
      toast({
        title: 'Sol·licitud Enviada!',
        description: 'La teva sol·licitud s\'ha registrat correctament.',
      });
      
      // Reset form and refresh list
      setServiceType('');
      setOrigin('');
      setDestination('');
      setCargo('');
      fetchRequests();

    } catch (error: any) {
      toast({
        variant: "destructive",
        title: 'Error en l\'enviament',
        description: error.message || 'No s\'ha pogut enviar la sol·licitud.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Prevent flash of content before auth check
  if (!authChecked) {
    return (
      <div className="flex-1 flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // --- RENDER ---
  return (
    <div className="p-8 flex-1">
      <PageHeader
        title="Gestió de Sol·licituds"
        description="Crea una nova sol·licitud de transport i consulta l'historial de les teves comandes."
      />
      
      <div className="grid gap-12 lg:grid-cols-5">
        
        {/* FORM SECTION */}
        <div className="lg:col-span-2">
            <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Nova Sol·licitud</CardTitle>
                <CardDescription>Omple les dades per a una nova comanda.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="service-type">Tipus de Servei</Label>
                  <Select value={serviceType} onValueChange={setServiceType} required>
                    <SelectTrigger id="service-type">
                      <SelectValue placeholder="Selecciona un servei" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Transport Marítim">Transport Marítim</SelectItem>
                      <SelectItem value="Transport Aeri">Transport Aeri</SelectItem>
                      <SelectItem value="Transport Terrestre">Transport Terrestre</SelectItem>
                      <SelectItem value="Magatzem">Magatzem</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="origin">Origen</Label>
                  <Input id="origin" value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="Ciutat / Port d'origen" required />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="destination">Destí</Label>
                  <Input id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Ciutat / Port de destí" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cargo">Detalls de la Càrrega</Label>
                  <Textarea id="cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder="Descriu pesos, mides, tipus de mercaderia..." required />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
                  {isSubmitting ? 'Enviant...' : 'Enviar Sol·licitud'}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>

        {/* HISTORY SECTION */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold font-headline mb-4">Les meves sol·licituds</h2>
          {isLoading && <div className="flex justify-center p-8"><Loader2 className="h-8 w-8 animate-spin" /></div>}
          
          {error && (
            <Card className="border-destructive">
                <CardHeader className="flex-row gap-4 items-center">
                    <AlertCircle className="h-8 w-8 text-destructive" />
                    <div>
                        <CardTitle className="text-destructive">Error</CardTitle>
                        <CardDescription>{error}</CardDescription>
                    </div>
                </CardHeader>
            </Card>
          )}

          {!isLoading && !error && requests.length === 0 && (
             <Card>
                <CardContent className="pt-6">
                    <p className="text-muted-foreground text-center">No tens cap sol·licitud registrada encara.</p>
                </CardContent>
            </Card>
          )}
          
          {!isLoading && !error && requests.length > 0 && (
            <div className="space-y-4">
              {requests.map(req => (
                <Card key={req.id} className="shadow-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-lg">Sol·licitud <span className="font-mono text-primary">{req.id}</span></CardTitle>
                        <CardDescription>{req.data ? new Date(req.data).toLocaleDateString('ca-ES') : 'Data no disponible'}</CardDescription>
                      </div>
                       <Badge variant={req.estat === 'Aprovat' ? 'default' : 'secondary'} className={req.estat === 'Aprovat' ? 'bg-green-600 text-white' : 'bg-yellow-500 text-white'}>
                         {req.estat}
                       </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                     <p className="text-sm text-muted-foreground whitespace-pre-wrap">{req.detalls.split('|').join('\n')}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
