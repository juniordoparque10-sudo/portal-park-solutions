import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  Code2,
  Cpu,
  ExternalLink,
  Gauge,
  Globe2,
  Headphones,
  Landmark,
  Layers3,
  LockKeyhole,
  MonitorPlay,
  QrCode,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Ticket,
  Zap
} from 'lucide-react'

import parkLogo from './assets/park-solutions-logo.png'
import flluxoScreen from './assets/flluxo-dashboard.png'
import painelScreen from './assets/painel-senhas.png'
import passeLivreScreen from './assets/passe-livre-dashboard.png'
import totemScreen from './assets/totem-park-dashboard.png'
import './App.css'

const whatsappLink =
  'https://wa.me/5584991346016?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Park%20Solutions%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

const products = [
  {
    icon: MonitorPlay,
    name: 'Totem Park',
    anchor: 'totem-park',
    title: 'Comunicação Digital Inteligente',
    label: 'TVs, totens e campanhas digitais',
    image: totemScreen,
    description:
      'Plataforma SaaS para gerenciar telas, clientes, playlists, campanhas, agendamentos e status online em tempo real.',
    bullets: ['Gestão de TVs e totens', 'Playlists e mídias', 'Agendamentos por tela', 'Painel SaaS por cliente'],
    status: 'Em operação',
    color: 'cyan'
  },
  {
    icon: BarChart3,
    name: 'Flluxo',
    anchor: 'flluxo',
    title: 'Gestão Empresarial Inteligente',
    label: 'Empresas, documentos e processos',
    image: flluxoScreen,
    description:
      'Sistema para organizar empresas, documentos, agenda, colaboradores, registros rápidos e prioridades operacionais.',
    bullets: ['Documentos por empresa', 'Agenda e tarefas', 'Colaboradores', 'Ranking operacional'],
    status: 'Em evolução',
    color: 'purple'
  },
  {
    icon: QrCode,
    name: 'Passe Livre Park',
    anchor: 'passe-livre-park',
    title: 'Credenciamento e Controle de Acesso',
    label: 'QR Code, carteiras e validação online',
    image: passeLivreScreen,
    description:
      'Sistema completo para emissão de carteiras, validação por QR Code, controle de entradas e gestão de beneficiários.',
    bullets: ['Carteiras digitais', 'Validação QR Code', 'Controle de entradas', 'Impressão e relatórios'],
    status: 'Em operação',
    color: 'green'
  },
  {
    icon: Gauge,
    name: 'Painel de Senhas',
    anchor: 'painel-de-senhas',
    title: 'Atendimento Inteligente',
    label: 'Filas, chamadas e TV institucional',
    image: painelScreen,
    description:
      'Solução para organizar atendimento ao público com chamada por senha, áudio, sala de atendimento e painel em TV.',
    bullets: ['Chamada em TV', 'Áudio automático', 'Sala de atendimento', 'Histórico de senhas'],
    status: 'Em operação',
    color: 'blue'
  }
]

const services = [
  {
    icon: Code2,
    title: 'Sistemas Web',
    text: 'Plataformas modernas, rápidas e personalizadas para empresas, órgãos públicos e operações digitais.'
  },
  {
    icon: Smartphone,
    title: 'Aplicativos',
    text: 'Aplicativos Android, soluções mobile e experiências integradas aos sistemas da sua empresa.'
  },
  {
    icon: MonitorPlay,
    title: 'TV Corporativa',
    text: 'Totens, painéis digitais, playlists e campanhas para comunicação visual inteligente.'
  },
  {
    icon: Cpu,
    title: 'Automação',
    text: 'Processos automatizados para reduzir tarefas manuais, erros e retrabalho.'
  }
]

