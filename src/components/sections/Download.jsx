import { Download, Clock, Shield, MonitorCheck, AlertTriangle, MousePointerClick, ChevronRight } from 'lucide-react';
import Asterisk from '../ui/Asterisk';

/**
 * Download v3.2 — trial 7 dias, paleta azul unificada com o site.
 * Inclui instruções claras de Windows SmartScreen + SHA256 verification.
 */

const SHA256 = '6A3DD15F2D6AFFAD0B0EF778F0D15182955E73C7AFC884403E43DF548C02A879';

const SPECS = [
  { icon: MonitorCheck, label: 'Windows 10/11',     sub: 'Instalador NSIS · 76 MB' },
  { icon: Clock,        label: '7 dias de uso',     sub: 'Trial completo, sem limitações.' },
  { icon: Shield,       label: '1 uso por máquina', sub: 'Validação local automática.' },
  { icon: Download,     label: 'Sem cartão',        sub: 'Apenas o download. Sem cadastro.' },
];

const STEPS = [
  { num: '01', title: 'Baixe o instalador', body: 'Clique em "Baixar SafetyZ trial". O download começa imediatamente — ~76 MB.' },
  { num: '02', title: 'Permita a execução', body: 'Como o app é não-assinado, o Windows mostra um aviso azul "SmartScreen". Clique em "Mais informações" e depois em "Executar mesmo assim".' },
  { num: '03', title: 'Instale e use',      body: 'O instalador NSIS abre. Aceite o caminho de instalação e pronto — sua semana de SafetyZ começa.' },
];

