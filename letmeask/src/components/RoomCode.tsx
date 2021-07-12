import copyImg from "../assets/images/copy.svg";
import { RoomCodeButton } from "../styles/room-code";

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        // função para salvar no ctrl+c do user o código da sala
        navigator.clipboard.writeText(props.code)
    }
    
    // botão com código da sala, quando o user clica, o código é copiado 
    return (
        <RoomCodeButton className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #{props.code}</span>
        </RoomCodeButton> 
    )   
}