const audiences = [
  { icon: Building2, title: 'Empresas', text: 'Gestão, automação, documentos e produtividade.' },
  { icon: Landmark, title: 'Órgãos públicos', text: 'Atendimento, comunicação e organização de serviços.' },
  { icon: Ticket, title: 'Eventos e parques', text: 'Credenciamento, QR Code e controle de acesso.' },
  { icon: Globe2, title: 'Negócios digitais', text: 'SaaS, portais, aplicativos e presença online.' }
]

const technologies = [
  { icon: Code2, name: 'React', text: 'Interfaces modernas' },
  { icon: Globe2, name: 'Firebase', text: 'Banco, auth e storage' },
  { icon: Smartphone, name: 'Android', text: 'Apps para operação' },
  { icon: Layers3, name: 'Cloud', text: 'Publicação online' },
  { icon: Zap, name: 'APIs', text: 'Integrações inteligentes' },
  { icon: Cpu, name: 'IA', text: 'Automação e produtividade' }
]

const whyChoose = [
  {
    icon: Rocket,
    title: 'Produtos próprios',
    text: 'A Park Solutions já possui soluções reais desenvolvidas, testadas e em evolução.'
  },
  {
    icon: Zap,
    title: 'Implantação rápida',
    text: 'Projetos pensados para sair do papel e entrar em operação com organização.'
  },
  {
    icon: ShieldCheck,
    title: 'Sistemas seguros',
    text: 'Estrutura moderna com foco em estabilidade, dados organizados e crescimento.'
  },
  {
    icon: BadgeCheck,
    title: 'Sob medida',
    text: 'Cada solução é adaptada para a rotina, necessidade e identidade do cliente.'
  }
]

const plans = [
  {
    name: 'Start',
    price: 'Essencial',
    text: 'Para sistemas pequenos e ajustes pontuais.',
    items: ['Correções básicas', 'Suporte essencial', 'Pequenas alterações', 'Backup orientado']
  },
  {
    name: 'Business',
    price: 'Mais escolhido',
    text: 'Para empresas que precisam de manutenção constante.',
    featured: true,
    items: ['Suporte prioritário', 'Melhorias mensais', 'Monitoramento', 'Ajustes de interface']
  },
  {
    name: 'Premium',
    price: 'Evolução contínua',
    text: 'Para sistemas estratégicos que precisam crescer.',
    items: ['Novas funcionalidades', 'Consultoria digital', 'Otimizações', 'Acompanhamento próximo']
  }
]

