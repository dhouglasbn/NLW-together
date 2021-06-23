import copyImg from "../assets/images/copy.svg";

export function RoomCode() {
    return (
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #821738217381273</span>
        </button>
    )   
}