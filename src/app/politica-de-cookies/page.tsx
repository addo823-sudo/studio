
import { PageHeader } from '@/app/components/page-header';

export default function PoliticaCookiesPage() {
  return (
    <div className="p-8 flex-1">
      <div className="container mx-auto">
        <PageHeader title="Política de Cookies" />
        <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-6 md:p-8 space-y-6">
          
          <p>Aquest lloc web utilitza cookies pròpies i de tercers per millorar l’experiència de l’usuari, analitzar l’ús del web i mostrar continguts personalitzats. En continuar navegant per aquest lloc, acceptes l’ús de cookies segons la present política.</p>
          
          <div className="space-y-2">
            <h2 className="font-bold text-xl">1. Què són les cookies?</h2>
            <p>Les cookies són fitxers que els llocs web envien al navegador de l’usuari per emmagatzemar informació sobre la seva visita. Aquests fitxers permeten que el lloc web recordi les teves preferències, com l’idioma, la configuració del lloc o les pàgines visitades, i optimitzi la teva experiència de navegació.</p>
            <p>Les cookies no poden executar programes ni transmetre virus al teu dispositiu. Solament permeten recopilar dades sobre la navegació i ús del web.</p>
          </div>

          <div className="space-y-2">
            <h2 className="font-bold text-xl">2. Tipus de cookies que utilitzem</h2>
            <p>A la nostra web fem servir diferents tipus de cookies, segons la seva finalitat:</p>
            
            <h3 className="font-semibold text-lg pt-2">2.1 Cookies estrictament necessàries</h3>
            <p className="text-muted-foreground">Són essencials per al correcte funcionament del lloc web i per permetre la navegació per les seves pàgines i funcionalitats bàsiques. Sense aquestes cookies, algunes seccions del web no podrien funcionar.</p>

            <h3 className="font-semibold text-lg pt-2">2.2 Cookies de rendiment i analítica</h3>
            <p className="text-muted-foreground">Aquestes cookies ens ajuden a entendre com utilitzes el web, quines pàgines són més visitades i com podem millorar els nostres serveis. Per exemple, utilitzem cookies d’eines d’analítica com Google Analytics per obtenir estadístiques sobre l’ús del lloc.</p>

            <h3 className="font-semibold text-lg pt-2">2.3 Cookies de funcionalitat</h3>
            <p className="text-muted-foreground">Permeten recordar les teves preferències i personalitzar la teva experiència. Per exemple, poden recordar l’idioma seleccionat o la configuració d’algunes opcions del web.</p>
            
            <h3 className="font-semibold text-lg pt-2">2.4 Cookies publicitàries i de segmentació</h3>
            <p className="text-muted-foreground">Aquestes cookies ens permeten mostrar-te anuncis adaptats als teus interessos i analitzar l’efectivitat de les campanyes publicitàries. També poden ser utilitzades per tercers proveïdors d’anuncis.</p>
          </div>
          
          <div className="space-y-2">
            <h2 className="font-bold text-xl">3. Gestió i desactivació de cookies</h2>
            <p>Pots configurar el teu navegador per rebutjar, bloquejar o eliminar les cookies en qualsevol moment. Els passos per fer-ho varien segons el navegador que utilitzis (Chrome, Firefox, Safari, Edge, etc.).</p>
            <p>Tingues en compte que, si decideixes desactivar o rebutjar les cookies, algunes funcionalitats del lloc web poden deixar de funcionar correctament i l’experiència de navegació pot veure’s afectada.</p>
          </div>

          <div className="space-y-2">
            <h2 className="font-bold text-xl">4. Consentiment</h2>
            <p>En fer clic a “Acceptar” o continuar navegant, consentis l’ús de cookies segons la present política. Pots revocar aquest consentiment o modificar les teves preferències en qualsevol moment a la configuració del navegador o mitjançant el pop-up de gestió de cookies del web.</p>
          </div>

          <div className="space-y-2">
            <h2 className="font-bold text-xl">5. Modificacions de la política de cookies</h2>
            <p>TTIKO TRANS es reserva el dret de modificar aquesta política de cookies per adaptar-la a novetats legislatives, jurisprudencials o operatives. Es recomana revisar aquesta secció periòdicament per estar informat dels canvis.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
