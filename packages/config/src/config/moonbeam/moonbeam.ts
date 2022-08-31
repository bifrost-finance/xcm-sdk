import { AssetSymbol } from '../../constants';
import { MoonbeamXcmConfigs } from './moonbeam.interfaces';

import { ACA } from './assets/aca';
import { AUSD } from './assets/ausd';
import { DOT } from './assets/dot';
import { GLMR } from './assets/glmr';
import { IBTC } from './assets/ibtc';
import { INTR } from './assets/intr';
import { PARA } from './assets/para';
import { PHA } from './assets/pha';

export const MOONBEAM_CONFIGS: MoonbeamXcmConfigs = {
  [AssetSymbol.ACA]: ACA,
  [AssetSymbol.AUSD]: AUSD,
  [AssetSymbol.DOT]: DOT,
  [AssetSymbol.GLMR]: GLMR,
  [AssetSymbol.IBTC]: IBTC,
  [AssetSymbol.INTR]: INTR,
  [AssetSymbol.PARA]: PARA,
  [AssetSymbol.PHA]: PHA,
};