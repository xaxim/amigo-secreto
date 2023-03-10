import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../state/hook/useAdicionarParticipante"
import { useMensagemDeErro } from "../state/hook/useMensagemDeErro"

const Formulario = () => {
    
    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdicionarParticipante()

    const mensagemDeErro = useMensagemDeErro()
    
    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }
    
    return (<form onSubmit={adicionarParticipante}>
        <input
            ref={inputRef}
            value={nome}
            onChange={evento => setNome(evento.target.value)}
            type="text"
            placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!nome}>Adicionar</button>
        {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
    </form>)
}

export default Formulario