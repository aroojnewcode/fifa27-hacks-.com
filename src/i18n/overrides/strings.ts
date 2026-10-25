export interface LocaleFeatureItem {
  title: string;
  subtitle: string;
  desc: string;
  bullets: string[];
  tags: [string, string, string];
}

export interface LocaleStrings {
  site: {
    name: string;
    title: string;
    description: string;
  };
  nav: [string, string, string, string, string, string];
  hero: {
    status: string;
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaDiscord: string;
    modesLabel: string;
    modes: [string, string, string, string];
    metrics: [
      { label: string; strong: string },
      { label: string; strong: string },
      { label: string; strong: string },
      { label: string; strong: string },
    ];
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: [
      LocaleFeatureItem,
      LocaleFeatureItem,
      LocaleFeatureItem,
      LocaleFeatureItem,
      LocaleFeatureItem,
      LocaleFeatureItem,
      LocaleFeatureItem,
      LocaleFeatureItem,
      LocaleFeatureItem,
    ];
  };
  footer: {
    tagline: string;
    explore: string;
    support: string;
    legal: string;
    privacy: string;
    terms: string;
    about: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: [{ q: string; a: string }, { q: string; a: string }, { q: string; a: string }, { q: string; a: string }, { q: string; a: string }, { q: string; a: string }];
  };
  ui: {
    skipLink: string;
    browseCheats: string;
    browseCheatsMobile: string;
    homeAria: string;
    checkoutAria: string;
    discordAria: string;
    menuOpen: string;
    menuClose: string;
    themeLight: string;
    themeDark: string;
  };
  legalAbout: { title: string; description: string };
  legalPrivacy: { title: string; description: string };
  legalTerms: { title: string; description: string };
  legalSupport: { title: string; description: string };
  pageSeoHome: { title: string; description: string };
  pageSeoProducts: { title: string; description: string };
  pageSeoBlog: { title: string; description: string };
}

