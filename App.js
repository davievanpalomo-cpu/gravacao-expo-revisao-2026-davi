import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StatusBar
} from 'react-native';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

import Home from './pages/Home';
import Exemplo from './pages/Exemplo';
import Final from './pages/Final';

import { criarEstilos, obterCores } from './styles';

export default function App() {

  const [pagina, setPagina] = useState('home');
  const [modoEscuro, setModoEscuro] = useState(false);

  const [pesquisa, setPesquisa] = useState('');
  const [noticias, setNoticias] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const cores = obterCores(modoEscuro);
  const styles = criarEstilos(cores);

  // Processamento das notícias pela API
  async function processarNoticias() {

    if (carregando) return;

    if (!pesquisa.trim()) {
      setErro('Digite um assunto para pesquisar.');
      return;
    }

    setCarregando(true);
    setErro('');
    setNoticias([]);

    try {
      const API_KEY = '8b05bf94ee514700a7febce9d4d96ce9';

      const url =
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(
          pesquisa.trim()
        )}&language=pt&sortBy=publishedAt&pageSize=10&apiKey=${API_KEY}`;

      const resposta = await fetch(url);
      const dados = await resposta.json();

      console.log('Resposta da API:', dados);

      if (!resposta.ok || dados.status !== 'ok') {
        throw new Error(
          dados.message || 'Erro ao consultar a API.'
        );
      }

      const resultados = dados.articles || [];

      setNoticias(resultados);

      if (resultados.length === 0) {
        setErro('Nenhuma notícia encontrada.');
      }

    } catch (error) {
      console.log('Erro:', error);
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }

  const paginas = {
    home: Home,
    exemplo: Exemplo,
    final: Final,
  };

  const PaginaAtual = paginas[pagina];

  return (
    <GluestackUIProvider mode={modoEscuro ? 'dark' : 'light'}>

      <StatusBar
        barStyle={modoEscuro ? 'light-content' : 'dark-content'}
        backgroundColor={cores.fundo}
      />

      <View style={styles.tela}>

        {/* Cabeçalho global */}
        <View style={styles.cabecalho}>

          <View>
            <Text style={styles.logo}>
              News<Text style={{ color: cores.azul }}>Flow.</Text>
            </Text>

            <Text style={styles.logoSubtitulo}>
              Informação ao seu alcance.
            </Text>
          </View>

          {/* Alternar tema */}
          <Pressable
            onPress={() => setModoEscuro(anterior => !anterior)}
            style={styles.botaoTema}
            accessibilityRole="button"
            accessibilityLabel={
              modoEscuro
                ? 'Ativar modo claro'
                : 'Ativar modo escuro'
            }
          >
            <Text style={{ fontSize: 23 }}>
              {modoEscuro ? '☀️' : '🌙'}
            </Text>
          </Pressable>

        </View>

        {/* Página selecionada */}
        <View style={styles.conteudo}>
          <PaginaAtual
            navegar={setPagina}
            pesquisa={pesquisa}
            setPesquisa={setPesquisa}
            noticias={noticias}
            setNoticias={setNoticias}
            carregando={carregando}
            erro={erro}
            setErro={setErro}
            processarNoticias={processarNoticias}
            modoEscuro={modoEscuro}
            cores={cores}
            styles={styles}
          />
        </View>

        {/* Menu inferior */}
        <View style={styles.rodape}>

          {[
            { id: 'home', icone: '⌂', nome: 'Início' },
            { id: 'exemplo', icone: '✦', nome: 'Explorar' },
            { id: 'final', icone: '▤', nome: 'Resultados' },
          ].map((item) => {

            const ativo = pagina === item.id;

            return (
              <Pressable
                key={item.id}
                onPress={() => setPagina(item.id)}
                style={[
                  styles.itemMenu,
                  ativo && styles.itemMenuAtivo
                ]}
              >
                <Text style={[
                  styles.iconeMenu,
                  ativo && styles.textoAtivo
                ]}>
                  {item.icone}
                </Text>

                <Text style={[
                  styles.textoMenu,
                  ativo && styles.textoAtivo
                ]}>
                  {item.nome}
                </Text>

                {ativo && (
                  <View style={styles.indicador} />
                )}

              </Pressable>
            );
          })}

        </View>

      </View>

    </GluestackUIProvider>
  );
}
