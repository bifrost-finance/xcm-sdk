import { AssetSymbol, ChainKey } from '../../../constants';
import { EqBalancesSuccessEvent } from '../../../extrinsic/eqBalances';
import {
  assets,
  balance,
  chains,
  extrinsic,
  withdraw,
} from '../moonbase.common';
import { MoonbaseXcmConfig } from '../moonbase.interfaces';

const asset = assets[AssetSymbol.EQ];
const origin = chains[ChainKey.EquilibriumAlphanet];
const eqId = 25_969;

export const EQ: MoonbaseXcmConfig = {
  asset,
  origin,
  deposit: {
    [origin.key]: {
      source: origin,
      balance: balance.systemEquilibrium(eqId),
      extrinsic: extrinsic
        .eqBalances()
        .transferXcm()
        .successEvent(EqBalancesSuccessEvent.ExtrinsicSuccess)
        .asset(eqId)
        .feeAsset(eqId),
    },
  },
  withdraw: {
    [origin.key]: withdraw.xTokens({
      balance: balance.systemEquilibrium(eqId),
      destination: origin,
      feePerWeight: 3.5,
    }),
  },
};