export const LOCALE_STRINGS: Record<string, LocaleStrings> = {
  'pt-br': {
    site: {
      name: 'Hacks & Cheats EA FC 27',
      title: 'Compre Hacks EA FC 27 Indetectáveis | Auto Green, FUT e Overlay',
      description:
        'Compre hacks EA FC 27 indetectáveis para PC — auto green, finalização perfeita, overlay no campo, assistente de snipe no FUT e desbloqueador de ícones. Atualizado após cada patch do EA AntiCheat.',
    },
    nav: ['Início', 'Produtos', 'Blog', 'Fórum', 'FAQ', 'Suporte'],
    hero: {
      status: 'EA FC 27 online',
      eyebrow: 'Hacks EA FC 27 indetectáveis',
      titleLine1: 'Hacks & Cheats EA FC 27 Indetectáveis',
      titleLine2: 'Auto Green, Ferramentas FUT e Overlays',
      subtitle:
        'Compre hacks EA FC 27 para PC — auto green, chutes com timing perfeito, overlay de jogadores no campo, radar mini-campo e assistente de mercado FUT para Ultimate Team, Modo Carreira e Division Rivals. Atualizado após cada patch do EA AntiCheat.',
      ctaPrimary: 'Comprar hacks',
      ctaDiscord: 'Entrar no Discord',
      modesLabel: 'Modos',
      modes: ['Ultimate Team', 'Modo Carreira', 'Division Rivals', 'Pro Clubs'],
      metrics: [
        { label: 'Seguro para stream', strong: 'Sim' },
        { label: 'Velocidade de patch', strong: '<24h' },
        { label: 'Usuários', strong: '300+' },
        { label: 'Suporte', strong: '24/7' },
      ],
    },
    features: {
      eyebrow: 'Recursos dos cheats',
      title: 'Módulos de hack EA FC 27',
      subtitle:
        'Auto green, overlay no campo, radar, snipe FUT e ferramentas de ícones — tudo que você precisa para EA FC 27 no PC.',
      items: [
        {
          title: 'Auto Green / Timing Perfeito',
          subtitle: 'Finalizações que entram',
          desc: 'Assistência de finalização com timing para Ultimate Team e Modo Carreira. Ajuste janela verde, potência, viés de cavadinha e perfis separados para cavadinha, potência e trivela.',
          bullets: [
            'Sliders de janela verde e potência do chute',
            'Perfis para cavadinha, potência e trivela',
            'Dicas de timing para pé fraco e skill moves',
            'Previsão de deflexão contra goleiros em movimento',
            'Presets para Rivals, FUT Champions e Carreira',
          ],
          tags: ['auto green', 'timing perfeito', 'chutes EA FC 27'],
        },
        {
          title: 'Overlay de Jogadores no Campo',
          subtitle: 'Leia o campo inteiro',
          desc: 'Nomes, stamina, pressão e posicionamento de cada adversário — inclusive fora da câmera.',
          bullets: [
            'Nomes, barras de stamina e pressão',
            'Linhas de formação e corridas sem bola',
            'Alertas quando a ponta está livre na diagonal',
          ],
          tags: ['overlay campo', 'ESP jogadores', 'leitura stamina'],
        },
        {
          title: 'Radar Mini-Campo',
          subtitle: 'Veja o espaço antes de passar',
          desc: 'Radar top-down para corredores livres, triângulos de pressão e janelas de contra-ataque.',
          bullets: ['Pontos dos adversários no mini-campo', 'Marcadores de half-space e alas', 'Funciona com overlay no campo'],
          tags: ['radar mini-campo', 'tática', 'contra-pressão'],
        },
        {
          title: 'Assistente de Snipe FUT',
          subtitle: 'Vantagem no mercado e elenco',
          desc: 'Destaca anúncios abaixo do preço, links de química e lacunas no time para você atualizar e comprar mais rápido no Mercado de Transferências.',
          bullets: [
            'Destaque de anúncios subprecificados',
            'Marcadores de química e posição',
            'Faixas de preço para fodder de SBC',
          ],
          tags: ['snipe FUT', 'mercado transferências', 'Ultimate Team'],
        },
        {
          title: 'Desbloqueador de Ícones e Kits',
          subtitle: 'Apenas preview local',
          desc: 'Visualize ícones, kits e temas de estádio no seu cliente. Não altera compras na loja EA nem elencos online.',
          bullets: [
            'Preview de ícone, kit e estádio',
            'Favoritos e exportação de elenco',
            'Incluso no Elite ou vendido como Unlock All',
          ],
          tags: ['desbloqueador ícones', 'trocar kit', 'cosméticos'],
        },
        {
          title: 'Stream Proof',
          subtitle: 'Oculte overlays na live',
          desc: 'Você vê overlays e auto green na sua tela. OBS e Game Bar capturam a partida limpa.',
          bullets: ['Modos OBS e Game Bar', 'Toggle por módulo', 'Notas de setup no portal'],
          tags: ['stream proof', 'seguro OBS', 'ocultar captura'],
        },
        {
          title: 'Config na Nuvem e Updates AntiCheat',
          subtitle: 'Após cada patch',
          desc: 'Salve configs na nuvem. Atualizações do loader saem após patches do EA FC 27 e EA AntiCheat.',
          bullets: [
            'Backup na nuvem para auto green e overlay',
            'Loader atualizado após patches EA AntiCheat',
            'Status no Discord #status',
          ],
          tags: ['sync nuvem', 'EA AntiCheat', 'presets'],
        },
        {
          title: 'Modos',
          subtitle: 'FUT, Carreira, Rivals, Clubs',
          desc: 'Presets para Ultimate Team, Modo Carreira, Division Rivals e amistosos de Pro Clubs.',
          bullets: ['Presets FUT e Carreira', 'Defaults mais seguros para Rivals', 'Lobbies Clubs para treinar timing'],
          tags: ['Ultimate Team', 'Modo Carreira', 'Division Rivals'],
        },
        {
          title: 'Ferramentas extras',
          subtitle: 'Opções Elite',
          desc: 'Assistência de defesa com IA, auto jockey e ferramentas de coins FUT no Elite, além de auto green e overlay.',
          bullets: ['Assistência de bloqueio e desarme', 'Auto jockey e contain', 'Helpers de coins e SBC no Elite'],
          tags: ['defesa IA', 'ferramentas FUT', 'utilitários'],
        },
      ],
    },
    footer: {
      tagline: 'Hacks EA FC 27 para PC: auto green, ferramentas FUT, overlay no campo e utilitários.',
      explore: 'Explorar',
      support: 'Suporte',
      legal: 'Legal',
      privacy: 'Política de Privacidade',
      terms: 'Termos e Condições',
      about: 'Sobre',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'FAQ de hacks EA FC 27',
      subtitle: 'Compatibilidade, bans, tiers e setup — respostas diretas antes de comprar.',
      items: [
        {
          q: 'Onde verifico se os hacks EA FC 27 estão online?',
          a: 'O banner de status ao vivo está em fifa27hacks.com e no canal Discord #status. Sempre confira após update do EA FC 27 ou EAC.',
        },
        {
          q: 'O que acontece depois da compra?',
          a: 'Seu portal libera loader, guia de setup e biblioteca de configs via checkout seguro. Siga o guia antes de abrir o EA FC 27.',
        },
        {
          q: 'Posso ser banido usando hacks de terceiros?',
          a: 'Sim — qualquer modificação tem risco. EAC e denúncias evoluem. Leia o status atual e aceite o risco antes de usar.',
        },
        {
          q: 'Quais plataformas são suportadas?',
          a: 'EA FC 27 via EA App no Windows 10/11 64-bit. macOS e Linux não são suportados.',
        },
        {
          q: 'Posso mover a licença para um PC novo?',
          a: 'Sim — use reset de HWID no portal ou abra ticket no Discord. Limites dependem do seu tier.',
        },
        {
          q: 'Onde estão listados produtos e utilitários?',
          a: 'Tiers Lite, Pro e Elite, HWID Spoofer, UGC e Skin Changer em fifa27hacks.com/products/fifa-27-hacks com checkout via parceiro.',
        },
      ],
    },
    ui: {
      skipLink: 'Pular para o conteúdo principal',
      browseCheats: 'Experimentar agora',
      browseCheatsMobile: 'Iniciar checkout',
      homeAria: 'Início Hacks & Cheats EA FC 27',
      checkoutAria: 'Iniciar checkout',
      discordAria: 'Entrar no Discord EA FC 27 Hacks',
      menuOpen: 'Abrir menu',
      menuClose: 'Fechar menu',
      themeLight: 'Modo claro',
      themeDark: 'Modo escuro',
    },
    legalAbout: {
      title: 'Sobre Hacks & Cheats EA FC 27 | Compre Cheats para PC',
      description:
        'Sobre EA FC 27 Hacks & Cheats — hacks para PC (auto green, overlay, FUT), utilitários e guias em fifa27hacks.com.',
    },
    legalPrivacy: {
      title: 'Política de Privacidade | Loja EA FC 27 Hacks',
      description: 'Como a loja de hacks EA FC 27 em fifa27hacks.com trata analytics, cookies e dados de contato.',
    },
    legalTerms: {
      title: 'Termos EA FC 27 Hacks | Licença e Reembolsos',
      description: 'Termos para comprar hacks EA FC 27 em fifa27hacks.com — licença, entrega, reembolsos e risco de conta.',
    },
    legalSupport: {
      title: 'Suporte EA FC 27 Hacks | Loader, HWID e Checkout',
      description: 'Suporte para setup do loader, HWID e checkout em fifa27hacks.com.',
    },
    pageSeoHome: {
      title: 'Hacks EA FC 27 Indetectáveis | Auto Green, FUT Snipe & Overlay PC',
      description:
        'Compre hacks EA FC 27 indetectáveis para PC: auto green, overlay no campo, radar, snipe FUT e desbloqueador de ícones. Atualizado após cada patch EA AntiCheat.',
    },
    pageSeoProducts: {
      title: 'Produtos EA FC 27 Hacks | Lite, Pro, Elite e Utilitários',
      description:
        'Compare tiers Lite, Pro e Elite de hacks EA FC 27, HWID Spoofer e Unlock All. Checkout seguro e loader para Windows.',
    },
    pageSeoBlog: {
      title: 'Blog EA FC 27 Hacks | Guias e Patches',
      description:
        'Guias de auto green, overlay no campo, HWID após ban e checklist de patch EA AntiCheat para hacks EA FC 27 no PC.',
    },
  },
  de: {
    site: {
      name: 'EA FC 27 Hacks & Cheats',
      title: 'Unentdeckte EA FC 27 Hacks kaufen | Auto Green, FUT & Overlay',
      description:
        'Unentdeckte EA FC 27 Hacks für PC kaufen — Auto Green, perfektes Timing, Pitch-Overlay, FUT-Snipe-Assist und Icon-Unlocker. Nach jedem EA-AntiCheat-Patch aktualisiert.',
    },
    nav: ['Startseite', 'Produkte', 'Blog', 'Forum', 'FAQ', 'Support'],
    hero: {
      status: 'EA FC 27 online',
      eyebrow: 'Unentdeckte EA FC 27 Hacks',
      titleLine1: 'Unentdeckte EA FC 27 Hacks & Cheats',
      titleLine2: 'Auto Green, FUT-Tools & Overlays',
      subtitle:
        'EA FC 27 Hacks für PC — Auto Green, perfekt getimte Schüsse, Pitch-Player-Overlay, Mini-Pitch-Radar und FUT-Markt-Assist für Ultimate Team, Karrieremodus und Division Rivals. Updates nach jedem EA-AntiCheat-Patch.',
      ctaPrimary: 'Hacks kaufen',
      ctaDiscord: 'Discord beitreten',
      modesLabel: 'Modi',
      modes: ['Ultimate Team', 'Karrieremodus', 'Division Rivals', 'Pro Clubs'],
      metrics: [
        { label: 'Stream-sicher', strong: 'Ja' },
        { label: 'Patch-Geschwindigkeit', strong: '<24h' },
        { label: 'Nutzer', strong: '300+' },
        { label: 'Support', strong: '24/7' },
      ],
    },
    features: {
      eyebrow: 'Cheat-Funktionen',
      title: 'EA FC 27 Hack-Module',
      subtitle:
        'Auto Green, Pitch-Overlay, Radar, FUT-Snipe und Icon-Tools — alle Module für EA FC 27 auf dem PC.',
      items: [
        {
          title: 'Auto Green / Perfect Timed',
          subtitle: 'Abschlüsse, die sitzen',
          desc: 'Timing-Hilfe für Ultimate Team und Karriere. Grünes Fenster, Schusskraft, Flachpass-Bias und Profile für Flach, Power und Trivela einstellen.',
          bullets: [
            'Slider für grünes Fenster und Schusskraft',
            'Profile für Flach, Power und Trivela',
            'Timing-Hinweise für schwacher Fuß und Skills',
            'Abwehrvorhersage bei bewegten Torhütern',
            'Presets für Rivals, FUT Champions und Karriere',
          ],
          tags: ['auto green', 'perfect timed', 'EA FC 27 Schüsse'],
        },
        {
          title: 'Pitch-Player-Overlay',
          subtitle: 'Das ganze Feld lesen',
          desc: 'Namen, Ausdauer, Druck und Position jedes Gegners — auch außerhalb der Kamera.',
          bullets: [
            'Spielernamen, Ausdauer- und Druckbalken',
            'Formationslinien und Laufwege ohne Ball',
            'Alarm, wenn der Flügelspieler frei läuft',
          ],
          tags: ['pitch overlay', 'spieler ESP', 'ausdauer lesen'],
        },
        {
          title: 'Mini-Pitch-Radar',
          subtitle: 'Raum sehen vor dem Pass',
          desc: 'Top-Down-Radar für freie Bahnen, Pressing-Dreiecke und Konter-Fenster.',
          bullets: ['Gegner-Punkte auf Mini-Pitch', 'Half-Space- und Außen-Marker', 'Kombinierbar mit Pitch-Overlay'],
          tags: ['mini-pitch radar', 'taktik', 'gegenpressing'],
        },
        {
          title: 'FUT-Snipe-Assist',
          subtitle: 'Markt- und Kader-Vorteile',
          desc: 'Hebt unterbewertete Angebote, Chemie-Links und Kaderlücken hervor — schneller kaufen auf dem Transfermarkt.',
          bullets: [
            'Unterpreis-Listings hervorheben',
            'Chemie- und Positions-Marker',
            'SBC-Fodder-Preisbänder',
          ],
          tags: ['FUT snipe', 'transfermarkt', 'Ultimate Team'],
        },
        {
          title: 'Icon- & Kit-Unlocker',
          subtitle: 'Nur lokale Vorschau',
          desc: 'Icons, Kits und Stadion-Themes clientseitig ansehen. Ändert keine EA-Store-Käufe oder Online-Kader.',
          bullets: [
            'Icon-, Kit- und Stadion-Vorschau',
            'Favoriten und Kader-Export',
            'Im Elite enthalten oder als Unlock All',
          ],
          tags: ['icon unlocker', 'kit changer', 'kosmetik'],
        },
        {
          title: 'Stream Proof',
          subtitle: 'Overlays vor Stream verbergen',
          desc: 'Du siehst Overlays und Auto Green. OBS und Game Bar zeigen sauberes Match-Feed.',
          bullets: ['OBS- und Game-Bar-Modi', 'Toggle pro Modul', 'Setup-Hinweise im Portal'],
          tags: ['stream proof', 'OBS sicher', 'capture hide'],
        },
        {
          title: 'Cloud-Config & AntiCheat-Updates',
          subtitle: 'Nach jedem Patch',
          desc: 'Configs in der Cloud speichern. Loader-Updates nach EA FC 27- und EA-AntiCheat-Patches.',
          bullets: [
            'Cloud-Backup für Auto Green und Overlay',
            'Loader-Updates nach EA AntiCheat',
            'Status in Discord #status',
          ],
          tags: ['cloud sync', 'EA AntiCheat', 'presets'],
        },
        {
          title: 'Modi',
          subtitle: 'FUT, Karriere, Rivals, Clubs',
          desc: 'Presets für Ultimate Team, Karrieremodus, Division Rivals und Pro-Clubs-Freundschaftsspiele.',
          bullets: ['FUT- und Karriere-Presets', 'Sichere Rivals-Defaults', 'Clubs-Lobbys zum Timing-Training'],
          tags: ['Ultimate Team', 'Karrieremodus', 'Division Rivals'],
        },
        {
          title: 'Extra-Tools',
          subtitle: 'Elite-Optionen',
          desc: 'KI-Verteidigungs-Assist, Auto-Jockey und FUT-Coin-Tools in Elite zusätzlich zu Auto Green und Overlay.',
          bullets: ['KI-Block- und Tackle-Assist', 'Auto-Jockey und Contain', 'FUT-Coin- und SBC-Helfer in Elite'],
          tags: ['KI verteidigung', 'FUT tools', 'utilities'],
        },
      ],
    },
    footer: {
      tagline: 'EA FC 27 Hacks für PC: Auto Green, FUT-Tools, Pitch-Overlay und Utilities.',
      explore: 'Entdecken',
      support: 'Support',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'AGB',
      about: 'Über uns',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'EA FC 27 Hacks FAQ',
      subtitle: 'Kompatibilität, Bans, Tiers und Setup — klare Antworten vor dem Kauf.',
      items: [
        {
          q: 'Wo prüfe ich, ob EA FC 27 Hacks online sind?',
          a: 'Live-Status auf fifa27hacks.com und im Discord-Kanal #status. Nach EA FC 27- oder EAC-Updates immer prüfen.',
        },
        {
          q: 'Was passiert nach dem Kauf?',
          a: 'Dein Portal schaltet Loader, Setup-Guide und Config-Bibliothek frei. Guide lesen, bevor du EA FC 27 startest.',
        },
        {
          q: 'Kann ich gebannt werden?',
          a: 'Ja — jede Modifikation birgt Risiko. EAC und Meldesysteme entwickeln sich weiter. Status lesen und Risiko akzeptieren.',
        },
        {
          q: 'Welche Plattformen werden unterstützt?',
          a: 'EA FC 27 über EA App auf Windows 10/11 64-bit. macOS und Linux nicht unterstützt.',
        },
        {
          q: 'Kann ich die Lizenz auf einen neuen PC verschieben?',
          a: 'Ja — HWID-Reset im Portal oder Discord-Ticket. Limits hängen vom Tier ab.',
        },
        {
          q: 'Wo finde ich Produkte und Utilities?',
          a: 'Lite-, Pro- und Elite-Tiers sowie HWID Spoofer und Unlock All unter fifa27hacks.com/products/fifa-27-hacks.',
        },
      ],
    },
    ui: {
      skipLink: 'Zum Hauptinhalt springen',
      browseCheats: 'Jetzt testen',
      browseCheatsMobile: 'Checkout starten',
      homeAria: 'EA FC 27 Hacks Startseite',
      checkoutAria: 'Checkout starten',
      discordAria: 'EA FC 27 Hacks Discord beitreten',
      menuOpen: 'Menü öffnen',
      menuClose: 'Menü schließen',
      themeLight: 'Hellmodus',
      themeDark: 'Dunkelmodus',
    },
    legalAbout: {
      title: 'Über EA FC 27 Hacks & Cheats | PC Cheats kaufen',
      description: 'Über EA FC 27 Hacks — PC-Cheats (Auto Green, Overlay, FUT), Utilities und Guides auf fifa27hacks.com.',
    },
    legalPrivacy: {
      title: 'Datenschutz | EA FC 27 Hacks Shop',
      description: 'Wie der EA FC 27 Hacks Shop auf fifa27hacks.com Analytics, Cookies und Kontaktdaten behandelt.',
    },
    legalTerms: {
      title: 'AGB EA FC 27 Hacks | Lizenz & Erstattungen',
      description: 'Bedingungen für EA FC 27 Hacks auf fifa27hacks.com — Lizenz, Lieferung, Erstattungen und Kontorisiko.',
    },
    legalSupport: {
      title: 'EA FC 27 Hacks Support | Loader, HWID & Checkout',
      description: 'Support für Loader-Setup, HWID und Checkout auf fifa27hacks.com.',
    },
    pageSeoHome: {
      title: 'Unentdeckte EA FC 27 Hacks | Auto Green, FUT Snipe & Pitch Overlay PC',
      description:
        'Unentdeckte EA FC 27 Hacks für PC: Auto Green, Pitch-Overlay, Radar, FUT-Snipe und Icon-Unlocker. Nach jedem EA-AntiCheat-Patch aktualisiert.',
    },
    pageSeoProducts: {
      title: 'EA FC 27 Hacks Produkte | Lite, Pro, Elite & Utilities',
      description: 'Vergleiche Lite-, Pro- und Elite-Tiers, HWID Spoofer und Unlock All. Sicherer Checkout und Windows-Loader.',
    },
    pageSeoBlog: {
      title: 'EA FC 27 Hacks Blog | Setup & Patch-Guides',
      description:
        'Guides zu Auto Green, Pitch-Overlay, HWID nach Ban und EA-AntiCheat-Patch-Tag für EA FC 27 Hacks auf dem PC.',
    },
  },
  es: {
    site: {
      name: 'Hacks y Cheats EA FC 27',
      title: 'Comprar Hacks EA FC 27 Indetectables | Auto Green, FUT y Overlay',
      description:
        'Compra hacks EA FC 27 indetectables para PC: auto green, tiros a tiempo perfecto, overlay en el campo, asistente de snipe FUT y desbloqueador de iconos. Actualizado tras cada parche de EA AntiCheat.',
    },
    nav: ['Inicio', 'Productos', 'Blog', 'Foro', 'FAQ', 'Soporte'],
    hero: {
      status: 'EA FC 27 en línea',
      eyebrow: 'Hacks EA FC 27 indetectables',
      titleLine1: 'Hacks y Cheats EA FC 27 Indetectables',
      titleLine2: 'Auto Green, Herramientas FUT y Overlays',
      subtitle:
        'Hacks EA FC 27 para PC — auto green, tiros perfectamente cronometrados, overlay de jugadores, radar mini-campo y asistente de mercado FUT para Ultimate Team, Modo Carrera y Division Rivals. Actualizado tras cada parche EA AntiCheat.',
      ctaPrimary: 'Comprar hacks',
      ctaDiscord: 'Unirse a Discord',
      modesLabel: 'Modos',
      modes: ['Ultimate Team', 'Modo Carrera', 'Division Rivals', 'Pro Clubs'],
      metrics: [
        { label: 'Seguro para stream', strong: 'Sí' },
        { label: 'Velocidad de parche', strong: '<24h' },
        { label: 'Usuarios', strong: '300+' },
        { label: 'Soporte', strong: '24/7' },
      ],
    },
    features: {
      eyebrow: 'Funciones del cheat',
      title: 'Módulos hack EA FC 27',
      subtitle:
        'Auto green, overlay en el campo, radar, snipe FUT y herramientas de iconos — todo lo que necesitas para EA FC 27 en PC.',
      items: [
        {
          title: 'Auto Green / Tiempo Perfecto',
          subtitle: 'Remates que entran',
          desc: 'Asistencia de remate cronometrado para Ultimate Team y Modo Carrera. Ajusta ventana verde, potencia, sesgo de colocación y perfiles para colocación, potencia y trivela.',
          bullets: [
            'Sliders de ventana verde y potencia',
            'Perfiles colocación, potencia y trivela',
            'Pistas de timing para pie débil y regates',
            'Predicción de desvío contra porteros en movimiento',
            'Presets para Rivals, FUT Champions y Carrera',
          ],
          tags: ['auto green', 'tiempo perfecto', 'tiros EA FC 27'],
        },
        {
          title: 'Overlay de Jugadores en el Campo',
          subtitle: 'Lee todo el campo',
          desc: 'Nombres, resistencia, presión y posición de cada rival — incluso fuera de cámara.',
          bullets: [
            'Nombres, barras de resistencia y presión',
            'Líneas de formación y carreras sin balón',
            'Alertas cuando el extremo queda libre',
          ],
          tags: ['overlay campo', 'ESP jugadores', 'leer resistencia'],
        },
        {
          title: 'Radar Mini-Campo',
          subtitle: 'Ve el espacio antes de pasar',
          desc: 'Radar cenital para carriles libres, triángulos de presión y ventanas de contra.',
          bullets: ['Puntos rivales en mini-campo', 'Marcadores half-space y bandas', 'Compatible con overlay de campo'],
          tags: ['radar mini-campo', 'táctica', 'contra presión'],
        },
        {
          title: 'Asistente Snipe FUT',
          subtitle: 'Ventaja en mercado y plantilla',
          desc: 'Resalta fichajes infravalorados, enlaces de química y huecos en la plantilla para comprar más rápido en el Mercado de Fichajes.',
          bullets: [
            'Destaca listados baratos',
            'Marcadores de química y posición',
            'Bandas de precio para fodder SBC',
          ],
          tags: ['snipe FUT', 'mercado fichajes', 'Ultimate Team'],
        },
        {
          title: 'Desbloqueador de Iconos y Kits',
          subtitle: 'Solo vista previa local',
          desc: 'Previsualiza iconos, kits y temas de estadio en tu cliente. No cambia compras EA ni plantillas online.',
          bullets: [
            'Vista previa icono, kit y estadio',
            'Favoritos y exportar plantilla',
            'Incluido en Elite o Unlock All',
          ],
          tags: ['desbloqueador iconos', 'cambiar kit', 'cosméticos'],
        },
        {
          title: 'Stream Proof',
          subtitle: 'Oculta overlays en directo',
          desc: 'Tú ves overlays y auto green. OBS y Game Bar capturan partido limpio.',
          bullets: ['Modos OBS y Game Bar', 'Toggle por módulo', 'Notas de setup en el portal'],
          tags: ['stream proof', 'seguro OBS', 'ocultar captura'],
        },
        {
          title: 'Config en Nube y Updates AntiCheat',
          subtitle: 'Tras cada parche',
          desc: 'Guarda configs en la nube. Actualizaciones del loader tras parches EA FC 27 y EA AntiCheat.',
          bullets: [
            'Backup en nube para auto green y overlay',
            'Loader tras parches EA AntiCheat',
            'Estado en Discord #status',
          ],
          tags: ['sync nube', 'EA AntiCheat', 'presets'],
        },
        {
          title: 'Modos',
          subtitle: 'FUT, Carrera, Rivals, Clubs',
          desc: 'Presets para Ultimate Team, Modo Carrera, Division Rivals y amistosos Pro Clubs.',
          bullets: ['Presets FUT y Carrera', 'Defaults seguros Rivals', 'Lobbies Clubs para timing'],
          tags: ['Ultimate Team', 'Modo Carrera', 'Division Rivals'],
        },
        {
          title: 'Herramientas extra',
          subtitle: 'Opciones Elite',
          desc: 'Asistencia defensiva IA, auto jockey y herramientas de monedas FUT en Elite, además de auto green y overlay.',
          bullets: ['Asistencia bloqueo y entrada', 'Auto jockey y contain', 'Ayudas monedas y SBC en Elite'],
          tags: ['defensa IA', 'herramientas FUT', 'utilidades'],
        },
      ],
    },
    footer: {
      tagline: 'Hacks EA FC 27 para PC: auto green, herramientas FUT, overlay y utilidades.',
      explore: 'Explorar',
      support: 'Soporte',
      legal: 'Legal',
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
      about: 'Acerca de',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'FAQ hacks EA FC 27',
      subtitle: 'Compatibilidad, bans, tiers y setup — respuestas claras antes de comprar.',
      items: [
        {
          q: '¿Dónde compruebo si los hacks EA FC 27 están online?',
          a: 'El banner en vivo está en fifa27hacks.com y en Discord #status. Comprueba tras cada update de EA FC 27 o EAC.',
        },
        {
          q: '¿Qué pasa después de comprar?',
          a: 'Tu portal desbloquea loader, guía y biblioteca de configs. Sigue la guía antes de abrir EA FC 27.',
        },
        {
          q: '¿Puedo ser baneado usando hacks de terceros?',
          a: 'Sí — cualquier modificación tiene riesgo. EAC y denuncias evolucionan. Lee el estado y acepta el riesgo.',
        },
        {
          q: '¿Qué plataformas se soportan?',
          a: 'EA FC 27 vía EA App en Windows 10/11 64-bit. macOS y Linux no soportados.',
        },
        {
          q: '¿Puedo mover la licencia a un PC nuevo?',
          a: 'Sí — reset HWID en el portal o ticket en Discord. Límites según tu tier.',
        },
        {
          q: '¿Dónde están productos y utilidades?',
          a: 'Tiers Lite, Pro y Elite, HWID Spoofer y Unlock All en fifa27hacks.com/products/fifa-27-hacks.',
        },
      ],
    },
    ui: {
      skipLink: 'Saltar al contenido principal',
      browseCheats: 'Probar ahora',
      browseCheatsMobile: 'Iniciar checkout',
      homeAria: 'Inicio Hacks EA FC 27',
      checkoutAria: 'Iniciar checkout',
      discordAria: 'Unirse al Discord EA FC 27 Hacks',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
      themeLight: 'Modo claro',
      themeDark: 'Modo oscuro',
    },
    legalAbout: {
      title: 'Acerca de EA FC 27 Hacks | Comprar Cheats PC',
      description: 'Acerca de EA FC 27 Hacks — cheats PC (auto green, overlay, FUT) y guías en fifa27hacks.com.',
    },
    legalPrivacy: {
      title: 'Política de Privacidad | Tienda EA FC 27 Hacks',
      description: 'Cómo la tienda EA FC 27 Hacks en fifa27hacks.com trata analytics, cookies y contacto.',
    },
    legalTerms: {
      title: 'Términos EA FC 27 Hacks | Licencia y Reembolsos',
      description: 'Términos para comprar hacks EA FC 27 en fifa27hacks.com — licencia, entrega y riesgo de cuenta.',
    },
    legalSupport: {
      title: 'Soporte EA FC 27 Hacks | Loader, HWID y Checkout',
      description: 'Soporte para loader, HWID y checkout en fifa27hacks.com.',
    },
    pageSeoHome: {
      title: 'Hacks EA FC 27 Indetectables | Auto Green, Snipe FUT y Overlay PC',
      description:
        'Hacks EA FC 27 indetectables para PC: auto green, overlay, radar, snipe FUT e icon unlocker. Actualizado tras cada parche EA AntiCheat.',
    },
    pageSeoProducts: {
      title: 'Productos EA FC 27 Hacks | Lite, Pro, Elite y Utilidades',
      description: 'Compara tiers Lite, Pro y Elite, HWID Spoofer y Unlock All. Checkout seguro para Windows.',
    },
    pageSeoBlog: {
      title: 'Blog EA FC 27 Hacks | Guías y Parches',
      description:
        'Guías de auto green, overlay del campo, HWID tras ban y checklist de parche EA AntiCheat para hacks EA FC 27 en PC.',
    },
  },
  fr: {
    site: {
      name: 'Hacks & Cheats EA FC 27',
      title: 'Acheter Hacks EA FC 27 Indétectables | Auto Green, FUT & Overlay',
      description:
        'Achetez des hacks EA FC 27 indétectables pour PC — auto green, finition parfaite, overlay terrain, assist snipe FUT et débloqueur d’icônes. Mis à jour après chaque patch EA AntiCheat.',
    },
    nav: ['Accueil', 'Produits', 'Blog', 'Forum', 'FAQ', 'Support'],
    hero: {
      status: 'EA FC 27 en ligne',
      eyebrow: 'Hacks EA FC 27 indétectables',
      titleLine1: 'Hacks & Cheats EA FC 27 Indétectables',
      titleLine2: 'Auto Green, Outils FUT & Overlays',
      subtitle:
        'Hacks EA FC 27 pour PC — auto green, tirs parfaitement temporisés, overlay joueurs, radar mini-terrain et assist marché FUT pour Ultimate Team, Mode Carrière et Division Rivals. Mises à jour après chaque patch EA AntiCheat.',
      ctaPrimary: 'Acheter les hacks',
      ctaDiscord: 'Rejoindre Discord',
      modesLabel: 'Modes',
      modes: ['Ultimate Team', 'Mode Carrière', 'Division Rivals', 'Pro Clubs'],
      metrics: [
        { label: 'Compatible stream', strong: 'Oui' },
        { label: 'Délai de patch', strong: '<24h' },
        { label: 'Utilisateurs', strong: '300+' },
        { label: 'Support', strong: '24/7' },
      ],
    },
    features: {
      eyebrow: 'Fonctions cheat',
      title: 'Modules hack EA FC 27',
      subtitle:
        'Auto green, overlay terrain, radar, snipe FUT et outils icônes — tous les modules pour EA FC 27 sur PC.',
      items: [
        {
          title: 'Auto Green / Timing Parfait',
          subtitle: 'Finitions qui rentrent',
          desc: 'Aide au timing de finition pour Ultimate Team et Carrière. Réglez fenêtre verte, puissance, bias placé et profils placé, puissance et trivela.',
          bullets: [
            'Curseurs fenêtre verte et puissance',
            'Profils placé, puissance et trivela',
            'Indices timing pied faible et skills',
            'Prédiction de déviation sur gardiens mobiles',
            'Presets Rivals, FUT Champions et Carrière',
          ],
          tags: ['auto green', 'timing parfait', 'tirs EA FC 27'],
        },
        {
          title: 'Overlay Joueurs Terrain',
          subtitle: 'Lire tout le terrain',
          desc: 'Noms, endurance, pression et position de chaque adversaire — même hors caméra.',
          bullets: [
            'Noms, barres endurance et pression',
            'Lignes de formation et courses sans ballon',
            'Alertes ailier libre sur le côté',
          ],
          tags: ['overlay terrain', 'ESP joueurs', 'lecture endurance'],
        },
        {
          title: 'Radar Mini-Terrain',
          subtitle: 'Voir l’espace avant la passe',
          desc: 'Radar vue du dessus pour couloirs libres, triangles de pressing et fenêtres de contre.',
          bullets: ['Points adverses sur mini-terrain', 'Marqueurs half-space et couloirs', 'Compatible overlay terrain'],
          tags: ['radar mini-terrain', 'tactique', 'contre-pressing'],
        },
        {
          title: 'Assist Snipe FUT',
          subtitle: 'Avantage marché et effectif',
          desc: 'Surligne annonces sous-cotées, liens chimie et trous d’effectif pour acheter plus vite sur le marché des transferts.',
          bullets: [
            'Annonces sous-cotées mises en avant',
            'Marqueurs chimie et poste',
            'Fourchettes prix fodder SBC',
          ],
          tags: ['snipe FUT', 'marché transferts', 'Ultimate Team'],
        },
        {
          title: 'Débloqueur Icônes & Kits',
          subtitle: 'Aperçu local uniquement',
          desc: 'Prévisualisez icônes, kits et thèmes stade côté client. Ne modifie pas les achats EA ni les effectifs en ligne.',
          bullets: [
            'Aperçu icône, kit et stade',
            'Favoris et export effectif',
            'Inclus Elite ou Unlock All',
          ],
          tags: ['débloqueur icônes', 'changer kit', 'cosmétiques'],
        },
        {
          title: 'Stream Proof',
          subtitle: 'Masquer overlays en stream',
          desc: 'Vous voyez overlays et auto green. OBS et Game Bar capturent un flux propre.',
          bullets: ['Modes OBS et Game Bar', 'Toggle par module', 'Notes setup dans le portail'],
          tags: ['stream proof', 'OBS safe', 'masquer capture'],
        },
        {
          title: 'Config Cloud & Updates AntiCheat',
          subtitle: 'Après chaque patch',
          desc: 'Sauvegardez configs cloud. Mises à jour loader après patches EA FC 27 et EA AntiCheat.',
          bullets: [
            'Backup cloud auto green et overlay',
            'Loader après patches EA AntiCheat',
            'Statut sur Discord #status',
          ],
          tags: ['sync cloud', 'EA AntiCheat', 'presets'],
        },
        {
          title: 'Modes',
          subtitle: 'FUT, Carrière, Rivals, Clubs',
          desc: 'Presets Ultimate Team, Mode Carrière, Division Rivals et amicaux Pro Clubs.',
          bullets: ['Presets FUT et Carrière', 'Defaults Rivals plus sûrs', 'Lobbies Clubs pour timing'],
          tags: ['Ultimate Team', 'Mode Carrière', 'Division Rivals'],
        },
        {
          title: 'Outils extra',
          subtitle: 'Options Elite',
          desc: 'Assist défense IA, auto jockey et outils coins FUT sur Elite, en plus d’auto green et overlay.',
          bullets: ['Assist blocage et tacle', 'Auto jockey et contain', 'Helpers coins et SBC Elite'],
          tags: ['défense IA', 'outils FUT', 'utilitaires'],
        },
      ],
    },
    footer: {
      tagline: 'Hacks EA FC 27 PC : auto green, outils FUT, overlay terrain et utilitaires.',
      explore: 'Explorer',
      support: 'Support',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions générales',
      about: 'À propos',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'FAQ hacks EA FC 27',
      subtitle: 'Compatibilité, bans, tiers et installation — réponses avant achat.',
      items: [
        {
          q: 'Où vérifier si les hacks EA FC 27 sont en ligne ?',
          a: 'Bannière live sur fifa27hacks.com et canal Discord #status. Vérifiez après chaque update EA FC 27 ou EAC.',
        },
        {
          q: 'Que se passe-t-il après l’achat ?',
          a: 'Votre portail débloque loader, guide et bibliothèque de configs. Suivez le guide avant de lancer EA FC 27.',
        },
        {
          q: 'Puis-je être banni avec des hacks tiers ?',
          a: 'Oui — toute modification comporte un risque. EAC et signalements évoluent. Lisez le statut et acceptez le risque.',
        },
        {
          q: 'Quelles plateformes sont prises en charge ?',
          a: 'EA FC 27 via EA App sur Windows 10/11 64-bit. macOS et Linux non pris en charge.',
        },
        {
          q: 'Puis-je transférer la licence sur un nouveau PC ?',
          a: 'Oui — reset HWID dans le portail ou ticket Discord. Limites selon le tier.',
        },
        {
          q: 'Où sont listés produits et utilitaires ?',
          a: 'Tiers Lite, Pro et Elite, HWID Spoofer et Unlock All sur fifa27hacks.com/products/fifa-27-hacks.',
        },
      ],
    },
    ui: {
      skipLink: 'Aller au contenu principal',
      browseCheats: 'Essayer maintenant',
      browseCheatsMobile: 'Démarrer le checkout',
      homeAria: 'Accueil EA FC 27 Hacks',
      checkoutAria: 'Démarrer le checkout',
      discordAria: 'Rejoindre Discord EA FC 27 Hacks',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
      themeLight: 'Mode clair',
      themeDark: 'Mode sombre',
    },
    legalAbout: {
      title: 'À propos EA FC 27 Hacks | Acheter Cheats PC',
      description: 'À propos EA FC 27 Hacks — cheats PC (auto green, overlay, FUT) et guides sur fifa27hacks.com.',
    },
    legalPrivacy: {
      title: 'Confidentialité | Boutique EA FC 27 Hacks',
      description: 'Comment la boutique EA FC 27 Hacks sur fifa27hacks.com gère analytics, cookies et contact.',
    },
    legalTerms: {
      title: 'Conditions EA FC 27 Hacks | Licence & Remboursements',
      description: 'Conditions d’achat de hacks EA FC 27 sur fifa27hacks.com — licence, livraison et risque compte.',
    },
    legalSupport: {
      title: 'Support EA FC 27 Hacks | Loader, HWID & Checkout',
      description: 'Support loader, HWID et checkout sur fifa27hacks.com.',
    },
    pageSeoHome: {
      title: 'Hacks EA FC 27 Indétectables | Auto Green, Snipe FUT & Overlay PC',
      description:
        'Hacks EA FC 27 indétectables PC : auto green, overlay terrain, radar, snipe FUT et débloqueur icônes. Mis à jour après chaque patch EA AntiCheat.',
    },
    pageSeoProducts: {
      title: 'Produits EA FC 27 Hacks | Lite, Pro, Elite & Utilitaires',
      description: 'Comparez tiers Lite, Pro et Elite, HWID Spoofer et Unlock All. Checkout sécurisé Windows.',
    },
    pageSeoBlog: {
      title: 'Blog EA FC 27 Hacks | Guides & Patches',
      description:
        'Guides auto green, overlay terrain, HWID après ban et checklist patch EA AntiCheat pour hacks EA FC 27 sur PC.',
    },
  },
  it: {
    site: {
      name: 'Hacks & Cheats EA FC 27',
      title: 'Acquista Hacks EA FC 27 Indetectabili | Auto Green, FUT e Overlay',
      description:
        'Acquista hack EA FC 27 indetectabili per PC — auto green, tiri a tempo perfetto, overlay sul campo, assist snipe FUT e sblocco icone. Aggiornato dopo ogni patch EA AntiCheat.',
    },
    nav: ['Home', 'Prodotti', 'Blog', 'Forum', 'FAQ', 'Supporto'],
    hero: {
      status: 'EA FC 27 online',
      eyebrow: 'Hack EA FC 27 indetectabili',
      titleLine1: 'Hack & Cheat EA FC 27 Indetectabili',
      titleLine2: 'Auto Green, Strumenti FUT e Overlay',
      subtitle:
        'Hack EA FC 27 per PC — auto green, tiri perfettamente temporizzati, overlay giocatori, radar mini-campo e assist mercato FUT per Ultimate Team, Carriera e Division Rivals. Aggiornamenti dopo ogni patch EA AntiCheat.',
      ctaPrimary: 'Acquista hack',
      ctaDiscord: 'Entra su Discord',
      modesLabel: 'Modalità',
      modes: ['Ultimate Team', 'Carriera', 'Division Rivals', 'Pro Clubs'],
      metrics: [
        { label: 'Stream-safe', strong: 'Sì' },
        { label: 'Velocità patch', strong: '<24h' },
        { label: 'Utenti', strong: '300+' },
        { label: 'Supporto', strong: '24/7' },
      ],
    },
    features: {
      eyebrow: 'Funzioni cheat',
      title: 'Moduli hack EA FC 27',
      subtitle:
        'Auto green, overlay campo, radar, snipe FUT e strumenti icone — tutti i moduli per EA FC 27 su PC.',
      items: [
        {
          title: 'Auto Green / Tempo Perfetto',
          subtitle: 'Finali che entrano',
          desc: 'Assistenza al timing per Ultimate Team e Carriera. Regola finestra verde, potenza, bias piazzato e profili piazzato, potenza e trivela.',
          bullets: [
            'Slider finestra verde e potenza tiro',
            'Profili piazzato, potenza e trivela',
            'Suggerimenti timing piede debole e skill',
            'Previsione deviazione su portieri in movimento',
            'Preset Rivals, FUT Champions e Carriera',
          ],
          tags: ['auto green', 'tempo perfetto', 'tiri EA FC 27'],
        },
        {
          title: 'Overlay Giocatori Campo',
          subtitle: 'Leggi tutto il campo',
          desc: 'Nomi, stamina, pressione e posizione di ogni avversario — anche fuori camera.',
          bullets: [
            'Nomi, barre stamina e pressione',
            'Linee formazione e corse senza palla',
            'Avvisi quando l’ala è libera',
          ],
          tags: ['overlay campo', 'ESP giocatori', 'lettura stamina'],
        },
        {
          title: 'Radar Mini-Campo',
          subtitle: 'Vedi lo spazio prima del passaggio',
          desc: 'Radar top-down per corsie libere, triangoli pressing e finestre contropiede.',
          bullets: ['Punti avversari su mini-campo', 'Marker half-space e fasce', 'Compatibile con overlay campo'],
          tags: ['radar mini-campo', 'tattica', 'contropressing'],
        },
        {
          title: 'Assist Snipe FUT',
          subtitle: 'Vantaggio mercato e rosa',
          desc: 'Evidenzia annunci sottoprezzati, link chimica e buchi in rosa per comprare più velocemente sul mercato trasferimenti.',
          bullets: [
            'Evidenzia listing sottoprezzati',
            'Marker chimica e ruolo',
            'Fasce prezzo fodder SBC',
          ],
          tags: ['snipe FUT', 'mercato trasferimenti', 'Ultimate Team'],
        },
        {
          title: 'Sblocco Icone e Kit',
          subtitle: 'Solo anteprima locale',
          desc: 'Anteprima icone, kit e temi stadio sul client. Non modifica acquisti EA né rose online.',
          bullets: [
            'Anteprima icona, kit e stadio',
            'Preferiti ed export rosa',
            'Incluso in Elite o Unlock All',
          ],
          tags: ['sblocco icone', 'cambio kit', 'cosmetici'],
        },
        {
          title: 'Stream Proof',
          subtitle: 'Nascondi overlay in stream',
          desc: 'Tu vedi overlay e auto green. OBS e Game Bar catturano feed pulito.',
          bullets: ['Modalità OBS e Game Bar', 'Toggle per modulo', 'Note setup nel portale'],
          tags: ['stream proof', 'OBS safe', 'nascondi capture'],
        },
        {
          title: 'Config Cloud & Update AntiCheat',
          subtitle: 'Dopo ogni patch',
          desc: 'Salva config nel cloud. Update loader dopo patch EA FC 27 e EA AntiCheat.',
          bullets: [
            'Backup cloud auto green e overlay',
            'Loader dopo patch EA AntiCheat',
            'Stato su Discord #status',
          ],
          tags: ['sync cloud', 'EA AntiCheat', 'preset'],
        },
        {
          title: 'Modalità',
          subtitle: 'FUT, Carriera, Rivals, Clubs',
          desc: 'Preset per Ultimate Team, Carriera, Division Rivals e amichevoli Pro Clubs.',
          bullets: ['Preset FUT e Carriera', 'Default Rivals più sicuri', 'Lobby Clubs per timing'],
          tags: ['Ultimate Team', 'Carriera', 'Division Rivals'],
        },
        {
          title: 'Strumenti extra',
          subtitle: 'Opzioni Elite',
          desc: 'Assist difesa IA, auto jockey e tool coins FUT su Elite, oltre ad auto green e overlay.',
          bullets: ['Assist blocco e tackle', 'Auto jockey e contain', 'Helper coins e SBC Elite'],
          tags: ['difesa IA', 'tool FUT', 'utility'],
        },
      ],
    },
    footer: {
      tagline: 'Hack EA FC 27 per PC: auto green, tool FUT, overlay campo e utility.',
      explore: 'Esplora',
      support: 'Supporto',
      legal: 'Legale',
      privacy: 'Privacy Policy',
      terms: 'Termini e Condizioni',
      about: 'Chi siamo',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'FAQ hack EA FC 27',
      subtitle: 'Compatibilità, ban, tier e setup — risposte chiare prima dell’acquisto.',
      items: [
        {
          q: 'Dove verifico se gli hack EA FC 27 sono online?',
          a: 'Banner live su fifa27hacks.com e canale Discord #status. Controlla dopo ogni update EA FC 27 o EAC.',
        },
        {
          q: 'Cosa succede dopo l’acquisto?',
          a: 'Il portale sblocca loader, guida e libreria config. Segui la guida prima di avviare EA FC 27.',
        },
        {
          q: 'Posso essere bannato usando hack di terze parti?',
          a: 'Sì — ogni modifica ha rischio. EAC e segnalazioni evolvono. Leggi lo stato e accetta il rischio.',
        },
        {
          q: 'Quali piattaforme sono supportate?',
          a: 'EA FC 27 via EA App su Windows 10/11 64-bit. macOS e Linux non supportati.',
        },
        {
          q: 'Posso spostare la licenza su un nuovo PC?',
          a: 'Sì — reset HWID nel portale o ticket Discord. Limiti in base al tier.',
        },
        {
          q: 'Dove sono elencati prodotti e utility?',
          a: 'Tier Lite, Pro ed Elite, HWID Spoofer e Unlock All su fifa27hacks.com/products/fifa-27-hacks.',
        },
      ],
    },
    ui: {
      skipLink: 'Vai al contenuto principale',
      browseCheats: 'Prova ora',
      browseCheatsMobile: 'Avvia checkout',
      homeAria: 'Home EA FC 27 Hacks',
      checkoutAria: 'Avvia checkout',
      discordAria: 'Entra su Discord EA FC 27 Hacks',
      menuOpen: 'Apri menu',
      menuClose: 'Chiudi menu',
      themeLight: 'Tema chiaro',
      themeDark: 'Tema scuro',
    },
    legalAbout: {
      title: 'Chi siamo EA FC 27 Hacks | Acquista Cheat PC',
      description: 'Info su EA FC 27 Hacks — cheat PC (auto green, overlay, FUT) e guide su fifa27hacks.com.',
    },
    legalPrivacy: {
      title: 'Privacy | Shop EA FC 27 Hacks',
      description: 'Come lo shop EA FC 27 Hacks su fifa27hacks.com gestisce analytics, cookie e contatti.',
    },
    legalTerms: {
      title: 'Termini EA FC 27 Hacks | Licenza e Rimborsi',
      description: 'Termini per acquistare hack EA FC 27 su fifa27hacks.com — licenza, consegna e rischio account.',
    },
    legalSupport: {
      title: 'Supporto EA FC 27 Hacks | Loader, HWID e Checkout',
      description: 'Supporto loader, HWID e checkout su fifa27hacks.com.',
    },
    pageSeoHome: {
      title: 'Hack EA FC 27 Indetectabili | Auto Green, Snipe FUT e Overlay PC',
      description:
        'Hack EA FC 27 indetectabili PC: auto green, overlay, radar, snipe FUT e sblocco icone. Aggiornati dopo ogni patch EA AntiCheat.',
    },
    pageSeoProducts: {
      title: 'Prodotti EA FC 27 Hacks | Lite, Pro, Elite e Utility',
      description: 'Confronta tier Lite, Pro ed Elite, HWID Spoofer e Unlock All. Checkout sicuro Windows.',
    },
    pageSeoBlog: {
      title: 'Blog EA FC 27 Hacks | Guide e Patch',
      description:
        'Guide su auto green, overlay campo, HWID dopo ban e checklist patch EA AntiCheat per hack EA FC 27 su PC.',
    },
  },
  ar: {
    site: {
      name: 'هاكات وشيتات EA FC 27',
      title: 'شراء هاكات EA FC 27 غير مكتشفة | أوتو جرين، FUT وOverlay',
      description:
        'اشتري هاكات EA FC 27 غير مكتشفة للكمبيوتر — أوتو جرين، تسديد بتوقيت مثالي، overlay على الملعب، مساعد snipe في FUT وفتح الأيقونات. يُحدَّث بعد كل تصحيح EA AntiCheat.',
    },
    nav: ['الرئيسية', 'المنتجات', 'المدونة', 'المنتدى', 'الأسئلة', 'الدعم'],
    hero: {
      status: 'EA FC 27 متصل',
      eyebrow: 'هاكات EA FC 27 غير مكتشفة',
      titleLine1: 'هاكات وشيتات EA FC 27 غير مكتشفة',
      titleLine2: 'أوتو جرين، أدوات FUT وOverlays',
      subtitle:
        'هاكات EA FC 27 للكمبيوتر — أوتو جرين، تسديدات بتوقيت مثالي، overlay للاعبين على الملعب، رادار mini-pitch ومساعد سوق FUT لـ Ultimate Team ووضع المسيرة وDivision Rivals. تحديثات بعد كل patch لـ EA AntiCheat.',
      ctaPrimary: 'شراء الهاكات',
      ctaDiscord: 'انضم إلى Discord',
      modesLabel: 'الأوضاع',
      modes: ['Ultimate Team', 'وضع المسيرة', 'Division Rivals', 'Pro Clubs'],
      metrics: [
        { label: 'آمن للبث', strong: 'نعم' },
        { label: 'سرعة التصحيح', strong: '<24h' },
        { label: 'المستخدمون', strong: '300+' },
        { label: 'الدعم', strong: '24/7' },
      ],
    },
    features: {
      eyebrow: 'ميزات الشيت',
      title: 'وحدات هاك EA FC 27',
      subtitle:
        'أوتو جرين، overlay الملعب، الرادار، snipe FUT وأدوات الأيقونات — كل ما تحتاجه لـ EA FC 27 على PC.',
      items: [
        {
          title: 'أوتو جرين / توقيت مثالي',
          subtitle: 'تسديدات تدخل',
          desc: 'مساعدة توقيت التسديد لـ Ultimate Team ووضع المسيرة. اضبط نافذة الأخضر وقوة التسديد وانحياز ال placement مع ملفات منفصلة.',
          bullets: [
            'منزلقات نافذة الأخضر وقوة التسديد',
            'ملفات placement وpower وtrivela',
            'تلميحات توقيت للقدم الضعيف والمهارات',
            'توقع انحراف الكرة أمام حراس متحركين',
            'إعدادات جاهزة لـ Rivals وFUT Champions والمسيرة',
          ],
          tags: ['أوتو جرين', 'توقيت مثالي', 'تسديد EA FC 27'],
        },
        {
          title: 'Overlay لاعبي الملعب',
          subtitle: 'اقرأ الملعب كاملاً',
          desc: 'أسماء وتحمل وضغط ومواقع كل خصم — حتى خارج الكاميرا.',
          bullets: [
            'أسماء وشرائط تحمل وضغط',
            'خطوط تشكيل وتلميحات جري بدون كرة',
            'تنبيه عند انطلاق الجناح فارغاً',
          ],
          tags: ['overlay ملعب', 'ESP لاعبين', 'قراءة التحمل'],
        },
        {
          title: 'رادار Mini-Pitch',
          subtitle: 'شاهد المساحة قبل التمرير',
          desc: 'رادار من الأعلى للمسارات المفتوحة ومثلثات الضغط ونوافذ الهجمة المرتدة.',
          bullets: ['نقاط الخصم على mini-pitch', 'علامات half-space والأطراف', 'يعمل مع overlay الملعب'],
          tags: ['رادار mini-pitch', 'تكتيك', 'ضغط مرتد'],
        },
        {
          title: 'مساعد Snipe FUT',
          subtitle: 'ميزة السوق والتشكيلة',
          desc: 'يبرز العروض بسعر منخفض وروابط الكيميا والفجوات في التشكيلة لتشتري أسرع في سوق الانتقالات.',
          bullets: [
            'إبراز العروض دون السعر',
            'علامات الكيميا والمركز',
            'نطاقات أسعار fodder لـ SBC',
          ],
          tags: ['snipe FUT', 'سوق الانتقالات', 'Ultimate Team'],
        },
        {
          title: 'فتح الأيقونات والأطقم',
          subtitle: 'معاينة محلية فقط',
          desc: 'معاينة الأيقونات والأطقم وثيمات الملعب على جهازك. لا يغيّر مشتريات EA أو التشكيلات أونلاين.',
          bullets: [
            'معاينة أيقونة وطقم وملعب',
            'مفضلة وتصدير تشكيلة',
            'مضمن في Elite أو Unlock All',
          ],
          tags: ['فتح أيقونات', 'تغيير طقم', 'مظهر'],
        },
        {
          title: 'Stream Proof',
          subtitle: 'إخفاء overlays أثناء البث',
          desc: 'أنت ترى overlays وأوتو جرين. OBS وGame Bar يلتقطان بثاً نظيفاً للمباراة.',
          bullets: ['أوضاع OBS وGame Bar', 'تبديل لكل وحدة', 'ملاحظات الإعداد في البوابة'],
          tags: ['stream proof', 'آمن OBS', 'إخفاء التقاط'],
        },
        {
          title: 'إعدادات Cloud وتحديثات AntiCheat',
          subtitle: 'بعد كل patch',
          desc: 'احفظ الإعدادات على السحابة. تحديثات اللودر بعد patches EA FC 27 وEA AntiCheat.',
          bullets: [
            'نسخ سحابي لأوتو جرين وoverlay',
            'تحديث اللودر بعد EA AntiCheat',
            'حالة في Discord #status',
          ],
          tags: ['مزامنة سحابة', 'EA AntiCheat', 'presets'],
        },
        {
          title: 'الأوضاع',
          subtitle: 'FUT، المسيرة، Rivals، Clubs',
          desc: 'إعدادات جاهزة لـ Ultimate Team ووضع المسيرة وDivision Rivals ووديات Pro Clubs.',
          bullets: ['presets لـ FUT والمسيرة', 'إعدادات Rivals أكثر أماناً', 'لوبيات Clubs لتمرين التوقيت'],
          tags: ['Ultimate Team', 'وضع المسيرة', 'Division Rivals'],
        },
        {
          title: 'أدوات إضافية',
          subtitle: 'خيارات Elite',
          desc: 'مساعدة دفاع بالذكاء الاصطناعي، auto jockey وأدوات coins FUT في Elite مع أوتو جرين وoverlay.',
          bullets: ['مساعدة block وتackle', 'auto jockey وcontain', 'مساعدو coins وSBC في Elite'],
          tags: ['دفاع AI', 'أدوات FUT', 'أدوات'],
        },
      ],
    },
    footer: {
      tagline: 'هاكات EA FC 27 للكمبيوتر: أوتو جرين، أدوات FUT، overlay الملعب وأدوات مساعدة.',
      explore: 'استكشف',
      support: 'الدعم',
      legal: 'قانوني',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
      about: 'من نحن',
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'أسئلة شائعة عن هاكات EA FC 27',
      subtitle: 'التوافق والحظر والباقات والإعداد — إجابات مباشرة قبل الشراء.',
      items: [
        {
          q: 'أين أتحقق من أن هاكات EA FC 27 متصلة؟',
          a: 'شريط الحالة المباشر على fifa27hacks.com وقناة Discord #status. تحقق بعد كل تحديث EA FC 27 أو EAC.',
        },
        {
          q: 'ماذا يحدث بعد الشراء؟',
          a: 'بوابتك تفتح اللودر ودليل الإعداد ومكتبة الإعدادات. اتبع الدليل قبل تشغيل EA FC 27.',
        },
        {
          q: 'هل يمكن أن أُحظر باستخدام هاكات طرف ثالث؟',
          a: 'نعم — أي تعديل يحمل مخاطر. EAC والبلاغات تتطور. اقرأ الحالة واقبل المخاطر قبل الاستخدام.',
        },
        {
          q: 'ما المنصات المدعومة؟',
          a: 'EA FC 27 عبر EA App على Windows 10/11 64-bit فقط. macOS وLinux غير مدعومين.',
        },
        {
          q: 'هل يمكن نقل الترخيص إلى جهاز جديد؟',
          a: 'نعم — reset HWID في البوابة أو تذكرة Discord. الحدود حسب باقتك.',
        },
        {
          q: 'أين تُدرج المنتجات والأدوات؟',
          a: 'باقات Lite وPro وElite وHWID Spoofer وUnlock All على fifa27hacks.com/products/fifa-27-hacks.',
        },
      ],
    },
    ui: {
      skipLink: 'تخطي إلى المحتوى الرئيسي',
      browseCheats: 'جرّب الآن',
      browseCheatsMobile: 'بدء الدفع',
      homeAria: 'الصفحة الرئيسية EA FC 27 Hacks',
      checkoutAria: 'بدء الدفع',
      discordAria: 'انضم إلى Discord EA FC 27 Hacks',
      menuOpen: 'فتح القائمة',
      menuClose: 'إغلاق القائمة',
      themeLight: 'الوضع الفاتح',
      themeDark: 'الوضع الداكن',
    },
    legalAbout: {
      title: 'من نحن EA FC 27 Hacks | شراء شيتات PC',
      description: 'حول EA FC 27 Hacks — شيتات PC (أوتو جرين، overlay، FUT) وأدلة على fifa27hacks.com.',
    },
    legalPrivacy: {
      title: 'سياسة الخصوصية | متجر EA FC 27 Hacks',
      description: 'كيف يتعامل متجر EA FC 27 Hacks على fifa27hacks.com مع التحليلات والكوكيز وبيانات التواصل.',
    },
    legalTerms: {
      title: 'الشروط EA FC 27 Hacks | الترخيص والاسترداد',
      description: 'شروط شراء هاكات EA FC 27 على fifa27hacks.com — الترخيص والتسليم ومخاطر الحساب.',
    },
    legalSupport: {
      title: 'دعم EA FC 27 Hacks | اللودر وHWID والدفع',
      description: 'دعم إعداد اللودر وHWID والدفع على fifa27hacks.com.',
    },
    pageSeoHome: {
      title: 'هاكات EA FC 27 غير مكتشفة | أوتو جرين، Snipe FUT وOverlay للكمبيوتر',
      description:
        'هاكات EA FC 27 غير مكتشفة للPC: أوتو جرين، overlay الملعب، رادار، snipe FUT وفتح الأيقونات. محدّثة بعد كل patch EA AntiCheat.',
    },
    pageSeoProducts: {
      title: 'منتجات EA FC 27 Hacks | Lite وPro وElite وأدوات',
      description: 'قارن باقات Lite وPro وElite وHWID Spoofer وUnlock All. دفع آمن ولودر Windows.',
    },
    pageSeoBlog: {
      title: 'مدونة EA FC 27 Hacks | أدلة وتحديثات',
      description:
        'أدلة auto green وoverlay الملعب وHWID بعد الحظر وقائمة يوم تحديث EA AntiCheat لهاكات EA FC 27 على PC.',
    },
  },
  nl: {
    site: {
      name: 'EA FC 27 Hacks & Cheats',
      title: 'Onopgemerkte EA FC 27 Hacks kopen | Auto Green, FUT & Overlay',
      description:
        'Onopgemerkte EA FC 27 hacks voor PC: auto green, pitch overlay, FUT snipe assist en icon unlocker. Bijgewerkt na elke EA AntiCheat-patch.',
    },
    nav: ['Home', 'Producten', 'Blog', 'Forum', 'FAQ', 'Support'],
    hero: {
      status: 'EA FC 27 online',
      eyebrow: 'Onopgemerkte EA FC 27 hacks',
      titleLine1: 'Onopgemerkte EA FC 27 Hacks',
      titleLine2: 'Auto Green, FUT-tools & Overlays',
      subtitle:
        'EA FC 27 hacks voor PC — auto green, perfect getimede schoten, pitch overlay, mini-radar en FUT-markt assist voor Ultimate Team, Career en Rivals. Updates na EA AntiCheat-patches.',
      ctaPrimary: 'Hacks kopen',
      ctaDiscord: 'Discord joinen',
      modesLabel: 'Modi',
      modes: ['Ultimate Team', 'Career Mode', 'Division Rivals', 'Pro Clubs'],
      metrics: [
        { label: 'Stream-safe', strong: 'Ja' },
        { label: 'Patchsnelheid', strong: '<24u' },
        { label: 'Gebruikers', strong: '300+' },
        { label: 'Support', strong: '24/7' },
      ],
    },
    features: {
      eyebrow: 'Cheatfuncties',
      title: 'EA FC 27 hackmodules',
      subtitle: 'Auto green, pitch overlay, radar, FUT snipe en icon tools voor EA FC 27 op PC.',
      items: [
        {
          title: 'Auto Green / Perfect Timed',
          subtitle: 'Afwerkingen die binnenkomen',
          desc: 'Timing-hulp voor Ultimate Team en Career. Stel groen venster, schotkracht en profielen in.',
          bullets: ['Sliders groen venster en kracht', 'Profielen finesse, power, trivela', 'Presets Rivals en FUT Champs'],
          tags: ['auto green', 'perfect timed', 'EA FC 27'],
        },
        {
          title: 'Pitch Player Overlay',
          subtitle: 'Hele veld lezen',
          desc: 'Namen, stamina en druk van elke tegenstander, ook buiten beeld.',
          bullets: ['Stamina- en drukbalken', 'Formatielijnen', 'Overlap-alerts'],
          tags: ['pitch overlay', 'player ESP', 'stamina'],
        },
        {
          title: 'Mini-Pitch Radar',
          subtitle: 'Ruimte zien voor de pass',
          desc: 'Top-down radar voor vrije lanes en countermomenten.',
          bullets: ['Tegenstander dots', 'Half-space markers', 'Werkt met overlay'],
          tags: ['mini radar', 'tactiek', 'counter'],
        },
        {
          title: 'FUT Snipe Assist',
          subtitle: 'Markt en squad',
          desc: 'Markeert goedkope listings en chemie-gaten op de transfermarkt.',
          bullets: ['Underpriced highlights', 'Chemie markers', 'SBC fodder bands'],
          tags: ['FUT snipe', 'transfermarkt', 'Ultimate Team'],
        },
        {
          title: 'Icon & Kit Unlocker',
          subtitle: 'Lokale preview',
          desc: 'Preview icons, kits en stadionthemes lokaal. Geen EA-winkelwijzigingen.',
          bullets: ['Icon/kit preview', 'Favorieten export', 'Elite of Unlock All'],
          tags: ['icon unlocker', 'kit changer', 'cosmetics'],
        },
        {
          title: 'Stream Proof',
          subtitle: 'Overlays verbergen',
          desc: 'Jij ziet overlays; OBS/Game Bar vangt schone feed.',
          bullets: ['OBS-modi', 'Toggle per module', 'Portal-notities'],
          tags: ['stream proof', 'OBS safe', 'capture'],
        },
        {
          title: 'Cloud Config & AntiCheat',
          subtitle: 'Na elke patch',
          desc: 'Configs in cloud. Loader-updates na EA FC 27/EAC patches.',
          bullets: ['Cloud backup', 'Loader updates', 'Discord #status'],
          tags: ['cloud sync', 'EA AntiCheat', 'presets'],
        },
        {
          title: 'Modi',
          subtitle: 'FUT, Career, Rivals',
          desc: 'Presets voor Ultimate Team, Career, Rivals en Pro Clubs.',
          bullets: ['FUT/Career presets', 'Veilige Rivals defaults', 'Clubs lobbies'],
          tags: ['Ultimate Team', 'Career', 'Rivals'],
        },
        {
          title: 'Extra tools',
          subtitle: 'Elite opties',
          desc: 'AI verdediging, auto jockey en FUT coin tools op Elite.',
          bullets: ['Block/tackle assist', 'Auto jockey', 'FUT/SBC helpers'],
          tags: ['AI defending', 'FUT tools', 'utilities'],
        },
      ],
    },
    footer: {
      tagline: 'EA FC 27 hacks PC: auto green, FUT-tools, pitch overlay.',
      explore: 'Ontdekken',
      support: 'Support',
      legal: 'Juridisch',
      privacy: 'Privacybeleid',
      terms: 'Voorwaarden',
      about: 'Over ons',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'EA FC 27 hacks FAQ',
      subtitle: 'Compatibiliteit, bans en setup — kort voor je koopt.',
      items: [
        { q: 'Waar check ik online status?', a: 'Banner op fifa27hacks.com en Discord #status. Check na patches.' },
        { q: 'Wat na aankoop?', a: 'Portal opent loader, guide en configs. Volg guide vóór EA FC 27 start.' },
        { q: 'Ban-risico?', a: 'Ja, elke mod heeft risico. Lees status en accepteer risico.' },
        { q: 'Platformen?', a: 'EA FC 27 via EA App, Windows 10/11 64-bit.' },
        { q: 'Licentie verplaatsen?', a: 'HWID reset in portal of Discord ticket.' },
        { q: 'Producten?', a: 'Lite/Pro/Elite en tools op fifa27hacks.com/products/fifa-27-hacks.' },
      ],
    },
    ui: {
      skipLink: 'Naar hoofdinhoud',
      browseCheats: 'Probeer nu',
      browseCheatsMobile: 'Start checkout',
      homeAria: 'EA FC 27 Hacks home',
      checkoutAria: 'Start checkout',
      discordAria: 'Join Discord EA FC 27 Hacks',
      menuOpen: 'Menu openen',
      menuClose: 'Menu sluiten',
      themeLight: 'Lichte modus',
      themeDark: 'Donkere modus',
    },
    legalAbout: {
      title: 'Over EA FC 27 Hacks | PC cheats',
      description: 'Over EA FC 27 Hacks — PC cheats en guides op fifa27hacks.com.',
    },
    legalPrivacy: {
      title: 'Privacy | EA FC 27 Hacks shop',
      description: 'Privacy en cookies op fifa27hacks.com.',
    },
    legalTerms: {
      title: 'Voorwaarden EA FC 27 Hacks',
      description: 'Licentie, levering en risico bij aankoop op fifa27hacks.com.',
    },
    legalSupport: {
      title: 'Support EA FC 27 Hacks',
      description: 'Loader, HWID en checkout support op fifa27hacks.com.',
    },
    pageSeoHome: {
      title: 'Onopgemerkte EA FC 27 Hacks | Auto Green & FUT Snipe PC',
      description: 'EA FC 27 hacks PC: auto green, overlay, radar, FUT snipe, icon unlocker. EA AntiCheat updates.',
    },
    pageSeoProducts: {
      title: 'EA FC 27 producten | Lite, Pro, Elite',
      description: 'Vergelijk tiers en utilities. Veilige checkout voor Windows.',
    },
    pageSeoBlog: {
      title: 'EA FC 27 Hacks Blog | Setup & Patch Guides',
      description:
        'Gidsen voor auto green, pitch overlay, HWID na ban en EA AntiCheat patch-dag voor EA FC 27 hacks op PC.',
    },
  },
  tr: {
    site: {
      name: 'EA FC 27 Hacks & Cheats',
      title: 'Tespit Edilmeyen EA FC 27 Hileleri | Auto Green, FUT ve Overlay',
      description:
        'PC için tespit edilmeyen EA FC 27 hileleri: auto green, saha overlay, FUT snipe ve icon unlocker. Her EA AntiCheat yamasından sonra güncellenir.',
    },
    nav: ['Ana Sayfa', 'Ürünler', 'Blog', 'Forum', 'SSS', 'Destek'],
    hero: {
      status: 'EA FC 27 çevrimiçi',
      eyebrow: 'Tespit edilmeyen EA FC 27 hileleri',
      titleLine1: 'Tespit Edilmeyen EA FC 27 Hileleri',
      titleLine2: 'Auto Green, FUT Araçları ve Overlay',
      subtitle:
        'PC EA FC 27 hileleri — auto green, pitch overlay, mini radar ve FUT pazar asistanı. Ultimate Team, Kariyer ve Rivals için. EA AntiCheat yamalarından sonra güncellenir.',
      ctaPrimary: 'Hile satın al',
      ctaDiscord: 'Discord’a katıl',
      modesLabel: 'Modlar',
      modes: ['Ultimate Team', 'Kariyer Modu', 'Division Rivals', 'Pro Clubs'],
      metrics: [
        { label: 'Yayın güvenli', strong: 'Evet' },
        { label: 'Yama hızı', strong: '<24s' },
        { label: 'Kullanıcı', strong: '300+' },
        { label: 'Destek', strong: '7/24' },
      ],
    },
    features: {
      eyebrow: 'Hile özellikleri',
      title: 'EA FC 27 hile modülleri',
      subtitle: 'Auto green, overlay, radar, FUT snipe ve icon araçları — PC için tam set.',
      items: [
        {
          title: 'Auto Green / Perfect Timed',
          subtitle: 'Giren bitirişler',
          desc: 'Ultimate Team ve Kariyer için zamanlama yardımı. Yeşil pencere ve şut gücü ayarı.',
          bullets: ['Yeşil pencere sliderları', 'Finesse/power profilleri', 'Rivals ve FUT Champs preset'],
          tags: ['auto green', 'perfect timed', 'EA FC 27'],
        },
        {
          title: 'Saha Oyuncu Overlay',
          subtitle: 'Tüm sahayı oku',
          desc: 'Rakip isimleri, stamina ve baskı — kamera dışında da.',
          bullets: ['Stamina çubukları', 'Formasyon çizgileri', 'Kanat uyarıları'],
          tags: ['pitch overlay', 'ESP', 'stamina'],
        },
        {
          title: 'Mini Saha Radarı',
          subtitle: 'Pas öncesi boşluk',
          desc: 'Üstten radar ile boş koridor ve kontra fırsatları.',
          bullets: ['Rakip noktaları', 'Half-space işaretleri', 'Overlay ile uyumlu'],
          tags: ['mini radar', 'taktik', 'kontra'],
        },
        {
          title: 'FUT Snipe Asistanı',
          subtitle: 'Pazar avantajı',
          desc: 'Ucuz ilanları ve kimya boşluklarını vurgular.',
          bullets: ['Underpriced vurgu', 'Kimya/ pozisyon', 'SBC fodder bantları'],
          tags: ['FUT snipe', 'transfer', 'Ultimate Team'],
        },
        {
          title: 'Icon & Kit Unlocker',
          subtitle: 'Yerel önizleme',
          desc: 'Icon, forma ve stadyum temalarını yerelde gör. Online kadroyu değiştirmez.',
          bullets: ['Icon/kit önizleme', 'Favori export', 'Elite veya Unlock All'],
          tags: ['icon unlocker', 'kit', 'kozmetik'],
        },
        {
          title: 'Stream Proof',
          subtitle: 'Yayında gizle',
          desc: 'Sen overlay görürsün; OBS temiz görüntü alır.',
          bullets: ['OBS modları', 'Modül toggle', 'Portal notları'],
          tags: ['stream proof', 'OBS', 'capture'],
        },
        {
          title: 'Cloud Config & AntiCheat',
          subtitle: 'Her yamadan sonra',
          desc: 'Ayarları bulutta sakla. Loader EA FC 27/EAC sonrası güncellenir.',
          bullets: ['Cloud yedek', 'Loader güncellemesi', 'Discord #status'],
          tags: ['cloud', 'EA AntiCheat', 'preset'],
        },
        {
          title: 'Modlar',
          subtitle: 'FUT, Kariyer, Rivals',
          desc: 'Ultimate Team, Kariyer, Rivals ve Pro Clubs presetleri.',
          bullets: ['FUT/Kariyer preset', 'Güvenli Rivals', 'Clubs lobileri'],
          tags: ['Ultimate Team', 'Kariyer', 'Rivals'],
        },
        {
          title: 'Ekstra araçlar',
          subtitle: 'Elite seçenekler',
          desc: 'Elite’te AI savunma, auto jockey ve FUT coin araçları.',
          bullets: ['Block/tackle assist', 'Auto jockey', 'FUT/SBC yardımcıları'],
          tags: ['AI savunma', 'FUT', 'araçlar'],
        },
      ],
    },
    footer: {
      tagline: 'PC EA FC 27 hileleri: auto green, FUT araçları, overlay.',
      explore: 'Keşfet',
      support: 'Destek',
      legal: 'Yasal',
      privacy: 'Gizlilik',
      terms: 'Şartlar',
      about: 'Hakkımızda',
    },
    faq: {
      eyebrow: 'SSS',
      title: 'EA FC 27 hile SSS',
      subtitle: 'Uyumluluk, ban ve kurulum — satın almadan önce.',
      items: [
        { q: 'Online durumu nerede?', a: 'fifa27hacks.com banner ve Discord #status.' },
        { q: 'Satın alınca ne olur?', a: 'Portal loader ve rehberi açar. Önce rehberi izle.' },
        { q: 'Ban riski var mı?', a: 'Evet. Riski kabul et ve status kontrol et.' },
        { q: 'Desteklenen platform?', a: 'EA App, Windows 10/11 64-bit.' },
        { q: 'Lisans taşınır mı?', a: 'HWID reset veya Discord ticket.' },
        { q: 'Ürünler nerede?', a: 'fifa27hacks.com/products/fifa-27-hacks.' },
      ],
    },
    ui: {
      skipLink: 'Ana içeriğe geç',
      browseCheats: 'Şimdi dene',
      browseCheatsMobile: 'Checkout başlat',
      homeAria: 'EA FC 27 Hacks ana sayfa',
      checkoutAria: 'Checkout başlat',
      discordAria: 'Discord EA FC 27 Hacks',
      menuOpen: 'Menüyü aç',
      menuClose: 'Menüyü kapat',
      themeLight: 'Açık tema',
      themeDark: 'Koyu tema',
    },
    legalAbout: {
      title: 'Hakkımızda EA FC 27 Hacks',
      description: 'EA FC 27 Hacks PC hileleri ve rehberler — fifa27hacks.com.',
    },
    legalPrivacy: {
      title: 'Gizlilik | EA FC 27 Hacks',
      description: 'fifa27hacks.com gizlilik ve çerezler.',
    },
    legalTerms: {
      title: 'Şartlar EA FC 27 Hacks',
      description: 'Lisans ve risk — fifa27hacks.com.',
    },
    legalSupport: {
      title: 'Destek EA FC 27 Hacks',
      description: 'Loader ve checkout desteği — fifa27hacks.com.',
    },
    pageSeoHome: {
      title: 'Tespit Edilmeyen EA FC 27 Hileleri | Auto Green PC',
      description: 'EA FC 27 hileleri: auto green, overlay, FUT snipe, icon unlocker. EA AntiCheat güncel.',
    },
    pageSeoProducts: {
      title: 'EA FC 27 Ürünleri | Lite, Pro, Elite',
      description: 'Tier karşılaştırması ve güvenli checkout.',
    },
    pageSeoBlog: {
      title: 'EA FC 27 Hacks Blog | Kurulum ve Patch',
      description:
        'Auto green, saha overlay, HWID ban sonrası ve EA AntiCheat patch günü rehberleri — EA FC 27 PC hackleri.',
    },
  },
  pl: {
    site: {
      name: 'EA FC 27 Hacks & Cheats',
      title: 'Niewykrywalne haki EA FC 27 | Auto Green, FUT i Overlay',
      description:
        'Niewykrywalne haki EA FC 27 na PC: auto green, overlay boiska, FUT snipe i icon unlocker. Aktualizacja po każdym patchu EA AntiCheat.',
    },
    nav: ['Strona główna', 'Produkty', 'Blog', 'Forum', 'FAQ', 'Wsparcie'],
    hero: {
      status: 'EA FC 27 online',
      eyebrow: 'Niewykrywalne haki EA FC 27',
      titleLine1: 'Niewykrywalne Haki EA FC 27',
      titleLine2: 'Auto Green, Narzędzia FUT i Overlay',
      subtitle:
        'Haki EA FC 27 na PC — auto green, overlay, mini-radar i asystent rynku FUT dla Ultimate Team, Kariery i Rivals. Update po patchach EA AntiCheat.',
      ctaPrimary: 'Kup haki',
      ctaDiscord: 'Dołącz do Discord',
      modesLabel: 'Tryby',
      modes: ['Ultimate Team', 'Tryb Kariery', 'Division Rivals', 'Pro Clubs'],
      metrics: [
        { label: 'Stream-safe', strong: 'Tak' },
        { label: 'Szybkość patchy', strong: '<24h' },
        { label: 'Użytkownicy', strong: '300+' },
        { label: 'Wsparcie', strong: '24/7' },
      ],
    },
    features: {
      eyebrow: 'Funkcje cheata',
      title: 'Moduły hack EA FC 27',
      subtitle: 'Auto green, overlay, radar, FUT snipe i narzędzia ikon — komplet na PC.',
      items: [
        {
          title: 'Auto Green / Perfect Timed',
          subtitle: 'Strzały, które wpadają',
          desc: 'Asysta timingu dla Ultimate Team i Kariery. Ustaw zielone okno i moc strzału.',
          bullets: ['Suwaki okna i mocy', 'Profile finesse/power/trivela', 'Presety Rivals i FUT Champs'],
          tags: ['auto green', 'perfect timed', 'EA FC 27'],
        },
        {
          title: 'Overlay Graczy na Boisku',
          subtitle: 'Czytaj całe boisko',
          desc: 'Imiona, stamina i presja przeciwników — także poza kamerą.',
          bullets: ['Paski stamina', 'Linie formacji', 'Alerty skrzydła'],
          tags: ['pitch overlay', 'ESP', 'stamina'],
        },
        {
          title: 'Radar Mini-Boisko',
          subtitle: 'Widz przestrzeń przed podaniem',
          desc: 'Radar z góry dla wolnych korytarzy i kontr.',
          bullets: ['Kropki rywali', 'Markery half-space', 'Z overlay'],
          tags: ['mini radar', 'taktyka', 'kontra'],
        },
        {
          title: 'Asystent Snipe FUT',
          subtitle: 'Rynek i skład',
          desc: 'Podświetla tanie oferty i luki chemii na rynku transferów.',
          bullets: ['Underpriced', 'Chemia/pozycja', 'Pasma SBC fodder'],
          tags: ['FUT snipe', 'transfery', 'Ultimate Team'],
        },
        {
          title: 'Icon & Kit Unlocker',
          subtitle: 'Podgląd lokalny',
          desc: 'Podgląd ikon, kitów i stadionów lokalnie. Bez zmian w składzie online.',
          bullets: ['Podgląd icon/kit', 'Eksport ulubionych', 'Elite lub Unlock All'],
          tags: ['icon unlocker', 'kit', 'kosmetyki'],
        },
        {
          title: 'Stream Proof',
          subtitle: 'Ukryj overlay na streamie',
          desc: 'Ty widzisz overlay; OBS nagrywa czysty obraz.',
          bullets: ['Tryby OBS', 'Toggle modułów', 'Notatki w portalu'],
          tags: ['stream proof', 'OBS', 'capture'],
        },
        {
          title: 'Cloud Config & AntiCheat',
          subtitle: 'Po każdym patchu',
          desc: 'Config w chmurze. Loader po patchach EA FC 27/EAC.',
          bullets: ['Backup chmura', 'Update loadera', 'Discord #status'],
          tags: ['cloud', 'EA AntiCheat', 'presety'],
        },
        {
          title: 'Tryby',
          subtitle: 'FUT, Kariera, Rivals',
          desc: 'Presety Ultimate Team, Kariera, Rivals i Pro Clubs.',
          bullets: ['Presety FUT/Kariera', 'Bezpieczne Rivals', 'Lobby Clubs'],
          tags: ['Ultimate Team', 'Kariera', 'Rivals'],
        },
        {
          title: 'Dodatkowe narzędzia',
          subtitle: 'Elite',
          desc: 'AI obrona, auto jockey i narzędzia FUT w Elite.',
          bullets: ['Block/tackle assist', 'Auto jockey', 'Pomocniki FUT/SBC'],
          tags: ['AI obrona', 'FUT', 'narzędzia'],
        },
      ],
    },
    footer: {
      tagline: 'Haki EA FC 27 PC: auto green, FUT, overlay boiska.',
      explore: 'Odkrywaj',
      support: 'Wsparcie',
      legal: 'Prawne',
      privacy: 'Polityka prywatności',
      terms: 'Regulamin',
      about: 'O nas',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'FAQ hacków EA FC 27',
      subtitle: 'Kompatybilność, bany i setup — przed zakupem.',
      items: [
        { q: 'Gdzie sprawdzić status online?', a: 'Banner na fifa27hacks.com i Discord #status.' },
        { q: 'Co po zakupie?', a: 'Portal odblokowuje loader i poradnik.' },
        { q: 'Ryzyko bana?', a: 'Tak — każda modyfikacja ma ryzyko.' },
        { q: 'Platformy?', a: 'EA App, Windows 10/11 64-bit.' },
        { q: 'Przeniesienie licencji?', a: 'Reset HWID w portalu lub ticket Discord.' },
        { q: 'Lista produktów?', a: 'fifa27hacks.com/products/fifa-27-hacks.' },
      ],
    },
    ui: {
      skipLink: 'Przejdź do treści',
      browseCheats: 'Wypróbuj',
      browseCheatsMobile: 'Start checkout',
      homeAria: 'Strona główna EA FC 27 Hacks',
      checkoutAria: 'Start checkout',
      discordAria: 'Discord EA FC 27 Hacks',
      menuOpen: 'Otwórz menu',
      menuClose: 'Zamknij menu',
      themeLight: 'Jasny motyw',
      themeDark: 'Ciemny motyw',
    },
    legalAbout: {
      title: 'O EA FC 27 Hacks',
      description: 'Haki PC i poradniki — fifa27hacks.com.',
    },
    legalPrivacy: {
      title: 'Prywatność EA FC 27 Hacks',
      description: 'Analytics i cookies — fifa27hacks.com.',
    },
    legalTerms: {
      title: 'Regulamin EA FC 27 Hacks',
      description: 'Licencja i ryzyko konta — fifa27hacks.com.',
    },
    legalSupport: {
      title: 'Wsparcie EA FC 27 Hacks',
      description: 'Loader i checkout — fifa27hacks.com.',
    },
    pageSeoHome: {
      title: 'Niewykrywalne Haki EA FC 27 | Auto Green PC',
      description: 'Haki EA FC 27: auto green, overlay, FUT snipe, icon unlocker. EA AntiCheat.',
    },
    pageSeoProducts: {
      title: 'Produkty EA FC 27 | Lite, Pro, Elite',
      description: 'Porównanie tierów i bezpieczny checkout.',
    },
    pageSeoBlog: {
      title: 'Blog EA FC 27 Hacks | Poradniki i Patche',
      description:
        'Poradniki auto green, overlay boiska, HWID po banie i checklista patchy EA AntiCheat dla hacków EA FC 27 na PC.',
    },
  },
  pt: {
    site: {
      name: 'Hacks & Cheats EA FC 27',
      title: 'Comprar Hacks EA FC 27 Indetectáveis | Auto Green, FUT e Overlay',
      description:
        'Hacks EA FC 27 indetectáveis para PC: auto green, overlay no campo, assistente snipe FUT e desbloqueador de ícones. Atualizado após cada patch EA AntiCheat.',
    },
    nav: ['Início', 'Produtos', 'Blog', 'Fórum', 'FAQ', 'Suporte'],
    hero: {
      status: 'EA FC 27 online',
      eyebrow: 'Hacks EA FC 27 indetectáveis',
      titleLine1: 'Hacks EA FC 27 Indetectáveis',
      titleLine2: 'Auto Green, Ferramentas FUT e Overlays',
      subtitle:
        'Hacks EA FC 27 para PC — auto green, overlay, radar mini-campo e assistente FUT para Ultimate Team, Carreira e Rivals. Updates após patches EA AntiCheat.',
      ctaPrimary: 'Comprar hacks',
      ctaDiscord: 'Entrar no Discord',
      modesLabel: 'Modos',
      modes: ['Ultimate Team', 'Modo Carreira', 'Division Rivals', 'Pro Clubs'],
      metrics: [
        { label: 'Stream-safe', strong: 'Sim' },
        { label: 'Velocidade de patch', strong: '<24h' },
        { label: 'Utilizadores', strong: '300+' },
        { label: 'Suporte', strong: '24/7' },
      ],
    },
    features: {
      eyebrow: 'Funcionalidades',
      title: 'Módulos hack EA FC 27',
      subtitle: 'Auto green, overlay, radar, snipe FUT e ícones — kit completo para PC.',
      items: [
        {
          title: 'Auto Green / Timing Perfeito',
          subtitle: 'Remates certeiros',
          desc: 'Ajuda de timing para Ultimate Team e Carreira. Ajuste janela verde e potência.',
          bullets: ['Sliders janela verde', 'Perfis finesse/power/trivela', 'Presets Rivals e FUT Champs'],
          tags: ['auto green', 'timing perfeito', 'EA FC 27'],
        },
        {
          title: 'Overlay de Jogadores',
          subtitle: 'Ler todo o campo',
          desc: 'Nomes, stamina e pressão dos adversários, inclusive fora de câmara.',
          bullets: ['Barras de stamina', 'Linhas de formação', 'Alertas de overlap'],
          tags: ['overlay campo', 'ESP', 'stamina'],
        },
        {
          title: 'Radar Mini-Campo',
          subtitle: 'Espaço antes do passe',
          desc: 'Radar top-down para corredores livres e contras.',
          bullets: ['Pontos adversários', 'Marcadores half-space', 'Com overlay'],
          tags: ['radar', 'tática', 'contra'],
        },
        {
          title: 'Assistente Snipe FUT',
          subtitle: 'Mercado e plantel',
          desc: 'Destaca anúncios baratos e lacunas de química no mercado.',
          bullets: ['Underpriced', 'Química/posição', 'Faixas SBC fodder'],
          tags: ['snipe FUT', 'mercado', 'Ultimate Team'],
        },
        {
          title: 'Desbloqueador Ícones & Kits',
          subtitle: 'Pré-visualização local',
          desc: 'Pré-visualize ícones e kits localmente. Não altera compras EA online.',
          bullets: ['Preview icon/kit', 'Export favoritos', 'Elite ou Unlock All'],
          tags: ['icon unlocker', 'kit', 'cosméticos'],
        },
        {
          title: 'Stream Proof',
          subtitle: 'Ocultar em stream',
          desc: 'Vês overlays; OBS captura feed limpo.',
          bullets: ['Modos OBS', 'Toggle por módulo', 'Notas no portal'],
          tags: ['stream proof', 'OBS', 'captura'],
        },
        {
          title: 'Config Cloud & AntiCheat',
          subtitle: 'Após cada patch',
          desc: 'Configs na cloud. Loader após patches EA FC 27/EAC.',
          bullets: ['Backup cloud', 'Updates loader', 'Discord #status'],
          tags: ['cloud', 'EA AntiCheat', 'presets'],
        },
        {
          title: 'Modos',
          subtitle: 'FUT, Carreira, Rivals',
          desc: 'Presets para Ultimate Team, Carreira, Rivals e Pro Clubs.',
          bullets: ['Presets FUT/Carreira', 'Defaults Rivals seguros', 'Lobbies Clubs'],
          tags: ['Ultimate Team', 'Carreira', 'Rivals'],
        },
        {
          title: 'Ferramentas extra',
          subtitle: 'Elite',
          desc: 'Defesa IA, auto jockey e ferramentas FUT no Elite.',
          bullets: ['Assist block/tackle', 'Auto jockey', 'Helpers FUT/SBC'],
          tags: ['defesa IA', 'FUT', 'utilitários'],
        },
      ],
    },
    footer: {
      tagline: 'Hacks EA FC 27 PC: auto green, FUT, overlay e utilitários.',
      explore: 'Explorar',
      support: 'Suporte',
      legal: 'Legal',
      privacy: 'Privacidade',
      terms: 'Termos',
      about: 'Sobre',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'FAQ hacks EA FC 27',
      subtitle: 'Compatibilidade, bans e setup — antes de comprar.',
      items: [
        { q: 'Onde verifico o status?', a: 'Banner em fifa27hacks.com e Discord #status.' },
        { q: 'Depois da compra?', a: 'O portal desbloqueia loader e guia.' },
        { q: 'Risco de ban?', a: 'Sim — aceita o risco e lê o status.' },
        { q: 'Plataformas?', a: 'EA App, Windows 10/11 64-bit.' },
        { q: 'Mover licença?', a: 'Reset HWID no portal ou ticket Discord.' },
        { q: 'Produtos?', a: 'fifa27hacks.com/products/fifa-27-hacks.' },
      ],
    },
    ui: {
      skipLink: 'Saltar para conteúdo',
      browseCheats: 'Experimentar',
      browseCheatsMobile: 'Iniciar checkout',
      homeAria: 'Início EA FC 27 Hacks',
      checkoutAria: 'Iniciar checkout',
      discordAria: 'Discord EA FC 27 Hacks',
      menuOpen: 'Abrir menu',
      menuClose: 'Fechar menu',
      themeLight: 'Modo claro',
      themeDark: 'Modo escuro',
    },
    legalAbout: {
      title: 'Sobre EA FC 27 Hacks',
      description: 'Hacks PC e guias — fifa27hacks.com.',
    },
    legalPrivacy: {
      title: 'Privacidade EA FC 27 Hacks',
      description: 'Cookies e analytics — fifa27hacks.com.',
    },
    legalTerms: {
      title: 'Termos EA FC 27 Hacks',
      description: 'Licença e risco — fifa27hacks.com.',
    },
    legalSupport: {
      title: 'Suporte EA FC 27 Hacks',
      description: 'Loader e checkout — fifa27hacks.com.',
    },
    pageSeoHome: {
      title: 'Hacks EA FC 27 Indetectáveis | Auto Green PC',
      description: 'Hacks EA FC 27: auto green, overlay, snipe FUT, icon unlocker. EA AntiCheat.',
    },
    pageSeoProducts: {
      title: 'Produtos EA FC 27 | Lite, Pro, Elite',
      description: 'Comparar tiers e checkout seguro.',
    },
    pageSeoBlog: {
      title: 'Blog EA FC 27 Hacks | Guias e Patches',
      description:
        'Guias de auto green, overlay do campo, HWID após ban e checklist de patch EA AntiCheat para hacks EA FC 27 no PC.',
    },
  },
  __REMOVE_ID_START__: {
    site: {
      name: 'EA FC 27 Hacks & Cheats',
      title: 'Beli Hack EA FC 27 Undetected | Auto Green, FUT & Overlay',
      description:
        'Hack EA FC 27 undetected untuk PC: auto green, pitch overlay, FUT snipe assist, dan icon unlocker. Diperbarui setelah patch EA AntiCheat.',
    },
    nav: ['Beranda', 'Produk', 'Blog', 'Forum', 'FAQ', 'Dukungan'],
    hero: {
      status: 'EA FC 27 online',
      eyebrow: 'Hack EA FC 27 undetected',
      titleLine1: 'Hack EA FC 27 Undetected',
      titleLine2: 'Auto Green, Alat FUT & Overlay',
      subtitle:
        'Hack EA FC 27 PC — auto green, overlay lapangan, radar mini, dan asisten pasar FUT untuk Ultimate Team, Career, dan Rivals. Update setelah patch EA AntiCheat.',
      ctaPrimary: 'Beli hack',
      ctaDiscord: 'Gabung Discord',
      modesLabel: 'Mode',
      modes: ['Ultimate Team', 'Career Mode', 'Division Rivals', 'Pro Clubs'],
      metrics: [
        { label: 'Aman streaming', strong: 'Ya' },
        { label: 'Kecepatan patch', strong: '<24j' },
        { label: 'Pengguna', strong: '300+' },
        { label: 'Dukungan', strong: '24/7' },
      ],
    },
    features: {
      eyebrow: 'Fitur cheat',
      title: 'Modul hack EA FC 27',
      subtitle: 'Auto green, overlay, radar, FUT snipe, dan icon tools — lengkap untuk PC.',
      items: [
        {
          title: 'Auto Green / Perfect Timed',
          subtitle: 'Finishing masuk',
          desc: 'Bantuan timing untuk Ultimate Team dan Career. Atur jendela hijau dan power shot.',
          bullets: ['Slider jendela hijau', 'Profil finesse/power/trivela', 'Preset Rivals & FUT Champs'],
          tags: ['auto green', 'perfect timed', 'EA FC 27'],
        },
        {
          title: 'Overlay Pemain Lapangan',
          subtitle: 'Baca seluruh lapangan',
          desc: 'Nama, stamina, dan tekanan lawan — termasuk di luar kamera.',
          bullets: ['Bar stamina', 'Garis formasi', 'Alert sayap bebas'],
          tags: ['pitch overlay', 'ESP', 'stamina'],
        },
        {
          title: 'Radar Mini-Pitch',
          subtitle: 'Lihat ruang sebelum pass',
          desc: 'Radar top-down untuk jalur kosong dan counter.',
          bullets: ['Titik lawan', 'Marker half-space', 'Cocok dengan overlay'],
          tags: ['mini radar', 'taktik', 'counter'],
        },
        {
          title: 'Asisten Snipe FUT',
          subtitle: 'Pasar & skuad',
          desc: 'Sorot listing murah dan celah chemistry di transfer market.',
          bullets: ['Highlight underpriced', 'Marker chemistry', 'Band harga SBC fodder'],
          tags: ['FUT snipe', 'transfer market', 'Ultimate Team'],
        },
        {
          title: 'Icon & Kit Unlocker',
          subtitle: 'Preview lokal',
          desc: 'Preview icon, kit, dan tema stadion lokal. Tidak mengubah skuad online.',
          bullets: ['Preview icon/kit', 'Export favorit', 'Elite atau Unlock All'],
          tags: ['icon unlocker', 'kit', 'kosmetik'],
        },
        {
          title: 'Stream Proof',
          subtitle: 'Sembunyikan overlay saat stream',
          desc: 'Kamu lihat overlay; OBS tangkap feed bersih.',
          bullets: ['Mode OBS', 'Toggle per modul', 'Catatan portal'],
          tags: ['stream proof', 'OBS', 'capture'],
        },
        {
          title: 'Cloud Config & AntiCheat',
          subtitle: 'Setelah setiap patch',
          desc: 'Simpan config cloud. Loader diupdate setelah patch EA FC 27/EAC.',
          bullets: ['Backup cloud', 'Update loader', 'Discord #status'],
          tags: ['cloud', 'EA AntiCheat', 'preset'],
        },
        {
          title: 'Mode',
          subtitle: 'FUT, Career, Rivals',
          desc: 'Preset Ultimate Team, Career, Rivals, dan Pro Clubs.',
          bullets: ['Preset FUT/Career', 'Default Rivals aman', 'Lobby Clubs'],
          tags: ['Ultimate Team', 'Career', 'Rivals'],
        },
        {
          title: 'Alat extra',
          subtitle: 'Elite',
          desc: 'Bantuan bertahan AI, auto jockey, dan alat coin FUT di Elite.',
          bullets: ['Assist block/tackle', 'Auto jockey', 'Helper FUT/SBC'],
          tags: ['AI defending', 'FUT', 'utilitas'],
        },
      ],
    },
    footer: {
      tagline: 'Hack EA FC 27 PC: auto green, alat FUT, overlay lapangan.',
      explore: 'Jelajahi',
      support: 'Dukungan',
      legal: 'Legal',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat & Ketentuan',
      about: 'Tentang',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'FAQ hack EA FC 27',
      subtitle: 'Kompatibilitas, ban, dan setup — sebelum beli.',
      items: [
        { q: 'Cek status online di mana?', a: 'Banner di fifa27hacks.com dan Discord #status.' },
        { q: 'Setelah beli?', a: 'Portal membuka loader dan panduan setup.' },
        { q: 'Risiko ban?', a: 'Ya — baca status dan terima risiko.' },
        { q: 'Platform?', a: 'EA App, Windows 10/11 64-bit.' },
        { q: 'Pindah lisensi?', a: 'Reset HWID di portal atau ticket Discord.' },
        { q: 'Daftar produk?', a: 'fifa27hacks.com/products/fifa-27-hacks.' },
      ],
    },
    ui: {
      skipLink: 'Lewati ke konten utama',
      browseCheats: 'Coba sekarang',
      browseCheatsMobile: 'Mulai checkout',
      homeAria: 'Beranda EA FC 27 Hacks',
      checkoutAria: 'Mulai checkout',
      discordAria: 'Discord EA FC 27 Hacks',
      menuOpen: 'Buka menu',
      menuClose: 'Tutup menu',
      themeLight: 'Mode terang',
      themeDark: 'Mode gelap',
    },
    legalAbout: {
      title: 'Tentang EA FC 27 Hacks',
      description: 'Hack PC dan panduan — fifa27hacks.com.',
    },
    legalPrivacy: {
      title: 'Privasi EA FC 27 Hacks',
      description: 'Analytics dan cookie — fifa27hacks.com.',
    },
    legalTerms: {
      title: 'Syarat EA FC 27 Hacks',
      description: 'Lisensi dan risiko akun — fifa27hacks.com.',
    },
    legalSupport: {
      title: 'Dukungan EA FC 27 Hacks',
      description: 'Loader dan checkout — fifa27hacks.com.',
    },
    pageSeoHome: {
      title: 'Hack EA FC 27 Undetected | Auto Green PC',
      description: 'Hack EA FC 27: auto green, overlay, FUT snipe, icon unlocker. Update EA AntiCheat.',
    },
    pageSeoProducts: {
      title: 'Produk EA FC 27 | Lite, Pro, Elite',
      description: 'Bandingkan tier dan checkout aman Windows.',
    },
    pageSeoBlog: {
      title: 'Blog EA FC 27 Hacks | Panduan & Patch',
      description:
        'Panduan auto green, overlay lapangan, HWID setelah ban, dan checklist hari patch EA AntiCheat untuk hack EA FC 27 di PC.',
    },
  },
};
