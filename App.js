import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from "@/components/ui/button";

export default function App() {

  const [pagina, setPagina] = useState('home');

  return (
    <GluestackUIProvider mode="light">

      <View style={styles.tela}>

        {/* HOME */}
        {pagina === 'home' && (
          <View style={styles.container}>

            <Text style={styles.titulo}>
              Home
            </Text>

            <Text style={styles.subtitulo}>
              Bem-vindo ao aplicativo
            </Text>

            <View style={styles.caixa}>
              <Text style={styles.caixaTitulo}>
                Página inicial
              </Text>

              <Text style={styles.caixaTexto}>
                Aqui você pode colocar informações principais do aplicativo.
              </Text>
            </View>

            <View style={styles.caixaAmarela}>
              <Text style={styles.caixaTitulo}>
                Navegação
              </Text>

              <Text style={styles.caixaTexto}>
                Use o menu abaixo para trocar de página.
              </Text>
            </View>

          </View>
        )}


        {/* EXEMPLO */}
        {pagina === 'exemplo' && (
          <View style={styles.container}>

            <Text style={styles.titulo}>
              Exemplo
            </Text>

            <Text style={styles.subtitulo}>
              Segunda página
            </Text>

            <View style={styles.caixa}>
              <Text style={styles.caixaTitulo}>
                Conteúdo de exemplo
              </Text>

              <Text style={styles.caixaTexto}>
                Esta página serve para mostrar como podemos alterar o conteúdo
                ao clicar nos botões do rodapé.
              </Text>
            </View>

            <View style={styles.caixaAmarela}>
              <Text style={styles.caixaTitulo}>
                Gluestack
              </Text>

              <Text style={styles.caixaTexto}>
                Os botões usados no rodapé foram feitos com componentes do
                Gluestack UI.
              </Text>
            </View>

          </View>
        )}


        {/* FINALIZAÇÃO */}
        {pagina === 'final' && (
          <View style={styles.container}>

            <View style={styles.finalIcone}>
              <Text style={styles.check}>
                ✓
              </Text>
            </View>

            <Text style={styles.titulo}>
              Finalização
            </Text>

            <Text style={styles.subtitulo}>
              Última página
            </Text>

            <View style={styles.caixa}>
              <Text style={styles.caixaTitulo}>
                Projeto concluído
              </Text>

              <Text style={styles.caixaTexto}>
                Esta é a última tela do aplicativo.
              </Text>
            </View>

            <View style={styles.caixaAmarela}>
              <Text style={styles.caixaTitulo}>
                Funcionamento
              </Text>

              <Text style={styles.caixaTexto}>
                A navegação acontece usando o useState e o onPress dos botões.
              </Text>
            </View>

          </View>
        )}


        {/* RODAPÉ */}
        <View style={styles.rodape}>

          <Button
            className="bg-transparent flex-1 h-16"
            onPress={() => setPagina('home')}
          >
            <View style={styles.botaoRodape}>

              <Text
                style={[
                  styles.icone,
                  pagina === 'home'
                    ? styles.ativo
                    : styles.inativo
                ]}
              >
                ⌂
              </Text>

              <ButtonText
                className={
                  pagina === 'home'
                    ? "text-red-500 text-xs"
                    : "text-gray-500 text-xs"
                }
              >
                Home
              </ButtonText>

              {pagina === 'home' && (
                <View style={styles.indicador} />
              )}

            </View>
          </Button>


          <Button
            className="bg-transparent flex-1 h-16"
            onPress={() => setPagina('exemplo')}
          >
            <View style={styles.botaoRodape}>

              <Text
                style={[
                  styles.icone,
                  pagina === 'exemplo'
                    ? styles.ativo
                    : styles.inativo
                ]}
              >
                ✦
              </Text>

              <ButtonText
                className={
                  pagina === 'exemplo'
                    ? "text-red-500 text-xs"
                    : "text-gray-500 text-xs"
                }
              >
                Exemplo
              </ButtonText>

              {pagina === 'exemplo' && (
                <View style={styles.indicador} />
              )}

            </View>
          </Button>


          <Button
            className="bg-transparent flex-1 h-16"
            onPress={() => setPagina('final')}
          >
            <View style={styles.botaoRodape}>

              <Text
                style={[
                  styles.icone,
                  pagina === 'final'
                    ? styles.ativo
                    : styles.inativo
                ]}
              >
                ✓
              </Text>

              <ButtonText
                className={
                  pagina === 'final'
                    ? "text-red-500 text-xs"
                    : "text-gray-500 text-xs"
                }
              >
                Final
              </ButtonText>

              {pagina === 'final' && (
                <View style={styles.indicador} />
              )}

            </View>
          </Button>

        </View>

      </View>

    </GluestackUIProvider>
  );
}


const styles = StyleSheet.create({

  tela: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#d62828',
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 17,
    color: '#777',
    marginBottom: 30,
  },

  caixa: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
  },

  caixaAmarela: {
    width: '100%',
    backgroundColor: '#fff7d6',
    borderRadius: 16,
    padding: 20,
  },

  caixaTitulo: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#d62828',
    marginBottom: 8,
  },

  caixaTexto: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },

  finalIcone: {
    width: 85,
    height: 85,
    borderRadius: 45,
    backgroundColor: '#fcbf49',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  check: {
    fontSize: 42,
    color: '#d62828',
    fontWeight: 'bold',
  },

  rodape: {
    height: 88,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    paddingHorizontal: 12,
    paddingTop: 6,
    paddingBottom: 10,
  },

  botaoRodape: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  icone: {
    fontSize: 29,
    marginBottom: 3,
  },

  ativo: {
    color: '#d62828',
  },

  inativo: {
    color: '#999999',
  },

  indicador: {
    position: 'absolute',
    bottom: -6,
    width: 26,
    height: 4,
    borderRadius: 5,
    backgroundColor: '#fcbf49',
  },

});