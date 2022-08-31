import { AssetSymbol, ChainKey } from '../../../constants';
import {
  PolkadotXcmExtrinsicSuccessEvent,
  XTokensExtrinsicSuccessEvent,
  XTransferExtrinsicSuccessEvent,
} from '../../../extrinsic';
import { getMoonAssetId, getPalletInstance } from '../../config.utils';
import {
  assets,
  balance,
  chains,
  extrinsic,
  moonriver,
  withdraw,
} from '../moonriver.common';
import { MoonriverXcmConfig } from '../moonriver.interfaces';

const asset = assets[AssetSymbol.MOVR];
const bifrost = chains[ChainKey.Bifrost];
const karura = chains[ChainKey.Karura];
const khala = chains[ChainKey.Khala];
const parallel = chains[ChainKey.Parallel];
const shiden = chains[ChainKey.Shiden];

const karuraMovrId = getMoonAssetId(karura);
const khalaMovrId = getMoonAssetId(khala);
const parallelMovrId = getMoonAssetId(parallel);
const shidenMovrId = getMoonAssetId(shiden);

export const MOVR: MoonriverXcmConfig = {
  asset,
  origin: moonriver,
  deposit: {
    [bifrost.key]: {
      origin: bifrost,
      balance: balance.tokens('MOVR'),
      sourceFeeBalance: balance.system(),
      extrinsic: extrinsic
        .xTokens()
        .transfer()
        .successEvent(XTokensExtrinsicSuccessEvent.TransferredMultiAssets)
        .origin(bifrost)
        .asset({
          Token: asset.originSymbol,
        }),
    },
    [karura.key]: {
      origin: karura,
      balance: balance.tokens(karuraMovrId),
      sourceFeeBalance: balance.system(),
      extrinsic: extrinsic
        .xTokens()
        .transfer()
        .successEvent(XTokensExtrinsicSuccessEvent.TransferredMultiAssets)
        .origin(karura)
        .asset({
          ForeignAsset: karuraMovrId,
        }),
    },
    [khala.key]: {
      origin: khala,
      balance: balance.assets(khalaMovrId),
      sourceFeeBalance: balance.system(),
      extrinsic: extrinsic
        .xTransfer()
        .transfer()
        .successEvent(XTransferExtrinsicSuccessEvent.Withdrawn)
        .origin(khala)
        .X2(getPalletInstance(khala)),
    },
    [parallel.key]: {
      origin: parallel,
      balance: balance.assets(parallelMovrId),
      sourceFeeBalance: balance.system(),
      extrinsic: extrinsic
        .xTokens()
        .transfer()
        .successEvent(XTokensExtrinsicSuccessEvent.TransferredMultiAssets)
        .origin(parallel)
        .asset(parallelMovrId),
    },
    [shiden.key]: {
      origin: shiden,
      balance: balance.assets(shidenMovrId),
      sourceFeeBalance: balance.system(),
      extrinsic: extrinsic
        .polkadotXcm()
        .limitedReserveWithdrawAssets()
        .successEvent(PolkadotXcmExtrinsicSuccessEvent.Attempted)
        .origin(shiden)
        .V1()
        .X2(getPalletInstance(shiden)),
    },
  },
  withdraw: {
    [bifrost.key]: withdraw.xTokens({
      balance: balance.tokens('MOVR'),
      destination: bifrost,
      feePerWeight: 213_600,
    }),
    [karura.key]: withdraw.xTokens({
      balance: balance.tokens(karuraMovrId),
      destination: karura,
      feePerWeight: 50_000,
    }),
    [khala.key]: withdraw.xTokens({
      balance: balance.tokens(khalaMovrId),
      destination: khala,
      feePerWeight: 50_000,
    }),
    [parallel.key]: withdraw.xTokens({
      balance: balance.assets(parallelMovrId),
      destination: parallel,
      feePerWeight: 0.48,
    }),
    [shiden.key]: withdraw.xTokens({
      balance: balance.assets(shidenMovrId),
      destination: shiden,
      feePerWeight: 50_000,
    }),
  },
};