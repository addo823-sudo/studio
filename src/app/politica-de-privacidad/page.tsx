
import { PageHeader } from '@/app/components/page-header';

export default function PoliticaPrivacidadPage() {
  return (
    <div className="p-8 flex-1">
      <div className="container mx-auto">
        <PageHeader title="Política de Privacitat" />
        <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-6 md:p-8 space-y-6">

          <p>En compliment del Reglament (UE) 2016/679 del Parlament Europeu i del Consell, de 27 d’abril de 2016 (RGPD), i de la normativa vigent en matèria de protecció de dades, TTIKO TRANS informa els usuaris del següent:</p>

          <div className="space-y-2">
            <h2 className="font-bold text-xl">1. Responsable del tractament</h2>
            <ul className="list-none p-0 ml-4">
                <li><strong>Titular:</strong> TTIKO TRANS</li>
                <li><strong>Activitat:</strong> Transport nacional i internacional de mercaderies en cisterna, incloent mercaderies perilloses (ADR).</li>
                <li><strong>Correu electrònic de contacte:</strong> <a href="mailto:info@ttikotrans.net" className="text-primary hover:underline">info@ttikotrans.net</a></li>
            </ul>
            <p>El responsable del tractament és l’encarregat de gestionar les dades personals recollides a través d’aquest lloc web.</p>
          </div>
          
          <div className="space-y-2">
            <h2 className="font-bold text-xl">2. Finalitat del tractament de les dades</h2>
            <p>Les dades personals que l’usuari faciliti a través dels formularis del lloc web seran utilitzades amb les següents finalitats:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Atendre consultes o sol·licituds d’informació.</li>
                <li>Gestionar pressupostos o serveis sol·licitats.</li>
                <li>Mantenir comunicacions comercials relacionades amb l’activitat de l’empresa.</li>
                <li>Complir amb les obligacions legals aplicables.</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h2 className="font-bold text-xl">3. Legitimació</h2>
            <p>La base legal per al tractament de les dades és:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>El consentiment exprés de l’usuari.</li>
                <li>L’execució d’un contracte o precontracte.</li>
                <li>El compliment d’obligacions legals.</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h2 className="font-bold text-xl">4. Conservació de les dades</h2>
            <p>Les dades personals es conservaran durant el temps necessari per complir amb la finalitat per la qual van ser recollides i per determinar possibles responsabilitats derivades del tractament.</p>
          </div>
          
          <div className="space-y-2">
            <h2 className="font-bold text-xl">5. Destinataris</h2>
            <p>Les dades no seran cedides a tercers, excepte obligació legal o quan sigui necessari per a la correcta prestació del servei.</p>
          </div>

          <div className="space-y-2">
            <h2 className="font-bold text-xl">6. Drets de l’usuari</h2>
            <p>L’usuari pot exercir en qualsevol moment els seus drets de:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Accés</li>
              <li>Rectificació</li>
              <li>Supressió</li>
              <li>Oposició</li>
              <li>Limitació del tractament</li>
              <li>Portabilitat de les dades</li>
            </ul>
            <p>Per exercir aquests drets, pot enviar una sol·licitud al correu electrònic indicat anteriorment, adjuntant còpia d’un document identificatiu.</p>
          </div>

          <div className="space-y-2">
            <h2 className="font-bold text-xl">7. Mesures de seguretat</h2>
            <p>TTIKO TRANS aplica les mesures tècniques i organitzatives necessàries per garantir la seguretat i confidencialitat de les dades personals, evitant la seva alteració, pèrdua o accés no autoritzat.</p>
          </div>

          <div className="space-y-2">
            <h2 className="font-bold text-xl">8. Modificacions</h2>
            <p>TTIKO TRANS es reserva el dret de modificar la present Política de Privacitat per adaptar-la a novetats legislatives o jurisprudencials.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
