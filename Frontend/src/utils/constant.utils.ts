import Web3, { Address } from 'web3'

const KLAYTN_MAINNET_HTTP_RPC_URL = '...'
const KLAYTN_MAINNET_WEBSOCKET_RPC_URL = '...'
const KLAYTN_MAINNET_CONTRACT_FACTORY = '...'
const KLAYTN_MAINNET_USDT_CONTRACT = '...'

const KLAYTN_TESTNET_HTTP_RPC_URL = 'https://api.baobab.klaytn.net:8651'
const KLAYTN_TESTNET_WEBSOCKET_RPC_URL = 'wss://public-en-baobab.klaytn.net/ws'
const KLAYTN_TESTNET_CONTRACT_FACTORY = '0x84F3fcdC880885C1144FB21d0DbE007C7F5ed81e'
const KLAYTN_TESTNET_USDT_CONTRACT = '0xEdEb5f63537EbAe7E6dD79D95Cd2EF20C75Cd732'

export enum ChainName {
    KlaytnMainnet,
    KalytnTestnet,
    PolygonMainnet,
    PolygonTestnet
}

type ChainInfo = {
    httpRpcUrl: string
    websocketRpcUrl: string
    factoryContract: Address
    stableCoins: Address[]
}

export const chainInfos : Record<number, ChainInfo> = {
    [ChainName.KlaytnMainnet]: {
        httpRpcUrl: KLAYTN_MAINNET_HTTP_RPC_URL,
        websocketRpcUrl : KLAYTN_MAINNET_WEBSOCKET_RPC_URL,
        factoryContract: KLAYTN_MAINNET_CONTRACT_FACTORY,
        stableCoins: [ KLAYTN_MAINNET_USDT_CONTRACT ]
    },
    [ChainName.KalytnTestnet]: {
        httpRpcUrl: KLAYTN_TESTNET_HTTP_RPC_URL,
        websocketRpcUrl : KLAYTN_TESTNET_WEBSOCKET_RPC_URL,
        factoryContract: KLAYTN_TESTNET_CONTRACT_FACTORY,
        stableCoins: [ KLAYTN_TESTNET_USDT_CONTRACT ]
    }
}

export const gasPrice = Web3.utils.toWei(25, 'gwei')
export const gasLimit = 3000000