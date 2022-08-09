import { Asset } from '../../constants';
import { AssetsConfigs } from '../config.interfaces';
// eslint-disable-next-line import/no-cycle
import { MoonbaseAssets } from './moonbase.interfaces';

export const MOONBASE_ASSETS = <const>[
  Asset.ASTR,
  Asset.BNC,
  Asset.BSX,
  Asset.CRU,
  Asset.DEV,
  Asset.HKO,
  Asset.KAR,
  Asset.KBTC,
  Asset.KINT,
  Asset.KMA,
  Asset.KUSD,
  Asset.LIT,
  Asset.PARING,
  Asset.PHA,
  Asset.TEER,
  Asset.UNIT,
];

export const MOONBASE_ASSETS_CONFIGS: AssetsConfigs<MoonbaseAssets> = {
  [Asset.ASTR]: {
    id: '16797826370226091782818345603793389938',
    erc20Id: '0xffffffff0ca324c842330521525e7de111f38972',
    originSymbol: Asset.ASTR,
  },
  [Asset.BNC]: {
    id: '42109858202732255156900361585267092733',
    erc20Id: '0xffffffff1fae104dc4c134306bca8e2e1990acfd',
    originSymbol: Asset.BNC,
  },
  [Asset.BSX]: {
    id: '102433417954722588084020852587557555194',
    erc20Id: '0xffffffff4d0ff56d0097bbd14920eac488540bfa',
    originSymbol: Asset.BSX,
    originAssetId: 0,
  },
  [Asset.CRU]: {
    id: '108457044225666871745333730479173774551',
    erc20Id: '0xffffffff519811215e05efa24830eebe9c43acd7',
    originSymbol: Asset.CRU,
  },
  [Asset.DEV]: {
    id: '',
    erc20Id: '0x0000000000000000000000000000000000000802',
    originSymbol: Asset.DEV,
  },
  [Asset.HKO]: {
    id: '76100021443485661246318545281171740067',
    erc20Id: '0xffffffff394054bcda1902b6a6436840435655a3',
    originSymbol: Asset.HKO,
  },
  [Asset.KAR]: {
    id: '10810581592933651521121702237638664357',
    erc20Id: '0xffffffff08220ad2e6e157f26ed8bd22a336a0a5',
    originSymbol: Asset.KAR,
  },
  [Asset.KBTC]: {
    id: '122531866982275221270783173426160033062',
    erc20Id: '0xffffffff5c2ec77818d0863088929c1106635d26',
    originSymbol: Asset.KBTC,
  },
  [Asset.KINT]: {
    id: '52837329483626033197882584414163773570',
    erc20Id: '0xffffffff27c019790dfbee7cb70f5996671b2882',
    originSymbol: Asset.KINT,
  },
  [Asset.KMA]: {
    id: '213357169630950964874127107356898319277',
    erc20Id: '0xffffffffa083189f870640b141ae1e882c2b5bad',
    originSymbol: Asset.KMA,
  },
  [Asset.KUSD]: {
    id: '214920334981412447805621250067209749032',
    erc20Id: '0xffffffffa1b026a00fbaa67c86d5d1d5bf8d8228',
    originSymbol: Asset.KUSD,
  },
  [Asset.LIT]: {
    id: '65216491554813189869575508812319036608',
    erc20Id: '0xffffffff31103d490325bb0a8e40ef62e2f614c0',
    originSymbol: Asset.LIT,
  },
  [Asset.PARING]: {
    id: '173481220575862801646329923366065693029',
    erc20Id: '0xffffffff8283448b3cb519ca4732f2dddc6a6165',
    originSymbol: Asset.PARING,
  },
  [Asset.PHA]: {
    id: '189307976387032586987344677431204943363',
    erc20Id: '0xffffffff8e6b63d9e447b6d4c45bda8af9dc9603',
    originSymbol: Asset.PHA,
  },
  [Asset.TEER]: {
    id: '105075627293246237499203909093923548958',
    erc20Id: '0xffffffff4f0cd46769550e5938f6bee2f5d4ef1e',
    originSymbol: Asset.TEER,
  },
  [Asset.UNIT]: {
    id: '42259045809535163221576417993425387648',
    erc20Id: '0xffffffff1fcacbd218edc0eba20fc2308c778080',
    originSymbol: Asset.UNIT,
  },
};
