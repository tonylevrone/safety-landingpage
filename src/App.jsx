import useReveal from './hooks/useReveal';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import FeatureEditorial from './components/sections/FeatureEditorial';
import Download from './components/sections/Download';
import Mobile from './components/sections/Mobile';
import Impact from './components/sections/Impact';
import GetInTouch from './components/sections/GetInTouch';
import Footer from './components/sections/Footer';
import InventoryMockup from './components/mockups/InventoryMockup';
import CalendarMockup from './components/mockups/CalendarMockup';

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Marquee items={['Controle', 'Clareza', 'Conformidade', 'Confiança']} />

        <FeatureEditorial
          id="inventory"
          range="02 / 05"
          tag="Inventory · 218 itens"
          title={(
            <>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700 }}>218 equipamentos</span>
              <span style={{ fontFamily: 'var(--font-sans)' }}>.</span>
              <br />
              <span style={{
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                fontVariationSettings: '"opsz" 96, "SOFT" 100, "WONK" 1',
              }}>
                Cada um na ponta dos seus dedos
              </span>
            </>
          )}
          lead="Busca instantânea, filtros por status, indicador de saúde por equipamento. Adicione novos itens em menos de 30 segundos com validação em tempo real."
          bullets={[
            'Filtros combináveis em chips deslizantes',
            'Indicador visual de saúde por equipamento',
            'Cadastro guiado com validação em tempo real',
          ]}
          mockup={<InventoryMockup />}
          url="app.safetyz.io/inventory"
        />

        <Download href="/downloads/SafetyZ-Setup-Trial.exe" />

        <FeatureEditorial
          id="maintenance"
          range="04 / 05"
          tag="Maintenance · 12 agendamentos"
          title={(
            <>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700 }}>Manutenção que</span>
              <br />
              <span style={{
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                fontVariationSettings: '"opsz" 96, "SOFT" 100, "WONK" 1',
              }}>
                nunca atrasa
              </span>
            </>
          )}
          lead="Calendário inteligente com agenda por técnico, alertas antes do vencimento e abertura direta no equipamento envolvido."
          bullets={[
            'Calendário responsivo com navegação por mês',
            'Marcadores diferenciados (preventiva × corretiva)',
            'Lista do dia selecionado com técnico e duração',
          ]}
          mockup={<CalendarMockup />}
          url="app.safetyz.io/calendar"
          flip
        />

        <Mobile />
        <Impact />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}
