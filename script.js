const BREADS = [
  { id: 'italian', label: 'Italiano', emoji: '🥖' }, { id: 'whole_wheat', label: 'Integral', emoji: '🌾' },
  { id: 'white', label: 'Branco Clássico', emoji: '🍞' }, { id: 'parmesan', label: 'Parmesão & Orégano', emoji: '🧀' },
  { id: 'multigrain', label: 'Multigrãos', emoji: '🌰' }, { id: 'wrap', label: 'Wrap Tortilla', emoji: '🌯' }, { id: 'flatbread', label: 'Flatbread', emoji: '🫓' }
];
const PROTEINS = [
  { id: 'frango', label: 'Frango Assado', emoji: '🍗' }, { id: 'atum', label: 'Atum', emoji: '🐟' }, { id: 'peru', label: 'Peito de Peru', emoji: '🦃' },
  { id: 'roast_beef', label: 'Roast Beef', emoji: '🥩' }, { id: 'bacon', label: 'Bacon Crocante', emoji: '🥓' }, { id: 'veggie', label: 'Burger Veggie', emoji: '🥦' },
  { id: 'ovos', label: 'Ovos Mexidos', emoji: '🍳' }, { id: 'linguica', label: 'Linguiça', emoji: '🌭' }, { id: 'tofu', label: 'Tofu Grelhado', emoji: '🌿' }
];
const CHEESES = [
  { id: 'american', label: 'Americano', emoji: '🧀' }, { id: 'mozzarella', label: 'Mozzarella', emoji: '🫧' }, { id: 'pepperjack', label: 'Pepper Jack', emoji: '🌶️' },
  { id: 'provolone', label: 'Provolone', emoji: '🟡' }, { id: 'cheddar', label: 'Cheddar Defumado', emoji: '🔶' }, { id: 'suico', label: 'Suíço', emoji: '🇨🇭' }, { id: 'sem_queijo', label: 'Sem Queijo', emoji: '–' }
];
const VEGGIES = [
  { id: 'alface', label: 'Alface', emoji: '🥬' }, { id: 'tomate', label: 'Tomate', emoji: '🍅' }, { id: 'cebola', label: 'Cebola', emoji: '🧅' },
  { id: 'pepino', label: 'Pepino', emoji: '🥒' }, { id: 'pimentao', label: 'Pimentão Verde', emoji: '🫑' }, { id: 'azeitona', label: 'Azeitona', emoji: '🫒' },
  { id: 'espinafre', label: 'Espinafre', emoji: '🌿' }, { id: 'jalapeno', label: 'Jalapeño', emoji: '🌶️' }, { id: 'cogumelo', label: 'Cogumelo', emoji: '🍄' },
  { id: 'abacate', label: 'Abacate', emoji: '🥑' }, { id: 'milho', label: 'Milho', emoji: '🌽' }, { id: 'beterraba', label: 'Beterraba', emoji: '🩷' }
];
const SAUCES = [
  { id: 'maionese', label: 'Maionese', emoji: '⚪' }, { id: 'mostarda', label: 'Mostarda Amarela', emoji: '💛' }, { id: 'ranch', label: 'Ranch', emoji: '🤍' },
  { id: 'chipotle', label: 'Chipotle Southwest', emoji: '🔥' }, { id: 'honey_mustard', label: 'Honey Mustard', emoji: '🍯' }, { id: 'barbecue', label: 'Barbecue', emoji: '🟤' },
  { id: 'pesto', label: 'Pesto', emoji: '💚' }, { id: 'sriracha', label: 'Sriracha', emoji: '🌶️' }, { id: 'caesar', label: 'Caesar', emoji: '🥗' }, { id: 'sem_molho', label: 'Sem Molho', emoji: '–' }
];

