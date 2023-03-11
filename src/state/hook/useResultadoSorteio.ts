import { useRecoilValue } from "recoil"
import { resultadoAmigoSecreto } from "../atom"

export const useResultadoSorteio = () => {
  const resultado = useRecoilValue(resultadoAmigoSecreto)
  return resultado
}
