
import DiceImg from './DicesImg';

function RandomDices() {
    
    let Images = DiceImg
    var FirstdiceVal = Math.floor(Math.random() * 5);
    var SeconddiceVal = Math.floor(Math.random() * 5);
    let dices = [Images[FirstdiceVal],Images[SeconddiceVal]]
    return (dices)
}

export default RandomDices;