function analyzePersonality(c) {
  const isVeganStrict = (c.proteins.includes('veggie') || c.proteins.includes('tofu')) && c.cheeses.includes('sem_queijo') && c.sauces.every(s => ['pesto','sem_molho','sriracha'].includes(s));
  const isMeatLover = c.proteins.includes('bacon') && (c.proteins.includes('roast_beef') || c.proteins.includes('linguica'));
  const isChaos = c.veggies.length >= 5 && c.sauces.length >= 4;
  const isMinimalist = c.veggies.length <= 1 && c.sauces.length <= 1 && c.cheeses.includes('sem_queijo');
  const isSpicy = c.sauces.includes('sriracha') && c.sauces.includes('chipotle') && c.veggies.includes('jalapeno');
  const isHealthFreak = c.bread === 'whole_wheat' && c.veggies.includes('espinafre') && c.veggies.includes('abacate') && (c.proteins.includes('veggie') || c.proteins.includes('tofu'));
  const isFancy = c.cheeses.includes('provolone') && c.sauces.includes('pesto') && c.veggies.includes('cogumelo');
  const isCowboy = c.proteins.includes('roast_beef') && c.sauces.includes('barbecue') && c.cheeses.includes('cheddar');
  const isBasic = c.bread === 'white' && c.cheeses.includes('american') && c.sauces.includes('maionese');
  const isBreakfast = c.proteins.includes('ovos') && c.proteins.includes('bacon') && c.sauces.includes('maionese');
  const isInfluencer = c.bread === 'wrap' && c.sauces.includes('chipotle') && c.veggies.includes('abacate');
  const isCheeseLover = c.bread === 'parmesan' && c.cheeses.includes('provolone');
  const isRenovator = c.veggies.includes('beterraba') && c.veggies.includes('abacate') && c.bread === 'multigrain';
  const isTunaHeavy = c.proteins.includes('atum') && c.sauces.includes('maionese') && c.sauces.includes('ranch');
  if (isVeganStrict) return { title:'O Manifesto Verde', subtitle:'Ativista Gastronômico', hue:'#3a7d5c', description:'Você não come sanduíche — você faz uma declaração política a cada mordida. Provavelmente tem um blog sobre compostagem, segue contas de fazendas orgânicas e corrige gentilmente (mas persistentemente) quem usa "vegano" de forma errada. Seu coração é do tamanho de um campo de girassóis. Sua paciência com "só um pedacinho de frango" já acabou faz tempo.', traits:['Principista','Apaixonado','Levemente Intenso','Ótimo nos Debates'] };
  if (isSpicy) return { title:'A Língua em Chamas', subtitle:'Masoquista Culinário', hue:'#b84034', description:'Sriracha, chipotle e jalapeño ao mesmo tempo? Você claramente tem algo a provar — provavelmente para seu ex ou para você mesmo. Vai bem com situações extremas: academia às 5h, bungee jumping em feriados, reuniões sem pauta definida. A dor é informação e você está sempre colhendo dados.', traits:['Intenso','Destemido','Ligeiramente Masoquista','Muito Divertido em Festas'] };
  if (isChaos) return { title:'O Caos Organizado', subtitle:'Gênio ou Loucura — Difícil Dizer', hue:'#8b4f9e', description:'Você pediu quase tudo e ainda tomou essa decisão com uma calma desconcertante. Sua mesa de trabalho parece um crime, mas você sabe exatamente onde está cada coisa. 47 abas abertas, três projetos em paralelo e mesmo assim entrega tudo no prazo. As pessoas oscilam entre admiração genuína e leve terror existencial.', traits:['Maximalista','Eficiente no Caos','Criativo','Incapaz de Escolher no Netflix'] };
  if (isMinimalist) return { title:'O Essencialista', subtitle:'Menos é uma Filosofia de Vida', hue:'#2e2e2e', description:'Sem queijo, sem molho, quase sem nada — e você está completamente em paz com isso. Já leu Marie Kondo três vezes, tem exatamente 12 itens no guarda-roupa e considera minimalismo uma forma de arte. Você não simplifica por limitação. Você simplifica por princípio.', traits:['Focado','Intencional','Levemente Intimidador','Ótimo em Tomar Decisões'] };
  if (isMeatLover) return { title:'O Carnívoro Feliz', subtitle:'Proteína como Linguagem do Amor', hue:'#8b3a2a', description:'Bacon e mais carne? Você não veio pra brincadeira. Provavelmente tem um açougue favorito, discute cortes bovinos com seriedade acadêmica e considera salada "acompanhamento opcional". Suas opiniões são fortes. Seu aperto de mão é definitivamente firme demais.', traits:['Direto','Apaixonado','Sem Meias Palavras','Ótimo Anfitrião de Churrasco'] };
  if (isHealthFreak) return { title:'O Atleta Interior', subtitle:'O Corpo é um Templo (que come sub)', hue:'#2d6e8a', description:'Integral, vegano, espinafre, abacate — você tenta otimizar até o almoço. Usa smartwatch, conta macros e manda print dos passos no grupo da família. Você genuinamente gosta de couve e acha isso completamente normal. Respeito. Agora vai descansar: você já correu 10km hoje.', traits:['Disciplinado','Otimizador','Evangelizador da Saúde','Acorda Cedo Demais'] };
  if (isBreakfast) return { title:'O Cronóbio Invertido', subtitle:'Café da Manhã é uma Mentalidade', hue:'#b08040', description:'Ovos e bacon no sub. Você ou está com olheiras profundas às 7h, ou acordou às 14h e isso aqui é café da manhã mesmo. De qualquer forma: você é confortável, nostálgico e profundamente leal às coisas simples que funcionam. As pessoas gostam de você exatamente do jeito que você é.', traits:['Nostálgico','Confortável','Leal','Definitivamente Não é Manhã-Pessoa'] };
  if (isFancy) return { title:'O Gourmet Disfarçado', subtitle:'Fine Dining em Fast Food', hue:'#5a4a2e', description:'Provolone, pesto e cogumelo no Subway?! Você está claramente acima desse lugar mas veio assim mesmo — seus amigos insistiram. Tem opiniões sobre vinho, frequenta mercados orgânicos e usa "terroir" em conversas casuais. No fundo você sabe que esse sub ficou bom. Isso te perturba mais do que deveria.', traits:['Sofisticado','Um Pouco Snob','Bom Gosto Inegável','Difícil de Agradar'] };
  if (isCowboy) return { title:'O Cowboy Urbano', subtitle:'Alma Livre com Cartão de Crédito', hue:'#7a3b1e', description:'Roast beef, cheddar e barbecue — você tem uma estética muito clara. Gosta de Tarantino, tem uma jaqueta de couro que "vai usar quando esfriar" e considera ketchup condimento inferior. Você é direto, confiante e ligeiramente dramático — mas de um jeito que as pessoas acham charmoso.', traits:['Confiante','Estético','Direto','Dramático com Classe'] };
  if (isInfluencer) return { title:'O Influencer Infiltrado', subtitle:'Aesthetics First, Sabor Segundo', hue:'#c05080', description:'Wrap, chipotle e abacate? Você claramente pensa em como vai ficar na foto antes de montar. Já usou "clean eating" em legenda, tem pasta no celular chamada "inspo" e aguenta fila de brunch se o lugar for bonito. Você não é superficial — você entende que apresentação é parte da experiência. E tá certo.', traits:['Visual','Estratégico','Fotogênico','Sabe o que Quer'] };
  if (isCheeseLover) return { title:'O Fã de Queijo', subtitle:'Queijo por Dentro, Queijo por Fora', hue:'#b07a20', description:'Pão de parmesão com provolone no recheio. Você escolheu queijo no pão e no sanduíche — e faria de novo sem hesitar. Você é apaixonado, vai all-in nas coisas que ama, e tem uma opinião forte sobre qual pizza paulistana é a melhor. Sua intensidade pode assustar, mas as pessoas logo descobrem que você é só muito entusiasmado com a vida.', traits:['Intenso','Apaixonado','All-in','Provavelmente Intolerante à Lactose e Ignora'] };
  if (isRenovator) return { title:'O Renovador', subtitle:'Escolhas Incomuns com Convicção', hue:'#4a6e3a', description:'Beterraba, abacate e multigrãos é uma combinação que 99% das pessoas não tentaria. Você tem gosto singular, não tem medo de ser diferente e já apresentou uma ideia que todo mundo achou estranha — e depois funcionou perfeitamente. Você questiona se a caixa deveria existir antes de pensar fora dela.', traits:['Criativo','Corajoso','Não Convencional','Geralmente Certo'] };
  if (isTunaHeavy) return { title:'O Calmante', subtitle:'Molho em Excesso é Abraço Líquido', hue:'#5a7a8a', description:'Atum com maionese e ranch ao mesmo tempo. Você não tem medo de molho e não tem medo de julgamento. Abraça as pessoas apertado demais, faz comida com carinho excessivo e chora fácil em filmes da Pixar. Isso não é fraqueza — é uma forma rara e valiosa de existir. O mundo precisa de você.', traits:['Emotivo','Generoso','Abraça Forte','Chora no Cinema'] };
  if (isBasic) return { title:'O Clássico Sem Complexo', subtitle:'Consistência é uma Virtude', hue:'#3a5c8a', description:'Pão branco, queijo americano, maionese. Você sabe o que gosta e não tem nada a provar. Enquanto todos experimentam "aventuras gastronômicas", você morde seu sub com a satisfação tranquila de quem nunca foi decepcionado. Confiável, estável — a pessoa que seus amigos ligam quando precisam de conselho direto.', traits:['Confiável','Sem Frescura','Estável','Sabe o que Quer'] };
  if (c.veggies.length >= 4 && c.sauces.length >= 3) return { title:'O Explorador Curioso', subtitle:'Testa Tudo, Arrepende-se de Nada', hue:'#5a6e3a', description:'Você não veio para fazer escolhas conservadoras. Cada ingrediente a mais é uma pequena aventura. Você também faz isso na vida: experimenta restaurantes novos, aceita convites de última hora, e tem histórias boas porque diz sim com frequência. Seu sanduíche é um mapa da sua personalidade aberta e empolgada.', traits:['Curioso','Aventureiro','Aberto','Boas Histórias pra Contar'] };
  return { title:'O Equilibrado', subtitle:'Harmonia em Forma de Sanduíche', hue:'#4a5568', description:'Escolhas ponderadas, sem excessos e sem austeridade. Você considera os dois lados de uma situação antes de opinar, mantém relacionamentos saudáveis sem drama e consegue relaxar sem culpa. Não é medíocre — é maduro. Equilíbrio é mais difícil de alcançar do que qualquer extremo, e você chegou lá.', traits:['Ponderado','Equilibrado','Confiável','Emocionalmente Inteligente'] };
}

