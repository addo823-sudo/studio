
import { PageHeader } from '@/app/components/page-header';

export default function PoliticaCookiesPage() {
  return (
    <div className="p-8 flex-1">
      <div className="container mx-auto">
        <PageHeader title="Política de Galetes" />
        <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-6 md:p-8 space-y-6">
          
          <div className="space-y-2">
            <h2 className="font-bold text-xl">Què són les galetes?</h2>
            <p>Una galeta (cookie) és un petit fitxer de text que un lloc web emmagatzema al navegador de l’usuari. Les galetes faciliten l’ús i la navegació per una pàgina web i són essencials per al funcionament d’internet, aportant innombrables avantatges en la prestació de serveis interactius.</p>
          </div>

          <div className="space-y-2">
            <h2 className="font-bold text-xl">Tipus de galetes utilitzades</h2>
            <p>Aquest lloc web utilitza galetes pròpies i de tercers amb les següents finalitats:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li><strong>Galetes tècniques:</strong> Són essencials per al funcionament del web. Permeten a l’usuari la navegació a través del lloc web i la utilització de les diferents opcions o serveis que hi existeixen.</li>
                <li><strong>Galetes d’anàlisi:</strong> Permeten quantificar el nombre d’usuaris i així realitzar el mesurament i anàlisi estadística de la utilització que fan els usuaris del servei ofert. Per a això s’analitza la seva navegació a la nostra pàgina web amb la finalitat de millorar l’oferta de productes o serveis que li oferim.</li>
                <li><strong>Galetes de personalització:</strong> Permeten a l'usuari accedir al servei amb algunes característiques de caràcter general predefinides en funció d'una sèrie de criteris al terminal de l'usuari (per exemple, l'idioma).</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h2 className="font-bold text-xl">Com gestionar les galetes</h2>
            <p>L’usuari pot bloquejar, restringir o esborrar les galetes de qualsevol lloc web, utilitzant el seu navegador. A cada navegador l’operativa és diferent, la funció de “Ajuda” li mostrarà com fer-ho.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
