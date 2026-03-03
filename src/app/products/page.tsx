
import { PageHeader } from '@/app/components/page-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Flame, GlassWater, Factory, Globe, ShieldCheck, CheckCircle } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="p-8 flex-1">
      <PageHeader
        title={<span className="text-secondary">Transport Especialitzat en Cisternes</span>}
        description="A TTIKO TRANS som una empresa especialitzada en el transport de productes líquids en cisterna, oferint un servei segur, eficient i adaptat a les necessitats de cada client. Operem tant a nivell nacional com internacional, garantint puntualitat, traçabilitat i compliment de totes les normatives vigents."
      />
      
      <div className="space-y-8">
        <h2 className="text-3xl font-bold font-headline text-center">Mercaderies que Transportem</h2>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {/* Mercaderies Perilloses */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Flame className="h-10 w-10 text-destructive" />
                <CardTitle>Mercaderies Perilloses (ADR)</CardTitle>
              </div>
              <CardDescription className="pt-2">
                A TTIKO TRANS estem autoritzats per al transport de mercaderies perilloses sota normativa ADR, assegurant la màxima seguretat i control en cada operació.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Combustibles (gasoil, gasolina, biodièsel)</li>
                <li>Productes químics industrials</li>
                <li>Àcids i bases</li>
                <li>Alcohols industrials</li>
                <li>Dissolvents</li>
                <li>Fertilitzants líquids</li>
              </ul>
            </CardContent>
          </Card>

          {/* Productes Alimentaris */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
               <div className="flex items-center gap-4">
                <GlassWater className="h-10 w-10 text-primary" />
                <CardTitle>Productes Alimentaris</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Llet i derivats</li>
                <li>Vi</li>
                <li>Oli vegetal</li>
                <li>Sucs</li>
                <li>Xarops i glucosa líquida</li>
                <li>Aigua potable</li>
              </ul>
            </CardContent>
          </Card>

          {/* Productes Industrials */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Factory className="h-10 w-10 text-muted-foreground" />
                <CardTitle>Productes Industrials</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Resines</li>
                <li>Làtex</li>
                <li>Detergents industrials</li>
                <li>Productes químics tècnics</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
            {/* Cobertura */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <Globe className="h-8 w-8 text-primary" />
                        <CardTitle>Cobertura Nacional i Internacional</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">Realitzem transport a tot el territori nacional i rutes internacionals, oferint:</p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> Seguiment continu de la mercaderia</li>
                        <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> Flota moderna i equipada</li>
                        <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> Personal altament qualificat</li>
                        <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary" /> Compliment estricte de les normatives de seguretat</li>
                    </ul>
                </CardContent>
            </Card>
            
            {/* Seguretat */}
            <Card>
                 <CardHeader>
                    <div className="flex items-center gap-4">
                        <ShieldCheck className="h-8 w-8 text-primary" />
                        <CardTitle>Compromís amb la Seguretat</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                     <p className="text-muted-foreground">
                        La seguretat és la nostra prioritat. Complim amb la normativa ADR per al transport de mercaderies perilloses i apliquem protocols rigorosos de manteniment i control en cada cisterna.
                    </p>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
