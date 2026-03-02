
'use client';

import { PageHeader } from '@/app/components/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Thermometer, Droplets, Anchor, Route, Zap, FileText } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const tankerTypes = [
  {
    title: 'Alimentàries AISI 316L',
    description: 'Cisternes d\'acer inoxidable per al transport de productes líquids alimentaris a granel, garantint la màxima qualitat i seguretat.',
    specs: [
        'Material: Acer inoxidable sanitari AISI 316L',
        'Capacitat: 28.500–32.000L',
        'Divisions: 1–3 compartiments',
        'Vàlvules: DN80 i DN100',
        'Control de temperatura: +5ºC / +65ºC',
        'Certificacions: ATP, ISO 22000, HACCP',
        'Neteja CIP, Traçabilitat i seguiment GPS 24/7'
    ],
    imageUrl: '/Cisterna Alimentaria.jpg',
    imageHint: 'stainless tanker',
    icons: [
      { icon: Thermometer, label: 'Control de Temperatura' },
      { icon: Droplets, label: 'Certificat CIP' },
    ],
  },
  {
    title: 'ADR Químiques Classe 3 i 8',
    description: 'Servei especialitzat en mercaderies perilloses líquides (ADR). Cisternes preparades per a líquids corrosius i inflamables.',
    specs: [
        'Tipus de cisterna: L4BH / LGBF',
        'Capacitat: 26.000-34.000L',
        'Equipament: ADR complet',
        'Normatives: ADR 2025, REACH, UNE-EN 14025',
        'Classes ADR: Classe 8 (corrosius), Classe 3 (inflamables), Classe 6.1 (tòxics)',
    ],
    imageUrl: '/ADR 8.gif',
    imageHint: 'ADR sign',
    icons: [
      { icon: ShieldCheck, label: 'ADR' },
      { icon: Zap, label: 'Classe 3 i 8' },
    ],
  },
  {
    title: 'Multimodals Isotanc',
    description: 'Solucions de transport internacional que combinen carretera, ferrocarril i transport marítim per a una logística eficient a tota la UE.',
    specs: [
        'Modalitats: Road Tanker | Isotanc | Flexitanc',
        'Trànsit UE: ES → FR (24–36 h), ES → DE / BE / NL (48–72 h)',
        'Rutes freqüents: Lió, Marsella, Rotterdam, Anvers, Frankfurt',
        'Documentació: DUA, EUR.1, T1, Packing list',
        'Incoterms: DAP, CPT, FCA, DDP',
        'Sistemes digitals: POD electrònic, Tracking API'
    ],
    imageUrl: 'https://eng.spectransgarant.ru/services/tank-containers-02.jpg',
    imageHint: 'isotank container',
    icons: [
      { icon: Anchor, label: 'Marítim' },
      { icon: Route, label: 'Carretera' },
    ],
  },
];

const securityFeatures = [
    'Traçabilitat GPS 24/7',
    'Segellat documental CIP',
    'Control de temperatura',
    'Conductors amb certificació ADR Cisternes',
    'Plans d\'emergència i vessaments',
];

const certifications = [
    { name: 'ISO 22000', description: 'Seguretat alimentària' },
    { name: 'ADR', description: 'Transport de mercaderies perilloses' },
    { name: 'HACCP', description: 'Gestió sanitària' },
    { name: 'ATP', description: 'Mercaderies peribles' },
]

export default function NuestraFlotaPage() {
  return (
    <div className="p-8 flex-1 bg-black text-gray-200">
      <PageHeader
        title={<span className="text-secondary">La Nostra Flota</span>}
        description={<span className="text-gray-400">Moderna i especialitzada per al transport segur de líquids.</span>}
      />
      <div className="container mx-auto px-0 space-y-12">
        
        <p className="text-lg text-gray-400 max-w-4xl">
          Disposem d'una flota moderna i especialitzada per al transport segur de líquids alimentaris, químics i mercaderies perilloses ADR. Totes les nostres cisternes compten amb manteniment periòdic, calibratges vigents i sistemes de traçabilitat.
        </p>
        
        {/* Datos técnicos */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">62</CardTitle>
                <CardDescription>Unitats Operatives</CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">1,8M</CardTitle>
                <CardDescription>Litres de Capacitat Total</CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">2024</CardTitle>
                <CardDescription>Darrera Renovació de Flota</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Tipos de Cisternas */}
        <section>
          <h2 className="text-3xl font-bold font-headline mb-6">Tipus de Cisternes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tankerTypes.map((tanker) => {
              const image = tanker.imageUrl ? { imageUrl: tanker.imageUrl, imageHint: tanker.imageHint } : PlaceHolderImages.find(img => img.id === (tanker as any).imageId);
              return (
                <Dialog key={tanker.title}>
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col">
                    {image && (
                      <div className="relative h-56 w-full">
                        <Image
                          src={image.imageUrl}
                          alt={tanker.title}
                          fill
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{tanker.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        {tanker.icons.map((item, index) => (
                          <li key={index} className="flex items-center gap-3 text-muted-foreground">
                            <item.icon className="h-5 w-5 text-primary" />
                            <span>{item.label}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <DialogTrigger asChild>
                        <Button className="w-full">Sol·licitar Informació</Button>
                      </DialogTrigger>
                    </div>
                  </Card>
                  <DialogContent className="sm:max-w-xl bg-card text-card-foreground">
                    <DialogHeader>
                      <DialogTitle>{tanker.title}</DialogTitle>
                      <DialogDescription>
                        {tanker.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <h4 className="font-semibold mb-2">Especificacions Tècniques:</h4>
                      <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
                        {tanker.specs.map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <DialogClose asChild>
                           <Button variant="outline">Enrere</Button>
                        </DialogClose>
                        <Button asChild variant="outline">
                            <Link href="/contacto">Contactar</Link>
                        </Button>
                        <Button asChild>
                           <Link href="/booking">Sol·licitar Servei</Link>
                        </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              )
            })}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
            {/* Sistemas de Seguridad */}
            <section>
                <h2 className="text-3xl font-bold font-headline mb-6">Sistemes de Seguretat</h2>
                <Card>
                    <CardContent className="pt-6">
                        <ul className="space-y-4">
                            {securityFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-card-foreground">{feature}</span>
                            </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </section>

            {/* Certificaciones */}
            <section>
                <h2 className="text-3xl font-bold font-headline mb-6">Certificacions</h2>
                 <Card>
                    <CardContent className="pt-6">
                        <ul className="space-y-4">
                            {certifications.map((cert, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-card-foreground">{cert.name}</p>
                                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </section>
        </div>

      </div>
    </div>
  );
}
