const palavras = {
    "adjetivos": {
        subcategorias: ["caracteristicas", "Emoções/Sentimentos", "Descrição de Objetos/Coisas", "Condições Atmosféricas/Climáticas", "Aparência e Físico"],
        "caracteristicas": [
            { kanji: "温和", hiragana: "おんわ", traducao: "Gentil/Manso" },
            { kanji: "好奇心", hiragana: "こうきしん", traducao: "Curioso" },
            { kanji: "実直", hiragana: "じっちょく", traducao: "Íntegro" },
            { kanji: "努力家", hiragana: "どりょくか", traducao: "Esforçado" },
            { kanji: "怖がり", hiragana: "こわがり", traducao: "Medroso" },
            { kanji: "我慢強い", hiragana: "がまんづよい", traducao: "Paciente" },
            { kanji: "心細い", hiragana: "こころぼそい", traducao: "Inseguro" },
            { kanji: "短気", hiragana: "たんき", traducao: "Impaciente" },
            { kanji: "負けず嫌い", hiragana: "まけずぎらい", traducao: "Competitivo" },
            { kanji: "社交的", hiragana: "しゃこうてき", traducao: "Sociável" },
            { kanji: "安定", hiragana: "あんてい", traducao: "Estável" },
            { kanji: "変わり者", hiragana: "かわりもの", traducao: "Excêntrico" },
            { kanji: "保守的", hiragana: "ほしゅてき", traducao: "Conservador" },
            { kanji: "前向き", hiragana: "まえむき", traducao: "Proativo" },
            { kanji: "後ろ向き", hiragana: "うしろむき", traducao: "Reativo" },
            { kanji: "細かい", hiragana: "こまかい", traducao: "Detalhista" },
            { kanji: "積極的", hiragana: "せっきょくてき", traducao: "Positivo/Ativo" },
            { kanji: "消極的", hiragana: "しょうきょくてき", traducao: "Passivo" },
            { kanji: "義理堅い", hiragana: "ぎりがたい", traducao: "Leal" },
            { kanji: "気楽", hiragana: "きらく", traducao: "Despreocupado" },
            { kanji: "気難しい", hiragana: "きむずかしい", traducao: "Exigente/Difícil de agradar" }
        ],
        "Emoções/Sentimentos": [
            { kanji: "嬉しい", hiragana: "うれしい", traducao: "Feliz" },
            { kanji: "悲しい", hiragana: "かなしい", traducao: "Triste" },
            { kanji: "興奮している", hiragana: "こうふんしている", traducao: "Animado" },
            { kanji: "鬱", hiragana: "うつ", traducao: "Deprimido" },
            { kanji: "不安", hiragana: "ふあん", traducao: "Ansioso" },
            { kanji: "イライラしている", hiragana: "イライラしている", traducao: "Frustrado" },
            { kanji: "希望的", hiragana: "きぼうてき", traducao: "Esperançoso" },
            { kanji: "混乱している", hiragana: "こんらんしている", traducao: "Confuso" },
            { kanji: "ホッとした", hiragana: "ホッとした", traducao: "Aliviado" },
            // ... (podem ser adicionadas mais palavras conforme necessário)
        ],
        "Descrição de Objetos/Coisas": [
            { kanji: "大きい", hiragana: "おおきい", traducao: "Grande" },
            { kanji: "小さい", hiragana: "ちいさい", traducao: "Pequeno" },
            { kanji: "美味しい", hiragana: "おいしい", traducao: "Delicioso" },
            { kanji: "苦い", hiragana: "にがい", traducao: "Amargo" },
            { kanji: "古い", hiragana: "ふるい", traducao: "Antigo" },
            { kanji: "新しい", hiragana: "あたらしい", traducao: "Novo" },
            { kanji: "明るい", hiragana: "あかるい", traducao: "Brilhante" },
            { kanji: "くすんだ", hiragana: "くすんだ", traducao: "Fosco" },
            { kanji: "重い", hiragana: "おもい", traducao: "Pesado" },
            { kanji: "軽い", hiragana: "かるい", traducao: "Leve" },
            // ... (podem ser adicionadas mais palavras conforme necessário)
        ],
        "Condições Atmosféricas/Climáticas": [
            { kanji: "暑い", hiragana: "あつい", traducao: "Quente" },
            { kanji: "寒い", hiragana: "さむい", traducao: "Frio" },
            { kanji: "晴れ", hiragana: "はれ", traducao: "Ensolarado" },
            { kanji: "曇り", hiragana: "くもり", traducao: "Nublado" },
            { kanji: "雨", hiragana: "あめ", traducao: "Chuvoso" },
            { kanji: "風", hiragana: "かぜ", traducao: "Ventoso" },
            { kanji: "蒸し暑い", hiragana: "むしあつい", traducao: "Abafado" },
            { kanji: "涼しい", hiragana: "すずしい", traducao: "Fresco" },
            { kanji: "乾燥した", hiragana: "かんそうした", traducao: "Seco" },
            { kanji: "湿った", hiragana: "しった", traducao: "Úmido" },
            // ... (podem ser adicionadas mais palavras conforme necessário)
        ],
        "Aparência e Físico": [
            { kanji: "高い", hiragana: "たかい", traducao: "Alto" },
            { kanji: "低い", hiragana: "ひくい", traducao: "Baixo" },
            { kanji: "痩せている", hiragana: "やせている", traducao: "Magro" },
            { kanji: "太っている", hiragana: "ふとっている", traducao: "Gordo" },
            { kanji: "若い", hiragana: "わかい", traducao: "Jovem" },
            { kanji: "老けている", hiragana: "ふけている", traducao: "Velho" },
            { kanji: "美しい", hiragana: "うつくしい", traducao: "Bonito" },
            { kanji: "醜い", hiragana: "みにくい", traducao: "Feio" },
            { kanji: "強い", hiragana: "つよい", traducao: "Forte" },
            { kanji: "弱い", hiragana: "よわい", traducao: "Fraco" },
            // ... (podem ser adicionadas mais palavras conforme necessário)
        ],
        // ... outras subcategorias ...
    },

    "verbos": {
        subcategorias: ["Atividades Cotidianas", "Interação Social", "Movimento e Viagem", "Atividades de Lazer e Hobbies", "Situações de Emergência e Ações Importantes"],
        "Atividades Cotidianas": [
            { kanji: "食べる", hiragana: "たべる", traducao: "Comer" },
            { kanji: "寝る", hiragana: "ねる", traducao: "Dormir" },
            { kanji: "働く", hiragana: "はたらく", traducao: "Trabalhar" },
            { kanji: "勉強する", hiragana: "べんきょうする", traducao: "Estudar" },
            { kanji: "歩く", hiragana: "あるく", traducao: "Caminhar" },
            { kanji: "見る", hiragana: "みる", traducao: "Ver/Assistir" },
            { kanji: "言う", hiragana: "いう", traducao: "Dizer" },
            { kanji: "使う", hiragana: "つかう", traducao: "Usar" },
            { kanji: "考える", hiragana: "かんがえる", traducao: "Pensar" },
            { kanji: "知る", hiragana: "しる", traducao: "Saber" },
            { kanji: "帰る", hiragana: "かえる", traducao: "Voltar" },
            { kanji: "待つ", hiragana: "まつ", traducao: "Esperar" },
            { kanji: "作る", hiragana: "つくる", traducao: "Fazer/Criar" },
            { kanji: "開ける", hiragana: "あける", traducao: "Abrir" },
            { kanji: "閉める", hiragana: "しめる", traducao: "Fechar" }
        ],
        "Interação Social": [
            { kanji: "話す", hiragana: "はなす", traducao: "Conversar" },
            { kanji: "聞く", hiragana: "きく", traducao: "Ouvir/Perguntar" },
            { kanji: "会う", hiragana: "あう", traducao: "Encontrar-se/Ver" },
            { kanji: "笑う", hiragana: "わらう", traducao: "Rir" },
            { kanji: "紹介する", hiragana: "しょうかいする", traducao: "Apresentar" },
            { kanji: "教える", hiragana: "おしえる", traducao: "Ensinar" },
            { kanji: "学ぶ", hiragana: "まなぶ", traducao: "Aprender" },
            { kanji: "助ける", hiragana: "たすける", traducao: "Ajudar" },
            { kanji: "質問する", hiragana: "しつもんする", traducao: "Perguntar" },
            { kanji: "返事する", hiragana: "へんじする", traducao: "Responder" },
            { kanji: "送る", hiragana: "おくる", traducao: "Enviar" },
            { kanji: "受け取る", hiragana: "うけとる", traducao: "Receber" },
            { kanji: "感謝する", hiragana: "かんしゃする", traducao: "Agradecer" },
            { kanji: "謝る", hiragana: "あやまる", traducao: "Pedir desculpa" },
            { kanji: "招待する", hiragana: "しょうたいする", traducao: "Convidar" }
        ],
        "Movimento e Viagem": [
            { kanji: "行く", hiragana: "いく", traducao: "Ir" },
            { kanji: "来る", hiragana: "くる", traducao: "Vir" },
            { kanji: "旅行する", hiragana: "りょこうする", traducao: "Viajar" },
            { kanji: "運転する", hiragana: "うんてんする", traducao: "Dirigir" },
            { kanji: "乗る", hiragana: "のる", traducao: "Pegar/Andar (meio de transporte)" },
            { kanji: "下りる", hiragana: "おりる", traducao: "Descer" },
            { kanji: "上がる", hiragana: "あがる", traducao: "Subir" },
            { kanji: "止まる", hiragana: "とまる", traducao: "Parar" },
            { kanji: "曲がる", hiragana: "まがる", traducao: "Virar" },
            { kanji: "通る", hiragana: "とおる", traducao: "Passar" },
            { kanji: "旅する", hiragana: "たびする", traducao: "Viajar" },
            { kanji: "出発する", hiragana: "しゅっぱつする", traducao: "Partir" },
            { kanji: "到着する", hiragana: "とうちゃくする", traducao: "Chegar" },
            { kanji: "滞在する", hiragana: "たいざいする", traducao: "Permanecer" },
            { kanji: "予約する", hiragana: "よやくする", traducao: "Reservar" }
        ],
        "Atividades de Lazer e Hobbies": [
            { kanji: "読む", hiragana: "よむ", traducao: "Ler" },
            { kanji: "書く", hiragana: "かく", traducao: "Escrever" },
            { kanji: "遊ぶ", hiragana: "あそぶ", traducao: "Jogar/Brincar" },
            { kanji: "歌う", hiragana: "うたう", traducao: "Cantar" },
            { kanji: "踊る", hiragana: "おどる", traducao: "Dançar" },
            { kanji: "料理する", hiragana: "りょうりする", traducao: "Cozinhar" },
            { kanji: "買い物する", hiragana: "かいものする", traducao: "Fazer compras" },
            { kanji: "描く", hiragana: "えがく", traducao: "Desenhar" },
            { kanji: "撮る", hiragana: "とる", traducao: "Tirar (foto)" },
            { kanji: "練習する", hiragana: "れんしゅうする", traducao: "Praticar" },
            { kanji: "参加する", hiragana: "さんかする", traducao: "Participar" },
            { kanji: "訪れる", hiragana: "おとずれる", traducao: "Visitar" },
            { kanji: "演じる", hiragana: "えんじる", traducao: "Atuar" },
            { kanji: "集める", hiragana: "あつめる", traducao: "Colecionar" },
            { kanji: "調べる", hiragana: "しらべる", traducao: "Pesquisar" }
        ],
        "Situações de Emergência e Ações Importantes": [
            { kanji: "助ける", hiragana: "たすける", traducao: "Ajudar/Salvar" },
            { kanji: "探す", hiragana: "さがす", traducao: "Procurar" },
            { kanji: "逃げる", hiragana: "にげる", traducao: "Fugir" },
            { kanji: "報告する", hiragana: "ほうこくする", traducao: "Relatar" },
            { kanji: "防ぐ", hiragana: "ふせぐ", traducao: "Prevenir" },
            { kanji: "治す", hiragana: "なおす", traducao: "Curar/Consertar" },
            { kanji: "警告する", hiragana: "けいこくする", traducao: "Avisar" },
            { kanji: "避ける", hiragana: "さける", traducao: "Evitar" },
            { kanji: "休む", hiragana: "やすむ", traducao: "Descansar" },
            { kanji: "続ける", hiragana: "つづける", traducao: "Continuar" },
            { kanji: "終わる", hiragana: "おわる", traducao: "Terminar" },
            { kanji: "始める", hiragana: "はじめる", traducao: "Começar" },
            { kanji: "止める", hiragana: "とめる", traducao: "Parar" },
            { kanji: "変える", hiragana: "かえる", traducao: "Mudar" },
            { kanji: "回復する", hiragana: "かいふくする", traducao: "Recuperar" }
        ],
        // ... continue para as outras subcategorias ...
    }
    // ... outras categorias principais ...
};

