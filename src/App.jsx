import React from 'react';
import './App.css';

const IconMonitor = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>);
const IconEdit = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>);
const IconFileText = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>);
const IconTrendingDown = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>);
const IconShieldCheck = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>);
const IconCar = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H9a2 2 0 0 0-1.6.8L4.7 11l-5.16.86a1 1 0 0 0-.84.99V16h3m10 0a3 3 0 1 1-6 0m10 0a3 3 0 1 1-6 0"></path></svg>);
const IconBuilding = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="22"></line><line x1="15" y1="22" x2="15" y2="22"></line><path d="M9 6h.01"></path><path d="M15 6h.01"></path><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M9 14h.01"></path><path d="M15 14h.01"></path><path d="M9 18h.01"></path><path d="M15 18h.01"></path></svg>);
const IconBriefcase = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>);


function App() {
  return (
    <div className="app-container">
      <div className="ambient-background">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <nav className="glass-nav">
        <div className="nav-content">
          <div className="brand">
            <span className="brand-dot"></span>
            S.I. <strong>PROTECTION</strong>
          </div>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-text">
          <div className="status-pill">
            <div className="pulsing-dot"></div>
            <span>Adiós a las rondas físicas</span>
          </div>
          <h1 className="glitch-title">
            Supervise desde el CCTV.<br />
            <span className="highlight-yellow">Sin salir de la sala.</span>
          </h1>
          <p className="hero-subtitle">
            El supervisor observa las cámaras en vivo, anota en tiempo real las acciones de cada guardia 
            (<strong>quién hizo qué y a qué hora</strong>) y al finalizar el turno el sistema genera 
            automáticamente el informe completo con todas las actividades.
          </p>
          <div className="cta-group">
            <a href="#solucion" className="btn-glow">Ver cómo funciona</a>
            <a href="#comparativa" className="btn-outline-yellow">Ventajas reales</a>
          </div>
        </div>

        <div className="hero-visual abstract-metrics">
          <div className="metric-card float-1">
            <div className="metric-icon"><IconMonitor /></div>
            <div>
              <h4>Supervisión 100% remota</h4>
              <p>Desde la sala de monitoreo</p>
            </div>
          </div>
          <div className="metric-card float-2">
            <div className="metric-icon"><IconEdit /></div>
            <div>
              <h4>Registro en vivo</h4>
              <p>Guardia + Acción + Hora</p>
            </div>
          </div>
          <div className="metric-card float-3">
            <div className="metric-icon"><IconFileText /></div>
            <div>
              <h4>Informe automático</h4>
              <p>Se guarda al terminar el turno</p>
            </div>
          </div>
        </div>
      </header>

      <section id="solucion" className="bento-section">
        <div className="section-header">
          <h2>Así funciona el sistema</h2>
          <p>Todo en una sola pantalla. Sin desplazamientos. Sin papel.</p>
        </div>

        <div className="bento-grid">
          <div className="bento-card span-2 glass-card hover-glow">
            <div className="card-icon"><IconMonitor /></div>
            <h3>1. Observa las cámaras en vivo</h3>
            <p>El supervisor nunca abandona la sala de monitoreo. Todo el circuito CCTV está integrado dentro del software.</p>
          </div>

          <div className="bento-card span-2 glass-card hover-glow">
            <div className="card-icon"><IconEdit /></div>
            <h3>2. Anota en tiempo real</h3>
            <p>Mientras ve la cámara, registra instantáneamente: <strong>qué guardia</strong>, <strong>qué acción</strong> y <strong>a qué hora exacta</strong>. Todo queda vinculado a la imagen.</p>
          </div>

          <div className="bento-card span-2 glass-card hover-glow">
            <div className="card-icon"><IconFileText /></div>
            <h3>3. Informe automático al final del turno</h3>
            <p>Al cerrar el turno, el sistema compila todos los registros y genera el reporte final con todas las actividades de los guardias. Listo para guardar o enviar.</p>
          </div>

          <div className="bento-card span-2 glass-card hover-glow">
            <div className="card-icon"><IconTrendingDown /></div>
            <h3>4. Ahorro real para la empresa</h3>
            <p>Se eliminan los costos de combustible, vehículos y tiempo perdido en traslados. Un supervisor controla múltiples instalaciones desde una sola pantalla.</p>
          </div>
        </div>
      </section>

      <section id="comparativa" className="tech-section">
        <div className="section-header">
          <h2>Antes vs Ahora</h2>
        </div>
        <div className="comparison-container glass-card">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Forma tradicional</th>
                <th className="highlight-column">Con el sistema</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Supervisor</strong></td>
                <td>Debe salir a terreno</td>
                <td className="highlight-column">Permanece en la sala CCTV</td>
              </tr>
              <tr>
                <td><strong>Registro</strong></td>
                <td>Bitácora en papel</td>
                <td className="highlight-column">Anotación digital en vivo</td>
              </tr>
              <tr>
                <td><strong>Informe</strong></td>
                <td>Manual al final del día</td>
                <td className="highlight-column">Automático al cerrar turno</td>
              </tr>
              <tr>
                <td><strong>Costos</strong></td>
                <td>Altos (traslados)</td>
                <td className="highlight-column">Casi cero</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="empresa" className="company-section">
        <div className="glass-panel wide company-panel">
          <span className="tech-badge" style={{ marginBottom: '20px' }}>Implementación Real</span>
          <h2>Desarrollado a la medida para <br /><span className="highlight-yellow">S.I. Protection</span></h2>
          <p className="company-desc">
            Este sistema no es un producto genérico. Ha sido diseñado específicamente para responder a la arquitectura operativa y los altos estándares de <strong>S.I. Protection</strong>, empresa de seguridad privada integral en la Región del Biobío.
          </p>
          
          <div className="services-grid">
            <div className="service-item">
              <span className="service-icon" style={{ width: '20px', height: '20px', display: 'flex' }}><IconShieldCheck /></span> 
              Guardias OS-10
            </div>
            <div className="service-item">
              <span className="service-icon" style={{ width: '20px', height: '20px', display: 'flex' }}><IconCar /></span> 
              Equipo de Respuesta
            </div>
            <div className="service-item">
              <span className="service-icon" style={{ width: '20px', height: '20px', display: 'flex' }}><IconBuilding /></span> 
              Centro de Mando (CMC)
            </div>
            <div className="service-item">
              <span className="service-icon" style={{ width: '20px', height: '20px', display: 'flex' }}><IconBriefcase /></span> 
              Custodia de Valores
            </div>
          </div>

          <a href="https://www.sipprotection.cl/" target="_blank" rel="noreferrer" className="btn-outline-yellow mt-4">
            Visitar Sitio Oficial de la Empresa
          </a>
        </div>
      </section>

      <footer className="academic-footer">
        <div className="footer-content">
          <div className="footer-left">
            <p className="author">S.I. Protection</p>
          </div>
          <div className="footer-right">
            <p>Plataforma de Control Operativo</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;