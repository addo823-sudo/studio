'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/app/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, AlertCircle, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Solicitud {
  id: string;
  data: string;
  usuari: string;
  estat: 'Pendent' | 'Aprovat' | 'Rebutjat';
  detalls: string;
}

export default function BookingPage() {
  const router = useRouter();
  const { toast } = useToast();
  
  // Auth state
  const [userName, setUserName] = useState<string | null>(null);
  
  // Form state
  const [serviceType, setServiceType] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [load, setLoad] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // List state
  const [solicituds, setSolicituds] = useState<Solicitud[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Auth check
  useEffect(() => {
    const storedUser = localStorage.getItem('userName');
    if (storedUser) {
      setUserName(storedUser);
    } else {
      router.push('/login');
    }
  }, [router]);

  const fetchSolicituds = useCallback(async (user: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://sheetdb.io/api/v1/64gi8fmqcbxx4/search?usuari=${user}&sheet=solicituds`);
      if (!response.ok) {
        throw new Error("No s'ha pogut carregar l'historial de sol·licituds.");
      }
      const data: Solicitud[] = await response.json();
      setSolicituds(data.sort((a, b) => {
        const dateA = a.data.split('/').reverse().join('-');
        const dateB = b.data.split('/').reverse().join('-');
        return new Date(dateB).getTime() - new Date(dateA).getTime();
      }));
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch data on user load
  useEffect(() => {
    if (userName) {
      fetchSolicituds(userName);
    }
  }, [userName, fetchSolicituds]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!serviceType || !origin || !destination || !load) {
      toast({
        variant: "destructive",
        title: 'Camps obligatoris',
        description: 'Si us plau, ompliu tots els camps del formulari.',
      });
      return;
    }
    setIsSubmitting(true);

    const newSolicitud = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      data: new Date().toLocaleDateString('ca-ES'),
      usuari: userName,
      estat: 'Pendent',
      detalls: `Servei: ${serviceType} | Origen: ${origin} | Destí: ${destination} | Càrrega: ${load}`
    };

    try {
      const response = await fetch('https://sheetdb.io/api/v1/64gi8fmqcbxx4?sheet=solicituds', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: [newSolicitud] })
      });

      if (!response.ok) {
        throw new Error("No s'ha pogut enviar la sol·licitud.");
      }
      
      toast({
        title: 'Sol·licitud Enviada!',
        description: 'La vostra sol·licitud s\'ha registrat correctament.',
      });

      // Reset form
      setServiceType('');
      setOrigin('');
      setDestination('');
      setLoad('');
      
      // Refresh list
      if (userName) {
        fetchSolicituds(userName);
      }

    } catch (e: any) {
      toast({
        variant: "destructive",
        title: 'Error',
        description: e.message || "No s'ha pogut enviar la sol·licitud.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusBadge = (status: Solicitud['estat']) => {
    switch (status) {
      case 'Pendent':
        return 'bg-yellow-400 text-yellow-900 hover:bg-yellow-400/90';
      case 'Aprovat':
        return 'bg-green-500 text-white hover:bg-green-500/90';
      case 'Rebutjat':
         return 'bg-red-500 text-white hover:bg-red-500/90';
      default:
        return 'bg-gray-500 text-white hover:bg-gray-500/90';
    }
  }

  if (!userName) {
    return (
        <div className="p-8 flex-1 flex justify-center items-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
    );
  }

  return (
    <div className="p-8 flex-1">
      <PageHeader
        title="Gestió de Sol·licituds"
        description="Creï una nova sol·licitud de transport o consulti el seu historial."
      >
        <Button variant="outline" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Enrere
        </Button>
      </PageHeader>
      
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
            <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle>Nova Sol·licitud</CardTitle>
                        <CardDescription>Ompliu el formulari per registrar una nova petició de servei.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="service-type">Tipus de Servei</Label>
                            <Select onValueChange={setServiceType} value={serviceType}>
                                <SelectTrigger id="service-type">
                                    <SelectValue placeholder="Seleccioni un servei" />
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
                            <Input id="origin" value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="Ciutat d'origen" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="destination">Destí</Label>
                            <Input id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Ciutat de destí" required />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="load">Càrrega</Label>
                            <Textarea id="load" value={load} onChange={(e) => setLoad(e.target.value)} placeholder="Descripció, pes, mides..." required/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {isSubmitting ? 'Enviant...' : 'Enviar Sol·licitud'}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>

        <div className="lg:col-span-3">
             <h2 className="text-2xl font-semibold mb-4">Les meves sol·licituds</h2>
             {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
             ) : error ? (
                <Card className="border-destructive">
                    <CardHeader className="flex-row gap-4 items-center">
                        <AlertCircle className="h-8 w-8 text-destructive" />
                        <div>
                            <CardTitle className="text-destructive">Error</CardTitle>
                            <CardDescription>{error}</CardDescription>
                        </div>
                    </CardHeader>
                </Card>
             ) : solicituds.length === 0 ? (
                <Card><CardContent className="pt-6"><p className="text-muted-foreground text-center">No teniu cap sol·licitud registrada.</p></CardContent></Card>
             ) : (
                <div className="space-y-4">
                    {solicituds.map((sol) => (
                        <Card key={sol.id}>
                            <CardHeader>
                                <div className="flex justify-between items-start gap-4">
                                    <CardTitle className="text-lg">Sol·licitud {sol.id}</CardTitle>
                                    <Badge className={cn("text-xs whitespace-nowrap", getStatusBadge(sol.estat))}>{sol.estat}</Badge>
                                </div>
                                <CardDescription>Data: {sol.data}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground break-words">{sol.detalls}</p>
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
