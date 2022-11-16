import { ChainKey } from '../../constants';
import { ChainsMap } from '../config.interfaces';
import { MoonbeamChains } from './moonbeam.interfaces';

export const MOONBEAM_CHAINS = <const>[
  ChainKey.Acala,
  ChainKey.Astar,
  ChainKey.BifrostPolkadot,
  ChainKey.Darwinia,
  ChainKey.Interlay,
  ChainKey.Parallel,
  ChainKey.Phala,
  ChainKey.Polkadot,
  ChainKey.Statemint,
];

export const MOONBEAM_CHAINS_MAP: ChainsMap<MoonbeamChains> = {
  [ChainKey.Acala]: {
    key: ChainKey.Acala,
    name: 'Acala',
    ws: 'wss://acala-rpc-0.aca-api.network',
    weight: 1_000_000_000,
    parachainId: 2000,
    moonAssetId: 0,
  },
  [ChainKey.Astar]: {
    key: ChainKey.Astar,
    name: 'Astar',
    ws: 'wss://rpc.astar.network',
    weight: 1_000_000_000,
    parachainId: 2006,
    moonAssetId: 18446744073709551619n,
    palletInstance: 10,
  },
  [ChainKey.BifrostPolkadot]: {
    key: ChainKey.BifrostPolkadot,
    name: 'Bifrost',
    ws: 'wss://hk.p.bifrost-rpc.liebi.com/ws',
    weight: 1_000_000_000,
    parachainId: 2030,
    moonAssetId: 1,
  },
  [ChainKey.Darwinia]: {
    key: ChainKey.Darwinia,
    name: 'Darwinia',
    ws: 'wss://parachain-rpc.darwinia.network',
    weight: 1_000_000_000,
    parachainId: 2046,
  },
  [ChainKey.Interlay]: {
    key: ChainKey.Interlay,
    name: 'Interlay',
    ws: 'wss://interlay.api.onfinality.io/public-ws',
    weight: 1_000_000_000,
    parachainId: 2032,
  },
  [ChainKey.Parallel]: {
    key: ChainKey.Parallel,
    name: 'Parallel',
    ws: 'wss://rpc.parallel.fi',
    weight: 1_000_000_000,
    parachainId: 2012,
    moonAssetId: 114,
  },
  [ChainKey.Phala]: {
    key: ChainKey.Phala,
    name: 'Phala',
    ws: 'wss://api.phala.network/ws',
    weight: 1_000_000_000,
    parachainId: 2035,
    moonAssetId: 1,
  },
  [ChainKey.Polkadot]: {
    key: ChainKey.Polkadot,
    name: 'Polkadot',
    ws: 'wss://rpc.polkadot.io',
    weight: 1_000_000_000,
    parachainId: 0,
  },
  [ChainKey.Statemint]: {
    key: ChainKey.Statemint,
    name: 'Statemint',
    ws: 'wss://statemint-rpc.polkadot.io',
    weight: 1_000_000_000,
    parachainId: 1000,
    palletInstance: 50,
  },
};
