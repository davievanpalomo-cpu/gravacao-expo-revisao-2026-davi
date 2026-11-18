
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

import Home from './pages/Home';
import Exemplo from './pages/Exemplo';
import Final from './pages/Final';

import { styles } from './styles';

export default function App() {
  const [pagina, setPagina] = useState('home');

  const [pesquisa, setPesquisa] = useState('');
  const [noticias, setNoticias] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const paginas = {
    home: Home,
    exemplo: Exemplo,
    final: Final,
  };

  const PaginaAtual = paginas[pagina];

  async function processarNoticias() {
    // Mantenha aqui a função de consulta da NewsAPI
  }

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
            { id: 'home', nome: 'Início', icone: '⌂' },
            { id: 'exemplo', nome: 'Explorar', icone: '⌕' },
            { id: 'final', nome: 'Resultados', icone: '▤' },
          ].map((item) => (
            <Pressable
              key={item.id}
              style={styles.itemMenu}
              onPress={() => setPagina(item.id)}
            >
              <Text style={[
                styles.iconeMenu,
                pagina === item.id && styles.textoAtivo
              ]}>
                {item.icone}
              </Text>

              <Text style={[
                styles.textoMenu,
                pagina === item.id && styles.textoAtivo
              ]}>
                {item.nome}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </GluestackUIProvider>
  );
}
