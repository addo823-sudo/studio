
import { PageHeader } from '@/app/components/page-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Clock,
  Droplets,
  FileText,
  Globe,
  ShieldCheck,
  Truck,
  Wrench,
  Package,
  TrendingUp,
  DownloadCloud,
} from 'lucide-react';

const mainServices = [
  {
    icon: Droplets,
    title: 'Transport de mercaderies líquides',
    items: [
      'Líquids alimentaris (olis, llet, sucs, aigua potable, etc.)',
      'Productes químics no perillosos',
      'Combustibles i carburants',
      'Gasos liquats (GLP)',
      'Productes industrials líquids',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Transport de mercaderies perilloses (ADR)',
    description:
      'Moltes cisternes estan certificades per transportar substàncies perilloses segons la normativa ADR (Acord Europeu relatiu al transport internacional de mercaderies perilloses per carretera), cosa que implica:',
    items: [
      'Vehicles homologats',
      'Conductors amb formació específica ADR',
      'Documentació i senyalització adequades',
      'Plans d’emergència i seguretat',
    ],
  },
];

const valueAddedServices = [
  {
    icon: TrendingUp,
    title: 'Solucions de valor afegit',
    items: [
      'Seguiment en temps real dels vehicles (GPS)',
      'Assessorament en logística i transport',
      'Emmagatzematge temporal (si disposen d’instal·lacions)',
      'Gestió de rutes i optimització de càrregues',
    ],
  },
  {
    icon: Wrench,
    title: 'Manteniment i gestió de cisternes',
    description: 'Algunes empreses ofereixen:',
    items: [
      'Neteja i descontaminació de cisternes',
      'Manteniment i revisions tècniques',
      'Certificació i revisions reglamentàries.',
    ],
  },
];

const logisticServices = [
  {
    icon: FileText,
    title: 'Gestió documental i compliment normatiu',
    items: [
      'Preparació de documentació de transport',
      'Gestió de permisos especials (si cal)',
      'Certificats de conformitat',
      'Etiquetatge i senyalització ADR',
    ],
  },
  {
    icon: DownloadCloud,
    title: 'Serveis de càrrega i descàrrega',
    items: [
      'Bombament i accessoris de connexió',
      'Mànegues específiques',
      'Personal qualificat per a la manipulació de productes',
    ],
  },
  {
    icon: Globe,
    title: 'Rutes nacionals i internacionals',
    items: [
      'Transport dins del país',
      'Enviaments a altres països de la UE i extracomunitaris (segons autoritzacions)',
    ],
  },
  {
    icon: Clock,
    title: 'Servei urgent i programació flexible',
    items: [
      'Transport programat segons les necessitats del client',
      'Opcions de servei ràpid o prioritari',
    ],
  },
];

export default function ServiciosPage() {
  return (
    <div className="p-8 flex-1 bg-service-background">
      <PageHeader
        title={<span className="text-chart-1">Els Nostres Serveis</span>}
        description="Descobreixi la gamma de serveis de transport especialitzat que oferim."
      />
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainServices.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex-row items-start gap-4">
                <service.icon className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  {service.description && (
                    <CardDescription className="pt-2">
                      {service.description}
                    </CardDescription>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-lg">
          <CardHeader className="flex-row items-start gap-4">
            <Package className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <CardTitle className="text-xl">
                Serveis logístics addicionals
              </CardTitle>
              <CardDescription className="pt-2">
                A més del transport, aquestes empreses solen oferir serveis
                complementaris com ara:
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-0">
            {logisticServices.map((service, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-2">
                  <service.icon className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-card-foreground">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-1.5 list-disc list-inside text-sm text-muted-foreground pl-4">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valueAddedServices.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex-row items-start gap-4">
                <service.icon className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  {service.description && (
                    <CardDescription className="pt-2">
                      {service.description}
                    </CardDescription>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
