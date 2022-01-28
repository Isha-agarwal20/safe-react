import WalletConnectProvider from '@walletconnect/web3-provider'
import { IClientMeta, IRPCMap } from '@walletconnect/types'
import { WalletModule } from 'bnc-onboard/dist/src/interfaces'

import { getRpcServiceUrl } from 'src/config'
import { APP_VERSION, INFURA_TOKEN, PUBLIC_URL } from 'src/utils/constants'
import { ChainId } from 'src/config/chain'
import { getChains } from 'src/config/cache/chains'

export const PAIRING_MODULE_NAME = 'Mobile Safe'

// @walletconnect/web3-provider uses `any` payloads. These are typed from v1.6.2 used by Onboard v1.35.5

type WCDisplayUriPayload = { params: string[] }
type WCConnectPayload = {
  params: {
    peerId: string
    peerMeta: IClientMeta | null
    chainId: number
    accounts: string[]
  }[]
}
type WCDisconnectPayload = { params: { message: string }[] }

// Modified version of the built in WC module in Onboard v1.35.5
// https://github.com/blocknative/onboard/blob/release/1.35.5/src/modules/select/wallets/wallet-connect.ts

const getPairingModule = (chainId: ChainId): WalletModule => {
  const WC_BRIDGE = 'https://safe-walletconnect.gnosis.io/'
  const STORAGE_ID = 'SAFE__pairingProvider'

  const rpcMap: IRPCMap = getChains().reduce((map, { chainId, rpcUri }) => {
    return {
      ...map,
      [parseInt(chainId, 10)]: getRpcServiceUrl(rpcUri),
    }
  }, {})

  return {
    name: PAIRING_MODULE_NAME,
    iconSrc: `${PUBLIC_URL}/resources/safe.png`,
    wallet: async ({ resetWalletState }) => {
      const provider = new WalletConnectProvider({
        infuraId: INFURA_TOKEN,
        rpc: rpcMap,
        chainId: parseInt(chainId, 10),
        bridge: WC_BRIDGE,
        storageId: STORAGE_ID,
        qrcode: false, // Don't show QR modal
        clientMeta: {
          name: PAIRING_MODULE_NAME,
          description: APP_VERSION,
          icons: [],
          url: 'https://gnosis-safe.io/app',
        },
      })

      // Not sure if redundant, but just in case
      provider.autoRefreshOnNetworkChange = false

      provider.wc.on('display_uri', (_, { params }: WCDisplayUriPayload) => {
        console.log(params[0])
      })

      provider.wc.on('connect', (_, { params }: WCConnectPayload) => {
        console.info('connect', params)
      })

      provider.wc.on('disconnect', (_, { params }: WCDisconnectPayload) => {
        console.info('disconnect', params)
        resetWalletState({ disconnected: true, walletName: PAIRING_MODULE_NAME })
      })

      // Establish WC connection
      provider.enable()

      return {
        provider,
        interface: {
          name: PAIRING_MODULE_NAME,
          // Trigger onboard 'connect' checkName
          connect: () => Promise.resolve(undefined),
          address: {
            onChange: (updater) => {
              provider.send('eth_accounts').then(([account]: string[]) => {
                if (account) {
                  updater(account)
                }
              })
              provider.on('accountsChanged', ([account]: string[]) => updater(account))
            },
          },
          network: {
            onChange: (updater) => {
              provider.send('eth_chainId').then(updater)
              provider.on('chainChanged', updater)
            },
          },
          // We do not use balance subscriptions, add one causes a memory leak
          balance: {},
          disconnect: async () => {
            if (provider.connected) {
              await provider.disconnect()
            }
          },
        },
      }
    },
    type: 'sdk',
    desktop: true,
    preferred: true,
  }
}

export default getPairingModule