export default function DownloadSection({ href = '#' }) {
  return (
    <section id="download" className="section" style={{
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Atmosfera azul — alinhada com o resto do site */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(77, 163, 255, 0.10), transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 50% 40% at 90% 50%, rgba(77, 163, 255, 0.08), transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* Sparks */}
      <span className="spark" style={{ top: '15%', left: '8%', animationDelay: '0.2s' }} />
      <span className="spark" style={{ top: '60%', left: '92%', animationDelay: '1.6s' }} />
      <span className="spark" style={{ top: '85%', left: '24%', animationDelay: '2.8s' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="editorial-grid">
          {/* Rail */}
          <div className="show-lg" style={{ paddingTop: 6, position: 'relative' }}>
            <div className="mono" style={{
              fontSize: 10.5,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-faint)',
              marginBottom: 8,
            }}>
              03 / Trial
            </div>
            <div aria-hidden="true" style={{
              position: 'absolute',
              left: 4,
              top: 36,
              width: 1,
              height: 'calc(100% - 36px)',
              background: 'linear-gradient(180deg, var(--hairline-strong), transparent)',
            }} />
          </div>

          {/* Main */}
          <div>
            <div data-reveal className="asterisk-line" style={{ marginBottom: 18 }}>
              <Asterisk size={22} />
              <span className="italic-tag" style={{ fontSize: 19, color: 'var(--text-soft)' }}>
                Trial gratuito · 7 dias
              </span>
            </div>

            <h2 className="display-1" data-reveal data-reveal-delay="1" style={{ maxWidth: 980 }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                Sete dias.
              </span>
              <br />
              <span style={{
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                fontVariationSettings: '"opsz" 72, "SOFT" 100, "WONK" 1',
              }}>
                Operação inteira na sua mesa
              </span>
              <span style={{ color: 'var(--accent)' }}>.</span>
            </h2>

            <p className="lead" data-reveal data-reveal-delay="2" style={{ marginTop: 28, marginBottom: 44 }}>
              Baixe o SafetyZ Desktop e teste com seus dados reais por uma semana.
              Sem cartão, sem cadastro. Após 7 dias o acesso é encerrado automaticamente —
              quando quiser estender, é só falar com a gente.
            </p>

            {/* Spec grid */}
            <div data-reveal data-reveal-delay="3" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 0,
              borderTop: '1px solid var(--hairline-strong)',
              borderBottom: '1px solid var(--hairline-strong)',
              marginBottom: 44,
            }}>
              {SPECS.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div key={i} style={{
                    padding: '22px 20px 22px 0',
                    borderRight: i < SPECS.length - 1 ? '1px solid var(--hairline)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}>
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'rgba(77, 163, 255, 0.10)',
                      border: '1px solid rgba(77, 163, 255, 0.25)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent)',
                    }}>
                      <Icon size={16} strokeWidth={1.8} />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 14.5,
                        fontWeight: 600,
                        color: 'var(--text)',
                        marginBottom: 4,
                        letterSpacing: '-0.010em',
                      }}>
                        {spec.label}
                      </div>
                      <div style={{
                        fontSize: 12.5,
                        color: 'var(--text-muted)',
                        lineHeight: 1.45,
                      }}>
                        {spec.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA "ticket" — agora em azul, alinhado ao site */}
            <div data-reveal data-reveal-delay="4" style={{
              position: 'relative',
              border: '1px solid var(--hairline-strong)',
              borderRadius: 20,
              padding: 'clamp(26px, 3.5vw, 44px)',
              background: 'linear-gradient(135deg, rgba(77, 163, 255, 0.08), rgba(77, 163, 255, 0.02))',
              overflow: 'hidden',
              marginBottom: 28,
            }}>
              {/* Punch-holes (ticket vibe) */}
              <div aria-hidden="true" style={{
                position: 'absolute',
                left: -8, top: '50%',
                width: 16, height: 16,
                borderRadius: '50%',
                background: 'var(--bg)',
                border: '1px solid var(--hairline-strong)',
                transform: 'translateY(-50%)',
              }} />
              <div aria-hidden="true" style={{
                position: 'absolute',
                right: -8, top: '50%',
                width: 16, height: 16,
                borderRadius: '50%',
                background: 'var(--bg)',
                border: '1px solid var(--hairline-strong)',
                transform: 'translateY(-50%)',
              }} />

              {/* Subtle glow */}
              <div aria-hidden="true" style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse 50% 60% at 0% 50%, rgba(77, 163, 255, 0.10), transparent 60%)',
                pointerEvents: 'none',
              }} />

              <div style={{
                position: 'relative',
                display: 'flex',
                gap: 28,
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div style={{ maxWidth: 480 }}>
                  <div className="mono" style={{
                    fontSize: 10.5,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: 12,
                    fontWeight: 600,
                  }}>
                    /// SAFETYZ° TRIAL TICKET — ED. 01
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontWeight: 500,
                    fontSize: 'clamp(20px, 2.5vw, 28px)',
                    lineHeight: 1.15,
                    letterSpacing: '-0.018em',
                    color: 'var(--text)',
                    marginBottom: 12,
                    fontVariationSettings: '"opsz" 36, "SOFT" 100, "WONK" 1',
                  }}>
                    Um ticket. Sete dias. Operação completa.
                  </div>
                  <p style={{
                    fontSize: 13.5,
                    color: 'var(--text-muted)',
                    lineHeight: 1.55,
                  }}>
                    Após instalar, o relógio começa a contar.
                    Você terá acesso integral até o sétimo dia — depois disso,
                    a aplicação se bloqueia automaticamente.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 220 }}>
                  <a
                    href={href}
                    download
                    className="btn btn-primary btn-lg"
                    style={{ justifyContent: 'center', fontSize: 15 }}
                  >
                    <Download size={17} strokeWidth={2.2} />
                    Baixar SafetyZ trial
                  </a>
                  <div style={{
                    textAlign: 'center',
                    fontSize: 11.5,
                    color: 'var(--text-faint)',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.06em',
                  }}>
                    v1.2.0 · 76 MB · Windows 10/11
                  </div>
                </div>
              </div>
            </div>

            {/* Bloco SmartScreen — instruções de instalação */}
            <div data-reveal data-reveal-delay="5" style={{
              position: 'relative',
              border: '1px solid var(--hairline-strong)',
              borderRadius: 16,
              padding: 'clamp(24px, 3vw, 36px)',
              background: 'rgba(255, 255, 255, 0.015)',
              marginBottom: 24,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
                marginBottom: 24,
              }}>
                <div style={{
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  background: 'rgba(77, 163, 255, 0.10)',
                  border: '1px solid rgba(77, 163, 255, 0.30)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0,
                }}>
                  <AlertTriangle size={18} strokeWidth={1.8} />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 16,
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: 6,
                    letterSpacing: '-0.010em',
                  }}>
                    Vai aparecer um aviso do Windows. Isso é esperado.
                  </div>
                  <p style={{
                    fontSize: 13.5,
                    color: 'var(--text-muted)',
                    lineHeight: 1.55,
                    margin: 0,
                  }}>
                    O SafetyZ Desktop ainda não tem certificado de assinatura digital
                    (em processo). Por isso o Windows SmartScreen mostra
                    <span style={{ color: 'var(--text)' }}> &ldquo;Windows protegeu seu computador&rdquo;</span> ao
                    abrir o instalador. Para prosseguir:
                  </p>
                </div>
              </div>

              {/* Steps */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 0,
                borderTop: '1px solid var(--hairline)',
              }}>
                {STEPS.map((step) => (
                  <div key={step.num} style={{
                    padding: '20px 20px 20px 0',
                    borderRight: '1px solid var(--hairline)',
                  }}>
                    <div className="mono" style={{
                      fontSize: 11,
                      color: 'var(--accent)',
                      letterSpacing: '0.12em',
                      fontWeight: 600,
                      marginBottom: 10,
                    }}>
                      / {step.num}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 14,
                      fontWeight: 600,
                      color: 'var(--text)',
                      marginBottom: 6,
                      letterSpacing: '-0.010em',
                    }}>
                      {step.title}
                    </div>
                    <div style={{
                      fontSize: 12.5,
                      color: 'var(--text-muted)',
                      lineHeight: 1.55,
                    }}>
                      {step.body}
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual exemplo do prompt do SmartScreen */}
              <div style={{
                marginTop: 24,
                padding: 16,
                background: 'rgba(0, 90, 180, 0.10)',
                border: '1px solid rgba(77, 163, 255, 0.20)',
                borderRadius: 10,
                display: 'flex',
                gap: 14,
                alignItems: 'center',
                flexWrap: 'wrap',
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 12,
                  color: 'var(--text-soft)',
                  fontFamily: 'var(--font-mono)',
                }}>
                  <MousePointerClick size={14} strokeWidth={1.8} />
                  Sequência de cliques:
                </div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 13,
                  color: 'var(--text)',
                  fontWeight: 500,
                }}>
                  <span style={{
                    padding: '4px 10px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid var(--hairline-strong)',
                    borderRadius: 6,
                  }}>Mais informações</span>
                  <ChevronRight size={14} color="var(--text-muted)" />
                  <span style={{
                    padding: '4px 10px',
                    background: 'var(--accent)',
                    color: '#fff',
                    borderRadius: 6,
                  }}>Executar mesmo assim</span>
                </div>
              </div>
            </div>

            {/* SHA256 — para usuários técnicos verificarem */}
            <div data-reveal data-reveal-delay="5" style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 12,
              flexWrap: 'wrap',
              padding: '14px 0',
              borderTop: '1px solid var(--hairline)',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--text-faint)',
              letterSpacing: '0.04em',
            }}>
              <span style={{ color: 'var(--text-muted)' }}>SHA-256</span>
              <span style={{
                color: 'var(--text-soft)',
                wordBreak: 'break-all',
                userSelect: 'all',
              }}>
                {SHA256.toLowerCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