let subcategoriaAtual = ''; 
let subcategoriasVisiveis = false;
const btnReset = document.getElementById('btnReset');


btnReset.onclick = () => {
    const categoriaAtual = document.getElementById('categoriaAtual').value;
    const subcategoriaAtual = document.getElementById('subcategoriaAtual').value;
    resetarHistorico(categoriaAtual, subcategoriaAtual);
};


function palavraFoiUsada(categoria, palavra) {
    let palavrasUsadas = JSON.parse(localStorage.getItem(categoria)) || [];
    return palavrasUsadas.some(p => p.kanji === palavra.kanji);
}

function salvarPalavraUsada(categoria, palavra) {
    let palavrasUsadas = JSON.parse(localStorage.getItem(categoria)) || [];
    palavrasUsadas.push(palavra);
    localStorage.setItem(categoria, JSON.stringify(palavrasUsadas));
}

function mostrarHistorico(categoria) {
    const palavrasUsadas = JSON.parse(localStorage.getItem(categoria)) || [];
    const tbody = document.querySelector("#historico tbody");
    tbody.innerHTML = "";

    palavrasUsadas.forEach(palavra => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${palavra.kanji}</td>
            <td>${palavra.hiragana}</td>
            <td>${palavra.traducao}</td>
        `;
        tbody.appendChild(tr);
    });
}

function resetarHistorico(categoria, subcategoria) {
    if (subcategoria) {
        localStorage.removeItem(subcategoria);
        mostrarHistorico(subcategoria); 
    } else if (categoria) {
        const subcategorias = palavras[categoria].subcategorias;
        for (let subcat of subcategorias) {
            localStorage.removeItem(subcat);
        }
        mostrarHistorico(subcategorias[0]); // Pode ser qualquer subcategoria, pois todas estarão vazias agora
    } else {
        console.error('Nenhuma categoria ou subcategoria foi fornecida.');
    }
}


function mostrarSubCategorias(categoriaPrincipal) {
    const divSubcategorias = document.getElementById('subcategorias');
    divSubcategorias.innerHTML = '';
    document.getElementById('categoriaAtual').value = categoriaPrincipal;

    const subcategorias = palavras[categoriaPrincipal].subcategorias;
    for (let subcategoria of subcategorias) {
        const btn = document.createElement('button');
        btn.className = 'btn btn-info mr-2 mb-2';
        btn.textContent = capitalizeFirstLetter(subcategoria);
        btn.onclick = () => {
            const subcategoriaAtualmenteSelecionada = document.getElementById('subcategoriaAtual').value;
            if (subcategoriaAtualmenteSelecionada === subcategoria) {
                gerarPalavra(categoriaPrincipal, subcategoria);
            } else {
                document.getElementById('subcategoriaAtual').value = subcategoria;
                mostrarHistorico(subcategoria);
                // Limpar os resultados:
                document.getElementById('kanji').textContent = "";
                document.getElementById('hiragana').textContent = "";
                document.getElementById('traducao').textContent = "";
            }
        };
        
        divSubcategorias.appendChild(btn);
    }
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function gerarPalavra(categoria, subcategoria) {
    mostrarHistorico(subcategoria);
    const possiveisPalavras = palavras[categoria][subcategoria];
    let palavraEscolhida;

    let todasUsadas = true;
    for (let i = 0; i < possiveisPalavras.length; i++) {
        if (!palavraFoiUsada(subcategoria, possiveisPalavras[i])) {
            todasUsadas = false;
            break;
        }
    }

    if (!todasUsadas) {
        do {
            palavraEscolhida = possiveisPalavras[Math.floor(Math.random() * possiveisPalavras.length)];
        } while (palavraFoiUsada(subcategoria, palavraEscolhida));

        salvarPalavraUsada(subcategoria, palavraEscolhida);  
        mostrarHistorico(subcategoria); // Isso garante que o histórico mostrado é o da subcategoria correta
        document.getElementById('kanji').textContent = palavraEscolhida.kanji;
        document.getElementById('hiragana').textContent = palavraEscolhida.hiragana;
        document.getElementById('traducao').textContent = palavraEscolhida.traducao;
            } else {
        document.getElementById('kanji').textContent = "";
        document.getElementById('hiragana').textContent = "";
        document.getElementById('traducao').textContent = "Todas as palavras desta subcategoria já foram usadas!";
            }
}

