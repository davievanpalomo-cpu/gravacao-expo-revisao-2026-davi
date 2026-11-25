import { StyleSheet, Platform, StatusBar } from 'react-native';

// Paletas de cores
export function obterCores(modoEscuro) {

  return modoEscuro
    ? {
        fundo: '#0B1424',
        cartao: '#17283D',
        texto: '#F1F5F9',
        secundario: '#B0C4D9',
        azul: '#60A5FA',
        botao: '#1565C0',
        destaque: '#193B5C',
        borda: '#29415A',
        banner: '#17365A',
        branco: '#FFFFFF',
        erro: '#FCA5A5',
        fundoErro: '#45252D',
      }
    : {
        fundo: '#F4F8FC',
        cartao: '#FFFFFF',
        texto: '#0D2340',
        secundario: '#64748B',
        azul: '#1565C0',
        botao: '#1565C0',
        destaque: '#E3F2FD',
        borda: '#E3EDF7',
        banner: '#0D2340',
        branco: '#FFFFFF',
        erro: '#C62828',
        fundoErro: '#FEECEC',
      };
}

// Estilos dinâmicos
export function criarEstilos(cores) {

  return StyleSheet.create({

    tela: {
      flex: 1,
      backgroundColor: cores.fundo,
      paddingTop: Platform.OS === 'android'
        ? StatusBar.currentHeight || 0
        : Platform.OS === 'ios' ? 50 : 0,
    },

    conteudo: {
      flex: 1,
    },

    container: {
      padding: 22,
      paddingBottom: 40,
    },

    cabecalho: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: cores.cartao,
      paddingHorizontal: 22,
      paddingVertical: 17,
      borderBottomWidth: 1,
      borderBottomColor: cores.borda,
    },

    logo: {
      fontSize: 27,
      fontWeight: '900',
      color: cores.texto,
      letterSpacing: -1,
    },

    logoSubtitulo: {
      fontSize: 11,
      color: cores.secundario,
      marginTop: 3,
    },

    botaoTema: {
      width: 45,
      height: 45,
      backgroundColor: cores.destaque,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },

    etiqueta: {
      color: cores.azul,
      fontSize: 11,
      fontWeight: '800',
      letterSpacing: 1.5,
      marginBottom: 8,
    },

    titulo: {
      color: cores.texto,
      fontSize: 29,
      fontWeight: '900',
      marginBottom: 7,
    },

    subtitulo: {
      color: cores.secundario,
      fontSize: 14,
      lineHeight: 22,
      marginBottom: 23,
    },

    banner: {
      backgroundColor: cores.banner,
      borderRadius: 22,
      padding: 23,
      marginBottom: 25,
      overflow: 'hidden',
    },

    bannerEtiqueta: {
      color: '#93C5FD',
      fontSize: 11,
      fontWeight: '800',
      letterSpacing: 1.4,
      marginBottom: 13,
    },

    bannerTitulo: {
      color: '#FFFFFF',
      fontSize: 25,
      fontWeight: '900',
      lineHeight: 33,
      marginBottom: 12,
    },

    bannerTexto: {
      color: '#D6E5F5',
      fontSize: 14,
      lineHeight: 22,
    },

    secaoTitulo: {
      color: cores.texto,
      fontSize: 19,
      fontWeight: '800',
      marginTop: 8,
      marginBottom: 15,
    },

    cartao: {
      backgroundColor: cores.cartao,
      borderRadius: 17,
      padding: 16,
      marginBottom: 13,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: cores.borda,
    },

    iconeCartao: {
      width: 46,
      height: 46,
      borderRadius: 14,
      backgroundColor: cores.destaque,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 13,
    },

    iconeCartaoTexto: {
      fontSize: 21,
      color: cores.azul,
      fontWeight: '800',
    },

    cartaoConteudo: {
      flex: 1,
    },

    cartaoTitulo: {
      color: cores.texto,
      fontSize: 16,
      fontWeight: '800',
      marginBottom: 6,
    },

    cartaoTexto: {
      color: cores.secundario,
      fontSize: 13,
      lineHeight: 21,
    },

    seta: {
      color: cores.azul,
      fontSize: 25,
      marginLeft: 8,
    },

    botaoPrincipal: {
      backgroundColor: cores.botao,
      padding: 16,
      borderRadius: 13,
      alignItems: 'center',
      marginTop: 14,
    },

    botaoPrincipalTexto: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: '800',
    },

    botaoSecundario: {
      backgroundColor: cores.destaque,
      padding: 15,
      borderRadius: 13,
      alignItems: 'center',
      marginTop: 10,
    },

    botaoSecundarioTexto: {
      color: cores.azul,
      fontSize: 14,
      fontWeight: '800',
    },

    ilustracao: {
      backgroundColor: cores.destaque,
      padding: 23,
      borderRadius: 20,
      marginBottom: 24,
    },

    ilustracaoIcone: {
      fontSize: 32,
      color: cores.azul,
      marginBottom: 12,
    },

    ilustracaoTitulo: {
      color: cores.texto,
      fontSize: 19,
      fontWeight: '800',
      marginBottom: 9,
    },

    ilustracaoTexto: {
      color: cores.secundario,
      fontSize: 14,
      lineHeight: 22,
    },

    pesquisaBox: {
      backgroundColor: cores.cartao,
      padding: 19,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: cores.borda,
      marginBottom: 24,
    },

    input: {
      backgroundColor: cores.fundo,
      color: cores.texto,
      borderWidth: 1,
      borderColor: cores.borda,
      padding: 15,
      borderRadius: 13,
      fontSize: 14,
      marginTop: 14,
    },

    noticia: {
      backgroundColor: cores.cartao,
      padding: 14,
      borderRadius: 19,
      marginBottom: 17,
      borderWidth: 1,
      borderColor: cores.borda,
    },

    noticiaImagem: {
      width: '100%',
      height: 185,
      borderRadius: 13,
      marginBottom: 15,
      backgroundColor: cores.destaque,
    },

    noticiaFonte: {
      color: cores.azul,
      fontSize: 11,
      fontWeight: '900',
      marginBottom: 8,
    },

    noticiaTitulo: {
      color: cores.texto,
      fontSize: 18,
      fontWeight: '900',
      lineHeight: 25,
      marginBottom: 10,
    },

    noticiaDescricao: {
      color: cores.secundario,
      fontSize: 13,
      lineHeight: 21,
      marginBottom: 15,
    },

    resultadoTopo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: 15,
    },

    contador: {
      backgroundColor: cores.destaque,
      paddingHorizontal: 12,
      paddingVertical: 7,
      borderRadius: 20,
    },

    contadorTexto: {
      color: cores.azul,
      fontWeight: '800',
      fontSize: 12,
    },

    vazio: {
      backgroundColor: cores.destaque,
      padding: 25,
      borderRadius: 19,
      alignItems: 'center',
    },

    carregamento: {
      alignItems: 'center',
      marginVertical: 20,
    },

    erroBox: {
      backgroundColor: cores.fundoErro,
      padding: 15,
      borderRadius: 13,
      marginBottom: 20,
    },

    erroTexto: {
      color: cores.erro,
      fontWeight: '700',
      lineHeight: 21,
    },

    rodape: {
      backgroundColor: cores.cartao,
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      paddingBottom: Platform.OS === 'ios' ? 28 : 12,
      borderTopWidth: 1,
      borderTopColor: cores.borda,
    },

    itemMenu: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      marginHorizontal: 4,
      borderRadius: 13,
    },

    itemMenuAtivo: {
      backgroundColor: cores.destaque,
    },

    iconeMenu: {
      fontSize: 24,
      color: cores.secundario,
      marginBottom: 4,
    },

    textoMenu: {
      fontSize: 11,
      fontWeight: '600',
      color: cores.secundario,
    },

    textoAtivo: {
      color: cores.azul,
      fontWeight: '800',
    },

    indicador: {
      width: 5,
      height: 5,
      borderRadius: 5,
      backgroundColor: cores.azul,
      marginTop: 4,
    },

    assinatura: {
      color: cores.secundario,
      fontSize: 11,
      textAlign: 'center',
      marginTop: 25,
    },

  });
}
