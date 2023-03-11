import shuffle from 'just-shuffle';
import { useSetRecoilState } from 'recoil';
import { resultadoAmigoSecreto } from '../atom';
import { useListaDeParticipantes } from './useListaDeParticipantes';

export const useSorteador = () => {
  const participantes = useListaDeParticipantes()
  const setResultado = useSetRecoilState(resultadoAmigoSecreto)

  return () => {
    const totalDeParticipantes = participantes.length
    const embaralhado = shuffle(participantes)

    const resultado = new Map<string, string>()

    for (let i = 0; i < totalDeParticipantes; i++) {
      const indiceDoAmigo = i === totalDeParticipantes - 1 ? 0 : i + 1;
      resultado.set(embaralhado[i], embaralhado[indiceDoAmigo]);
    }
    setResultado(resultado)
  }
}
