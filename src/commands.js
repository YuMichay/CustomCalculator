import SumCommand from './commands/SumCommand';
import SubCommand from './commands/SubCommand';
import DivideCommand from './commands/DivideCommand';
import MultiplyCommand from './commands/MultiplyCommand';
import SignCommand from './commands/SignCommand';
import PercentCommand from './commands/PercentCommand';
import FractionCommand from './commands/FractionCommand';
import SquareCommand from './commands/SquareCommand';
import SquareRootCommand from './commands/SquareRootCommand';
import CubeCommand from './commands/CubeCommand';
import CubeRootCommand from './commands/CubeRootCommand';
import PowerCommand from './commands/PowerCommand';
import PowerRootCommand from './commands/PowerRootCommand';
import TenPowerCommand from './commands/TenPowerCommand';
import FactorialCommand from './commands/FactorialCommand';
import ResetCommand from './commands/ResetCommand';
import MemoryAddCommand from './commands/MemoryAdd';
import MemorySubCommand from './commands/MemorySub';
import ResetMemoryCommand from './commands/ResetMemoryCommand';
import ShowMemoryCommand from './commands/ShowMemoryCommand';

export const commands = {
  divide: DivideCommand,
  multiply: MultiplyCommand,
  summarize: SumCommand,
  subtract: SubCommand,
  sign: SignCommand,
  percent: PercentCommand,
  fraction: FractionCommand,
  square: SquareCommand,
  squareRoot: SquareRootCommand,
  cube: CubeCommand,
  cubeRoot: CubeRootCommand,
  power: PowerCommand,
  powerRoot: PowerRootCommand,
  tenPower: TenPowerCommand,
  factorial: FactorialCommand,
  ac: ResetCommand,
  mc: ResetMemoryCommand,
  'm+': MemoryAddCommand,
  'm-': MemorySubCommand,
  mr: ShowMemoryCommand
}