const steps = ['bread','proteins','cheeses','veggies','sauces','result'];
const labels = { bread:'Pão', proteins:'Proteína', cheeses:'Queijo', veggies:'Vegetais', sauces:'Molhos', result:'Resultado' };
const titles = { bread:'Qual é o seu pão?', proteins:'Escolha até 2 proteínas', cheeses:'Escolha até 3 queijos', veggies:'Escolha até 4 vegetais', sauces:'Escolha até 5 molhos' };
const limits = { bread:1, proteins:2, cheeses:3, veggies:4, sauces:5 };
const datasets = { bread:BREADS, proteins:PROTEINS, cheeses:CHEESES, veggies:VEGGIES, sauces:SAUCES };

let state = { step:'bread', bread:'', proteins:[], cheeses:[], veggies:[], sauces:[], shakeId:null };
let hintTimer = null;

function currentSelected() {
  if (state.step === 'bread') return state.bread ? [state.bread] : [];
  return state[state.step] || [];
}
function canNext() {
  if (state.step === 'bread') return !!state.bread;
  if (state.step === 'proteins') return state.proteins.length >= 1;
  if (state.step === 'cheeses') return state.cheeses.length >= 1;
  return state.step === 'veggies' || state.step === 'sauces';
}
function showHint(max) {
  const el = document.getElementById('limitHint');
  el.textContent = `Máximo de ${max} ${max === 1 ? 'selecionado' : 'selecionados'} aqui`;
  el.classList.add('visible');
  clearTimeout(hintTimer);
  hintTimer = setTimeout(() => el.classList.remove('visible'), 1800);
}
function toggle(id) {
  if (state.step === 'bread') {
    state.bread = state.bread === id ? '' : id;
    render(); return;
  }
  const list = state[state.step];
  const max = limits[state.step];
  if (list.includes(id)) state[state.step] = list.filter(x => x !== id);
  else if (list.length >= max) { state.shakeId = id; showHint(max); setTimeout(() => { state.shakeId = null; render(); }, 300); }
  else state[state.step] = [...list, id];
  render();
}
function next() { const i = steps.indexOf(state.step); if (i < steps.length - 1) { state.step = steps[i+1]; render(); } }
function back() { const i = steps.indexOf(state.step); if (i > 0) { state.step = steps[i-1]; render(); } }
function reset() { state = { step:'bread', bread:'', proteins:[], cheeses:[], veggies:[], sauces:[], shakeId:null }; render(); }

