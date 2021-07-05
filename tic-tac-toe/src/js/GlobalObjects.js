import Enum from "./Enum";

export const Modes = Enum({ OnePlayer: 'one', TwoPlayer: 'two' });
const GameSymbols = Enum({ X: 'X', O: 'O' });
const Statuses = Enum({ Active: 'active', Pause: 'pause', Fail: 'fail', Win: 'win', Draw: 'draw' });