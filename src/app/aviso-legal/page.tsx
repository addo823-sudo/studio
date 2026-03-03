import { PageHeader } from '@/app/components/page-header';

export default function AvisoLegalPage() {
  return (
    <div className="p-8 flex-1">
      <div className="container mx-auto">
        <PageHeader title="Avís Legal" />
        <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-6 md:p-8 space-y-6">
          
          <div className="space-y-2">
             <p>En compliment amb el deure d’informació establert per la normativa vigent, es posa en coneixement dels usuaris que el present lloc web és titularitat de:</p>
            <ul className="list-none p-0 ml-4">
                <li><strong>Titular:</strong> TTIKO TRANS</li>
                <li><strong>Activitat:</strong> Transport nacional i internacional de mercaderies en cisterna, incloent mercaderies perilloses (ADR).</li>
            </ul>
            <p>L’accés i ús d’aquest lloc web atribueix la condició d’usuari i implica l’acceptació plena i sense reserves de totes les disposicions incloses en aquest Avís Legal.</p>
          </div>

          <div className="space-y-2">
            <h2 className="font-bold text-xl">1. Condicions d’ús</h2>
            <p>L’usuari es compromet a fer un ús adequat dels continguts i serveis que TTIKO TRANS ofereix a través d’aquest lloc web i a no emprar-los per:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Realitzar activitats il·lícites o contràries a la bona fe i a l’ordre públic.</li>
                <li>Difondre continguts o propaganda de caràcter il·legal, racista, xenòfob, pornogràfic o que atempti contra els drets humans.</li>
                <li>Provocar danys en els sistemes físics o lògics del titular del lloc web.</li>
            </ul>
            <p>TTIKO TRANS es reserva el dret a retirar qualsevol comentari o aportació que vulneri el respecte a la dignitat de les persones o que no resulti adequat per a la publicació.</p>
          </div>
          
          <div className="space-y-2">
            <h2 className="font-bold text-xl">2. Propietat intel·lectual i industrial</h2>
            <p>Tots els continguts del lloc web (textos, imatges, logotips, disseny, estructura i codi font) són titularitat de TTIKO TRANS o disposen de les corresponents llicències d’ús, i estan protegits per la normativa vigent en matèria de propietat intel·lectual i industrial.</p>
            <p>Queda prohibida la reproducció, distribució o modificació total o parcial sense autorització expressa del titular.</p>
          </div>

          <div className="space-y-2">
            <h2 className="font-bold text-xl">3. Responsabilitat</h2>
            <p>TTIKO TRANS no es fa responsable dels danys i perjudicis que es puguin derivar d’interferències, interrupcions, errors informàtics o desconnexions en el funcionament operatiu d’aquest sistema electrònic.</p>
            <p>Així mateix, no es responsabilitza del mal ús que els usuaris puguin fer dels continguts del lloc web.</p>
          </div>
          
          <div className="space-y-2">
            <h2 className="font-bold text-xl">4. Legislació aplicable</h2>
            <p>La relació entre TTIKO TRANS i l’usuari es regirà per la normativa vigent aplicable, i qualsevol controvèrsia se sotmetrà als jutjats i tribunals competents d’acord amb la legislació corresponent.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