function renderProgress() {
  return `<div class="progress">${steps.slice(0,5).map((s,i) => {
    const idx = steps.indexOf(state.step);
    const bg = i < idx ? '#1c1a17' : i === idx ? 'rgba(28,26,23,.4)' : 'rgba(28,26,23,.1)';
    const color = i <= idx ? '#1c1a17' : '#b0aaa4';
    const weight = i === idx ? 600 : 400;
    return `<div class="progress-item"><div class="progress-bar" style="background:${bg}"></div><span class="progress-label" style="color:${color};font-weight:${weight}">${labels[s]}</span></div>`;
  }).join('')}</div>`;
}
function renderCounter(count,max,optional) {
  const bars = Array.from({length:max},(_,i) => `<div class="counter-bar" style="width:${max<=2?20:max<=3?16:12}px;background:${i<count?'#1c1a17':'rgba(28,26,23,.12)'}"></div>`).join('');
  return `<div class="counter">${optional?'<span class="optional">opcional</span>':''}<div class="counter-bars">${bars}</div><span class="counter-number" style="color:${count>=max?'#1c1a17':'#9a9590'}">${count}/${max}</span></div>`;
}
function renderQuiz() {
  const max = limits[state.step] || 0;
  const selected = currentSelected();
  const optional = state.step === 'veggies' || state.step === 'sauces';
  const items = datasets[state.step];
  return `${renderProgress()}
    <div class="step-header"><h2>${titles[state.step]}</h2>${max ? renderCounter(selected.length,max,optional) : ''}</div>
    <div class="options-grid">${items.map(item => `<button class="option-card ${selected.includes(item.id)?'selected':''} ${state.shakeId===item.id?'shake':''}" data-id="${item.id}"><span class="option-emoji">${item.emoji}</span><span class="option-label">${item.label}</span></button>`).join('')}</div>
    <div class="nav">${steps.indexOf(state.step)>0?'<button class="back-btn" id="backBtn">← Voltar</button>':'<div></div>'}<button class="next-btn ${canNext()?'enabled':'disabled'}" id="nextBtn">${state.step==='sauces'?'Ver minha personalidade →':'Próximo →'}</button></div>`;
}
function findItems(arr, ids) { return arr.filter(x => ids.includes(x.id)); }
function renderResult() {
  const p = analyzePersonality({ bread:state.bread, proteins:state.proteins, cheeses:state.cheeses, veggies:state.veggies, sauces:state.sauces });
  const rows = [
    ['Pão',findItems(BREADS,[state.bread])], ['Proteínas',findItems(PROTEINS,state.proteins)], ['Queijos',findItems(CHEESES,state.cheeses)],
    ['Vegetais',findItems(VEGGIES,state.veggies)], ['Molhos',findItems(SAUCES,state.sauces)]
  ];
  return `<div class="personality-card" style="background:${p.hue}"><div class="personality-content"><div class="result-eyebrow">Você é</div><h2>${p.title}</h2><div class="subtitle">${p.subtitle}</div><div class="traits">${p.traits.map(t=>`<span class="trait">${t}</span>`).join('')}</div></div></div>
    <div class="description">${p.description}</div>
    <div class="sandwich-summary"><div class="summary-title">Seu Sanduíche</div>${rows.map(([label,items])=>`<div class="summary-row"><span class="summary-label">${label}</span><span class="summary-value">${items.length?items.map(i=>`${i.emoji} ${i.label}`).join('  ·  '):'<span class="empty">—</span>'}</span></div>`).join('')}</div>
    <button class="reset-btn" id="resetBtn">Montar de novo</button>`;
}
function render() {
  const quiz = document.getElementById('quiz');
  quiz.innerHTML = state.step === 'result' ? renderResult() : renderQuiz();
  quiz.querySelectorAll('.option-card').forEach(btn => btn.addEventListener('click', () => toggle(btn.dataset.id)));
  const nextBtn = document.getElementById('nextBtn'); if (nextBtn) nextBtn.addEventListener('click', () => { if (canNext()) next(); });
  const backBtn = document.getElementById('backBtn'); if (backBtn) backBtn.addEventListener('click', back);
  const resetBtn = document.getElementById('resetBtn'); if (resetBtn) resetBtn.addEventListener('click', reset);
}
render();
