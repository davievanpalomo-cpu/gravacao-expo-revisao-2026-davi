
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

import Home from './pages/Home';
import Exemplo from './pages/Exemplo';
import Final from './pages/Final';
import { styles } from './styles';

// Crie sua chave em https://newsapi.org/
const API_KEY = '8b05bf94ee514700a7febce9d4d96ce9';

export default function App() {
  const [pagina, setPagina] = useState('home');
  const [pesquisa, setPesquisa] = useState('');
  const [noticias, setNoticias] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  async function processarNoticias(termo = pesquisa) {
    const assunto = termo.trim();

    if (!assunto) {
      setErro('Digite um assunto para pesquisar.');
      setPagina('home');
      return;
    }

    setPesquisa(assunto);
    setErro('');
    setCarregando(true);

    try {
      const url =
        'https://newsapi.org/v2/everything?q=' +
        encodeURIComponent(assunto) +
        '&language=pt&sortBy=publishedAt&pageSize=10&apiKey=' +
        API_KEY;

      const resposta = await fetch(url);
      const dados = await resposta.json();

      if (!resposta.ok || dados.status !== 'ok') {
        throw new Error(
          dados.message || 'Não foi possível buscar as notícias.'
        );
      }

      const resultados = (dados.articles || []).filter(
        (item) =>
          item.title &&
          item.title !== '[Removed]' &&
          item.url
      );

      setNoticias(resultados);
      setPagina('final');

      if (resultados.length === 0) {
        setErro('Nenhuma notícia foi encontrada para esse assunto.');
      }
    } catch (e) {
      setErro(
        e.message || 'Ocorreu um erro ao consultar a API.'
      );
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
    <GluestackUIProvider mode="light">
      <View style={styles.tela}>
        <View style={styles.conteudo}>
          <PaginaAtual
            navegar={setPagina}
            pesquisa={pesquisa}
            setPesquisa={setPesquisa}
            noticias={noticias}
            carregando={carregando}
            erro={erro}
            setErro={setErro}
            processarNoticias={processarNoticias}
          />
        </View>

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
                style={({ pressed }) => [
                  styles.itemMenu,
                  ativo && styles.itemMenuAtivo,
                  pressed && { opacity: 0.7 },
                ]}
              >
                <Text
                  style={[
                    styles.iconeMenu,
                    ativo && styles.textoAtivo,
                  ]}
                >
                  {item.icone}
                </Text>

                <Text
                  style={[
                    styles.textoMenu,
                    ativo && styles.textoAtivo,
                  ]}
                >
                  {item.nome}
                </Text>

                {ativo && <View style={styles.indicador} />}
              </Pressable>
            );
          })}
        </View>
      </View>
    </GluestackUIProvider>
  );
}