function App() {
  return (
    <div className="portal">
      <div className="bg-grid" />
      <div className="orb orb-left" />
      <div className="orb orb-right" />

      <header className="header">
        <a href="#inicio" className="brand" aria-label="Park Solutions">
          <img src={parkLogo} alt="Park Solutions" />
        </a>

        <nav className="nav">
          <a href="#solucoes">Soluções</a>
          <a href="#produtos">Produtos</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          Falar no WhatsApp
        </a>
      </header>

      <main>
        <section id="inicio" className="hero wrap">
          <div className="hero-copy">
            <div className="pill">
              <Sparkles size={16} />
              Software house para empresas e órgãos públicos
            </div>

            <h1>Transformamos ideias em sistemas que geram resultado.</h1>

            <p>
              Software house especializada em plataformas SaaS, sistemas corporativos, automação de processos e soluções digitais para empresas e órgãos públicos.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href={whatsappLink} target="_blank" rel="noreferrer">
                Solicitar projeto
                <ArrowRight size={18} />
              </a>
              <a className="btn ghost" href="#produtos">
                Ver produtos
                <ExternalLink size={17} />
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>4+</strong>
                <span>Produtos próprios</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Projetos sob medida</span>
              </div>
              <div>
                <strong>24h</strong>
                <span>Operação digital</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-logo-card">
              <img src={parkLogo} alt="Park Solutions" />
            </div>

            <div className="hero-stack">
              <img className="hero-img img-one" src={totemScreen} alt="Totem Park" />
              <img className="hero-img img-two" src={flluxoScreen} alt="Flluxo" />
              <img className="hero-img img-three" src={passeLivreScreen} alt="Passe Livre Park" />
            </div>
          </div>
        </section>

        <section className="featured-totem wrap">
          <div className="featured-totem-copy">
            <div className="pill">
              <Rocket size={16} />
              Produto em destaque
            </div>
            <span>Totem Park</span>
            <h2>Comunicação digital inteligente para TVs, totens e campanhas.</h2>
            <p>
              Uma plataforma SaaS completa para gerenciar telas, clientes, playlists, campanhas, agendamentos e status online em tempo real.
            </p>
            <ul>
              <li><CheckCircle2 size={18} /> Gestão centralizada de TVs e totens</li>
              <li><CheckCircle2 size={18} /> Playlists, mídias e agendamentos</li>
              <li><CheckCircle2 size={18} /> Painel moderno para clientes</li>
              <li><CheckCircle2 size={18} /> Comunicação visual em tempo real</li>
            </ul>
            <a className="btn primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Solicitar solução semelhante
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="featured-totem-screen">
            <img src={totemScreen} alt="Dashboard do Totem Park" />
          </div>
        </section>

        <section id="solucoes" className="solutions-strip wrap">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <a href={`#${product.anchor}`} className={`solution-pill ${product.color}`} key={product.name}>
                <Icon size={19} />
                <div>
                  <strong>{product.title}</strong>
                  <span>{product.name}</span>
                </div>
              </a>
            )
          })}
        </section>

        <section id="produtos" className="section wrap">
          <div className="section-heading center">
            <span>Produtos Park Solutions</span>
            <h2>Uma vitrine real dos sistemas que já desenvolvemos.</h2>
            <p>
              Soluções próprias para gestão, atendimento, comunicação visual e controle de acesso, prontas para serem adaptadas à realidade de cada cliente.
            </p>
          </div>

          <div className="product-showcase">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <article id={product.anchor} className={`product-row ${product.color} ${index % 2 ? 'reverse' : ''}`} key={product.name}>
                  <div className="product-screen">
                    <img src={product.image} alt={`Tela do sistema ${product.name}`} />
                  </div>

                  <div className="product-info">
                    <div className="product-kicker">
                      <Icon size={20} />
                      {product.name}
                    </div>
                    <h3>{product.title}</h3>
                    <strong>{product.label}</strong>
                    <p>{product.description}</p>

                    <ul>
                      {product.bullets.map((bullet) => (
                        <li key={bullet}>
                          <CheckCircle2 size={17} />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      Solicitar solução semelhante
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section wrap cases-section" id="cases">
          <div className="section-heading center">
            <span>Cases em operação</span>
            <h2>Produtos reais, interfaces reais e soluções prontas para evoluir.</h2>
            <p>
              Cada sistema foi criado para atender uma necessidade prática, com foco em operação, controle e apresentação profissional.
            </p>
          </div>

          <div className="cases-grid">
            {products.map((product) => {
              const Icon = product.icon
              return (
                <article className={`case-card ${product.color}`} key={product.name}>
                  <div className="case-image">
                    <img src={product.image} alt={`Case ${product.name}`} />
                  </div>
                  <div className="case-content">
                    <div className="case-meta">
                      <span>{product.status}</span>
                      <Icon size={21} />
                    </div>
                    <h3>{product.name}</h3>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    <a href={whatsappLink} target="_blank" rel="noreferrer">
                      Quero uma solução assim
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section wrap" id="projetos">
          <div className="section-heading">
            <span>Projetos sob medida</span>
            <h2>Criamos soluções digitais para necessidades reais.</h2>
            <p>
              Além dos produtos próprios, desenvolvemos sistemas personalizados para operações que precisam de controle, eficiência e apresentação profissional.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article className="service-card" key={service.title}>
                  <div className="icon-box">
                    <Icon size={25} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="audience wrap">
          <div>
            <div className="pill">
              <Rocket size={16} />
              Quem atendemos
            </div>
            <h2>Soluções para diferentes tipos de operação.</h2>
          </div>

          <div className="audience-grid">
            {audiences.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title}>
                  <Icon size={26} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section wrap why-choose">
          <div className="section-heading center">
            <span>Por que escolher</span>
            <h2>Mais que desenvolvimento: soluções com visão de produto.</h2>
            <p>
              A Park Solutions une design, tecnologia e experiência prática para entregar sistemas bonitos, úteis e preparados para crescer.
            </p>
          </div>

          <div className="why-grid">
            {whyChoose.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title}>
                  <Icon size={26} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="park-numbers wrap">
          <div>
            <strong>4+</strong>
            <span>Produtos próprios</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Projetos sob medida</span>
          </div>
          <div>
            <strong>24h</strong>
            <span>Sistemas online</span>
          </div>
          <div>
            <strong>RN</strong>
            <span>Atendimento regional</span>
          </div>
        </section>

        <section id="sobre" className="about wrap">
          <div className="about-card">
            <div className="pill">
              <BadgeCheck size={16} />
              Sobre a Park Solutions
            </div>
            <h2>Desenvolvemos tecnologia para resolver problemas reais.</h2>
            <p>
              A Park Solutions nasceu para criar soluções digitais modernas, intuitivas e eficientes para empresas, órgãos públicos e organizações que precisam de mais controle, produtividade e inovação.
            </p>
          </div>

          <div className="about-list">
            <div>
              <ShieldCheck size={24} />
              <strong>Estrutura profissional</strong>
              <span>Projetos pensados para uso real, segurança e evolução.</span>
            </div>
            <div>
              <Headphones size={24} />
              <strong>Suporte próximo</strong>
              <span>Acompanhamento humanizado do planejamento à implantação.</span>
            </div>
            <div>
              <LockKeyhole size={24} />
              <strong>Operação confiável</strong>
              <span>Sistemas organizados, responsivos e preparados para crescer.</span>
            </div>
          </div>
        </section>

        <section className="section wrap">
          <div className="section-heading center">
            <span>Tecnologias</span>
            <h2>Base moderna para sistemas rápidos, seguros e escaláveis.</h2>
          </div>

          <div className="tech-grid">
            {technologies.map((tech) => {
              const Icon = tech.icon
              return (
                <article key={tech.name}>
                  <Icon size={25} />
                  <h3>{tech.name}</h3>
                  <p>{tech.text}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section wrap" id="planos">
          <div className="section-heading center">
            <span>Manutenção</span>
            <h2>Planos para manter seu sistema seguro, atualizado e evoluindo.</h2>
          </div>

          <div className="plans-grid">
            {plans.map((plan) => (
              <article className={`plan-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                {plan.featured && <div className="featured-label">Recomendado</div>}
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
                <p>{plan.text}</p>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={17} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Solicitar proposta
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="cta wrap">
          <BadgeCheck size={40} />
          <h2>Vamos construir a próxima solução da sua empresa?</h2>
          <p>
            Fale com a Park Solutions e solicite uma proposta para criar, modernizar ou evoluir sua solução digital.
          </p>
          <a className="btn primary" href={whatsappLink} target="_blank" rel="noreferrer">
            Chamar no WhatsApp
            <ArrowRight size={18} />
          </a>
        </section>
      </main>

      <footer className="footer footer-pro wrap">
        <div className="footer-brand">
          <img src={parkLogo} alt="Park Solutions" />
          <p>Soluções digitais que impulsionam negócios.</p>
          <small>João Câmara/RN</small>
        </div>

        <div className="footer-column">
          <strong>Portal</strong>
          <a href="#solucoes">Soluções</a>
          <a href="#produtos">Produtos</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
        </div>

        <div className="footer-column">
          <strong>Contato</strong>
          <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="#contato">Solicitar proposta</a>
          <a href="#planos">Planos de suporte</a>
        </div>

        <span className="copyright">© 2026 Park Solutions</span>
      </footer>
    </div>
  )
}

export default App
